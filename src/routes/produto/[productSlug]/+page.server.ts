// src/routes/blog/[slug]/+page.server.ts
import type { PageServerLoad } from './$types';
import { getUrqlClient } from '$stores/urqlClient.state.svelte';
import { PRODUCT_QUERY } from '$lib/graphql/queries/index';
// import { SLUGS_QUERY } from '$lib/graphql/queries/index';
import { type Product, type GraphQLSingleProduct, mapProduct } from '$lib/types';
// import type { EntryGenerator } from './$types';
import { error } from '@sveltejs/kit';
// import { building } from '$app/environment';
// import { getLocale } from '$lib/paraglide/runtime';
import {} from '$lib/paraglide/server';

export const load: PageServerLoad = async ({ params }) => {
	const { productSlug } = params;

	// const locale = getLocale();

	const result = await getUrqlClient()
		.client.query<GraphQLSingleProduct>(PRODUCT_QUERY, { slug: productSlug })
		.toPromise();

	if (result.error || !result.data) {
		// throw new Error('Failed to fetch the post');
		throw error(404, 'Product not founded');
	}

	try {
		const product: Product = mapProduct({ node: result.data.product });
		return { product };
	} catch (errorMsg) {
		console.error('ERROR', errorMsg);
		// throw error(404, 'Hey, product not found');
	}
};
