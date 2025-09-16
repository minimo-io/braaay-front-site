<!-- src/lib/components/ui/products/ProductImage.svelte -->
<script lang="ts">
	import { AppConfig } from '$config';
	import { addProductToFavorites, removeProductFromFavorites } from '$lib/services/index';
	import { m } from '$lib/paraglide/messages';
	import type { PageCustomColors, ImageGeneral, ProductCategory, Product } from '$lib/types';
	import { calculatePercentageDifference, capitalize, launchToast } from '$lib/utils';
	import { Heart, Share2, Youtube, X } from '@lucide/svelte';
	import { onMount } from 'svelte';

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
	let showVideoModal = $state(false);
	let isDesktop = $state(false);

	// For kits
	const isFullImage = productCategories?.some((category) =>
		AppConfig.kitsImageCategories.includes(category.slug)
	);

	onMount(() => {
		// Check if we're on desktop
		const checkIsDesktop = () => {
			isDesktop = window.innerWidth >= 768; // md breakpoint
		};

		checkIsDesktop();
		window.addEventListener('resize', checkIsDesktop);

		return () => {
			window.removeEventListener('resize', checkIsDesktop);
		};
	});

	function shareContent() {
		if (navigator.share) {
			navigator
				.share({
					title: m.hello(),
					text: m.whatsappShareMessage(),
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

			launchToast(result.message, result.success ? 'success' : 'error', 3000);

			if (result.success) {
				isFavorite = !isFavorite;
			}
		} catch (error) {
			console.error(`Error ${action} favorites:`, error);
			launchToast(`An error occurred while ${action} favorites.`, 'error', 3000);
		} finally {
			isLoading = false;
		}
	}

	function handleVideoClick(event: Event) {
		if (isDesktop) {
			event.preventDefault();
			showVideoModal = true;
			// Prevent body scrolling when modal is open
			document.body.style.overflow = 'hidden';
		}
		// On mobile, let the default behavior happen (open in new tab)
	}

	function handleVideoKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			handleVideoClick(event);
		}
	}

	function closeVideoModal() {
		showVideoModal = false;
		document.body.style.overflow = 'auto';
	}

	function getYouTubeEmbedUrl(url: string): string {
		// Convert YouTube watch URL to embed URL
		const videoId = url.match(
			/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/
		)?.[1];
		return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : url;
	}

	// Close modal on Escape key
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && showVideoModal) {
			closeVideoModal();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

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
					onclick={handleVideoClick}
					onkeydown={handleVideoKeydown}
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

<!-- Video Modal -->
{#if showVideoModal && product?.pageCustomColors.youtubeVideo}
	<!-- Modal Backdrop -->
	<div class="fixed inset-0 bg-black bg-opacity-90 z-50">
		<!-- Close backdrop (invisible but covers full screen) -->
		<button
			class="absolute inset-0 w-full h-full cursor-default"
			onclick={closeVideoModal}
			aria-label="Close video modal"
			style="background: transparent; border: none;"
		></button>

		<!-- Modal Content Container -->
		<div class="absolute inset-0 flex items-center justify-center pointer-events-none">
			<!-- Modal Content -->
			<div
				class="relative w-full h-full max-w-6xl max-h-[90vh] mx-4 my-8 pointer-events-auto"
				role="dialog"
				aria-modal="true"
				aria-labelledby="video-modal-title"
			>
				<!-- Close button -->
				<button
					onclick={closeVideoModal}
					class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
					aria-label="Close video"
				>
					<X class="w-8 h-8" />
				</button>

				<!-- Video iframe -->
				<iframe
					src={getYouTubeEmbedUrl(product.pageCustomColors.youtubeVideo)}
					title="Product video"
					class="w-full h-full rounded-lg"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
		</div>
	</div>
{/if}
