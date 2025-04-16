// src/lib/graphql/auth.ts
import { getUrqlClient } from '$lib/stores/urqlClient.state.svelte';
import type { LoginResult } from '$lib/types';
import { setAuthToken, clearAuth, getAuthState } from '$lib/stores/auth.state.svelte';
import type { RequestEvent } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { gql } from '@urql/core';
import he from 'he';

export const protectedRoutes = ['/account', '/checkout', '/thank-you'];
export const authRoutes = ['/login', '/signup'];

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

// Helper function to check if a path requires authentication
export function requiresAuth(path: string): boolean {
	// Add your protected routes here
	return protectedRoutes.some((route) => path.startsWith(route));
}

// Helper function to check if a path is for authentication (and should redirect if already logged in)
export function isAuthRoute(path: string): boolean {
	return authRoutes.some((route) => path.startsWith(route));
}
// to protect api routes if needed
// Example
// src/routes/api/protected-data/+server.ts
// import { json } from '@sveltejs/kit';
// import { ensureAuth } from '$lib/server/auth';

// export async function GET(event) {
//   const user = ensureAuth(event);

//   // Your protected route logic here
//   return json({
//     message: 'This is protected data',
//     user: user
//   });
// }
export function ensureAuth(event: RequestEvent) {
	if (!event.locals.authToken) {
		throw error(401, 'Unauthorized');
	}
	return event.locals.user;
}

// Function to login
export async function login(username: string, password: string): Promise<LoginResult> {
	const client = getUrqlClient().client;

	try {
		const result = await client.mutation(LOGIN_MUTATION, { username, password }).toPromise();

		if (result.data?.login?.authToken) {
			// Store the token and user data
			setAuthToken(result.data.login.authToken, result.data.login.user);
			return { success: true, user: result.data.login.user, message: 'OK' };
		} else {
			// console.log('Invalid login response');
			let errorText = '';
			if (result.error) {
				errorText = `${result.error.message.replaceAll('[GraphQL]', '').trim()}`;
				errorText = he.decode(errorText).replace(/<[^>]*>/g, '');
			} else {
				errorText = `Login error`;
			}
			return { success: false, message: `${errorText}`, user: null };
		}
	} catch (error) {
		console.error('Login error:', error);
		return { success: false, message: `${error}`, user: null };
	}
}

// Function to logout
export function logout() {
	clearAuth();
}

// Check if user is authenticated
export function isAuthenticated() {
	return !!getAuthState().token;
}
