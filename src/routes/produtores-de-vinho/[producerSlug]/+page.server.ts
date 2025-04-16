// src/routes/produtores-de-vinho/[producerSlug]/+page.server.ts
import type { PageServerLoad } from './$types';
import { getUrqlClient } from '$stores/urqlClient.state.svelte';
import { WINE_PRODUCER_PRODUCTS } from '$lib/graphql/queries/index';
import { CATALOGS_INITIAL_QUERY_LIMIT } from '$lib';

import {
	mapProduct,
	mapPagination,
	mapCategory,
	type Category,
	type Product,
	type ProductsForWineProducerQueryResult,
	type GraphQLProductNode,
	type Pagination
} from '$lib/types/index';

import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params, locals }) => {
	const { producerSlug } = params;

	const result = await getUrqlClient(locals.authToken)
		.client.query<ProductsForWineProducerQueryResult>(
			WINE_PRODUCER_PRODUCTS,
			{
				first: CATALOGS_INITIAL_QUERY_LIMIT,
				producerSlug: producerSlug
			},
			{ context: { authToken: locals.authToken } }
		)
		.toPromise();

	if (result.error || !result.data) {
		console.error(`Failed to fetch the products: ${result.error}`);
		throw error(404, `Failed to fetch the products: ${result.error}`);
	}

	try {
		const category: Category = mapCategory(result.data.allPaProdutoresDeVinho.nodes[0]);
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
		throw error(404, `Failed to fetch the category: ${err}`);
	}
};
