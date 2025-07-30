<!-- src/routes/[countrySlug]/+page.svelte -->
<script lang="ts">
	import { page } from '$app/state';
	import type {
		Category,
		Product,
		Post,
		ArticleCreator,
		Pagination,
		YoastSeoData
	} from '$lib/types';
	import GlobalCategory from '$components/layout/GlobalCategory.svelte';
	import BottomArticle from '$components/ui/articles/BottomArticle.svelte';
	import { loadMoreProducts } from '$lib/utils/loadMoreProducts.util.js';
	import { toggleLoader } from '$stores/loaderStore.state.svelte.js';
	import { UVA_PRODUCTS } from '$lib/graphql/queries/index';
	import LoadMoreButton from '$components/ui/buttons/LoadMoreButton.svelte';
	import Meta from '$components/layout/Meta.svelte';
	import SchemaCategory from '$components/layout/Schemas/SchemaCategory.svelte';

	const { data } = $props();

	let products: Product[] = $state(data.products);
	let category: Category = $state(data.category);
	let pagination: Pagination = $state(data.pagination);
	let seo: YoastSeoData | undefined = $state(data.seo);
	let isLoading = $state(false);

	$effect(() => {
		products = data.products;
		category = data.category;
		pagination = data.pagination;
	});

	let article: Post = $derived({
		id: '0',
		title: category.header.title || category.name,
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
		},
		categories: []
	});

	async function handleLoadMore() {
		if (isLoading) return;
		isLoading = true;
		toggleLoader();
		try {
			// Determine current category slug
			const { uvaSlug } = page.params;
			// Use the abstracted function.
			const result = await loadMoreProducts({
				products,
				pagination,
				query: UVA_PRODUCTS,
				params: {
					uvaId: uvaSlug,
					uvaSlug: uvaSlug
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

<!-- Meta -->
{#if seo}
	<Meta seoData={seo} />
{/if}

<!-- Schema -->
<SchemaCategory
	{seo}
	{category}
	breadcrumbs={[
		{
			'@type': 'ListItem',
			position: 2,
			name: category?.name,
			item: `${page.url.origin}${category?.uri}`
		}
	]}
/>

<GlobalCategory {products} {category} />
<LoadMoreButton {isLoading} {pagination} {handleLoadMore} />

<BottomArticle {article} twoColumns={false} />
