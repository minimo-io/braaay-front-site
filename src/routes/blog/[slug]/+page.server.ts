// src/routes/blog/[slug]/+page.server.ts
import type { PageServerLoad } from './$types';
import { POST_QUERY } from '$lib/graphql/queries/index';
// import { SLUGS_QUERY } from '$lib/graphql/queries/index';
import { type Post, type GraphQLPostSingle, mapPost } from '$lib/types';
// import type { EntryGenerator } from './$types';
import { error } from '@sveltejs/kit';
// import { building } from '$app/environment';

import { getUrqlClient } from '$stores/urqlClient.state.svelte';

export const load: PageServerLoad = async ({ params, locals }) => {
	const { slug } = params;

	// const locale = getLocale();
	// const client = getGqlClient(locale);

	const result = await getUrqlClient()
		.client.query<GraphQLPostSingle>(
			POST_QUERY,
			{ slug },
			{ context: { authToken: locals.authToken } }
		)
		.toPromise();

	if (result.error || !result.data || !result.data.post) {
		// throw new Error('Failed to fetch the post');
		throw error(404, 'Post not found');
	}

	// Map the raw GraphQL data to your Post interface.
	try {
		const post: Post = mapPost(result.data);
		return { post };
	} catch (errorMsg) {
		console.error('ERROR', errorMsg);
		// throw error(404, 'Post not found');
	}
};
