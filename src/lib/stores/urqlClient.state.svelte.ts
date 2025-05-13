// src/lib/stores/urqlClient.state.svelte.ts
import { createClient, cacheExchange, fetchExchange } from '@urql/core';
import { loggerExchange } from '$lib/graphql/loggerExchange';
import { PUBLIC_GRAPHQL_SERVER_PT, PUBLIC_GRAPHQL_SERVER_UY } from '$env/static/public';
import { getLocale } from '$lib/paraglide/runtime';
import { browser } from '$app/environment';

import { createAuthExchange } from '$lib/graphql/authExchange';
import { getAuthState } from '$lib/stores/auth.state.svelte';

// Function to get auth token that works in both client and server contexts
const getAuthToken = () => {
	// In browser, get from our store or from cookies
	// In server context, this will return null which is fine
	// return getAuthState().token; // this was done before

	if (browser) {
		// In browser, get from our store
		return getAuthState().token;
	} else {
		// In server, you'd need to get from the request context
		// This would be handled in your +page.server.ts or +layout.server.ts files
		// For now, return null on server
		return null;
	}
};

// Create the auth exchange instance
const authExchange = createAuthExchange(getAuthToken);

// fetchOptions: () => {
// 	const token = getAuthState().token;
// 	return {
// 	  headers: token ? { Authorization: `Bearer ${token}` } : {}
// 	};
//   },

export const urqlClientUyLoggedOut = $state({
	client: createClient({
		url: PUBLIC_GRAPHQL_SERVER_UY,
		exchanges: [cacheExchange, fetchExchange, loggerExchange],
		requestPolicy: 'cache-first',
		// requestPolicy: 'network-only',
		fetchOptions: () => {
			return {};
		}
	})
});
export const urqlClientUyLoggedIn = $state({
	client: createClient({
		url: PUBLIC_GRAPHQL_SERVER_UY,
		exchanges: [cacheExchange, authExchange, fetchExchange, loggerExchange],
		requestPolicy: 'network-only',
		fetchOptions: () => {
			return {};
		}
	})
});

export const urqlClientPtLoggedOut = $state({
	client: createClient({
		url: PUBLIC_GRAPHQL_SERVER_PT,
		exchanges: [cacheExchange, fetchExchange, loggerExchange],
		requestPolicy: 'cache-first',
		// requestPolicy: 'network-only',
		fetchOptions: {
			// credentials: 'include'
		}
	})
});
export const urqlClientPtLoggedIn = $state({
	client: createClient({
		url: PUBLIC_GRAPHQL_SERVER_PT,
		exchanges: [cacheExchange, authExchange, fetchExchange, loggerExchange],
		requestPolicy: 'network-only',
		fetchOptions: () => {
			return {};
		}
	})
});

/**
 * We use different clients for logged-in (network only) vs logged-out (cache-first) users.
 * @param authToken is for when we check session from the server Locals
 */
export function getUrqlClient(authToken?: string, forceLoggedOut?: boolean) {
	const locale = getLocale();
	const token = getAuthState().token;

	if (locale == 'uy') {
		if (forceLoggedOut || !(token || authToken)) {
			// console.log('Logged out UY');
			return urqlClientUyLoggedOut;
		}
		// console.log('Logged in UY');
		return urqlClientUyLoggedIn;
	} else {
		if (forceLoggedOut || !(token || authToken)) {
			console.log('Forced Loogged out PT');
			return urqlClientPtLoggedOut;
		}
		console.log('Logged in PT');
		return urqlClientPtLoggedIn;
	}
}
