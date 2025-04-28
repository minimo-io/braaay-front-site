import type { ImageGeneral } from './image.types';

export interface CartItem {
	id: number;
	name: string;
	priceString: string;
	price: number;
	quantity: number;
	image: ImageGeneral;
	sku: string;
	uri: string;
}

export interface Cart {
	items: CartItem[];
	coupons: string[]; // Array of coupon codes
}

export interface ShippingRate {
	id: string;
	label: string;
	cost: string;
}
