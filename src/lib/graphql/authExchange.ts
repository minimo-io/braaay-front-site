// src/lib/graphql/authExchange.ts

import { pipe, map } from 'wonka';
import { makeOperation, type Exchange } from '@urql/core';

export const createAuthExchange = (getAuthToken): Exchange => {
	return ({ forward }) =>
		(ops$) => {
			return pipe(
				ops$,
				map((operation) => {
					const token = getAuthToken();
					if (!token) return operation;

					// grab existing fetchOptions (fn or object)
					const fetchOptions =
						typeof operation.context.fetchOptions === 'function'
							? operation.context.fetchOptions()
							: operation.context.fetchOptions || {};

					// build a brand‑new operation with the auth header
					return makeOperation(operation.kind, operation, {
						...operation.context,
						fetchOptions: {
							...fetchOptions,
							headers: {
								...fetchOptions.headers,
								Authorization: `Bearer ${token}`
							}
						}
					});
				}),
				forward
			);
		};
};

// THIS IS FROM CLAUDE

// import { makeOperation, type Exchange, type Operation } from '@urql/core';
// import { pipe, tap } from 'wonka';

// // Define token getter type
// export type GetAuthToken = () => string | null;

// // Create an auth exchange factory
// export const createAuthExchange = (getAuthToken: GetAuthToken): Exchange => {
// 	return ({ forward }) =>
// 		(ops$) => {
// 			return pipe(
// 				ops$,
// 				tap((operation: Operation) => {
// 					const token = getAuthToken();

// 					if (token) {
// 						const fetchOptions =
// 							typeof operation.context.fetchOptions === 'function'
// 								? operation.context.fetchOptions()
// 								: operation.context.fetchOptions || {};

// 						operation = makeOperation(operation.kind, operation, {
// 							...operation.context,
// 							fetchOptions: {
// 								...fetchOptions,
// 								headers: {
// 									...fetchOptions.headers,
// 									Authorization: `Bearer ${token}`
// 								}
// 							}
// 						});
// 					}
// 				}),
// 				forward
// 			);
// 		};
// };
