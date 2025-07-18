// src/routes/[categorySlug]/+page.server.ts
import type { LayoutServerLoad } from './$types';
import { getUrqlClient } from '$stores/urqlClient.state.svelte';
import { CATEGORY_PRODUCTS } from '$lib/graphql/queries/index';
import {
	mapProduct,
	mapCategory,
	mapPagination,
	type Category,
	type GraphQLProductNode,
	type Product,
	type ProductsForCategoryQueryResult,
	type Pagination,
	type YoastSeoData
} from '$lib/types/index';
import { error } from '@sveltejs/kit';
import { AppConfig } from '$config';

export const load: LayoutServerLoad = async ({ params, locals }) => {
	const { subcategorySlug } = params;
	let { categorySlug } = params;

	if (subcategorySlug && subcategorySlug !== '') {
		categorySlug = subcategorySlug;
	}

	const result = await getUrqlClient(locals.authToken)
		.client.query<ProductsForCategoryQueryResult>(
			CATEGORY_PRODUCTS,
			{
				first: AppConfig.catalogs_initial_query_limit,
				categorySlug: categorySlug,
				categoryId: categorySlug
			},
			{ context: { authToken: locals.authToken } }
		)

		.toPromise();

	console.log(result.error);

	if (result.error || !result.data) {
		console.error(`Failed to fetch the products: ${result.error}`);
		throw error(404, `Failed to fetch the products: ${result.error}`);
	}

	try {
		const productCategory: Category = mapCategory(result.data.productCategory);
		const pagination: Pagination = mapPagination(result.data.products.pageInfo);
		const seo: YoastSeoData | undefined = productCategory.seo;

		// Get products para of the query
		const products: Product[] = result.data.products.edges.map((product: GraphQLProductNode) =>
			mapProduct(product)
		);

		return {
			products: products,
			category: productCategory,
			pagination,
			seo
		};
	} catch (err) {
		throw error(404, `Failed to fetch the category: ${err}`);
	}
};

// export const actions = {
// 	loadMore: async (event) => {
// 		// TODO log the user in
// 	}
// } satisfies Actions;
