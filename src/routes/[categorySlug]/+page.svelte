<!-- src/routes/[categorySlug]/+page.svelte -->
<script lang="ts">
	import { page } from '$app/state';
	import { toggleLoader } from '$stores/loaderStore.state.svelte.js';
	import {
		type Category,
		type Product,
		type Post,
		type ArticleCreator,
		type Pagination,
		type ProductsForCategoryQueryResult,
		type GraphQLProductNode,
		mapProduct,
		mapPagination
	} from '$lib/types';
	import GlobalCategory from '$components/layout/GlobalCategory.svelte';
	import BottomArticle from '$components/ui/articles/BottomArticle.svelte';
	import Button from '$components/ui/buttons/Button.svelte';
	import { getUrqlClient } from '$stores/urqlClient.state.svelte.js';
	import { CATEGORY_PRODUCTS } from '$lib/graphql/queries/products-category.query.js';
	import { CATALOGS_INITIAL_QUERY_LIMIT } from '$lib';

	const { data } = $props();

	let products: Product[] = $state(data.products);
	let category: Category = $derived(data.category);
	// let pagination: Pagination = $derived(data.pagination);
	let pagination: Pagination = $state(data.pagination);
	let isLoading = $state(false);

	let article: Post = $derived({
		id: '0',
		title: category.header.title,
		date: '',
		modified: '',
		excerpt: '',
		content: category.description,
		plainExcerpt: '',
		uri: '',
		header: {
			title: category.header.firstTitle,
			content: category.header.firstParagraph
		},
		author: products![0].author as ArticleCreator,
		featuredImage: {
			mediaItemUrl: category.header.image?.url || '',
			altText: category.header.image?.altText || ''
		}
	});

	// Function to load more products
	async function loadMoreProducts() {
		if (!pagination.hasNextPage || isLoading) return;

		const { categorySlug, subcategorySlug } = page.params;
		const currentCategorySlug =
			subcategorySlug && subcategorySlug !== '' ? subcategorySlug : categorySlug;

		isLoading = true;

		try {
			const result = await getUrqlClient()
				.client.query<ProductsForCategoryQueryResult>(CATEGORY_PRODUCTS, {
					first: CATALOGS_INITIAL_QUERY_LIMIT,
					after: pagination.endCursor,
					categorySlug: currentCategorySlug,
					categoryId: currentCategorySlug
				})
				.toPromise();

			if (result.error || !result.data) {
				console.error(`Failed to fetch more products: ${result.error}`);
				return;
			}

			// Get new products
			const newProducts: Product[] = result.data.products.edges.map((product: GraphQLProductNode) =>
				mapProduct(product)
			);

			// Update pagination info
			pagination = mapPagination(result.data.products.pageInfo);

			// Append new products to the existing array
			products = [...products, ...newProducts];
		} catch (err) {
			console.error(`Failed to fetch more products: ${err}`);
		} finally {
			isLoading = false;
			toggleLoader();
		}
	}
</script>

<svelte:head>
	<title>{category.name} - Braaay</title>
	<meta name="description" content={category.description} />
</svelte:head>

<GlobalCategory {products} {category} />
<div class="max-w-screen-lg mx-auto my-10">
	{#if pagination.hasNextPage}
		<Button
			action={() => {
				toggleLoader();
				loadMoreProducts();
			}}
			bold
			type="blue"
			size="xl"
			url=""
			title={isLoading ? 'Loading...' : 'More results'}
		/>
	{/if}
</div>

{#if category.description}
	<BottomArticle {article} twoColumns={false} />
{/if}
