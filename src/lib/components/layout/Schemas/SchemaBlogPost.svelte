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
</script>

<svelte:head>
	{@html serializeSchema({
		'@context': 'https:\/\/schema.org',
		'@graph': [
			{
				'@type': 'BlogPosting',
				headline: `${seo?.title}`,
				datePublished: post?.date,
				dateModified: post?.modified,
				publisher: {
					'@type': 'Organization',
					name: 'Braaay',
					logo: `${basePath}images/favicon.png`
				},
				mainEntityOfPage: {
					'@type': 'WebPage',
					'@id': page.url
				},
				author: { '@type': 'Person', name: 'Erika Bezerra' },
				description: stripHtml(seo?.metaDesc ?? post!.excerpt),
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
