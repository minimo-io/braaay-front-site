// scripts/migrate-to-turso-posts.ts
import { createClient as createUrqlClient, gql, type Client } from '@urql/core';
import { cacheExchange, fetchExchange } from '@urql/core';
import { createClient as createTursoClient } from '@libsql/client';
import dotenv from 'dotenv';

dotenv.config();

console.log('PT', process.env.PUBLIC_GRAPHQL_SERVER_PT);
console.log('UY', process.env.PUBLIC_GRAPHQL_SERVER_UY);

const turso = createTursoClient({
	url: process.env.TURSO_URL!,
	authToken: process.env.TURSO_AUTH_TOKEN!
});

// GraphQL query to fetch all posts with SEO data
const GET_ALL_POSTS = gql`
	query LatestPosts {
		posts(first: 100000, where: { status: PUBLISH, orderby: { field: DATE, order: DESC } }) {
			edges {
				node {
					uri
					slug
					databaseId
					title
					date
					modified
					excerpt
					content
					header {
						firstSubtitle
						firstParagraph
					}
					categories {
						nodes {
							databaseId
							name
							uri
						}
					}
					featuredImage {
						node {
							mediaItemUrl
							altText
						}
					}
					author {
						node {
							databaseId
							name
							avatar {
								url
							}
						}
					}
					seo {
						title
						metaDesc
						canonical
						opengraphTitle
						opengraphDescription
						opengraphImage {
							sourceUrl
						}
						twitterTitle
						twitterDescription
						twitterImage {
							sourceUrl
						}
						metaKeywords
						metaRobotsNoindex
						metaRobotsNofollow
					}
				}
			}
		}
	}
`;

async function upsertAuthor(
	authorGraphqlId: number,
	authorName: string,
	avatarUrl: string | null,
	languageCode: 'pt' | 'uy'
): Promise<number | null> {
	try {
		const existingAuthor = await turso.execute({
			sql: `SELECT id FROM authors WHERE graphql_id = ? AND language_code = ?`,
			args: [authorGraphqlId, languageCode]
		});

		if (existingAuthor.rows.length > 0) {
			const authorId = existingAuthor.rows[0].id as number;
			await turso.execute({
				sql: `UPDATE authors SET name = ?, avatar_url = ? WHERE id = ?`,
				args: [authorName, avatarUrl, authorId]
			});
			return authorId;
		} else {
			const result = await turso.execute({
				sql: `INSERT INTO authors (graphql_id, name, avatar_url, language_code) VALUES (?, ?, ?, ?)`,
				args: [authorGraphqlId, authorName, avatarUrl, languageCode]
			});
			return result.lastInsertRowid ? Number(result.lastInsertRowid) : null;
		}
	} catch (err) {
		console.error(`Error upserting author ${authorName}:`, err);
		return null;
	}
}

async function upsertCategory(
	name: string,
	uri: string,
	graphql_id: number,
	languageCode: 'pt' | 'uy'
): Promise<number | null> {
	try {
		const existingCategory = await turso.execute({
			sql: 'SELECT id FROM categories WHERE graphql_id = ? AND language_code = ?',
			args: [graphql_id, languageCode]
		});

		if (existingCategory.rows.length > 0) {
			const categoryId = existingCategory.rows[0].id as number;
			await turso.execute({
				sql: 'UPDATE categories SET name = ?, uri = ? WHERE id = ?',
				args: [name, uri, categoryId]
			});
			return categoryId;
		} else {
			const result = await turso.execute({
				sql: 'INSERT INTO categories (name, uri, graphql_id, language_code) VALUES (?, ?, ?, ?)',
				args: [name, uri, graphql_id, languageCode]
			});
			return result.lastInsertRowid ? Number(result.lastInsertRowid) : null;
		}
	} catch (err) {
		console.error(`Error upserting category ${name}:`, err);
		return null;
	}
}

interface SeoData {
	title?: string;
	metaDesc?: string;
	canonical?: string;
	opengraphTitle?: string;
	opengraphDescription?: string;
	opengraphImage?: { sourceUrl: string };
	twitterTitle?: string;
	twitterDescription?: string;
	twitterImage?: { sourceUrl: string };
	metaKeywords?: string;
	metaRobotsNoindex?: string;
	metaRobotsNofollow?: string;
}

async function upsertPost(
	databaseId: number,
	title: string,
	uri: string,
	slug: string,
	content: string,
	excerpt: string,
	featured_image_url: string | null,
	featured_image_alt: string | null,
	author_id: number | null,
	date: string,
	modified: string,
	languageCode: 'pt' | 'uy',
	seo: SeoData | null = null,
	headerFirstSubtitle: string | null,
	headerFirstParagraph: string | null
): Promise<number | null> {
	try {
		// First, check if post exists by URI or graphql_id and get its modified_at date
		const existingPost = await turso.execute({
			sql: 'SELECT id, modified_at FROM posts WHERE uri = ? OR (graphql_id = ? AND language_code = ?)',
			args: [uri, databaseId, languageCode]
		});

		if (existingPost.rows.length > 0) {
			const postId = existingPost.rows[0].id as number;
			const existingModified = existingPost.rows[0].modified_at as string;

			// Force update to add SEO data (or check if SEO data is missing)
			const seoCheck = await turso.execute({
				sql: 'SELECT seo_title, header_first_paragraph, slug FROM posts WHERE id = ?',
				args: [postId]
			});
			const needsSeoUpdate = !seoCheck.rows[0]?.seo_title;
			const needsFirstParagraphUpdate = !seoCheck.rows[0]?.header_first_paragraph;
			const needsSlugUpdate = !seoCheck.rows[0]?.slug;

			// Update if modified date is different OR if SEO data is missing
			if (
				existingModified !== modified ||
				needsSeoUpdate ||
				needsFirstParagraphUpdate ||
				needsSlugUpdate
			) {
				await turso.execute({
					sql: `UPDATE posts SET 
						graphql_id = ?, 
						title = ?, 
						uri = ?, 
						slug = ?,
						content = ?, 
						excerpt = ?, 
						featured_image_url = ?, 
						featured_image_alt = ?, 
						author_id = ?, 
						created_at = ?, 
						modified_at = ?, 
						language_code = ?,
						seo_title = ?,
						seo_description = ?,
						seo_canonical_url = ?,
						seo_og_title = ?,
						seo_og_description = ?,
						seo_og_image = ?,
						seo_twitter_title = ?,
						seo_twitter_description = ?,
						seo_twitter_image = ?,
						seo_keywords = ?,
						seo_noindex = ?,
						seo_nofollow = ?,
						header_first_subtitle = ?,
						header_first_paragraph = ?

						WHERE id = ?`,
					args: [
						databaseId,
						title,
						uri,
						slug,
						content,
						excerpt,
						featured_image_url,
						featured_image_alt,
						author_id,
						date,
						modified,
						languageCode,
						seo?.title || null,
						seo?.metaDesc || null,
						seo?.canonical || null,
						seo?.opengraphTitle || null,
						seo?.opengraphDescription || null,
						seo?.opengraphImage?.sourceUrl || null,
						seo?.twitterTitle || null,
						seo?.twitterDescription || null,
						seo?.twitterImage?.sourceUrl || null,
						seo?.metaKeywords || null,
						seo?.metaRobotsNoindex || null,
						seo?.metaRobotsNofollow || null,
						headerFirstSubtitle || null,
						headerFirstParagraph || null,
						postId
					]
				});
				if (needsSeoUpdate) {
					console.log(`Updated existing post (added SEO data): ${title}`);
				} else {
					console.log(`Updated existing post (modified): ${title}`);
				}
			} else {
				console.log(`Skipped post (no changes): ${title}`);
			}
			return postId;
		} else {
			// Insert new post
			const result = await turso.execute({
				sql: `INSERT INTO posts (
					graphql_id, title, uri, content, excerpt, featured_image_url, featured_image_alt, 
					author_id, created_at, modified_at, language_code,
					seo_title, seo_description, seo_canonical_url, seo_og_title, seo_og_description, 
					seo_og_image, seo_twitter_title, seo_twitter_description, seo_twitter_image,
					seo_keywords, seo_noindex, seo_nofollow, header_first_subtitle = ?, header_first_paragraph = ?
				) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
				args: [
					databaseId,
					title,
					uri,
					slug,
					content,
					excerpt,
					featured_image_url,
					featured_image_alt,
					author_id,
					date,
					modified,
					languageCode,
					seo?.title || null,
					seo?.metaDesc || null,
					seo?.canonical || null,
					seo?.opengraphTitle || null,
					seo?.opengraphDescription || null,
					seo?.opengraphImage?.sourceUrl || null,
					seo?.twitterTitle || null,
					seo?.twitterDescription || null,
					seo?.twitterImage?.sourceUrl || null,
					seo?.metaKeywords || null,
					seo?.metaRobotsNoindex || null,
					seo?.metaRobotsNofollow || null,
					headerFirstSubtitle || null,
					headerFirstParagraph || null
				]
			});
			console.log(`Inserted new post: ${title}`);
			return result.lastInsertRowid ? Number(result.lastInsertRowid) : null;
		}
	} catch (err) {
		console.error(`Error upserting post ${title}:`, err);
		return null;
	}
}

async function migrateForLanguage(wpClient: Client, languageCode: 'pt' | 'uy') {
	console.log(`Starting migration for ${languageCode}...`);
	let total = 0;

	try {
		const res: any = await wpClient.query(GET_ALL_POSTS, {}).toPromise();

		if (res.error) {
			console.error(`GraphQL Error for ${languageCode}:`, res.error);
			return;
		}

		const posts = res.data.posts.edges.map((edge: { node: any }) => edge.node);
		console.log(`Found ${posts.length} posts to migrate for ${languageCode}`);

		for (const post of posts) {
			const { databaseId, title, uri, excerpt, date, modified, content, seo, slug } = post;
			const featured_image_url = post.featuredImage?.node?.mediaItemUrl || null;
			const featured_image_alt = post.featuredImage?.node?.altText || null;
			const author = post.author?.node;
			const categories = post.categories?.nodes || [];

			const headerFirstSubtitle = post.header.firstSubtitle;
			const headerFirstParagraph = post.header.firstParagraph;

			// Upsert author first
			const author_id = author
				? await upsertAuthor(
						author.databaseId,
						author.name,
						author.avatar?.url || null,
						languageCode
					)
				: null;

			// Upsert post with SEO data
			const postId = await upsertPost(
				databaseId,
				title,
				uri,
				slug,
				content,
				excerpt,
				featured_image_url,
				featured_image_alt,
				author_id,
				date,
				modified,
				languageCode,
				seo,
				headerFirstSubtitle,
				headerFirstParagraph
			);

			// Handle categories if post was successfully upserted
			if (postId && categories.length > 0) {
				// Clear existing categories for this post
				await turso.execute({
					sql: 'DELETE FROM posts_categories WHERE post_id = ?',
					args: [postId]
				});

				// Insert updated categories
				for (const category of categories) {
					const categoryId = await upsertCategory(
						category.name,
						category.uri,
						category.databaseId,
						languageCode
					);
					if (categoryId) {
						await turso.execute({
							sql: 'INSERT INTO posts_categories (post_id, category_id) VALUES (?, ?) ON CONFLICT DO NOTHING',
							args: [postId, categoryId]
						});
					}
				}
			}

			total++;
			if (total % 10 === 0) {
				console.log(`Progress for ${languageCode}: ${total} posts processed`);
			}
		}

		console.log(`Migration for ${languageCode} completed. Total posts migrated: ${total}`);
	} catch (err) {
		console.error(`Migration for ${languageCode} failed:`, err);
	}
}

async function migratePosts() {
	console.log('Starting post migration...');

	if (process.env.PUBLIC_GRAPHQL_SERVER_PT) {
		const ptClient = createUrqlClient({
			url: process.env.PUBLIC_GRAPHQL_SERVER_PT,
			exchanges: [cacheExchange, fetchExchange],
			requestPolicy: 'network-only',
			fetchOptions: () => ({})
		});
		await migrateForLanguage(ptClient, 'pt');
	} else {
		console.log('Skipping PT migration, PUBLIC_GRAPHQL_SERVER_PT not set.');
	}

	if (process.env.PUBLIC_GRAPHQL_SERVER_UY) {
		const uyClient = createUrqlClient({
			url: process.env.PUBLIC_GRAPHQL_SERVER_UY,
			exchanges: [cacheExchange, fetchExchange],
			requestPolicy: 'network-only',
			fetchOptions: () => ({})
		});
		await migrateForLanguage(uyClient, 'uy');
	} else {
		console.log('Skipping UY migration, PUBLIC_GRAPHQL_SERVER_UY not set.');
	}

	console.log('Migration completed!');
}

migratePosts().catch(console.error);
