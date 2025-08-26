<script lang="ts">
	import { HomeLatestPosts } from '$data/home-latestPosts.data';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import type { PostBaseCategory } from '$lib/types';
	import ArticleCard from '../articles/components/ArticleCard.svelte';

	let articles = HomeLatestPosts(getLocale());
</script>

<div class="max-w-screen-lg mx-auto my-5 px-[30px] md:px-0">
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#if articles}
			{#each articles as article}
				<ArticleCard
					url={article.url}
					image={article.media}
					title={article.title}
					date={new Date(article.date).toLocaleDateString()}
					author={{ name: article.author.name, image: article.author.image }}
					readingTime={article.readingTime}
					categories={article.categories}
				/>
			{/each}
		{/if}
	</div>
</div>
