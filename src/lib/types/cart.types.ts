import type { ImageGeneral } from './image.types';
export interface CartItem {
	id: string;
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
}
