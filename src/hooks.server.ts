// src/hooks.server.ts
//
import type { Handle } from '@sveltejs/kit';
import { paraglideMiddleware } from '$lib/paraglide/server';
import { sequence } from '@sveltejs/kit/hooks';
import { redirect } from '@sveltejs/kit';
import { deLocalizeUrl } from '$lib/paraglide/runtime';
import { requiresAuth, isAuthRoute } from '$lib/graphql/auth';
import { getLocale, localizeHref } from './paraglide/runtime';

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

	// Check if the route requires authentication and redirect if needed
	const pathDelocalized = deLocalizeUrl(event.url.href);

	// Redirect logged-in users away from auth pages
	if (isAuthRoute(pathDelocalized.pathname) && event.locals.authToken) {
		throw redirect(303, localizeHref('/account/', { locale: getLocale() }));
	}

	if (requiresAuth(pathDelocalized.pathname) && !event.locals.authToken) {
		// Redirect to login page with return URL as a query parameter
		throw redirect(303, `/login?returnUrl=${encodeURIComponent(pathDelocalized.pathname)}`);
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
