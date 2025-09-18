<script lang="ts">
	import type { PageData } from './$types';
	import BottomArticle from '$components/ui/articles/BottomArticle.svelte';
	import ProductDetails from '$components/ui/products/ProductDetails.svelte';
	import ProductImage from '$components/ui/products/ProductImage.svelte';
	import { type ArticleCreator, type ImageGeneral, type Post } from '$lib/types';
	import FunMessageSection from '$components/layout/FunMessageSection.svelte';
	import Meta from '$components/layout/Meta.svelte';
	import SchemaProduct from '$components/layout/Schemas/SchemaProduct.svelte';
	import { onMount } from 'svelte';
	import { trackEvent } from '$components/analytics';
	import { m } from '$lib/paraglide/messages';
	import { getCurrencyFromPrice } from '$lib/utils';

	let { data }: { data: PageData } = $props();

	const placeholderImage: ImageGeneral = {
		url: '/images/placeholder-image.png',
		altText: 'placeholder-wine'
	};
	const product = $state(data.product);
	const productCategories = $state(data.productCategories);
	const attributes = $state(data.attributes);

	const seo = $state(data.seo);

	// 1. VIEW_ITEM - Product page onMount
	onMount(() => {
		trackEvent('view_item', {
			currency: getCurrencyFromPrice(`${m.currencySymbol()}`), // string
			value: Number(product?.floatPrice), // number (no quotes, no commas)
			items: [
				{
					item_id: `${product?.sku}`, // string
					item_name: `${product?.title}`, // string
					// category: `${productCategories![0].name ?? ''}`, // string
					quantity: 1, // number
					price: Number(product?.floatPrice) // number (no quotes, no commas)
				}
			]
		});
	});

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
		},
		categories: []
	};
</script>

<!-- Seo Headers -->
{#if seo}
	<Meta seoData={seo} />
{/if}

<!-- Schema -->
<SchemaProduct {product} {seo} categories={productCategories} productAttributes={attributes} />

<main id="product" class="max-w-screen-lg mx-auto">
	<!-- Main Product section -->
	<section class="flex flex-col md:flex-row mx-auto">
		<!-- Left side - Image -->
		{#if product && product.image}
			<ProductImage
				{product}
				{productCategories}
				image={product?.image!}
				colors={product?.pageCustomColors!}
			/>
		{:else}
			<!-- Placeholder -->
			<ProductImage image={placeholderImage} />
		{/if}

		<!-- Right side - Product details -->
		{#if product}
			<ProductDetails {product} {attributes} {productCategories} />
		{/if}
	</section>
</main>

<!-- Product Article -->
{#if article.content}
	<BottomArticle {article} twoColumns={true} />
{:else}
	<FunMessageSection />
{/if}
