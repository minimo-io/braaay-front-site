import type { ImageGeneral } from './image.types';

export interface CartItem {
	id: number;
	name: string;
	priceString: string;
	price: number;
	regularPrice: string;
	quantity: number;
	maxQuantity: number;
	virtual: boolean;
	image: ImageGeneral;
	sku: string;
	uri: string;
}

// export interface Coupon {
// 	code: string;
// 	discount: number;
// }

// For the coupons services
export interface CouponResult {
	success: boolean;
	error?: string;
	sessionToken?: string;
}

export interface Cart {
	items: CartItem[];
	// coupons: string[];
	// coupons: Coupon[];
	coupons: { code: string; discount: number }[];
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
