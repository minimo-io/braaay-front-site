<script lang="ts">
	import { page } from '$app/state';
	import type { Category, Product, Post, ArticleCreator, Pagination } from '$lib/types';
	import GlobalCategory from '$components/layout/GlobalCategory.svelte';
	import BottomArticle from '$components/ui/articles/BottomArticle.svelte';
	import { loadMoreProducts } from '$lib/utils/loadMoreProducts.util.js';
	import { toggleLoader } from '$stores/loaderStore.state.svelte.js';
	import { PAIRING_PRODUCTS, TAG_PRODUCTS } from '$lib/graphql/queries/index';
	import LoadMoreButton from '$components/ui/buttons/LoadMoreButton.svelte';

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
			const { tagSlug } = page.params;
			// Use the abstracted function.
			const result = await loadMoreProducts({
				products,
				pagination,
				query: TAG_PRODUCTS,
				params: {
					tagId: tagSlug,
					tagSlug: tagSlug
				}
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
	<meta name="description" content="" />
</svelte:head>

<GlobalCategory {products} {category} />
<LoadMoreButton {isLoading} {pagination} {handleLoadMore} />

<BottomArticle {article} twoColumns={false} />
