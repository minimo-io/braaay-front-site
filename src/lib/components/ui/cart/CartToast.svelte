<script>
	import { slide } from 'svelte/transition';
	import { m } from '$lib/paraglide/messages';
	import { CircleCheckBig } from '@lucide/svelte';
	import Button from '../buttons/Button.svelte';
	import { miniCart } from '$stores/cart.store.svelte';
	import { goto } from '$app/navigation';
	import { localizeHref } from '$lib/paraglide/runtime';
	// let dialog = $state(); // HTMLDialogElement

	let { showCartToast = $bindable() } = $props();
</script>

{#if showCartToast}
	<div
		transition:slide={{ duration: 150, axis: 'y' }}
		class="p-5 bottom-0 left-1/2 w-[90%] md:w-[400px] transform -translate-x-1/2 z-[101] fixed bg-grey-lighter border border-grey-lighter shadow-lg rounded-t-xl text-sm text-center"
	>
		<div class="flex justify-center font-bold uppercase text-base items-center gap-1">
			<CircleCheckBig class="h-6 aspect-1 text-green-dark" />
			{m.addingToCartOk()}
		</div>
		<!-- <div class="h-[1px] border-t border-t-grey-lighter mt-4"></div> -->
		<div class="flex flex-col gap-2 mt-2 w-4/5 mx-auto">
			<Button
				type="blue"
				size="sm"
				title="Ver&nbsp;carrinho"
				customPx="w-full"
				action={() => {
					miniCart.active = false;
					goto(localizeHref('/cart/'));
				}}
			/>
			<Button
				type="light"
				size="xs"
				title="Continuar&nbsp;comprando"
				customPx="w-full"
				action={() => {
					miniCart.active = false;
				}}
			/>
		</div>
	</div>
{/if}
