<script lang="ts">
	import { page } from '$app/state';
	import { toggleLoader } from '$stores/loaderStore.state.svelte.js';
	import type { Product, Category, Post, ArticleCreator, Pagination } from '$lib/types';
	import GlobalCategory from '$components/layout/GlobalCategory.svelte';
	import BottomArticle from '$components/ui/articles/BottomArticle.svelte';
	import LoadMoreButton from '$components/ui/buttons/LoadMoreButton.svelte';
	import { loadMoreProducts } from '$lib/utils/loadMoreProducts.util.js';
	import { CATEGORY_PRODUCTS } from '$lib/graphql/queries/products-category.query.js';

	// Destructure props at the top level
	let { data } = $props();

	// Initialize local state from props
	let products: Product[] = $state(data.products);
	let category: Category = $state(data.category);
	let pagination: Pagination = $state(data.pagination);

	$effect(() => {
		products = data.products;
		category = data.category;
		pagination = data.pagination;
	});

	let isLoading = $state(false);

	// Derived state for the article
	let article = $derived.by(() => ({
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
		author: products[0]?.author as ArticleCreator,
		featuredImage: {
			mediaItemUrl: category.header.image?.url || '',
			altText: category.header.image?.altText || ''
		}
	}));

	// Function to load more products
	async function handleLoadMore() {
		if (isLoading) return;
		isLoading = true;
		toggleLoader();
		try {
			const { categorySlug, subcategorySlug } = page.params;
			const currentCategorySlug = subcategorySlug || categorySlug;

			const result = await loadMoreProducts({
				products,
				pagination,
				query: CATEGORY_PRODUCTS,
				params: {
					categorySlug: currentCategorySlug,
					categoryId: currentCategorySlug
				}
			});

			products = result.products;
			pagination = result.pagination;
		} catch (err) {
			console.error(err);
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
<LoadMoreButton {isLoading} {pagination} {handleLoadMore} />

{#if category.description}
	<BottomArticle {article} twoColumns={false} />
{/if}
