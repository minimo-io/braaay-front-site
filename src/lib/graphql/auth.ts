// src/lib/graphql/auth.ts
import { getUrqlClient } from '$lib/stores/urqlClient.state.svelte';
import type { LoginResult } from '$lib/types';
import { setAuthToken, clearAuth, getAuthState } from '$lib/stores/auth.state.svelte';
import type { RequestEvent } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import he from 'he';
import { LOGIN_MUTATION, SIGNUP_MUTATION } from './mutations';
// import { EMPTY_CART_MUTATION } from './mutations';
import { emptyCart } from '$stores/cart.store.svelte';

export const protectedRoutes = ['/account/'];
export const authRoutes = ['/login/', '/sign-up/'];

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
export async function logout() {
	try {
		// await getUrqlClient().client.mutation(EMPTY_CART_MUTATION, {}).toPromise();
		emptyCart();
	} catch (err) {
		console.warn('Failed to log out via GraphQL:', err);
	}
	clearAuth();
}

// Function to signup at Braaay
export async function signup({
	username,
	email,
	password,
	firstName,
	lastName,
	telephone,
	cpf,
	birthDate
}: {
	username: string;
	email: string;
	password: string;
	firstName?: string;
	lastName?: string;
	telephone?: string;
	cpf?: string;
	birthDate?: string;
}): Promise<{
	success: boolean;
	message: string;
	customer: any | null;
}> {
	const client = getUrqlClient().client;

	try {
		const result = await client
			.mutation(SIGNUP_MUTATION, {
				username,
				email,
				password,
				firstName,
				lastName,
				telephone,
				cpf,
				birthDate
			})
			.toPromise();

		if (result.data?.registerNewCustomer?.customer?.id) {
			return {
				success: true,
				customer: result.data.registerNewCustomer.customer,
				message: result.data.registerNewCustomer.message || 'Conta criada com sucesso!'
			};
		} else {
			let errorText = '';
			if (result.error) {
				errorText = he
					.decode(result.error.message.replaceAll('[GraphQL]', '').trim())
					.replace(/<[^>]*>/g, '');
			} else {
				errorText = 'Erro ao criar conta.';
			}
			return { success: false, message: errorText, customer: null };
		}
	} catch (error) {
		console.error('Signup error:', error);
		return { success: false, message: String(error), customer: null };
	}
}

// Check if user is authenticated
export function isAuthenticated() {
	return !!getAuthState().token;
}
