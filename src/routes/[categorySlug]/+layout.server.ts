// src/routes/[categorySlug]/+layout.server.ts
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
import type { FilterState } from '$stores/filters.store.svelte';
import { buildGraphQLFilters } from '$lib/services';
import { getLocale } from '$lib/paraglide/runtime';

export const load: LayoutServerLoad = async ({ params, locals, url }) => {
	const { subcategorySlug } = params;
	let { categorySlug } = params;

	if (subcategorySlug && subcategorySlug !== '') {
		categorySlug = subcategorySlug;
	}

	// Parse filters from URL params
	const filters: FilterState = {
		variety: url.searchParams.get('variety')?.split(',') || [],
		country: url.searchParams.get('country')?.split(',') || [],
		priceRange: {
			min: parseInt(
				url.searchParams.get('price_min') ||
					`${AppConfig.catalog_filter[getLocale()].catalog_filter_min_price}`
			),
			max: parseInt(
				url.searchParams.get('price_max') ||
					`${AppConfig.catalog_filter[getLocale()].catalog_filter_max_price}`
			)
		},
		taste: url.searchParams.get('taste')?.split(',') || [],
		pairings: url.searchParams.get('pairings')?.split(',') || [],
		shipping: url.searchParams.get('shipping') || '',
		bottleSize: url.searchParams.get('bottleSize')?.split(',') || [],
		grape: url.searchParams.get('grape')?.split(',') || []
	};

	const graphqlFilters = buildGraphQLFilters(filters);

	console.log('GRAPH_FILTERS', graphqlFilters);

	const result = await getUrqlClient(locals.authToken)
		.client.query<ProductsForCategoryQueryResult>(
			CATEGORY_PRODUCTS,
			{
				first: AppConfig.catalogs_initial_query_limit,
				categorySlug: categorySlug,
				categoryId: categorySlug,
				...graphqlFilters
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
		console.log(productCategory);
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
		const errMsg = `Failed to fetch the category: ${err}`;
		console.error(errMsg);
		throw error(404, errMsg);
	}
};

// export const actions = {
// 	loadMore: async (event) => {
// 		// TODO log the user in
// 	}
// } satisfies Actions;
