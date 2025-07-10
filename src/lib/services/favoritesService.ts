// src/lib/services/favoritesService.ts
import { FAVORITES_ADD_MUTATION } from '$lib/graphql/mutations/favorites-add.mutation';
import { FAVORITES_REMOVE_MUTATION } from '$lib/graphql/mutations/favorites-remove.mutation';
import { getUrqlClient } from '$lib/stores/urqlClient.state.svelte';
import type { FavoriteProduct } from '$lib/types/favoriteProduct.type';

interface AddFavoriteProductResponse {
	addFavoriteProduct: {
		success: boolean;
		message: string;
		favoriteProduct: FavoriteProduct;
	};
}

interface RemoveFavoriteProductResponse {
	removeFavoriteProduct: {
		success: boolean;
		message: string;
	};
}

interface AddToFavoritesResult {
	success: boolean;
	message: string;
	favoriteProduct?: FavoriteProduct;
}

interface RemoveFromFavoritesResult {
	success: boolean;
	message: string;
}

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
