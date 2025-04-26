import type { PageLoad } from './$types';
import { cart } from '$stores/cart.store.svelte';
import { get } from 'svelte/store';
import { redirect } from '@sveltejs/kit';
import { localizeHref } from '$lib/paraglide/runtime';
import { browser } from '$app/environment';

export const load: PageLoad = async (/*{ params, locals }*/) => {
	if (browser) {
		const currentCart = get(cart);
		if (currentCart.items.length === 0) {
			// this will do a client-side redirect
			throw redirect(307, localizeHref('/cart/'));
		}
	}

	return {}; // no server data needed
};
