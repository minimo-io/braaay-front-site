import { createClient as createUrqlClient, gql } from '@urql/core';
import { cacheExchange, fetchExchange } from '@urql/core';
import { createClient as createTursoClient } from '@libsql/client';
import dotenv from 'dotenv';
dotenv.config();
console.log('PT', process.env.PUBLIC_GRAPHQL_SERVER_PT);
console.log('UY', process.env.PUBLIC_GRAPHQL_SERVER_UY);
const turso = createTursoClient({
    url: process.env.TURSO_URL,
    authToken: process.env.TURSO_AUTH_TOKEN
});
// GraphQL query to fetch all posts
const GET_ALL_POSTS = gql `
	query LatestPosts {
		posts(first: 100000, where: { status: PUBLISH, orderby: { field: DATE, order: DESC } }) {
			edges {
				node {
					uri
					databaseId
					title
					date
					modified
					excerpt
					content
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
				}
			}
		}
	}
`;
async function upsertAuthor(authorGraphqlId, authorName, avatarUrl, languageCode) {
    try {
        const existingAuthor = await turso.execute({
            sql: `SELECT id FROM authors WHERE graphql_id = ? AND language_code = ?`,
            args: [authorGraphqlId, languageCode]
        });
        if (existingAuthor.rows.length > 0) {
            const authorId = existingAuthor.rows[0].id;
            await turso.execute({
                sql: `UPDATE authors SET name = ?, avatar_url = ? WHERE id = ?`,
                args: [authorName, avatarUrl, authorId]
            });
            return authorId;
        }
        else {
            const result = await turso.execute({
                sql: `INSERT INTO authors (graphql_id, name, avatar_url, language_code) VALUES (?, ?, ?, ?)`,
                args: [authorGraphqlId, authorName, avatarUrl, languageCode]
            });
            return result.lastInsertRowid ? Number(result.lastInsertRowid) : null;
        }
    }
    catch (err) {
        console.error(`Error upserting author ${authorName}:`, err);
        return null;
    }
}
async function upsertCategory(name, uri, graphql_id, languageCode) {
    try {
        const existingCategory = await turso.execute({
            sql: 'SELECT id FROM categories WHERE graphql_id = ? AND language_code = ?',
            args: [graphql_id, languageCode]
        });
        if (existingCategory.rows.length > 0) {
            const categoryId = existingCategory.rows[0].id;
            await turso.execute({
                sql: 'UPDATE categories SET name = ?, uri = ? WHERE id = ?',
                args: [name, uri, categoryId]
            });
            return categoryId;
        }
        else {
            const result = await turso.execute({
                sql: 'INSERT INTO categories (name, uri, graphql_id, language_code) VALUES (?, ?, ?, ?)',
                args: [name, uri, graphql_id, languageCode]
            });
            return result.lastInsertRowid ? Number(result.lastInsertRowid) : null;
        }
    }
    catch (err) {
        console.error(`Error upserting category ${name}:`, err);
        return null;
    }
}
async function migrateForLanguage(wpClient, languageCode) {
    console.log(`Starting migration for ${languageCode}...`);
    let total = 0;
    try {
        const res = await wpClient.query(GET_ALL_POSTS, {}).toPromise();
        if (res.error) {
            console.error(`GraphQL Error for ${languageCode}:`, res.error);
            return;
        }
        const posts = res.data.posts.edges.map((edge) => edge.node);
        for (const post of posts) {
            const { databaseId, title, uri, excerpt, date, modified, content } = post;
            const featured_image_url = post.featuredImage?.node?.mediaItemUrl || null;
            const featured_image_alt = post.featuredImage?.node?.altText || null;
            const author = post.author?.node;
            const categories = post.categories?.nodes || [];
            const author_id = author
                ? await upsertAuthor(author.databaseId, author.name, author.avatar?.url || null, languageCode)
                : null;
            const postResult = await turso.execute({
                sql: `INSERT INTO posts (graphql_id, title, uri, content, excerpt, featured_image_url, featured_image_alt, author_id, created_at, modified_at, language_code)
                      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                      ON CONFLICT(uri) DO UPDATE SET
                      title = excluded.title, content = excluded.content, excerpt = excluded.excerpt,
                      featured_image_url = excluded.featured_image_url, featured_image_alt = excluded.featured_image_alt,
                      author_id = excluded.author_id, created_at = excluded.created_at, modified_at = excluded.modified_at, language_code = excluded.language_code, graphql_id = excluded.graphql_id;`,
                args: [
                    databaseId,
                    title,
                    uri,
                    content,
                    excerpt,
                    featured_image_url,
                    featured_image_alt,
                    author_id,
                    date,
                    modified,
                    languageCode
                ]
            });
            let postId = null;
            if (postResult.lastInsertRowid && Number(postResult.lastInsertRowid) > 0) {
                postId = Number(postResult.lastInsertRowid);
            }
            else {
                const existingPost = await turso.execute({
                    sql: 'SELECT id FROM posts WHERE uri = ?',
                    args: [uri]
                });
                if (existingPost.rows.length > 0) {
                    postId = existingPost.rows[0].id;
                }
            }
            if (postId && categories.length > 0) {
                await turso.execute({
                    sql: 'DELETE FROM posts_categories WHERE post_id = ?',
                    args: [postId]
                });
                for (const category of categories) {
                    const categoryId = await upsertCategory(category.name, category.uri, category.databaseId, languageCode);
                    if (categoryId) {
                        await turso.execute({
                            sql: 'INSERT INTO posts_categories (post_id, category_id) VALUES (?, ?) ON CONFLICT DO NOTHING',
                            args: [postId, categoryId]
                        });
                    }
                }
            }
            total++;
            console.log(`Migrated post for ${languageCode}: ${title}`);
        }
        console.log(`Migration for ${languageCode} completed. Total posts migrated: ${total}`);
    }
    catch (err) {
        console.error(`Migration for ${languageCode} failed:`, err);
    }
}
async function migratePosts() {
    if (process.env.PUBLIC_GRAPHQL_SERVER_PT) {
        const ptClient = createUrqlClient({
            url: process.env.PUBLIC_GRAPHQL_SERVER_PT,
            exchanges: [cacheExchange, fetchExchange],
            requestPolicy: 'network-only',
            fetchOptions: () => ({})
        });
        await migrateForLanguage(ptClient, 'pt');
    }
    else {
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
    }
    else {
        console.log('Skipping UY migration, PUBLIC_GRAPHQL_SERVER_UY not set.');
    }
}
migratePosts().catch(console.error);
