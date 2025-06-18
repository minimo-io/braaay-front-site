<script lang="ts">
	import type { PageData } from './$types';
	import BottomArticle from '$components/ui/articles/BottomArticle.svelte';
	import ProductDetails from '$components/ui/products/ProductDetails.svelte';
	import ProductImage from '$components/ui/products/ProductImage.svelte';
	import type { ArticleCreator, ImageGeneral, Post } from '$lib/types';
	import FunMessageSection from '$components/layout/FunMessageSection.svelte';
	import Meta from '$components/layout/Meta.svelte';

	let { data }: { data: PageData } = $props();

	const placeholderImage: ImageGeneral = {
		url: '/images/placeholder-image.png',
		altText: 'placeholder-wine'
	};
	const product = $state(data.product);
	const seo = $state(data.seo);

	const article: Post = {
		id: '',
		title: product!.title,
		date: '',
		modified: '',
		excerpt: '',
		content: product!.content,
		plainExcerpt: '',
		uri: '',
		header: {
			title: product!.header?.title,
			content: product!.header?.content
		},
		author: product!.author as ArticleCreator,
		featuredImage: {
			mediaItemUrl: product?.pageCustomColors.bgImage || '',
			altText: ''
		}
	};
</script>

{#if seo}
	<Meta seoData={seo} />
{/if}

<main class="max-w-screen-lg mx-auto">
	<!-- Main Product section -->
	<section class="flex flex-col md:flex-row mx-auto">
		<!-- Left side - Image -->
		{#if product && product.image}
			<ProductImage image={product?.image!} colors={product?.pageCustomColors!} />
		{:else}
			<ProductImage image={placeholderImage} />
		{/if}

		<!-- Right side - Product details -->
		{#if product}
			<ProductDetails {product} />
		{/if}
	</section>
</main>

<!-- Product Article -->
{#if article.content}
	<BottomArticle {article} twoColumns={true} />
{:else}
	<FunMessageSection />
{/if}
