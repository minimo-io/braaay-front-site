<!-- src/routes/[categorySlug]/+page.svelte -->
<script lang="ts">
	import { page } from '$app/state';
	import { toggleLoader } from '$stores/loaderStore.state.svelte.js';
	import {
		type Category,
		type Product,
		type Post,
		type ArticleCreator,
		type Pagination
	} from '$lib/types';
	import GlobalCategory from '$components/layout/GlobalCategory.svelte';
	import BottomArticle from '$components/ui/articles/BottomArticle.svelte';
	import Button from '$components/ui/buttons/Button.svelte';
	import { loadMoreProducts } from '$lib/utils/loadMoreProducts.util.js';

	const { data } = $props();

	let products: Product[] = $state(data.products);
	let category: Category = $state(data.category);
	let pagination: Pagination = $state(data.pagination);
	let isLoading = $state(false);

	$effect(() => {
		products = data.products;
		category = data.category;
		pagination = data.pagination;
	});

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

	async function handleLoadMore() {
		if (isLoading) return;
		isLoading = true;
		toggleLoader();
		try {
			// Determine current category slug
			const { categorySlug, subcategorySlug } = page.params;
			const currentCategorySlug =
				subcategorySlug && subcategorySlug !== '' ? subcategorySlug : categorySlug;

			// Use the abstracted function.
			const result = await loadMoreProducts({
				products,
				pagination,
				categorySlug: currentCategorySlug
			});

			products = result.products;
			pagination = result.pagination;
		} catch (err) {
			// Handle the error as needed
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
<div class="max-w-screen-lg mx-auto my-10">
	{#if pagination.hasNextPage}
		<Button
			action={() => {
				// toggleLoader();
				handleLoadMore();
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
