// src/routes/+page.server.ts
import type { PageServerLoad } from './$types';
import { client } from '$lib/graphql/client';
import { LATEST_PRODUCTS_QUERY } from '$lib/graphql/queries';

// Define an interface for a Post.
interface Post {
	id: string;
	title: string;
	date: string;
}

// Define an interface for the query result.
interface PostsQueryResult {
	posts: {
		edges: {
			node: Post;
		}[];
	};
}

export const load: PageServerLoad = async () => {
	const result = await client
		.query<PostsQueryResult>(LATEST_PRODUCTS_QUERY, { first: 10 })
		.toPromise();

	if (result.error || !result.data) {
		console.error(result.error);
		throw new Error('Failed to fetch posts');
	}

	const posts: Post[] = result.data.posts.edges.map((edge) => edge.node);

	return { posts };
};
