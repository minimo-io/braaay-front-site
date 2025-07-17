<script lang="ts">
	import { Heart, Share2 } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { getFavoriteProducts } from '$lib/services/favoritesService';
	import type { FavoriteProduct } from '$lib/types';
	import FavoriteItem from '$components/ui/account/favoriteItem.svelte';
	import { m } from '$lib/paraglide/messages';
	import { launchToast } from '$lib/utils';

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
		<div class="text-sm">Carregando produtos favoritos...</div>
	{:else}
		<div class="text-sm">No favorite products</div>
	{/if}
</div>

<!-- <Divider color="blue" extraClasses="!my-0" /> -->
