<script lang="ts">
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages';
	import type { Category, YoastSeoData } from '$lib/types';
	import { serializeSchema, stripHtml } from '$lib/utils';

	interface Props {
		title: string;
		description?: string;
		breadcrumbs?: Object[];
	}
	let { title, description, breadcrumbs }: Props = $props();
</script>

<svelte:head>
	{@html serializeSchema({
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: title,
		description: description ?? '',
		url: `${page.url.href}`,
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
