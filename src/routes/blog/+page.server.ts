// src/routes/blog/+page.server.ts
import type { PageServerLoad } from './$types';
import { urqlClient } from '$stores/urqlClient.state.svelte';

import { LATEST_POSTS_QUERY } from '$lib/graphql/queries/index';

import { type Post, type PostsQueryResult, type GraphQLPostFromList, mapPost } from '$lib/types';

export const load: PageServerLoad = async () => {
	// console.log('ANOTHER_URQL', urqlClient);

	// const gqlClient = getGqlClient();

	const result = await urqlClient.client
		.query<PostsQueryResult>(LATEST_POSTS_QUERY, { first: 1500 })
		.toPromise();

	if (result.error || !result.data) {
		console.error(result.error);
		throw new Error('Failed to fetch posts');
	}
	// const posts: Post[] = mapRelayResult<GraphQLPost, Post, 'posts'>(result.data, 'posts', mapPost);
	const posts: Post[] = result.data.posts.edges.map((post: GraphQLPostFromList) => mapPost(post));

	return { posts };
};
