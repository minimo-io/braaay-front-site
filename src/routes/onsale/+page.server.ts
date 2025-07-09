// src/routes/produtores-de-vinho/[producerSlug]/+page.server.ts
import type { PageServerLoad } from './$types';
import { getUrqlClient } from '$stores/urqlClient.state.svelte';
import { ONSALE_PRODUCTS } from '$lib/graphql/queries/index';

import {
	mapProduct,
	mapPagination,
	type Product,
	type ProductsOnSaleQueryResult,
	type GraphQLProductNode,
	type Pagination
} from '$lib/types/index';

import { error } from '@sveltejs/kit';
import { AppConfig } from '$config';

export const load: PageServerLoad = async ({ locals }) => {
	const result = await getUrqlClient(locals.authToken)
		.client.query<ProductsOnSaleQueryResult>(
			ONSALE_PRODUCTS,
			{
				first: AppConfig.catalogs_initial_query_limit
			},
			{ context: { authToken: locals.authToken } }
		)
		.toPromise();

	if (result.error || !result.data) {
		console.error(`Failed to fetch the products: ${result.error}`);
		throw error(404, `Failed to fetch the products: ${result.error}`);
	}

	try {
		// const category: Category = mapCategory(result.data.allPaProdutoresDeVinho.nodes[0]);
		const pagination: Pagination = mapPagination(result.data.products.pageInfo);

		// Get products para of the query
		const products: Product[] = result.data.products.edges.map((product: GraphQLProductNode) =>
			mapProduct(product)
		);

		return {
			products: products,
			pagination
		};
	} catch (err) {
		throw error(404, `Failed to fetch the category: ${err}`);
	}
};
