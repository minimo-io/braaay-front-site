// src/stores/drawer.store.svelte.ts
export const filterDrawerState = $state({
	isOpen: false
});

export function openDrawer() {
	filterDrawerState.isOpen = true;
}

export function closeDrawer() {
	filterDrawerState.isOpen = false;
}

export function toggleDrawer() {
	filterDrawerState.isOpen = !filterDrawerState.isOpen;
}
