// src/routes/[categorySlug]/+page.server.ts
import type { PageServerLoad } from './$types';
import { getUrqlClient } from '$stores/urqlClient.state.svelte';
import { COUNTRY_PRODUCTS } from '$lib/graphql/queries/index';
import {
	mapProduct,
	// mapCountry,
	type Category,
	type GraphQLProduct,
	type Product,
	type ProductsForCountryQueryResult,
	mapCategory
} from '$lib/types/index';

import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const { countrySlug } = params;

	const result = await getUrqlClient()
		.client.query<ProductsForCountryQueryResult>(COUNTRY_PRODUCTS, {
			first: 10,
			countrySlug: countrySlug,
			taxonomyTerms: [countrySlug]
		})
		.toPromise();

	if (result.error || !result.data) {
		console.error(`Failed to fetch the products: ${result.error}`);
		throw error(404, `Failed to fetch the products: ${result.error}`);
	}

	try {
		const category: Category = mapCategory(result.data.allPaPais.nodes[0]);

		// Get products para of the query
		const products: Product[] = result.data.products.nodes.map((product: GraphQLProduct) =>
			mapProduct(product)
		);

		return {
			products: products,
			category: category
		};
	} catch (err) {
		throw error(404, `Failed to fetch the category: ${err}`);
	}
};
