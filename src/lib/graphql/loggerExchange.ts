// src/lib/graphql/loggerExchange.ts
import { pipe, tap } from 'wonka';
import type { Exchange, Operation, OperationResult } from '@urql/core';
// import { dev } from '$app/environment';

export const loggerExchange: Exchange =
	({ forward }) =>
	(ops$) => {
		return pipe(
			ops$,
			tap((operation: Operation) => {
				// if (dev) {
				console.log('[GraphQL Request]', operation.variables);
				// }
			}),
			forward,
			tap((result: OperationResult) => {
				// if (dev) {
				console.log('[GraphQL Response]', result);
				// }
			})
		);
	};
