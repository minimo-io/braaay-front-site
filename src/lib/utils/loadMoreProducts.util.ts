// src/lib/api/loadMoreProducts.ts
import { getUrqlClient } from '$stores/urqlClient.state.svelte.js';
import { CATALOGS_INITIAL_QUERY_LIMIT } from '$lib';
import type {
	Product,
	Pagination,
	ProductsForCategoryQueryResult,
	GraphQLProductNode
} from '$lib/types';
import { mapProduct, mapPagination } from '$lib/types';
import type { AnyVariables, TypedDocumentNode } from '@urql/core';

export async function loadMoreProducts({
	products,
	pagination,
	query,
	params
}: {
	products: Product[];
	pagination: Pagination;
	query: TypedDocumentNode<any, AnyVariables>;
	params: object;
}): Promise<{ products: Product[]; pagination: Pagination }> {
	// Return early if there's no next page.
	if (!pagination.hasNextPage) return { products, pagination };

	console.log('QUERY', query);

	try {
		// Query for additional products.
		const result = await getUrqlClient()
			.client.query<ProductsForCategoryQueryResult>(query, {
				first: CATALOGS_INITIAL_QUERY_LIMIT,
				after: pagination.endCursor,
				...params
				// categorySlug: slug,
				// categoryId: slug
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
