<script lang="ts">
	import { page } from '$app/state';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { loaderActivated } from '$stores/loaderStore.state.svelte';
	import { onMount } from 'svelte';

	const routeId = page.route.id;
	const errorCode = $derived(page.url.searchParams.get('code'));
	onMount(() => {
		loaderActivated.active = false;
	});
</script>

<div class="text-center my-10">
	ERROR: {routeId}
	<br />
	CODE: {errorCode}
	<br />
	<a class="font-bold mt-5" href={localizeHref('/checkout/')}>Voltar ao checkout</a>
</div>
