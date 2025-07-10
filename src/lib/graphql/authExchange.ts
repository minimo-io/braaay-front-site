// src/lib/graphql/authExchange.ts

import { pipe, map } from 'wonka';
import { makeOperation, type Exchange } from '@urql/core';

export const createAuthExchange = (getAuthToken): Exchange => {
	return ({ forward }) =>
		(ops$) => {
			return pipe(
				ops$,
				map((operation) => {
					// const token = getAuthToken();

					// console.log('AUTH_TOKEN_INSIDE_PIPE', operation.context.context?.authToken);
					// const token = getAuthToken(operation.context.context?.authToken);
					const token = getAuthToken(operation.context);

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
