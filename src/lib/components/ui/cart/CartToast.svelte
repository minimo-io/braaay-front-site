<script>
	let { showCartToast = $bindable() } = $props();
	import { m } from '$lib/paraglide/messages';
	import Button from '../buttons/Button.svelte';
	let dialog = $state(); // HTMLDialogElement

	// $effect(() => {
	// 	if (showCartToast) {
	// 		dialog.showModal();
	// 		// console.log('Showing toast from the toast...');
	// 	} else {
	// 		dialog.close();
	// 		// console.log('NOT Showing toast from the toast...');
	// 	}
	// });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<!-- <dialog bind:this={dialog} class="p-10"> -->
{#if showCartToast}
	<div
		class="p-5 bottom-0 left-1/2 w-1/2 md:w-[300px] transform -translate-x-1/2 z-50 fixed bg-white border border-grey-lighter shadow-lg rounded-t-xl text-sm text-center"
	>
		<div>✅&nbsp;{m.addingToCartOk()}</div>
		<div class="h-[1px] border-t border-t-grey-lighter mt-4"></div>
		<div class="flex">
			<Button type="blue" size="md" title="Continuar comprando" />
			<Button type="blue" size="md" title="Ir ao carrinho" />
		</div>
	</div>
{/if}
<!-- </dialog> -->
