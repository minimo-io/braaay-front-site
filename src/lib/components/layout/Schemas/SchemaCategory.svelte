<script lang="ts">
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages';
	import type { Category, YoastSeoData } from '$lib/types';
	import { serializeSchema, stripHtml } from '$lib/utils';

	interface Props {
		seo?: YoastSeoData;
		category?: Category;
		breadcrumbs?: Object[];
	}
	let { seo, category, breadcrumbs }: Props = $props();
</script>

<svelte:head>
	{@html serializeSchema({
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: seo?.title,
		description: seo?.metaDesc ?? stripHtml(category?.description || '') ?? '',
		url: `${page.url.origin}${category?.uri}`,
		image: category?.header.image?.url ?? '',
		breadcrumb: {
			'@type': 'BreadcrumbList',
			itemListElement: [
				{
					'@type': 'ListItem',
					position: 1,
					name: `${m.start()}`,
					item: page.url.origin
				},
				...(breadcrumbs || [])
			]
		}
	})}
</svelte:head>
