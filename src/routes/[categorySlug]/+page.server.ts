// src/routes/[categorySlug]/+page.server.ts
import type { PageServerLoad } from './$types';
import { getGqlClient } from '$lib/graphql/client';
import { LATEST_PRODUCTS_QUERY } from '$lib/graphql/queries/index';
import {
	mapProduct,
	type GraphQLProduct,
	type Product,
	type ProductsQueryResult
} from '$lib/types/index';

import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const { categorySlug } = params;
	console.log(categorySlug);

	const client = getGqlClient();

	const result = await client
		.query<ProductsQueryResult>(LATEST_PRODUCTS_QUERY, { first: 10, categoryId: 26 })
		.toPromise();

	if (result.error || !result.data) {
		console.error(`Failed to fetch the products: ${result.error}`);
		throw error(404, `Failed to fetch the products: ${result.error}`);
	}

	const products: Product[] = result.data.products.nodes.map((product: GraphQLProduct) =>
		mapProduct(product)
	);

	return {
		products: products
	};
};
