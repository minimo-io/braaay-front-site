// src/lib/api/loadMoreProducts.ts
import { getUrqlClient } from '$stores/urqlClient.state.svelte.js';
import { CATEGORY_PRODUCTS } from '$lib/graphql/queries/products-category.query.js';
import { CATALOGS_INITIAL_QUERY_LIMIT } from '$lib';
import type {
	Product,
	Pagination,
	ProductsForCategoryQueryResult,
	GraphQLProductNode
} from '$lib/types';
import { mapProduct, mapPagination } from '$lib/types';

/**
 * Loads additional products for a given category.
 *
 * @param products - The current array of products.
 * @param pagination - The current pagination state.
 * @param categorySlug - The slug identifying the current category.
 * @returns A promise resolving to an object containing the updated products array and new pagination state.
 */
export async function loadMoreProducts({
	products,
	pagination,
	categorySlug
}: {
	products: Product[];
	pagination: Pagination;
	categorySlug: string;
}): Promise<{ products: Product[]; pagination: Pagination }> {
	// Return early if there's no next page.
	if (!pagination.hasNextPage) return { products, pagination };

	// Get the client.
	const client = getUrqlClient().client;

	try {
		// Query for additional products.
		const result = await client
			.query<ProductsForCategoryQueryResult>(CATEGORY_PRODUCTS, {
				first: CATALOGS_INITIAL_QUERY_LIMIT,
				after: pagination.endCursor,
				categorySlug,
				categoryId: categorySlug
			})
			.toPromise();

		if (result.error || !result.data) {
			throw new Error(`Failed to fetch more products: ${result.error}`);
		}

		// Map new products and update pagination.
		const newProducts: Product[] = result.data.products.edges.map((product: GraphQLProductNode) =>
			mapProduct(product)
		);
		const newPagination: Pagination = mapPagination(result.data.products.pageInfo);

		// Append the new products to the existing array.
		return {
			products: [...products, ...newProducts],
			pagination: newPagination
		};
	} catch (err) {
		console.error(`Error loading more products: ${err}`);
		throw err;
	}
}
