<!-- lib/components/Meta.svelte -->
<script lang="ts">
	// import { page } from '$app/stores';
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages';
	import type { YoastSeoData } from '$lib/types';
	import { stripHtml } from '$lib/utils';

	interface Props {
		title: string;
		description: string;
		keywords: string;
		ogImage: string;
		ogType: 'website';
		ogUrl: string;
		canonicalUrl: string;
		noindex: boolean;
		// Yoast SEO data object
		seoData: YoastSeoData;
	}
	let {
		title = '',
		description = '',
		keywords = '',
		ogImage = '',
		ogType = 'website',
		ogUrl = '',
		canonicalUrl = '',
		noindex = false,
		// Yoast SEO data object
		seoData = null
	} = $props();

	// Default fallbacks
	const defaultTitle = '';
	const defaultDescription = '';

	// Helper function to strip HTML tags and decode HTML entities
	// function stripHtml(html) {
	// 	if (!html) return '';
	// 	return html
	// 		.replace(/<[^>]*>/g, '') // Remove HTML tags
	// 		.replace(/&nbsp;/g, ' ') // Replace &nbsp; with regular space
	// 		.replace(/&amp;/g, '&') // Replace &amp; with &
	// 		.replace(/&quot;/g, '"') // Replace &quot; with "
	// 		.replace(/&#39;/g, "'") // Replace &#39; with '
	// 		.replace(/&lt;/g, '<') // Replace &lt; with <
	// 		.replace(/&gt;/g, '>') // Replace &gt; with >
	// 		.trim(); // Remove leading/trailing whitespace
	// }

	// Helper function to truncate description to max 155 characters
	function truncateDescription(text) {
		if (!text) return '';
		const cleaned = stripHtml(text);
		if (cleaned.length <= 155) return cleaned;

		// Find the last space before 155 characters to avoid cutting words
		const truncated = cleaned.substring(0, 155);
		const lastSpace = truncated.lastIndexOf(' ');

		// If there's a space within the last 20 characters, cut there
		// Otherwise, just cut at 155
		return lastSpace > 135 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
	}

	// Reactive computations using runes - prioritize Yoast SEO data
	const finalTitle = $derived(stripHtml(seoData?.title || title || defaultTitle));
	const finalDescription = $derived(
		truncateDescription(seoData?.metaDesc || description || defaultDescription)
	);
	const finalOgUrl = $derived(ogUrl || page.url.href);
	const finalCanonicalUrl = $derived(seoData?.canonical || canonicalUrl || page.url.href);
	const finalOgImage = $derived(seoData?.opengraphImage?.sourceUrl || ogImage || '');
	const finalKeywords = $derived(seoData?.focuskw || keywords || '');
	const isNoIndex = $derived(seoData?.metaRobotsNoindex === 'noindex' || noindex);
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{finalTitle}</title>
	<meta name="title" content={finalTitle} />
	<meta name="description" content={finalDescription} />
	{#if finalKeywords}
		<meta name="keywords" content={finalKeywords} />
	{/if}

	<!-- Canonical URL -->
	<link rel="canonical" href={finalCanonicalUrl} />

	<!-- Robots -->
	{#if isNoIndex}
		<meta name="robots" content="noindex, nofollow" />
	{/if}

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={ogType} />
	<meta property="og:url" content={finalOgUrl} />
	<meta property="og:title" content={finalTitle} />
	<meta property="og:description" content={finalDescription} />
	<meta property="og:site_name" content={m.seoBase()} />
	{#if finalOgImage}
		<meta property="og:image" content={finalOgImage} />
	{/if}
</svelte:head>
