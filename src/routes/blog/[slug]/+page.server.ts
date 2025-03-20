import type { PageServerLoad } from './$types';
import { gqlClient } from '$lib/graphql/client';
import { POST_QUERY, SLUGS_QUERY } from '$lib/graphql/queries/index';
import { mapPost } from '$lib/graphql/mappers/post.mapper';
import type { Post, SinglePostsQueryResult } from '$lib/types';

import type { EntryGenerator } from './$types';

// // This function can be async, to get a list of all posts to be prerender, at compile time.
// export const entries: EntryGenerator = () => {
// 	return [
// 		{ slug: 'dicas-de-vinho-para-presente' }
// 		// { slug: 'vinhos-brasileiros-premiados-que-vao-te-surpreender' }
// 	];
// };

export const prerender = true;

export const entries: EntryGenerator = async () => {
	const result = await gqlClient.query(SLUGS_QUERY, {}).toPromise();
	if (result.error || !result.data) {
		console.error(result.error);
		throw new Error('Failed to fetch post slugs');
	}
	// Assume your GraphQL result structure is Relay‑style:
	// result.data.posts.edges: Array<{ node: { slug: string } }>
	const results = result.data.posts.edges.map((edge: any) => ({
		slug: edge.node.slug
	}));
	console.log('FOR_PRE-RENDERING (SSG):', results);
	return results;
};

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const result = await gqlClient.query<SinglePostsQueryResult>(POST_QUERY, { slug }).toPromise();
	if (result.error || !result.data) {
		console.error(result.error);
		throw new Error('Failed to fetch the post');
	}

	// Map the raw GraphQL data to your Post interface.
	const post: Post = mapPost(result.data.post);

	return { post };
};
