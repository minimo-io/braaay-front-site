// src/lib/stores/urqlClient.state.svelte.ts
import { createClient, cacheExchange, fetchExchange, ssrExchange } from '@urql/core';
import { loggerExchange } from '$lib/graphql/loggerExchange';
import { PUBLIC_GRAPHQL_SERVER_PT, PUBLIC_GRAPHQL_SERVER_UY } from '$env/static/public';
import { getLocale } from '$lib/paraglide/runtime';
import { browser } from '$app/environment';

const isClient = browser;

// The `ssrExchange` must be initialized with `isClient` and `initialState`
const ssr = ssrExchange({
	isClient: isClient,
	initialState: undefined
});

export const urqlClient = $state({
	client: createClient({
		url: getLocale() === 'uy' ? PUBLIC_GRAPHQL_SERVER_UY : PUBLIC_GRAPHQL_SERVER_PT,
		exchanges: [cacheExchange, ssr, fetchExchange, loggerExchange],
		requestPolicy: 'cache-first',
		fetchOptions: () => {
			return {};
		}
	})
});
