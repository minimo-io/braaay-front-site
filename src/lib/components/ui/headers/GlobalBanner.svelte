<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { page } from '$app/state';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { getUrqlClient } from '$stores/urqlClient.state.svelte';
	import { COUPON_APPLY } from '$lib/graphql/mutations';
	import { addCouponToCart, launchToast } from '$lib/utils';
	import { addCoupon, hasCoupon, removeCoupon } from '$stores/cart.store.svelte';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';
	import { goto } from '$app/navigation';

	// Determines if the banner should be shown
	let showBanner = $state(false);

	// Your derived path from the page store
	let path = $derived(page.url.pathname);

	// Set the flag after 5 seconds from page load
	onMount(() => {
		const timer = setTimeout(() => {
			showBanner = true;
		}, 2500);

		// Clear the timer if the component is destroyed
		return () => clearTimeout(timer);
	});
</script>

<!-- {#if (showBanner && path == '/') || path == '/uy/' || path.startsWith('/blog') || path.startsWith('/uy/blog') || path.startsWith('/produto') || path.startsWith('/uy/producto')} -->
{#if showBanner && (path == '/' || path == '/uy/')}
	<!-- {#if } -->
	<div class="bry-banner" transition:slide={{ duration: 300 }}>
		<a
			onclick={(e: Event) => {
				e.preventDefault();
				addCouponToCart();
			}}
			href={localizeHref('/cart/?add-coupon=primeira10')}
		>
			<img src="/images/primeira-compra-1.png" alt="primeira-compra" class="hidden lg:inline" />

			<div class="relative overflow-hidden lg:hidden">
				<figure
					class=" flex items-center justify-center w-full h-[65px] max-h-[65px] overflow-hidden"
				>
					<img
						src="/images/primeira-compra-mobile.png"
						alt="primeira-compra-mobile"
						class="absolute left-1/2 -translate-x-1/2 min-h-[65px] max-h-[65px] min-w-fit"
					/>
				</figure>
			</div>
		</a>
	</div>
	<!-- {/if} -->
{/if}

<style lang="postcss">
	.bry-banner {
		@apply border-b border-grey-light;
	}
</style>
