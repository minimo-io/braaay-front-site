// eslint-disable-next-line prefer-const
export let loaderActivated = $state({ active: false });

export function toggleLoader() {
	loaderActivated.active = !loaderActivated.active;
}
