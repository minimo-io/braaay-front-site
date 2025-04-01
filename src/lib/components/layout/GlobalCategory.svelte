<!-- src/lib/components/layout/Category.svelte -->
<script lang="ts">
	import { fade } from 'svelte/transition';
	import FilteringMenu from '$components/ui/menues/FilteringMenu.svelte';
	// import BottomArticle from '$components/ui/articles/BottomArticle.svelte';
	import SortingMenu from '$components/ui/menues/SortingMenu.svelte';
	import CategoryHeader from '$components/ui/headers/CategoryHeader.svelte';
	import WineBox from '$components/ui/products/WineBox.svelte';
	import type { Category, Product } from '$lib/types';
	import { localizeHref } from '$lib/paraglide/runtime.js';

	interface Props {
		category: Category;
		products: Product[];
	}
	const { category, products } = $props();

	// let products: Product[] = $derived(data.products);
	// let category: Category = $derived(data.category);
</script>

<main>
	<CategoryHeader {category} />

	<FilteringMenu />

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
							url: localizeHref(`/produto/${product.slug}/`),
							score: product.averageRating
						}}
					/>
				</span>
			{/each}
		</div>
	</div>
</main>
