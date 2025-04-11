// src/lib/stores/auth.state.svelte.ts
import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import Cookies from 'js-cookie';

// Define the type for auth state
interface AuthState {
	token: string | null;
	user: any | null;
}

// Create a store for auth state that's backed by cookies
const createAuthStore = () => {
	// Initialize store from cookie if in browser
	const initialValue: AuthState = { token: null, user: null };

	if (browser) {
		const token = Cookies.get('auth_token');
		const userStr = Cookies.get('auth_user');

		if (token) {
			initialValue.token = token; // Now TypeScript knows token can be string
			try {
				initialValue.user = userStr ? JSON.parse(userStr) : null;
			} catch (e) {
				console.error(`Failed to parse user data from cookie: ${e}`);
			}
		}
	}

	const { subscribe, set } = writable<AuthState>(initialValue);

	return {
		subscribe,
		setAuth: (token: string, user: any) => {
			if (browser) {
				// Set cookies with appropriate options
				Cookies.set('auth_token', token, {
					expires: 7,
					path: '/',
					sameSite: 'strict',
					secure: window.location.protocol === 'https:'
				});

				if (user) {
					Cookies.set('auth_user', JSON.stringify(user), {
						expires: 7,
						path: '/',
						sameSite: 'strict',
						secure: window.location.protocol === 'https:'
					});
				}
			}

			set({ token, user });
		},
		clearAuth: () => {
			if (browser) {
				Cookies.remove('auth_token', { path: '/' });
				Cookies.remove('auth_user', { path: '/' });
			}

			set({ token: null, user: null });
		}
	};
};

export const authState = createAuthStore();

// Helper function with fixed typing
export function getAuthState(): { token: string | null } {
	let state = { token: null as string | null };
	authState.subscribe((value) => {
		state = { token: value.token };
	})();
	return state;
}

export function setAuthToken(token: string, user: any) {
	authState.setAuth(token, user);
}

export function clearAuth() {
	authState.clearAuth();
}
