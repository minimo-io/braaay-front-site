// src/app.d.ts
import type { Cart } from '$lib/types/cart.types';

declare global {
	const __APP_VERSION__: string;
	namespace App {
		interface Locals {
			authToken?: string;
			user?: {
				id: string;
				name: string;
				email: string;
			};
			cart?: Cart;
		}
	}

	interface Window {
		dataLayer: unknown[];
		gtag: (...args: unknown[]) => void;
	}
}

export {};
