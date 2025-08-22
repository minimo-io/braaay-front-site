<script lang="ts">
	import ArticleIntro from '$components/ui/articles/components/ArticleIntro.svelte';
	import Divider from '$components/ui/dividers/Divider.svelte';
	import ArticleHeader from '$components/ui/articles/components/ArticleHeader.svelte';
	import ArticleContent from '$components/ui/articles/components/ArticleContent.svelte';

	import type { PageData } from './$types';
	import Meta from '$components/layout/Meta.svelte';
	import type { YoastSeoData } from '$lib/types';
	import SchemaBlogPost from '$components/layout/Schemas/SchemaBlogPost.svelte';
	import ArticleBreadcrumbs from '$components/ui/articles/components/ArticleBreadcrumbs.svelte';
	// import type { Post } from '$lib/types';

	let { data }: { data: PageData } = $props();

	const article = $state(data.post);
	const seo: YoastSeoData | undefined = $derived(data.seo);
</script>

{#if seo}
	<Meta seoData={seo} />
{/if}

<!-- Schema -->
<SchemaBlogPost {seo} post={article} />

<main class="w-full mx-auto">
	{#if article}
		<article class="relative bg-white pb-10 mt-0">
			<div class="mx-auto relative">
				<!-- General article header -->
				<ArticleHeader {article} fullWidth={true} />

				<!-- Article content -->
				<div class="md:px-32 px-[30px] max-w-screen-lg mx-auto">
					<ArticleIntro title={article.header?.title} content={article.header?.content} />
					<ArticleBreadcrumbs categories={article.categories} />

					<Divider color="blue" />
					<img
						src={article.featuredImage.mediaItemUrl}
						alt={article.featuredImage.altText}
						class="rounded-xl w-full"
					/>
					<Divider color="green" extraClasses="mb-2" />

					<div class="bry-article-content">
						<ArticleContent content={article.content!} />
					</div>
				</div>
			</div>
		</article>
	{:else}
		No article founded.
	{/if}
</main>
