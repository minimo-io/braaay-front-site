<script lang="ts">
	import { AppConfig } from '$config';
	import {
		addProductToFavorites,
		removeProductFromFavorites
	} from '$lib/services/favoritesService';
	import { m } from '$lib/paraglide/messages';
	import type { PageCustomColors, ImageGeneral, ProductCategory, Product } from '$lib/types';
	import { calculatePercentageDifference, capitalize, launchToast } from '$lib/utils';
	import { Heart, Share2, Youtube } from '@lucide/svelte';

	interface Props {
		colors?: PageCustomColors;

		image: ImageGeneral;
		productCategories?: ProductCategory[];
		product?: Product;
	}
	let { colors, image, productCategories, product }: Props = $props();

	let hasPriceDiscount = product && product.regularPrice != product.price;
	let isLoading = $state(false);
	let isFavorite = $state(product?.isFavorited);

	// For kits
	const isFullImage = productCategories?.some((category) =>
		AppConfig.kitsImageCategories.includes(category.slug)
	);

	function shareContent() {
		if (navigator.share) {
			navigator
				.share({
					title: 'Check this out!',
					text: 'This is some cool content I wanted to share with you.',
					url: window.location.href
				})
				.then(() => console.log('Successful share'))
				.catch((error) => console.log('Error sharing', error));
		} else {
			alert('Sharing not supported on this browser.');
		}
	}

	async function handleFavoriteClick() {
		if (!product) return;

		isLoading = true;
		const action = isFavorite ? 'removendo' : 'adicionando';
		launchToast(capitalize(`${action} à adega...`), 'info', 3000);

		try {
			const result = isFavorite
				? await removeProductFromFavorites(product.id)
				: await addProductToFavorites(product.id);

			launchToast(result.message, result.success ? 'success' : 'error');

			if (result.success) {
				isFavorite = !isFavorite;
			}
		} catch (error) {
			console.error(`Error ${action} favorites:`, error);
			launchToast(`An error occurred while ${action} favorites.`, 'error');
		} finally {
			isLoading = false;
		}
	}
</script>

<div
	class={['flex items-center relative', isFullImage ? 'p-0' : 'p-8']}
	style:--bry-current-gradient-start={colors?.gradientStart}
	style:--bry-current-gradient-end={colors?.gradientEnd}
	style="
                background: linear-gradient(
                    to bottom,
                    var(--bry-current-gradient-start),
                    var(--bry-current-gradient-end)
                );
            "
>
	<!-- <div class="absolute top-[42px] md:top-[58px] left-[35px]">
		<div class="wine-stars text-[15px] md:text-[15px]">
			<span>★</span>
			4.5
		</div>
	</div> -->

	<!-- Offer tag -->
	{#if hasPriceDiscount}
		<div
			class="absolute top-[15px] md:top-[30px] left-[30px] md:right-auto bg-red-dark text-white px-2 py-1 text-[11px] md:text-sm rounded-lg font-bold"
		>
			<!-- {m.onSale()} -->
			{calculatePercentageDifference(
				product!.regularPrice,
				product!.price,
				m.currencySymbol(),
				undefined,
				1
			)}% OFF
		</div>
	{/if}

	<!-- Actions -->
	<div
		class={[
			'md:block absolute -bottom-[1px] md:bottom-auto md:top-[65px] right-[10px] md:right-auto md:left-[31px] bg-grey-background p-2 px-2 rounded-t-lg md:rounded-b-lg',
			!hasPriceDiscount && 'md:!top-[30px]'
		]}
	>
		<div class="flex gap-0 items-center">
			<!-- Share -->
			<div class="pr-2 flex border-r border-grey-medium">
				<button onclick={shareContent}><Share2 class="h-[20px]" /> </button>
			</div>
			<!-- Favorites -->
			<div class="pl-2 flex">
				<button onclick={handleFavoriteClick} disabled={isLoading}>
					<div class="flex items-center">
						<Heart
							class={['h-[20px]', isFavorite && 'text-[#f82000]']}
							fill={isFavorite ? '#F82000' : 'none'}
						/>
						<span class="text-[13px] text-blue">
							{isFavorite ? 'Favorito' : 'Adicionar'}
						</span>
					</div>
				</button>
			</div>
		</div>
	</div>

	<!-- Youtube video -->
	{#if product?.pageCustomColors.youtubeVideo}
		<div
			class={[
				'md:block absolute -bottom-[1px] md:bottom-auto md:top-[108px] left-[30px] md:right-auto md:left-[31px] bg-grey-background px-2 rounded-t-lg md:rounded-b-lg h-[36px]',
				!hasPriceDiscount && 'md:!top-[71px]'
			]}
		>
			<div class=" items-center self-center relative mt-[6px]">
				<a
					href={product?.pageCustomColors.youtubeVideo}
					target="_blank"
					rel="noopener noreferrer"
					class="flex gap-1 items-center"
				>
					<Youtube class="w-[23px]" />
					<span class="text-[13px] text-blue">{m.watchVideo()}</span>
				</a>
			</div>
		</div>
	{/if}

	<img
		id="primaryimage"
		src={image.url}
		alt={image.altText}
		class={['mx-auto max-w-[50%] md:max-w-[70%]', isFullImage && 'bry-image-kits']}
		width="680"
		height="578"
	/>
</div>

<style class="postcss">
</style>
