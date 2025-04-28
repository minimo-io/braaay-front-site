// src/lib/stores/drawerState.state.svelte.ts
import { type ShippingRate } from '$lib/types/cart.types';

export const shippingDetails = $state<{ details: ShippingRate[] }>({
	details: []
});

export const setShippingDetails = (details: ShippingRate[]) => {
	shippingDetails.details = details;
};
