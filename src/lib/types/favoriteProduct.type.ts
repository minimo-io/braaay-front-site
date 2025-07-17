import type { GraphQLProduct, Product } from './products.types';

export interface FavoriteProduct {
	id: number;
	product: Product;
	user: {
		databaseId: number;
		username: string;
	};
	addedDate: string;
}

export interface GraphQLFavoriteSigleProduct {
	product: GraphQLProduct;
	user: {
		username: string;
		databaseId: number;
	};
	addedDate: string;
}
export interface GraphQLFavoriteProducts {
	viewer: {
		favoriteProducts: GraphQLFavoriteSigleProduct[];
	};
}

export interface AddFavoriteProductResponse {
	addFavoriteProduct: {
		success: boolean;
		message: string;
		favoriteProduct: FavoriteProduct;
	};
}

export interface RemoveFavoriteProductResponse {
	removeFavoriteProduct: {
		success: boolean;
		message: string;
	};
}

export interface AddToFavoritesResult {
	success: boolean;
	message: string;
	favoriteProduct?: FavoriteProduct;
}

export interface RemoveFromFavoritesResult {
	success: boolean;
	message: string;
}
