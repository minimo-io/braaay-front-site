<script lang="ts">
	import { page } from '$app/state';
	import FunMessageSection from '$components/layout/FunMessageSection.svelte';
	import Meta from '$components/layout/Meta.svelte';
	import ArticleContent from '$components/ui/articles/components/ArticleContent.svelte';
	import ArticleIntro from '$components/ui/articles/components/ArticleIntro.svelte';
	import Divider from '$components/ui/dividers/Divider.svelte';
	import CategoryHeader from '$components/ui/headers/CategoryHeader.svelte';
	import { removeWPBakeryShortcodes } from '$lib/utils';
	import type { PageData } from '../$types';

	const { data } = $props();

	const pageData = $derived(data.page);
	const seo = $derived(data.seo);

	const pageAsCategory = $derived({
		name: pageData.title,
		description: pageData.excerpt,
		count: 0,
		uri: pageData.slug,
		header: {
			title: '',
			image: {
				url: pageData.image.url,
				altText: pageData.image.altText
			},
			firstParagraph: '',
			firstTitle: ''
		},
		seo: seo
	});
</script>

<Meta seoData={seo} />
<CategoryHeader category={pageAsCategory} hideCount={true} />

<div class="md:px-32 px-[30px] max-w-screen-lg mx-auto">
	<div class="mt-10">
		<ArticleIntro title={pageData.header?.title} content={pageData.header?.content} />
	</div>

	<Divider color="blue" />

	<div class="bry-article-content">
		<ArticleContent content={pageData.content} />
	</div>
</div>

<FunMessageSection />
