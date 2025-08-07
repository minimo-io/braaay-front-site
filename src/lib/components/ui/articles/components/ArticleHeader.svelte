<script lang="ts">
	import ArticleAuthor from './ArticleAuthor.svelte';
	import type { ArticleCreator, Post } from '$lib/types/index';
	interface Props {
		fullWidth: boolean;
		useCurrentColor?: boolean;
		article: Post;
		showAuthor?: boolean;
		size?: 'regular' | 'small';
	}
	let { fullWidth, useCurrentColor = false, article, size = 'regular' }: Props = $props();

	let author: ArticleCreator = article.author;

	let articleFinalImage = $derived(article.featuredImage.mediaItemUrl || '/images/uruguai.webp');
</script>

{#if fullWidth}
	<!-- Mostly for Blog Articles -->
	<div class="bry-header w-full h-[250px] max-h-[250px] bg-[#d1d1d0] relative mb-36">
		<div
			class="absolute inset-0 opacity-70 z-0"
			style="
    background-size: cover;
    background-image: url({articleFinalImage}),
      linear-gradient(to bottom, var(--bry-current-color), var(--bry-current-color));
    background-blend-mode: multiply;
  "
		></div>
		<!-- Header deck -->
		<!-- <h3 class="bry-header-deck">
                <a href="#" style="border-color: var(--bry-current-color)">Blog</a>
            </h3> -->
		<!-- Header title -->
		<h2 class="bry-header-title max-w-screen-lg !pt-0">
			{article.title}
		</h2>
		<!-- Header author -->
		<ArticleAuthor {author} />
	</div>
{:else}
	<!-- Mostly for products and categories -->
	<div
		class={[
			'bry-header mx-auto h-[200px] max-h-[200px] relative md:rounded-2xl mb-36',
			size == 'small' && 'w-full md:!max-w-[80%]'
		]}
	>
		<!-- -->
		<div
			class="absolute inset-0 opacity-100 z-0 md:rounded-2xl"
			style="
                    background-size: cover;
                    background-image: url({articleFinalImage}){useCurrentColor ? ',' : ';'}
					{useCurrentColor
				? 'linear-gradient(to bottom, var(--bry-current-color), var(--bry-current-color));'
				: ''}
                    background-blend-mode: multiply;
                "
		>
			<!-- <div class="glass border w-full h-full absolute top-0 left-0 md:rounded-2xl"></div> -->
		</div>

		<h3 class="bry-header-deck">
			<!-- <a href="/pais/uruguai/" style="border-color: var(--bry-current-color)">Uruguai</a> -->
		</h3>

		<h2 class="bry-header-title text-blue text-2xl md:text-3xl">{article.title}</h2>

		<ArticleAuthor author={article.author} />
	</div>
{/if}
