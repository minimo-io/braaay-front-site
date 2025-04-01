<!-- src/routes/[categorySlug]/[subcategorySlug]/+page.svelte -->
<script lang="ts">
	import type { Product, Category, Post, ArticleCreator } from '$lib/types';
	import GlobalCategory from '$components/layout/GlobalCategory.svelte';
	import BottomArticle from '$components/ui/articles/BottomArticle.svelte';

	const { data } = $props();
	let products: Product[] = $derived(data.products);
	let category: Category = $derived(data.category);

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
</script>

<svelte:head>
	<title>{category.name}- Braaay</title>
	<meta name="description" content="" />
</svelte:head>

<GlobalCategory {products} {category} />

{#if category.description}
	<BottomArticle {article} twoColumns={false} />
{/if}
