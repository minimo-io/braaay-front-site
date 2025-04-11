// src/hooks.server.ts

import type { Handle } from '@sveltejs/kit';
import { paraglideMiddleware } from '$lib/paraglide/server';
import { sequence } from '@sveltejs/kit/hooks';

// Auth middleware
const authHandle: Handle = async ({ event, resolve }) => {
	// Get auth token from cookies
	const authToken = event.cookies.get('auth_token');

	// Make it available to the rest of the application
	if (authToken) {
		event.locals.authToken = authToken;

		try {
			const userStr = event.cookies.get('auth_user');
			if (userStr) {
				event.locals.user = JSON.parse(userStr);
			}
		} catch (e) {
			console.error(`Failed to parse user data: ${e}`);
		}
	}

	return resolve(event);
};

// creating a handle to use the paraglide middleware
const paraglideHandle: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request: localizedRequest, locale }) => {
		// Remap locales to match your real-life settings
		let mappedLocale: string = locale;
		if (locale === 'uy') {
			mappedLocale = 'es-UY';
		} else if (locale === 'pt') {
			mappedLocale = 'pt-BR';
		}
		event.request = localizedRequest;
		return resolve(event, {
			transformPageChunk: ({ html }) => {
				return html.replace('%lang%', mappedLocale);
			}
		});
	});

// export const handle: Handle = paraglideHandle;

// Combine the middleware functions using sequence
export const handle = sequence(authHandle, paraglideHandle);
