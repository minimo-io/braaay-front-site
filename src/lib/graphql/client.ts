// src/lib/graphql/client.ts
import { createClient, cacheExchange, fetchExchange } from '@urql/core';
import { loggerExchange } from './loggerExchange';
import { PUBLIC_GRAPHQL_SERVER_PT, PUBLIC_GRAPHQL_SERVER_UY } from '$env/static/public';
import { getLocale } from '$lib/paraglide/runtime';

/**
 * Creates a new GraphQL client using the current locale.
 */
export function getGqlClient() {
	// On the server, getLocale() returns the correct locale ("uy" for /uy URLs)
	const locale = getLocale();
	const endpoint = locale === 'uy' ? PUBLIC_GRAPHQL_SERVER_UY : PUBLIC_GRAPHQL_SERVER_PT;
	console.log('Creating gqlClient with locale:', locale, 'endpoint:', endpoint);
	return createClient({
		url: endpoint,
		exchanges: [cacheExchange, fetchExchange, loggerExchange],
		requestPolicy: 'cache-first',
		fetchOptions: () => {
			return {};
		}
	});
}

// /**
//  * Returns the correct GraphQL endpoint based on the current locale.
//  * In this example, if the locale is "uy", we return the Uruguay endpoint.
//  */
// function getGraphQLEndpoint(): string {
// 	const locale = getLocale();
// 	console.log('MY_LOCALE_FROM_CLIENT', locale);
// 	const finalEndpoint = locale === 'uy' ? PUBLIC_GRAPHQL_SERVER_UY : PUBLIC_GRAPHQL_SERVER_PT;
// 	console.log('FINAL_ENDPOINT', finalEndpoint);
// 	return finalEndpoint;
// }

// export const gqlClient = createClient({
// 	url: getGraphQLEndpoint(),
// 	exchanges: [cacheExchange, fetchExchange, loggerExchange],
// 	requestPolicy: 'cache-first',
// 	fetchOptions: () => {
// 		// const token = getToken();
// 		// return {
// 		// 	headers: { authorization: token ? `Bearer ${token}` : '' }
// 		// };
// 		return {};
// 	}
// });
