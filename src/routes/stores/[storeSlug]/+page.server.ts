// src/routes/produtores-de-vinho/[producerSlug]/+page.server.ts
import type { PageServerLoad } from './$types';
import { getUrqlClient } from '$stores/urqlClient.state.svelte';

import {
	mapProduct,
	mapPagination,
	mapCategory,
	type Category,
	type Product,
	type GraphQLProductNode,
	type Pagination,
	type YoastSeoData,
	type ProductsForStoreQueryResult
} from '$lib/types/index';

import { error } from '@sveltejs/kit';
import { AppConfig } from '$config';
import { STORE_PRODUCTS } from '$lib/graphql/queries/products-store.query';

export const load: PageServerLoad = async ({ params, locals }) => {
	const { storeSlug } = params;

	const result = await getUrqlClient(locals.authToken)
		.client.query<ProductsForStoreQueryResult>(
			STORE_PRODUCTS,
			{
				first: AppConfig.catalogs_initial_query_limit,
				producerSlug: storeSlug
			},
			{ context: { authToken: locals.authToken } }
		)
		.toPromise();

	console.log('result', result);
	if (result.error || !result.data) {
		console.error(`Failed to fetch the products: ${result.error}`);
		throw error(404, `Failed to fetch the products: ${result.error}`);
	}

	try {
		const category: Category = mapCategory(result.data.allPaTiendas.nodes[0]);
		const pagination: Pagination = mapPagination(result.data.products.pageInfo);
		const seo: YoastSeoData | undefined = result.data.allPaTiendas.nodes[0].seo;

		// Get products para of the query
		// console.log(result.data.products.edges.length);

		let products: Product[] = [];
		if (result.data.products.edges.length > 0) {
			products = result.data.products.edges.map((product: GraphQLProductNode) =>
				mapProduct(product)
			);
		}

		return {
			products: products,
			category: category,
			pagination,
			seo
		};
	} catch (err) {
		throw error(404, `Failed to fetch the category: ${err}`);
	}
};
