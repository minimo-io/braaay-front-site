// src/lib/urqlClient.ts
import { createClient } from '@urql/svelte';
import { cacheExchange, fetchExchange } from '@urql/core';

export const client = createClient({
	url: 'https://braaay.com/graphql',
	exchanges: [cacheExchange, fetchExchange]
});
