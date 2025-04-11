// src/app.d.ts
// See https://svelte.dev/docs/kit/types#app.d.ts
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
			// Keep any existing properties that may already be defined here
		}
		// Other existing interface declarations...
	}
}

export {};
