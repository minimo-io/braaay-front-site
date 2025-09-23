// src/routes/blog/[slug]/+page.server.ts
import type { PageServerLoad } from './$types';
import { TURSO_AUTH_TOKEN, TURSO_URL } from '$env/static/private';
import { createClient } from '@libsql/client';
import type { Post, YoastSeoData } from '$lib/types';
import { error } from '@sveltejs/kit';
import { getLocale } from '$lib/paraglide/runtime';
import { stripHtmlEnhanced } from '$lib/utils';

interface SqlitePostSingle {
	id: number;
	title: string;
	uri: string;
	excerpt: string;
	content: string;
	featured_image_url: string | null;
	featured_image_alt: string | null;
	date: string;
	modified: string;
	author_id: number;
	author_name: string;
	author_avatar: string | null;
	categories_json: string;
	seo_title: string | null;
	seo_description: string | null;
	seo_canonical_url: string | null;
	seo_og_title: string | null;
	seo_og_description: string | null;
	seo_og_image: string | null;
	seo_twitter_title: string | null;
	seo_twitter_description: string | null;
	seo_twitter_image: string | null;
	seo_keywords: string | null;
	seo_noindex: string | null;
	seo_nofollow: string | null;
	header_first_subtitle: string | null;
	header_first_paragraph: string | null;
}

export const load: PageServerLoad = async ({ params, url }) => {
	const { slug } = params;

	const sqliteDb = createClient({
		url: TURSO_URL,
		authToken: TURSO_AUTH_TOKEN
	});

	const locale = getLocale();

	// console.log('SLUG', slug);
	// console.log('PATHNAME', url.pathname);
	// Fetch the single post by slug
	const postResult = await sqliteDb.execute({
		sql: `
			SELECT p.id, p.title, p.slug, p.excerpt, p.content,
				   p.featured_image_url, p.featured_image_alt,
				   p.created_at AS date, p.modified_at AS modified,
				   p.seo_title, p.seo_description, p.seo_canonical_url,
				   p.seo_og_title, p.seo_og_description, p.seo_og_image,
				   p.seo_twitter_title, p.seo_twitter_description, p.seo_twitter_image,
				   p.seo_keywords, p.seo_noindex, p.seo_nofollow, p.header_first_subtitle, p.header_first_paragraph,

				   a.id AS author_id, a.name AS author_name, a.avatar_url AS author_avatar,
				   (
					   SELECT json_group_array(json_object('name', c.name, 'uri', c.uri))
					   FROM posts_categories pc
					   JOIN categories c ON pc.category_id = c.id
					   WHERE pc.post_id = p.id
				   ) AS categories_json
			FROM posts p
			LEFT JOIN authors a ON p.author_id = a.id
			WHERE p.slug = ? AND p.language_code = ?
			LIMIT 1
		`,
		args: [slug, locale]
	});

	if (postResult.rows.length === 0) {
		throw error(404, 'Post not found');
	}

	const postRow = postResult.rows[0] as unknown as SqlitePostSingle;

	try {
		const categories = postRow.categories_json ? JSON.parse(postRow.categories_json) : [];
		const cleanedExcerpt = stripHtmlEnhanced(postRow.excerpt);

		const post: Post = {
			id: String(postRow.id),
			title: postRow.title,
			date: postRow.date,
			modified: postRow.modified,
			excerpt: cleanedExcerpt,
			content: postRow.content,
			plainExcerpt: cleanedExcerpt,
			uri: postRow.uri,
			author: {
				name: postRow.author_name,
				link: '',
				profession: '',
				avatar: {
					url: String(postRow.author_avatar)
				}
			},
			categories: categories,
			featuredImage: {
				mediaItemUrl: String(postRow.featured_image_url),
				altText: String(postRow.featured_image_alt)
			},
			header: {
				title: postRow.header_first_subtitle || undefined,
				content: postRow.header_first_paragraph || undefined
			}
		};

		// Build SEO data if available
		const seo: YoastSeoData | undefined = postRow.seo_title
			? {
					title: postRow.seo_title,
					metaDesc: postRow.seo_description || '',
					canonical: postRow.seo_canonical_url || `${url.origin}${url.pathname}`,
					opengraphTitle: postRow.seo_og_title || postRow.seo_title,
					opengraphDescription: postRow.seo_og_description || postRow.seo_description || '',
					opengraphImage: postRow.seo_og_image
						? {
								sourceUrl: postRow.seo_og_image
							}
						: undefined,
					// twitterTitle: postRow.seo_twitter_title || postRow.seo_title,
					// twitterDescription: postRow.seo_twitter_description || postRow.seo_description || '',
					// twitterImage: postRow.seo_twitter_image ? {
					// 	sourceUrl: postRow.seo_twitter_image
					// } : undefined,
					focuskw: postRow.seo_keywords || undefined,
					metaRobotsNoindex: postRow.seo_noindex || undefined,
					metaRobotsNofollow: postRow.seo_nofollow || undefined
				}
			: undefined;

		return { post, seo };
	} catch (errorMsg) {
		console.error('ERROR mapping post data:', errorMsg);
		throw error(500, 'Failed to process post data');
	}
};

// // src/routes/blog/[slug]/+page.server.ts
// import type { PageServerLoad } from './$types';
// import { POST_QUERY } from '$lib/graphql/queries/index';
// import { type Post, type GraphQLPostSingle, type YoastSeoData, mapPost } from '$lib/types';
// import { error } from '@sveltejs/kit';

// import { getUrqlClient } from '$stores/urqlClient.state.svelte';

// export const load: PageServerLoad = async ({ params, locals, url }) => {
// 	const { slug } = params;

// 	// const locale = getLocale();
// 	// const client = getGqlClient(locale);

// 	const result = await getUrqlClient(locals.authToken)
// 		.client.query<GraphQLPostSingle>(
// 			POST_QUERY,
// 			{ slug },
// 			{ context: { authToken: locals.authToken } }
// 		)
// 		.toPromise();

// 	if (result.error || !result.data || !result.data.post) {
// 		// throw new Error('Failed to fetch the post');
// 		throw error(404, 'Post not found');
// 	}

// 	// Map the raw GraphQL data to your Post interface.
// 	try {
// 		const post: Post = mapPost(result.data, url.origin, url.pathname);
// 		const seo: YoastSeoData | undefined = result.data.post.seo;

// 		return { post, seo };
// 	} catch (errorMsg) {
// 		console.error('ERROR', errorMsg);
// 	}
// };
