// src/lib/stores/drawerState.state.svelte.ts
export const drawerState = $state({ active: false, currentSubmenu: null });

export function toggleDrawer() {
	drawerState.active = !drawerState.active;
	drawerState.currentSubmenu = null;
}

export function closeDrawer() {
	drawerState.active = false;
}

export function openSubmenu(menuId) {
	drawerState.currentSubmenu = menuId;
}

export function goBackToMainMenu() {
	drawerState.currentSubmenu = null;
}
