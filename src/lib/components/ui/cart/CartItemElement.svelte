<!-- src/lib/components/ui/cart/CartItemElement.svelte -->
<script lang="ts">
	import { Minus, Plus } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages';
	import { slide } from 'svelte/transition';
	import type { CartItem } from '$lib/types/cart.types';
	import { removeFromCart, adjustQuantity } from '$stores/cart.store.svelte';
	import { correctPrice } from '$lib/utils';

	interface Props {
		cartItem: CartItem;
	}
	let { cartItem }: Props = $props();

	let currentPrice = $derived(cartItem.price * cartItem.quantity);
</script>

<div class="flex flex-col md:flex-row justify-between align-middle">
	<div class="flex w-full md:w-[50%] md:pr-10">
		<!-- Image -->
		<a href={cartItem.uri}>
			<img src={cartItem.image.url} alt={cartItem.image.altText} class="w-16 mr-4" />
		</a>

		<!-- Data -->
		<div class="self-center">
			<p class="font-medium font-roboto leading-5"><a href={cartItem.uri}>{cartItem.name}</a></p>
			<p class="text-xs text-grey-medium mt-1">{cartItem.sku}</p>
			<div class="flex mt-1 font-light text-xs items-center">
				<label class="flex items-center font-roboto">
					<input class="mr-1 !accent-black" type="checkbox" />
					Para presente
				</label>
			</div>
		</div>
	</div>

	<div class="bry-cart-item-quantity">
		<!-- Minus Button -->
		<button
			onclick={() => adjustQuantity(cartItem.id, -1)}
			class="flex items-center justify-center w-7 h-7 rounded-full bg-sun text-white font-bold"
		>
			<Minus class="h-4 pl-1" />
		</button>

		<!-- Quantity Input -->
		<input
			disabled
			type="tel"
			value={cartItem.quantity}
			class="w-20 border p-4 border-grey-lighter rounded-full h-7 text-center text-lg font-semibold bg-transparent focus:outline-none"
			min="1"
		/>

		<!-- Plus Button -->
		<button
			onclick={() => adjustQuantity(cartItem.id, 1)}
			class="flex items-center justify-center w-7 h-7 rounded-full bg-sun text-white font-bold"
			aria-label="Add"
		>
			<Plus class="h-4 pl-1" />
		</button>
	</div>

	<div class="flex w-[100px] flex-col self-center justify-center pr-0 md:pr-3">
		<div class="relative h-[25px] overflow-hidden">
			{#key currentPrice}
				<p
					class="font-semibold text-center md:text-right text-lg md:text-base"
					transition:slide={{ duration: 150, axis: 'y' }}
				>
					{m.currencySymbol()}{correctPrice(currentPrice)}
				</p>
			{/key}
		</div>
		<button
			onclick={() => removeFromCart(cartItem.id)}
			class="text-grey-medium font-normal text-xs text-center md:text-right mt-4 md:mt-[2px]"
		>
			remover
		</button>
	</div>
</div>
