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
export * from './zip-codes.types';
export * from './cart.types';

export interface Wine {
	title: string;
	price: string;
	url: string;
	score: string;
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

export enum DeliveryUIType {
	DELIVERY = 'DELIVERY',
	PICKUP = 'PICKUP'
}
