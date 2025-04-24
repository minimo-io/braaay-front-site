// src/lib/stores/cart.store.svelte.ts
import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import type { CartItem, Cart } from '$lib/types/cart.types';
import { AppConfig } from '$config';

const initialCart: Cart = browser
	? JSON.parse(window.localStorage.getItem('cart') || 'null') || { items: [] }
	: { items: [] };

export const cart = writable<Cart>(initialCart);
export const miniCart = $state({ active: false, duration: AppConfig.miniCartDuration });

// Subscribe only on the client
if (browser) {
	cart.subscribe((value: Cart) => {
		window.localStorage.setItem('cart', JSON.stringify(value));
	});
}

// Add items from the cart
export const addToCart = (item: CartItem, callback?: (updatedCart: Cart) => void) => {
	cart.update((currentCart: Cart) => {
		const existingIndex = currentCart.items.findIndex((i) => i.id === item.id);
		if (existingIndex !== -1) {
			currentCart.items[existingIndex].quantity += 1;
		} else {
			// When adding a new item, ensure its initial quantity is 1.
			currentCart.items.push({ ...item, quantity: 1 });
		}

		// If a callback is provided, call it with the updated cart
		if (callback) {
			callback(currentCart);
		}

		return currentCart;
	});
};

export const activateMiniCart = () => {
	miniCart.active = true;
	console.log('Starting to showing mini cart.');
	if (browser) {
		setTimeout(() => {
			miniCart.active = false;
			console.log('Finished showing mini cart.');
		}, miniCart.duration);
	}
};

// Remove cart items
export const removeFromCart = (itemId: string) => {
	cart.update((currentCart: Cart) => {
		currentCart.items = currentCart.items.filter((i) => i.id !== itemId);
		return currentCart;
	});
};
// Increase item amount
export const adjustQuantity = (itemId: string, delta: number, specific?: number) => {
	cart.update((currentCart: Cart) => {
		const existingIndex = currentCart.items.findIndex((i) => i.id === itemId);

		if (existingIndex !== -1) {
			let newQuantity = 0;
			if (specific) {
				newQuantity = specific;
			} else {
				newQuantity = currentCart.items[existingIndex].quantity + delta;
				// Prevent negative quantities
			}

			currentCart.items[existingIndex].quantity = Math.max(1, newQuantity);
		}

		return currentCart;
	});
};

// Clear the whole cart
export const emptyCart = () => {
	cart.update(() => {
		return { items: [] };
	});
};

// Total amount in the cart
// export function getCartTotalAmount(): number {
// 	const currentCart: Cart = get(cart);
// 	return currentCart.items.reduce((total, item) => total + item.price * item.quantity, 0);
// }
