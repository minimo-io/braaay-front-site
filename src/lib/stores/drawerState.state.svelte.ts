export const drawerState = $state({ active: false });
export function toggleDrawer() {
	drawerState.active = !drawerState.active;
}
