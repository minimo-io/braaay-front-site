<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { capitalize, correctPrice, formatDate, launchToast } from '$lib/utils';
	import { slide } from 'svelte/transition';
	import type { CartItem, FavoriteProduct } from '$lib/types';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { removeProductFromFavorites } from '$lib/services/favoritesService';
	import { Check, CircleCheckBig } from '@lucide/svelte';
	import { setShippingDetails } from '$stores/shippingDetails.state.svelte';
	import { browser } from '$app/environment';
	import { activateMiniCart } from '$stores/cart.store.svelte';
	import { addToCart } from '$stores/cart.store.svelte';

	interface Props {
		favorite: FavoriteProduct;
		onRemove: (productId) => void;
	}
	let { favorite, onRemove }: Props = $props();

	let currentPrice = $state(favorite.product.price);
	let hasPriceDiscount = favorite.product.regularPrice != favorite.product.price;
	let addingToCart = $state(false);
	let productUrl = $state(localizeHref(`/produto/${favorite.product.slug}/`));

	// Make stockStatus reactive by using a derived state
	let stockStatus = $derived(() => {
		if (favorite.product.stockStatus == 'OUT_OF_STOCK') {
			return `<span style="color:red;">${m.outOfStock()}</span>`;
		} else if (favorite.product.stockStatus == 'IN_STOCK') {
			return `<span>${m.inStock()}</span>`;
		}
		return '';
	});

	async function removeFromFavorite(productId: number) {
		launchToast(capitalize(m.removing()), 'info');
		const result = await removeProductFromFavorites(productId);

		if (result.success) {
			onRemove(favorite.product.id);
		}
		launchToast(result.message, result.success ? 'success' : 'error', 3000);
	}

	const item: CartItem = {
		id: favorite.product.id,
		sku: favorite.product.sku,
		uri: favorite.product.uri,
		name: favorite.product.title,
		priceString: favorite.product.price,
		price: favorite.product.floatPrice,
		regularPrice: favorite.product.regularPrice,
		quantity: 1,
		maxQuantity: favorite.product.stockQuantity,
		image: favorite.product.image
	};

	// Optionally, you can provide a wrapper function in case you want to extend the behavior.
	const handleAddToCart = async () => {
		addingToCart = true;
		// empty previous shippings if any
		setShippingDetails([]);
		addToCart(item, () => {
			if (browser) {
				// toast.success(m.addingToCartOk(), {
				// 	closable: true
				// });
			}
		});
		activateMiniCart();
		addingToCart = false;
	};
</script>

<div
	class="flex flex-col md:flex-row justify-between align-middle bg-white p-5 my-2 border border-grey-lighter rounded-xl"
>
	<div class="flex w-full md:w-[50%] md:pr-10">
		<!-- Image -->
		<a href={productUrl} class="mr-2">
			<img
				src={favorite.product.image.url}
				alt={favorite.product.image.altText}
				class="w-16 mr-4"
			/>
		</a>

		<!-- Data -->
		<div class="self-center">
			<p class="font-medium font-roboto leading-5">
				<a href={productUrl}>{favorite.product.title}</a>
			</p>
			<!-- <p class="text-xs text-grey-medium mt-1">{favorite.product.sku}</p> -->
			<div class="flex items-center text-xs text-grey-medium mt-1">
				<CircleCheckBig class="h-3" />
				<span class="-left-1 relative capitalize">
					{m.saved()}: {formatDate(favorite.addedDate)}
				</span>
			</div>
		</div>
	</div>

	<div class="flex w-[100px] flex-col self-center justify-center pr-0 md:pr-3">
		<div class="relative">
			<!-- Regular price -->
			{#if hasPriceDiscount}
				<div
					class="line-through text-gray-500 text-right font-normal text-sm mr-2 text-grey-darkest font-roboto"
				>
					{favorite.product.regularPrice}
				</div>
			{/if}
			<!-- Active price -->
			<div class="z-50 font-semibold text-center md:text-right text-lg md:text-base">
				{currentPrice}
			</div>
		</div>
		<!-- Buttons -->
		<div class="text-center md:text-right">
			{#if favorite.product.stockStatus == 'IN_STOCK'}
				<!-- Add to cart -->
				<button
					onclick={() => handleAddToCart()}
					class="px-3 py-[5px] text-white rounded-lg uppercase font-roboto text-xs my-1 tracking-[2px] text-center md:w-auto"
					style="background-color: var(--bry-current-color)"
				>
					{#if addingToCart}
						{m.addingToCart()}
					{:else}
						{m.add()}
					{/if}
				</button>
			{:else}
				<span class="text-xs whitespace-nowrap">
					{@html stockStatus()}
				</span>
			{/if}
			<!-- Remove from favorites -->
			<button
				onclick={() => removeFromFavorite(favorite.product.id)}
				class="z-10 text-grey-medium font-normal text-xs text-center md:text-right mt-4 md:mt-[2px]"
			>
				{m.remove()}
			</button>
		</div>
	</div>
</div>
