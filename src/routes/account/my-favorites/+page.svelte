<script lang="ts">
	import { Heart, LoaderCircle, Share2 } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { getFavoriteProducts } from '$lib/services/index';
	import type { FavoriteProduct } from '$lib/types';
	import FavoriteItem from '$components/ui/account/favoriteItem.svelte';
	import { m } from '$lib/paraglide/messages';
	import { launchToast } from '$lib/utils';
	import { Button } from '$components/ui/buttons';

	let userFavoriteProducts: FavoriteProduct[] | undefined = $state();
	let isLoading = $state(false);

	onMount(async () => {
		isLoading = true;
		userFavoriteProducts = await getFavoriteProducts();
		isLoading = true;
	});

	// We must use this function to remove the item from the list once removed
	function onRemove(productId: number) {
		if (userFavoriteProducts) {
			userFavoriteProducts = userFavoriteProducts.filter((favorite) => favorite.id !== productId);
		}
	}
</script>

<div>
	<div class="flex justify-between">
		<h2 class="text-xl mb-4 font-prata flex gap-1 items-center">
			<Heart class="w-5 h-5 self-center mr-2 mb-[5px]" fill="red" color="red" />
			<span>{m.myFavorites()}</span>
		</h2>
		<div class="relative block">
			<!-- Share -->
			<button
				class="flex items-center bg-transparent border bg-white border-grey-lighter -top-1 relative text-grey-medium-dark py-2 px-2 rounded-lg scale-90 md:scale-100"
				onclick={() => launchToast(`${m.soon()}`, 'warning', 3000)}
			>
				<Share2 class="h-[15px]" />
				<span class="text-xs mr-1">{m.shareFavorites()}</span>
			</button>
		</div>
	</div>

	<!-- Favorites products list -->
	{#if userFavoriteProducts}
		<div>
			<ul>
				{#each userFavoriteProducts as favorite}
					<li>
						<FavoriteItem {favorite} {onRemove} />
					</li>
				{/each}
			</ul>
		</div>
	{:else if isLoading}
		<div class="text-sm text-grey-medium-dark flex items-center">
			<LoaderCircle class="spinner" />
			<span>
				{m.loadingFavorites()}
			</span>
		</div>
	{/if}

	<!-- No products -->
	{#if userFavoriteProducts && userFavoriteProducts?.length < 1}
		<div class="text-base mb-5 text-grey-medium-dark">{m.noFavoriteProducts()}</div>
		<Button title={m.letsExplore()} size="md" type="light" url={m.letsExploreSlug()} />
	{/if}
</div>

<!-- <Divider color="blue" extraClasses="!my-0" /> -->
