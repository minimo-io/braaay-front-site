// src/routes/[categorySlug]/+page.server.ts
import type { LayoutServerLoad } from './$types';
import { getGqlClient } from '$lib/graphql/client';
import { CATEGORY_PRODUCTS } from '$lib/graphql/queries/index';
import {
	mapProduct,
	mapCategory,
	type Category,
	type GraphQLProduct,
	type Product,
	type ProductsQueryResult
} from '$lib/types/index';

import { error } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ params }) => {
	const { subcategorySlug } = params;
	let { categorySlug } = params;

	const client = getGqlClient();

	if (subcategorySlug && subcategorySlug !== '') {
		categorySlug = subcategorySlug;
	}

	const result = await client
		.query<ProductsQueryResult>(CATEGORY_PRODUCTS, {
			first: 10,
			categorySlug: categorySlug,
			categoryId: categorySlug
		})
		.toPromise();

	if (result.error || !result.data) {
		console.error(`Failed to fetch the products: ${result.error}`);
		throw error(404, `Failed to fetch the products: ${result.error}`);
	}

	// console.log('GQL_CAT', result.data.productCategory);
	// Get productCategory part of the query
	const productCategory: Category = mapCategory(result.data.productCategory);

	// Get products para of the query
	const products: Product[] = result.data.products.nodes.map((product: GraphQLProduct) =>
		mapProduct(product)
	);

	return {
		products: products,
		category: productCategory
	};
};
