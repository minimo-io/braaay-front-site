// src/lib/stores/urqlClient.state.svelte.ts
import { createClient, cacheExchange, fetchExchange } from '@urql/core';
// import {  ssrExchange } from '@urql/core';
import { loggerExchange } from '$lib/graphql/loggerExchange';
import { PUBLIC_GRAPHQL_SERVER_PT, PUBLIC_GRAPHQL_SERVER_UY } from '$env/static/public';
import { getLocale } from '$lib/paraglide/runtime';
// import { browser } from '$app/environment';

// const isClient = browser;

// The `ssrExchange` must be initialized with `isClient` and `initialState`
// const ssr = ssrExchange({
// 	isClient: isClient,
// 	initialState: undefined
// });

export const urqlClientUy = $state({
	client: createClient({
		url: PUBLIC_GRAPHQL_SERVER_UY,
		exchanges: [cacheExchange, fetchExchange, loggerExchange],
		requestPolicy: 'cache-first',
		fetchOptions: () => {
			return {};
		}
	})
});

export const urqlClientPt = $state({
	client: createClient({
		url: PUBLIC_GRAPHQL_SERVER_PT,
		exchanges: [cacheExchange, fetchExchange, loggerExchange],
		requestPolicy: 'cache-first',
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
