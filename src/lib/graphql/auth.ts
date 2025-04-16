// src/lib/graphql/auth.ts
import { getUrqlClient } from '$lib/stores/urqlClient.state.svelte';
import type { LoginResult } from '$lib/types';
import { setAuthToken, clearAuth, getAuthState } from '$lib/stores/auth.state.svelte';
import { gql } from '@urql/core';
import he from 'he';

export const protectedRoutes = ['/account', '/cart', '/club', '/checkout'];
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
