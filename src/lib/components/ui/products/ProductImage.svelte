<script lang="ts">
	import { AppConfig } from '$config';
	import { m } from '$lib/paraglide/messages';
	import type { PageCustomColors, ImageGeneral, ProductCategory, Product } from '$lib/types';
	import { calculatePercentageDifference } from '$lib/utils';
	import { Heart, Share2 } from '@lucide/svelte';

	interface Props {
		colors?: PageCustomColors;

		image: ImageGeneral;
		productCategories?: ProductCategory[];
		product?: Product;
	}
	let { colors, image, productCategories, product }: Props = $props();

	let hasPriceDiscount = product && product.regularPrice != product.price;
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

	<!-- Mobile -->
	<div
		class={[
			'md:block absolute -bottom-[1px] md:bottom-auto md:top-[65px] right-[10px] md:right-auto md:left-[31px] bg-grey-background p-2 px-2 rounded-t-lg md:rounded-b-lg',
			!hasPriceDiscount && 'md:!top-[30px]'
		]}
	>
		<div class="flex gap-0 items-center">
			<div class="pr-2 flex border-r border-grey-medium">
				<button onclick={shareContent}><Share2 class="h-[20px]" /> </button>
			</div>

			<div class="pl-2 flex">
				<button onclick={() => alert('Soon')}><Heart class="h-[20px]" /> </button>
			</div>
		</div>
	</div>

	<img
		src={image.url}
		alt={image.altText}
		class={['mx-auto max-w-[50%] md:max-w-[70%]', isFullImage && 'bry-image-kits']}
		width="680"
		height="578"
	/>
</div>

<style class="postcss">
</style>
