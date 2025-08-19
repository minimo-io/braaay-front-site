// src/routes/blog/+page.server.ts
// import type { PageServerLoad } from './$types';
// import { getUrqlClient } from '$stores/urqlClient.state.svelte';

// import { LATEST_POSTS_QUERY } from '$lib/graphql/queries/index';

// import { type Post, type PostsQueryResult, type GraphQLPostFromList, mapPost } from '$lib/types';

// export const load: PageServerLoad = async ({ locals }) => {
// 	const result = await getUrqlClient(locals.authToken)
// 		.client.query<PostsQueryResult>(
// 			LATEST_POSTS_QUERY,
// 			{ first: 1500 },
// 			{ context: { authToken: locals.authToken } }
// 		)
// 		.toPromise();

// 	if (result.error || !result.data) {
// 		console.error(result.error);
// 		throw new Error('Failed to fetch posts');
// 	}
// 	// const posts: Post[] = mapRelayResult<GraphQLPost, Post, 'posts'>(result.data, 'posts', mapPost);
// 	const posts: Post[] = result.data.posts.edges.map((post: GraphQLPostFromList) => mapPost(post));

// 	return { posts };
// };

import type { PageServerLoad } from './$types';

import { TURSO_AUTH_TOKEN, TURSO_URL } from '$env/static/private';
import { createClient } from '@libsql/client';
import type { Post } from '$lib/types';
import { getLocale } from '$lib/paraglide/runtime';
import he from 'he';

interface SqlitePost {
	id: string;
	title: string;
	uri: string;
	content?: string;
	excerpt: string;
	featured_image_url: string;
	featured_image_alt: string;
	author_id: string;
	author_name: string;
	author_avatar: string;
	date: string;
	modified: string;
	categories_json: string | null;
}

const stripHtmlForPage = (html: string): string => {
	if (!html) {
		return '';
	}

	// First, decode all HTML entities.
	const decodedHtml = he.decode(html);

	// Then, strip any remaining HTML tags
	const withoutTags = decodedHtml.replace(/<[^>]+>/g, '');

	// Finally, remove WordPress-style excerpt ellipsis `[&hellip;]` or `[...]`
	return withoutTags.replace(/\[(&hellip;|\.\.\.)\]/g, '…').trim();
};

export const load: PageServerLoad = async () => {
	const sqliteDb = createClient({
		url: TURSO_URL,
		authToken: TURSO_AUTH_TOKEN
	});

	const locale = getLocale();

	const postsResult = await sqliteDb.execute({
		sql: `
      SELECT p.id, p.title, p.uri, p.excerpt,
             p.featured_image_url, p.featured_image_alt,
             p.created_at AS date, p.modified_at AS modified,
             a.id AS author_id, a.name AS author_name, a.avatar_url AS author_avatar,
             (
                 SELECT json_group_array(json_object('name', c.name, 'uri', c.uri))
                 FROM posts_categories pc
                 JOIN categories c ON pc.category_id = c.id
                 WHERE pc.post_id = p.id
             ) AS categories_json
      FROM posts p
      LEFT JOIN authors a ON p.author_id = a.id
      WHERE p.language_code = ?
      ORDER BY p.created_at DESC
      LIMIT 1500
    `,
		args: [locale]
	});

	const postsRows: SqlitePost[] = postsResult.rows as unknown as SqlitePost[];

	const posts: Post[] = postsRows.map((post: SqlitePost) => {
		const categories = post.categories_json ? JSON.parse(post.categories_json) : [];
		const cleanedExcerpt = stripHtmlForPage(post.excerpt);

		return {
			id: post.id,
			title: post.title,
			date: post.date,
			modified: post.modified,
			excerpt: cleanedExcerpt,
			content: '',
			plainExcerpt: cleanedExcerpt,
			uri: post.uri,
			author: {
				name: post.author_name,
				link: '',
				profession: '',
				avatar: {
					url: post.author_avatar
				}
			},
			categories: categories,
			featuredImage: {
				mediaItemUrl: post.featured_image_url,
				altText: post.featured_image_alt
			},
			header: {
				title: '',
				content: ''
			}
		};
	});

	// const posts = [];
	return { posts };
};