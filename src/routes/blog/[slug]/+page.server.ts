// src/routes/blog/[slug]/+page.server.ts
import type { PageServerLoad } from './$types';
import { POST_QUERY } from '$lib/graphql/queries/index';
// import { SLUGS_QUERY } from '$lib/graphql/queries/index';
import { type Post, type GraphQLPostSingle, mapPost } from '$lib/types';
// import type { EntryGenerator } from './$types';
import { error } from '@sveltejs/kit';
// import { building } from '$app/environment';

import { urqlClient } from '$stores/urqlClient.state.svelte';

// export const prerender = true;

// export const entries: EntryGenerator = async () => {
// 	const locales = ['pt', 'uy'];
// 	let allEntries: { slug: string; locale: string }[] = [];

// 	for (const locale of locales) {
// 		const client = getGqlClient(locale);
// 		const result = await client.query(SLUGS_QUERY, {}).toPromise();
// 		if (result.error || !result.data) {
// 			console.error(`Error fetching posts for locale ${locale}:`, result.error);
// 			throw new Error(`Failed to fetch post slugs for locale ${locale}`);
// 		}
// 		const entriesForLocale = result.data.posts.edges.map((edge: any) => ({
// 			slug: edge.node.slug
// 		}));
// 		allEntries = allEntries.concat(entriesForLocale);
// 	}
// 	return allEntries;
// };

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	// const locale = getLocale();
	// const client = getGqlClient(locale);

	const result = await urqlClient.client.query<GraphQLPostSingle>(POST_QUERY, { slug }).toPromise();

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
