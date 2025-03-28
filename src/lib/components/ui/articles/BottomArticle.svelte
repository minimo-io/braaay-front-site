<!-- Used eg. category pages -->
<script lang="ts">
	import { type Post } from '$lib/types';

	import Divider from '$components/ui/dividers/Divider.svelte';
	import SectionDivider from '$components/ui/dividers/SectionDivider.svelte';
	import ArticleAuthor from './components/ArticleAuthor.svelte';
	import ArticleContent from './components/ArticleContent.svelte';
	import ArticleHeader from './components/ArticleHeader.svelte';
	import ArticleIntro from './components/ArticleIntro.svelte';
	import ArticleRightBannerBox from './components/ArticleRightBannerBox.svelte';

	interface Props {
		twoColumns: boolean;
		article: Post;
	}

	let { twoColumns, article }: Props = $props();
	const content = $state(article.content || '');
</script>

<article class="relative bg-white py-10 mt-14">
	<SectionDivider color="green" />
	<div id="know-more" class="max-w-screen-lg mx-auto relative">
		<!-- General title header -->
		<ArticleHeader fullWidth={false} {article} />

		<!-- Article content -->
		<div class="md:px-32 px-[30px]">
			<ArticleIntro title={article.header?.title} content={article.header?.content} />

			<Divider color="blue" />

			<div class="bry-article-content">
				<ArticleContent {content} />
				{#if twoColumns}
					<div class="w-full md:w-1/3 pl-0 md:pl-6">
						<div class="md:sticky md:top-1">
							<ArticleRightBannerBox />
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</article>
