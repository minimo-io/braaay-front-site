<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import type { Wine } from '$lib/types';
	import {
		calculatePercentageDifference,
		capitalize,
		correctPrice,
		launchToast,
		toFloatPrice
	} from '$lib/utils';
	import { Heart } from '@lucide/svelte';
	import Button from '../buttons/Button.svelte';
	import { addProductToFavorites, removeProductFromFavorites } from '$lib/services/index';

	interface Props {
		wine: Wine;
		image: {
			src: string;
			alt?: string;
		};
		discount?: string;
		hideFavs?: boolean;
	}
	let { wine, image, discount, hideFavs = false }: Props = $props();

	let hasPriceDiscount = wine.regularPrice != wine.price;
	let isLoading = $state(false);
	let isFavorite = $state(wine.isFavorited);
	let justFavorited = $state(false);

	async function handleFavoriteClick() {
		isLoading = true;
		const action = isFavorite ? 'removendo' : 'adicionando';
		launchToast(capitalize(`${action} à adega...`), 'info', 3000);

		try {
			const result = isFavorite
				? await removeProductFromFavorites(wine.productId)
				: await addProductToFavorites(wine.productId);

			launchToast(result.message, result.success ? 'success' : 'error', 3000);

			if (result.success) {
				isFavorite = !isFavorite;
				justFavorited = true;
			}
		} catch (error) {
			console.error(`Error ${action} favorites:`, error);
			launchToast(`An error occurred while ${action} favorites.`, 'error', 3000);
		} finally {
			isLoading = false;
		}
	}
</script>

<div class="wine wine-transparent">
	<div class="mb-3 flex-grow">
		<a href={wine.url}>
			<img
				src={image.src}
				alt={JSON.stringify(image.alt ? image.alt : wine.title)}
				class="mx-auto rounded-lg"
			/>
		</a>
	</div>

	<!-- Favorite -->
	{#if !hideFavs}
		{#if isFavorite}
			<button onclick={handleFavoriteClick} class="absolute top-4 left-4">
				<Heart class="text-[#f82000] h-[20px]" strokeWidth="1" fill="#f82000" />
			</button>
		{:else}
			<div class="absolute top-4 left-4">
				<button onclick={handleFavoriteClick}>
					<Heart class="h-[20px]" strokeWidth="1" />
				</button>
			</div>
		{/if}
	{/if}

	{#if wine.score != '0.0'}
		<!-- <div class="absolute top-4 left-4">
			<div class="wine-stars">
				<span>★</span>
				{wine.score}
			</div>
		</div> -->
	{/if}
	<h5 class="wine-title">{wine.title}</h5>

	<!-- Price -->
	<div class="wine-price flex flex-col">
		{#if hasPriceDiscount}
			<span
				class="line-through text-gray-500 font-normal text-sm mr-2 text-grey-darkest font-roboto"
				>{wine.regularPrice}!</span
			>
		{/if}
		<!-- {wine.price} -->
		{m.currencySymbol()}
		{correctPrice(toFloatPrice(wine.price) * 0.95)}
	</div>

	<!-- <a href={wine.url} class="wine-button">VER DETALHES</a> -->
	<div class="mt-2">
		<Button title={m.details()} type="light" url={wine.url} borderDark={true} tracking="normal" />
	</div>
	{#if discount || hasPriceDiscount}
		<div class="absolute top-4 left-4 font-bold bg-black text-white px-2 py-1 text-xs rounded-lg">
			{#if discount}
				{discount} OFF
			{:else if hasPriceDiscount}
				{calculatePercentageDifference(
					wine.regularPrice,
					wine.price,
					m.currencySymbol(),
					undefined,
					1
				)}% OFF
			{/if}
		</div>
	{/if}
</div>

<!-- {#if product && product.regularPrice != product.price}
	<div
		class="absolute top-[15px] md:top-[30px] left-[30px] md:right-auto bg-red-dark text-white px-2 py-1 text-[11px] md:text-sm rounded-lg font-bold"
	>
		{calculatePercentageDifference(
			product.regularPrice,
			product.price,
			m.currencySymbol(),
			undefined,
			1
		)}% OFF
	</div>
{/if} -->
