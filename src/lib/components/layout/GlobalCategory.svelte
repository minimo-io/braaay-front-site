<!-- src/lib/components/layout/GlobalCategory.svelte -->
<script lang="ts">
	import { fade } from 'svelte/transition';
	import FilteringMenu from '$components/ui/menues/FilteringMenu.svelte';
	// import BottomArticle from '$components/ui/articles/BottomArticle.svelte';
	import SortingMenu from '$components/ui/menues/SortingMenu.svelte';
	import CategoryHeader from '$components/ui/headers/CategoryHeader.svelte';
	import WineBox from '$components/ui/products/WineBox.svelte';
	import type { Category, Product } from '$lib/types';
	import { localizeHref } from '$lib/paraglide/runtime.js';
	import { page } from '$app/state';

	interface Props {
		category: Category;
		products: Product[];
		hideCount?: boolean;
	}
	const { category, products, hideCount = false }: Props = $props();

	let isCategoryOrSub =
		page.route.id == '/[categorySlug]/[subcategorySlug]' || page.route.id == '/[categorySlug]';

	const pathname = $derived.by(() => page.url?.pathname ?? '');
</script>

<main>
	<CategoryHeader {category} {hideCount} />

	{#if isCategoryOrSub}
		{#key pathname}
			<FilteringMenu />
		{/key}
	{/if}

	<SortingMenu />

	<div class="max-w-screen-lg mx-[1.5rem] md:mx-auto mt-1 mb-[2rem]">
		<div class="bry-product-list">
			{#each products as product}
				<span in:fade out:fade>
					<WineBox
						image={{
							src: product.image.url
						}}
						wine={{
							title: product.title,
							price: product.price,
							regularPrice: product.regularPrice,
							url: localizeHref(`/produto/${product.slug}/`),
							score: product.averageRating,
							isFavorited: product.isFavorited,
							productId: product.id
						}}
					/>
				</span>
			{/each}
		</div>
	</div>
</main>
