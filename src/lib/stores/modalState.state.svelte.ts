// src/lib/stores/modalState.state.svelte.ts

// For modals we will use a reactive variable
// instead of a store, because its quite simpler
// and Svelte 5 runes have universal reactivity
// as long as we place them inside a .svelte.ts file.

import type { Component } from 'svelte';

// eslint-disable-next-line prefer-const
export let modalState = $state({
	current: false,
	header: null as string | null,
	content: null as Component | null
});

interface OpenModalOptions {
	header?: string | null;
	content: Component;
	// Add an optional 'props' field to the openModal function's options
}

export function openModal({ header, content }: OpenModalOptions) {
	modalState.header = header || null;
	modalState.content = content;

	modalState.current = true;
}

export function closeModal() {
	modalState.current = false;
}
