<!-- src/routes/[categorySlug]/[subcategorySlug]/+page.svelte -->
<script lang="ts">
	import type { Product, Category, Post, ArticleCreator, Pagination } from '$lib/types';
	import GlobalCategory from '$components/layout/GlobalCategory.svelte';
	import BottomArticle from '$components/ui/articles/BottomArticle.svelte';
	import Button from '$components/ui/buttons/Button.svelte';

	const { data } = $props();
	let products: Product[] = $derived(data.products);
	let category: Category = $derived(data.category);
	let pagination: Pagination = $derived(data.pagination);

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
<div class="max-w-screen-lg mx-auto my-10">
	{#if pagination.hasNextPage}
		<Button
			action={() => {
				alert('More results');
			}}
			bold
			type="blue"
			size="xl"
			url=""
			title="More results"
		/>
	{/if}
</div>

{#if category.description}
	<BottomArticle {article} twoColumns={false} />
{/if}
