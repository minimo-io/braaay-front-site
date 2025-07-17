// src/lib/services/favoritesService.ts
import { FAVORITES_ADD_MUTATION } from '$lib/graphql/mutations/favorites-add.mutation';
import { FAVORITES_REMOVE_MUTATION } from '$lib/graphql/mutations/favorites-remove.mutation';
import { FAVORITES_PRODUCTS_FOR_USER } from '$lib/graphql/queries';
import { getUrqlClient } from '$lib/stores/urqlClient.state.svelte';
import {
	type FavoriteProduct,
	type AddToFavoritesResult,
	type AddFavoriteProductResponse,
	type RemoveFromFavoritesResult,
	type RemoveFavoriteProductResponse,
	type GraphQLFavoriteProducts,
	mapProduct,
	type GraphQLFavoriteSigleProduct
} from '$lib/types';

/**
 * Adds a product to the user's favorites.
 * @param productId The ID of the product to add.
 * @returns An object with the success status, a message, and the favorite product data.
 */
export async function addProductToFavorites(productId: number): Promise<AddToFavoritesResult> {
	try {
		const result = await getUrqlClient()
			.client.mutation<AddFavoriteProductResponse>(FAVORITES_ADD_MUTATION, { productId })
			.toPromise();

		if (result.error) {
			console.error('GraphQL Error:', result.error);
			return {
				success: false,
				message: result.error.message || 'An unknown error occurred.'
			};
		}

		const responseData = result.data?.addFavoriteProduct;
		if (responseData) {
			return {
				success: responseData.success,
				message: responseData.message,
				favoriteProduct: responseData.favoriteProduct
			};
		}

		return {
			success: false,
			message: 'No data returned from the server.'
		};
	} catch (error) {
		console.error('An unexpected error occurred:', error);
		return {
			success: false,
			message: 'An unexpected error occurred. Please try again later.'
		};
	}
}

/**
 * Removes a product from the user's favorites.
 * @param productId The ID of the product to remove.
 * @returns An object with the success status and a message.
 */
export async function removeProductFromFavorites(
	productId: number
): Promise<RemoveFromFavoritesResult> {
	try {
		const result = await getUrqlClient()
			.client.mutation<RemoveFavoriteProductResponse>(FAVORITES_REMOVE_MUTATION, { productId })
			.toPromise();

		if (result.error) {
			console.error('GraphQL Error:', result.error);
			return {
				success: false,
				message: result.error.message || 'An unknown error occurred.'
			};
		}

		const responseData = result.data?.removeFavoriteProduct;
		if (responseData) {
			return {
				success: responseData.success,
				message: responseData.message
			};
		}

		return {
			success: false,
			message: 'No data returned from the server.'
		};
	} catch (error) {
		console.error('An unexpected error occurred:', error);
		return {
			success: false,
			message: 'An unexpected error occurred. Please try again later.'
		};
	}
}

export async function getFavoriteProducts(): Promise<FavoriteProduct[] | undefined> {
	try {
		const favoritesResult = await getUrqlClient().client.query<GraphQLFavoriteProducts>(
			FAVORITES_PRODUCTS_FOR_USER,
			{}
		);
		if (favoritesResult.error && !favoritesResult.data) {
			const error = `Favorites fetch failed: ${favoritesResult.error.message}`;
			console.error(error);
			throw new Error(error);
		}

		const favoriteProducts = favoritesResult.data?.viewer.favoriteProducts.map((fav) =>
			mapFavoriteProducts(fav)
		);

		return favoriteProducts;
	} catch (err) {
		console.error('Failed to get favorites', err);
	}
}

function mapFavoriteProducts(graphQLFavoriteProduct: GraphQLFavoriteSigleProduct): FavoriteProduct {
	return {
		id: graphQLFavoriteProduct.product.databaseId,
		product: mapProduct({ node: graphQLFavoriteProduct.product }),
		user: {
			databaseId: graphQLFavoriteProduct.user.databaseId,
			username: graphQLFavoriteProduct.user.username
		},
		addedDate: graphQLFavoriteProduct.addedDate
	};
}
