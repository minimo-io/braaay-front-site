import type { ImageGeneral } from './image.types';

export interface CartItem {
	id: number;
	name: string;
	priceString: string;
	price: number;
	quantity: number;
	maxQuantity: number;
	image: ImageGeneral;
	sku: string;
	uri: string;
}

export interface Cart {
	items: CartItem[];
	coupons: string[]; // Array of coupon codes
	zip: string;
}

export interface ShippingRate {
	id: string;
	label: string;
	cost: string;
}

// Use to add items to carts & adding products in the checkout
export interface ProductGraphQL {
	productId: number;
	quantity: number;
}
