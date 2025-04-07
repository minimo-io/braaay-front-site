import type { PageServerLoad } from './$types';
import { getUrqlClient } from '$stores/urqlClient.state.svelte';
import { UVA_PRODUCTS } from '$lib/graphql/queries/index';
import { CATALOGS_INITIAL_QUERY_LIMIT } from '$lib';

import {
	mapProduct,
	mapPagination,
	mapCategory,
	type Category,
	type Product,
	type ProductsForUvaQueryResult,
	type GraphQLProductNode,
	type Pagination
} from '$lib/types/index';

import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const { uvaSlug } = params;

	const result = await getUrqlClient()
		.client.query<ProductsForUvaQueryResult>(UVA_PRODUCTS, {
			first: CATALOGS_INITIAL_QUERY_LIMIT,
			uvaId: uvaSlug,
			uvaSlug: uvaSlug
		})
		.toPromise();

	if (result.error || !result.data) {
		console.error(`Failed to fetch the products: ${result.error}`);
		throw error(404, `Failed to fetch the products: ${result.error}`);
	}

	try {
		const category: Category = mapCategory(result.data.uva);
		const pagination: Pagination = mapPagination(result.data.products.pageInfo);

		// Get products para of the query
		const products: Product[] = result.data.products.edges.map((product: GraphQLProductNode) =>
			mapProduct(product)
		);

		return {
			products: products,
			category: category,
			pagination
		};
	} catch (err) {
		throw error(404, `Failed to fetch the pairing category: ${err}`);
	}
};
