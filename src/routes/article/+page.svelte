<script>
	import ArticleIntro from '$components/ui/articles/components/ArticleIntro.svelte';
	import Divider from '$components/ui/dividers/Divider.svelte';
	import ArticleHeader from '$components/ui/articles/components/ArticleHeader.svelte';
	import ArticleContent from '$components/ui/articles/components/ArticleContent.svelte';
</script>

<main class="w-full mx-auto">
	<article class="relative bg-white pb-10 mt-0">
		<div class="mx-auto relative">
			<!-- General article header -->
			<ArticleHeader fullWidth={true} />

			<!-- Article content -->
			<div class="md:px-32 px-[30px] max-w-screen-lg mx-auto">
				<ArticleIntro />

				<Divider color="blue" />
				<img src="/images/Geleia-de-Vinho.jpg" alt="article" class="rounded-xl" />
				<Divider color="green" extraClasses="mb-2" />

				<div class="bry-article-content">
					<ArticleContent />
				</div>
			</div>
		</div>
	</article>
</main>
