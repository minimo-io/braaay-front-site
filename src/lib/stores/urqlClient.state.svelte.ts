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

export const urqlClientUy = $state({
	client: createClient({
		url: PUBLIC_GRAPHQL_SERVER_UY,
		exchanges: [cacheExchange, authExchange, fetchExchange, loggerExchange],
		requestPolicy: getAuthState().token ? 'network-only' : 'cache-first',
		fetchOptions: () => {
			return {};
		}
	})
});

export const urqlClientPt = $state({
	client: createClient({
		url: PUBLIC_GRAPHQL_SERVER_PT,
		exchanges: [cacheExchange, authExchange, fetchExchange, loggerExchange],
		requestPolicy: getAuthState().token ? 'network-only' : 'cache-first',

		fetchOptions: () => {
			return {};
		}
	})
});

export function getUrqlClient() {
	const locale = getLocale();
	if (locale == 'uy') {
		return urqlClientUy;
	} else if (locale == 'pt') {
		return urqlClientPt;
	} else {
		return urqlClientPt;
	}
}

// Create auth exchange that uses our existing auth state
// const createAuthExchange = () => {
// 	return ({ forward }) =>
// 		(ops$) => {
// 			return {
// 				subscribe: (observer) => {
// 					return ops$.subscribe({
// 						next: (operation) => {
// 							// Get current auth token from our existing auth state
// 							const { token } = getAuthState();

// 							// Add auth header if token exists
// 							if (token) {
// 								const fetchOptions =
// 									typeof operation.context.fetchOptions === 'function'
// 										? operation.context.fetchOptions()
// 										: operation.context.fetchOptions || {};

// 								operation.context.fetchOptions = {
// 									...fetchOptions,
// 									headers: {
// 										...fetchOptions.headers,
// 										Authorization: `Bearer ${token}`
// 									}
// 								};
// 							}

// 							forward(operation).subscribe(observer);
// 						},
// 						error: (err) => observer.error(err),
// 						complete: () => observer.complete()
// 					});
// 				}
// 			};
// 		};
// };

// import { createClient, cacheExchange, fetchExchange } from '@urql/core';
// // import {  ssrExchange } from '@urql/core';
// import { loggerExchange } from '$lib/graphql/loggerExchange';
// import { PUBLIC_GRAPHQL_SERVER_PT, PUBLIC_GRAPHQL_SERVER_UY } from '$env/static/public';
// import { getLocale } from '$lib/paraglide/runtime';
// // import { browser } from '$app/environment';

// // const isClient = browser;

// // The `ssrExchange` must be initialized with `isClient` and `initialState`
// // const ssr = ssrExchange({
// // 	isClient: isClient,
// // 	initialState: undefined
// // });

// export const urqlClientUy = $state({
// 	client: createClient({
// 		url: PUBLIC_GRAPHQL_SERVER_UY,
// 		exchanges: [cacheExchange, fetchExchange, loggerExchange],
// 		requestPolicy: 'cache-first',
// 		fetchOptions: () => {
// 			return {};
// 		}
// 	})
// });

// export const urqlClientPt = $state({
// 	client: createClient({
// 		url: PUBLIC_GRAPHQL_SERVER_PT,
// 		exchanges: [cacheExchange, fetchExchange, loggerExchange],
// 		requestPolicy: 'cache-first',
// 		// requestPolicy: 'network-only',
// 		fetchOptions: () => {
// 			return {};
// 		}
// 	})
// });

// export function getUrqlClient() {
// 	const locale = getLocale();
// 	if (locale == 'uy') {
// 		return urqlClientUy;
// 	} else if (locale == 'pt') {
// 		return urqlClientPt;
// 	} else {
// 		return urqlClientPt;
// 	}
// }
