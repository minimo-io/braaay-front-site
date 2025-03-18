// src/lib/graphql/client.ts
import { createClient, cacheExchange, fetchExchange } from '@urql/core';
import { loggerExchange } from './loggerExchange';
import { PUBLIC_GRAPHQL_SERVER } from '$env/static/public';

export const gqlClient = createClient({
	url: PUBLIC_GRAPHQL_SERVER,
	exchanges: [cacheExchange, fetchExchange, loggerExchange],
	requestPolicy: 'cache-first',
	fetchOptions: () => {
		// const token = getToken();
		// return {
		// 	headers: { authorization: token ? `Bearer ${token}` : '' }
		// };
		return {};
	}
});
