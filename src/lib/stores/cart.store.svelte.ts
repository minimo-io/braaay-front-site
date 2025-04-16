// src/lib/stores/cart.store.svelte.ts
import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import type { CartItem, Cart } from '$lib/types/cart.types';

const initialCart: Cart = browser
	? JSON.parse(window.localStorage.getItem('cart') || 'null') || { items: [] }
	: { items: [] };

export const cart = writable<Cart>(initialCart);

// Subscribe only on the client
if (browser) {
	cart.subscribe((value: Cart) => {
		window.localStorage.setItem('cart', JSON.stringify(value));
	});
}

// Add items from the cart
export const addToCart = (item: CartItem) => {
	cart.update((currentCart: Cart) => {
		const existingIndex = currentCart.items.findIndex((i) => i.id === item.id);
		if (existingIndex !== -1) {
			currentCart.items[existingIndex].quantity += 1;
		} else {
			// When adding a new item, ensure its initial quantity is 1.
			currentCart.items.push({ ...item, quantity: 1 });
		}
		return currentCart;
	});
};

// Remove cart items
export const removeFromCart = (itemId: string) => {
	cart.update((currentCart: Cart) => {
		currentCart.items = currentCart.items.filter((i) => i.id !== itemId);
		return currentCart;
	});
};
// Increase item amount
export const adjustQuantity = (itemId: string, delta: number) => {
	cart.update((currentCart: Cart) => {
		const existingIndex = currentCart.items.findIndex((i) => i.id === itemId);

		if (existingIndex !== -1) {
			const newQuantity = currentCart.items[existingIndex].quantity + delta;

			// Prevent negative quantities
			currentCart.items[existingIndex].quantity = Math.max(1, newQuantity);
		}

		return currentCart;
	});
};
// Total amount in the cart
// export function getCartTotalAmount(): number {
// 	const currentCart: Cart = get(cart);
// 	return currentCart.items.reduce((total, item) => total + item.price * item.quantity, 0);
// }
