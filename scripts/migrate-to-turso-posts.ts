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

// GraphQL query to fetch all posts
const GET_ALL_POSTS = gql`
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

// Helper function to insert or update authors using databaseId and avatar_url
async function upsertAuthor(
	authorDatabaseId: number,
	authorName: string,
	avatarUrl: string | null
) {
	try {
		await turso.execute({
			sql: `INSERT INTO authors (id, name, avatar_url) VALUES (?, ?, ?)
                  ON CONFLICT(id) DO UPDATE SET
                  name=excluded.name, avatar_url=excluded.avatar_url;`,
			args: [authorDatabaseId, authorName, avatarUrl]
		});
		return authorDatabaseId;
	} catch (err) {
		console.error(`Error upserting author ${authorName}:`, err);
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

		for (const post of posts) {
			// Updated to include the `content` field
			const { databaseId, title, uri, excerpt, date, modified, content } = post;
			const featured_image_url = post.featuredImage?.node?.mediaItemUrl || null;
			const featured_image_alt = post.featuredImage?.node?.altText || null;
			const author = post.author?.node;

			// Extract the avatar URL from the author node
			const avatar_url = author?.avatar?.url || null;

			const author_id = author
				? await upsertAuthor(author.databaseId, author.name, avatar_url)
				: null;

			await turso.execute({
				sql: `INSERT INTO posts (id, title, uri, content, excerpt, featured_image_url, featured_image_alt, author_id, created_at, modified_at, language_code)
                      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                      ON CONFLICT(id) DO UPDATE SET
                      title = excluded.title, uri = excluded.uri, content = excluded.content, excerpt = excluded.excerpt,
                      featured_image_url = excluded.featured_image_url, featured_image_alt = excluded.featured_image_alt,
                      author_id = excluded.author_id, created_at = excluded.created_at, modified_at = excluded.modified_at, language_code = excluded.language_code;`,
				args: [
					databaseId,
					title,
					uri,
					// Use the content variable here
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

			total++;
			console.log(`Migrated post for ${languageCode}: ${title}`);
		}

		console.log(`Migration for ${languageCode} completed. Total posts migrated: ${total}`);
	} catch (err) {
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
}

migratePosts().catch(console.error);