<script lang="ts">
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
	import type { Post, Product, ProductAttributes, ProductCategory, YoastSeoData } from '$lib/types';
	import { addYearsAndFormat, mapLocale, serializeSchema, stripHtml } from '$lib/utils';

	interface Props {
		seo?: YoastSeoData;
		post?: Post;
	}
	let { seo, post }: Props = $props();

	// // Page
	let basePath = `${page.url.origin}/`;
	let pageUrl = $derived(page.url);
	let pageDescription = $derived(seo?.metaDesc ?? post!.excerpt);
	// let pageLanguage = mapLocale(getLocale());
	// let pageDatePublished = $derived(product?.date);

	// // Image
	// let pageImage = $derived(product?.image.url);
</script>

<svelte:head>
	{@html serializeSchema({
		'@context': 'https:\/\/schema.org',
		'@graph': [
			{
				'@type': 'BlogPosting',
				headline: `${seo?.title}`,
				datePublished: post?.date,
				dateModified: '2024-11-29T18:32:25-02:00',
				publisher: {
					'@type': 'Organization',
					name: 'Braaay',
					logo: `${basePath}images/favicon.png`
				},
				mainEntityOfPage: {
					'@type': 'WebPage',
					'@id': pageUrl
				},
				author: { '@type': 'Person', name: 'Maryene Rocha de Oliveira' },
				description: stripHtml(pageDescription),
				image: {
					'@type': 'ImageObject',
					url: post?.featuredImage.mediaItemUrl ?? ''
					// width: 2560,
					// height: 1667
				}
			}
		]
	})}
</svelte:head>
