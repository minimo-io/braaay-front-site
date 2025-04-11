// src/lib/graphql/auth.ts
import { getUrqlClient } from '$lib/stores/urqlClient.state.svelte';

import { setAuthToken, clearAuth, getAuthState } from '$lib/stores/auth.state.svelte';
import { gql } from '@urql/core';

// Login mutation
const LOGIN_MUTATION = gql`
	mutation Login($username: String!, $password: String!) {
		login(input: { username: $username, password: $password }) {
			authToken
			user {
				id
				name
				email
			}
		}
	}
`;

// Function to login
export async function login(username: string, password: string) {
	const client = getUrqlClient().client;

	try {
		const result = await client.mutation(LOGIN_MUTATION, { username, password }).toPromise();

		if (result.error) {
			throw new Error(result.error.message);
		}

		if (result.data?.login?.authToken) {
			// Store the token and user data
			setAuthToken(result.data.login.authToken, result.data.login.user);
			return { success: true, user: result.data.login.user };
		} else {
			throw new Error('Invalid login response');
		}
	} catch (error) {
		console.error('Login error:', error);
		return { success: false, error };
	}
}

// Function to logout
export function logout() {
	clearAuth();
}

// Check if user is authenticated
// export function isAuthenticated() {
// 	let authenticated = false;
// 	authState.subscribe((state) => {
// 		authenticated = !!state.token;
// 	})();
// 	return authenticated;
// }
export function isAuthenticated() {
	return !!getAuthState().token;
}
