// src/routes/produtores-de-vinho/[producerSlug]/+page.server.ts
import type { PageServerLoad } from './$types';
import { getUrqlClient } from '$stores/urqlClient.state.svelte';
import { PAIRING_PRODUCTS } from '$lib/graphql/queries/index';
import { CATALOGS_INITIAL_QUERY_LIMIT } from '$lib';

import {
	mapProduct,
	mapPagination,
	mapCategory,
	type Category,
	type Product,
	type ProductsForPairingQueryResult,
	type GraphQLProductNode,
	type Pagination,
	type YoastSeoData
} from '$lib/types/index';

import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params, locals }) => {
	const { pairingSlug } = params;

	const result = await getUrqlClient(locals.authToken)
		.client.query<ProductsForPairingQueryResult>(
			PAIRING_PRODUCTS,
			{
				first: CATALOGS_INITIAL_QUERY_LIMIT,
				pairingSlug: pairingSlug
			},
			{ context: { authToken: locals.authToken } }
		)
		.toPromise();

	if (result.error || !result.data) {
		console.error(`Failed to fetch the products: ${result.error}`);
		throw error(404, `Failed to fetch the products: ${result.error}`);
	}

	try {
		const category: Category = mapCategory(result.data.allPaHarmonizacoes.nodes[0]);
		const seo: YoastSeoData | undefined = result.data.allPaHarmonizacoes.nodes[0].seo;

		const pagination: Pagination = mapPagination(result.data.products.pageInfo);

		// Get products para of the query
		const products: Product[] = result.data.products.edges.map((product: GraphQLProductNode) =>
			mapProduct(product)
		);

		return {
			products: products,
			category: category,
			pagination,
			seo
		};
	} catch (err) {
		throw error(404, `Failed to fetch the pairing category: ${err}`);
	}
};
