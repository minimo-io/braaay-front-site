import type { ImageGeneral } from './image.types';

export * from './posts.types';
export * from './products.types';
export * from './relay-data.types';
export * from './article-creator.types';
export * from './page-custom-header.types';
export * from './image.types';
export * from './categories.types';
export * from './pagination.types';
export * from './drawer.types';
export * from './customer.types';
export * from './cart.types';
export * from './shipping.types';
export * from './payments.types';
export * from './partners.types';
export * from './seo.types';
export * from './favoriteProduct.type';
// export * from './schema.types';

export interface Wine {
	productId: number;
	title: string;
	price: string;
	regularPrice: string;
	url: string;
	score: string;
	isFavorited?: boolean;
}

// For country box
export interface Country {
	name: string;
	flag: ImageGeneral;
	url: string;
	isBold: boolean;
	count?: number;
}
export interface AllCountries {
	pt: Country[];
	uy: Country[];
}

export interface LoginResult {
	success: boolean;
	user: any;
	message: string;
}
