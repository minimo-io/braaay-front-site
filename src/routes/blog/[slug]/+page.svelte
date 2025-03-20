<script lang="ts">
	import ArticleIntro from '$components/ui/articles/components/ArticleIntro.svelte';
	import Divider from '$components/ui/dividers/Divider.svelte';
	import ArticleHeader from '$components/ui/articles/components/ArticleHeader.svelte';
	import ArticleContent from '$components/ui/articles/components/ArticleContent.svelte';

	import type { PageData } from './$types';
	// import type { Post } from '$lib/types';

	let { data }: { data: PageData } = $props();
	const article = $state(data.post);
</script>

<main class="w-full mx-auto">
	<article class="relative bg-white pb-10 mt-0">
		<div class="mx-auto relative">
			<!-- General article header -->
			<ArticleHeader {article} fullWidth={true} />

			<!-- Article content -->
			<div class="md:px-32 px-[30px] max-w-screen-lg mx-auto">
				<ArticleIntro title={article.header?.title} content={article.header?.content} />

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
</main>
