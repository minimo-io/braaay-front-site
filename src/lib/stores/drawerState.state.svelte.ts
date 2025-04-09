// src/lib/stores/drawerState.state.svelte.ts
export const drawerState = $state({ active: false, currentSubmenu: null, currentName: null });

export function toggleDrawer() {
	drawerState.active = !drawerState.active;
	drawerState.currentSubmenu = null;
}

export function closeDrawer() {
	drawerState.active = false;
}

export function openSubmenu(menuId, menuName) {
	drawerState.currentSubmenu = menuId;
	drawerState.currentName = menuName || 'Menu';
}

export function goBackToMainMenu() {
	drawerState.currentSubmenu = null;
	drawerState.currentName = null;
}
