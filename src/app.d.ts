// src/app.d.ts
// See https://svelte.dev/docs/kit/types#app.d.ts
import type { Cart } from '$lib/types/cart.types';

declare global {
	namespace App {
		interface Locals {
			authToken?: string;
			user?: {
				id: string;
				name: string;
				email: string;
				// Add other user properties as needed
			};
			// The “live” cart on every request to send to the server
			cart?: Cart;
		}
	}
	// For Analytics
	interface Window {
		dataLayer: unknown[];
		gtag: (...args: unknown[]) => void;
	}
}

// declare global {

// }

export {};
