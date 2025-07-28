<script lang="ts">
	import { fade } from 'svelte/transition';
	import { type Product, type GraphQLProductNode, mapProduct, mapPagination } from '$lib/types';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { onDestroy } from 'svelte';

	import FilteringMenu from '$components/ui/menues/FilteringMenu.svelte';
	import SortingMenu from '$components/ui/menues/SortingMenu.svelte';
	import WineBox from '$components/ui/products/WineBox.svelte';
	import FunMessageSection from '$components/layout/FunMessageSection.svelte';
	import SearchHeader from '$components/ui/headers/SearchHeader.svelte';
	import Meta from '$lib/components/layout/Meta.svelte';

	import { getUrqlClient } from '$stores/urqlClient.state.svelte';
	import { SEARCH_QUERY } from '$lib/graphql/queries/search.query';
	import type { Category, Pagination } from '$lib/types';
	import { m } from '$lib/paraglide/messages';

	// Get the search term from URL query parameter using runes
	const searchTermTyped = $derived(page.url.searchParams.get('s') || '');
	let loadingSearch = $state(false);
	const after = $derived('');
	let error = $state('');

	let products: Product[] = $state([]);
	let productsCount: number = $derived(products.length);

	// Dynamic meta data for search results
	const searchTitle = $derived(
		searchTermTyped ? `Resultados para "${searchTermTyped}" - Braaay` : 'Busca - Braaay'
	);
	const searchDescription = $derived(
		searchTermTyped
			? `Encontre vinhos e cervejas relacionados a "${searchTermTyped}" na Braaay. ${productsCount} produtos encontrados.`
			: 'Busque por vinhos boutique, orgânicos e cervejas locais na Braaay.'
	);

	// let categoryHeader: Category = $state({
	// 	name: '',
	// 	description: 'asdas',
	// 	count: 0,
	// 	header: {
	// 		title: 'Searching...'
	// 		// image?: ImageGeneral;
	// 		// icon?: ImageGeneral;
	// 		// firstParagraph?: string;
	// 		// firstTitle?: string;
	// 	}
	// });

	// Redirect to homepage if no search term
	$effect(() => {
		if (!searchTermTyped) {
			goto('/');
		} else {
			loadingSearch = true;
			// console.log('Trigger search...');
			// toggleLoader();
			try {
				const searchResult = getUrqlClient()
					.client.query(
						SEARCH_QUERY,
						{
							searchTerm: searchTermTyped,
							first: 1000,
							after: after
						},
						{
							// fetchOptions: { headers: sessionHeaders }
						}
					)
					.toPromise()
					.then((res) => {
						loadingSearch = false;
						console.log('RES_FROM_THEN');
						// On error
						if (res.error && res.error != undefined) {
							error = `Error: ${res.error}`;
						}

						// Results
						const resProducts: Product[] = res.data.products.edges.map(
							(product: GraphQLProductNode) => mapProduct(product)
						);
						const resPagination: Pagination = mapPagination(res.data.products.pageInfo);

						// console.log('Products');
						products = resProducts;

						// console.log('Pagination');
						// console.log(pagination);
					});
			} catch (err) {
				console.log(`Error: ${err}`);
			}
			// toggleLoader();
		}
	});

	onDestroy(() => {
		// console.log('Component is being destroyed via onDestroy hook.');
		// Any other cleanup logic not directly tied to an effect
	});
</script>

<!-- Meta tags for search page - noindex to prevent indexing -->
<Meta title={searchTitle} description={searchDescription} noindex={true} />

<SearchHeader
	title={loadingSearch ? `${m.searching()}` : `Resultados: "${searchTermTyped}"`}
	count={productsCount}
	showCount={!loadingSearch}
/>

<main id={searchTermTyped} class="w-full mx-auto">
	{#if searchTermTyped && loadingSearch == false}
		<!-- Filtering & Sorting -->
		<FilteringMenu />
		<SortingMenu />

		<!-- Product list -->
		<div class="max-w-screen-lg mx-[1.5rem] md:mx-auto mt-1 mb-[2rem]">
			<div class="bry-product-list">
				{#if error}
					<div class="text-red">{error}</div>
				{:else}
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
				{/if}
			</div>
		</div>
	{/if}
</main>
<FunMessageSection />
