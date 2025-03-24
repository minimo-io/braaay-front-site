// src/routes/blog/+page.server.ts
import type { PageServerLoad } from './$types';
import { getLocale } from '$lib/paraglide/runtime';
import { getGqlClient } from '$lib/graphql/client';

import { LATEST_PRODUCTS_QUERY } from '$lib/graphql/queries/index';

import type { Post, PostsQueryResult, GraphQLPost } from '$lib/types';

import { mapRelayResult } from '$lib/graphql/mappers/mapper';
import { mapPost } from '$lib/graphql/mappers/post.mapper';

export const load: PageServerLoad = async () => {
	console.log('GET_LOCALE', getLocale());

	const gqlClient = getGqlClient();

	const result = await gqlClient
		.query<PostsQueryResult>(LATEST_PRODUCTS_QUERY, { first: 1500 })
		.toPromise();

	if (result.error || !result.data) {
		console.error(result.error);
		throw new Error('Failed to fetch posts');
	}
	const posts: Post[] = mapRelayResult<GraphQLPost, Post, 'posts'>(result.data, 'posts', mapPost);

	return { posts };
};
