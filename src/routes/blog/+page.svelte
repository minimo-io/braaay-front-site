<!-- src/routes/blog/+page.svelte -->
<script lang="ts">
	import ArticleCard from '$components/ui/articles/components/ArticleCard.svelte';
	import SectionDivider from '$components/ui/dividers/SectionDivider.svelte';
	import BlogHeader from '$components/ui/headers/BlogHeader.svelte';
	import TitleSection from '$components/ui/TitleSection.svelte';
	import { Send } from '@lucide/svelte';
	import Button from '$components/ui/buttons/Button.svelte';

	import type { PageData } from './$types';
	import type { Post } from '$lib/types';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import Meta from '$components/layout/Meta.svelte';
	import { m } from '$lib/paraglide/messages';
	import SchemaPage from '$components/layout/Schemas/SchemaPage.svelte';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';

	let { data }: { data: PageData } = $props();

	// let firstPost: Post | undefined = $state();

	// Instead of mutating data.posts, create a local copy
	let postsCopy: Post[] = data.posts ? [...data.posts] : [];
	let firstPost: Post | undefined = postsCopy.shift();
</script>

<!-- Meta -->
<Meta
	title="{m.seoBlogTitle()} {m.seoDivider()} {m.seoBase()}"
	description={m.seoBlogDescription()}
/>

<!-- Schema -->
<SchemaPage
	title={m.seoBlogTitle()}
	description={m.seoBlogDescription()}
	breadcrumbs={[
		{
			'@type': 'ListItem',
			position: 2,
			name: `Blog`,
			item: page.url.href
		}
	]}
/>

{#if firstPost}
	<main class="w-full mx-auto">
		<BlogHeader post={firstPost} />
	</main>
{/if}

<!-- Section with white background and divider -->
<section class="relative bg-white py-3 mt-10">
	<SectionDivider color="green" />
	<!-- Articles grid -->
	<div class="max-w-screen-lg mx-auto my-5 px-[30px]">
		<div class="max-w-full">
			<div class="mb-5">
				<TitleSection
					title="ÚLTIMOS ARTIGOS"
					description="Fique por dentro das tendências, dicas de harmonização, entrevistas, curiosidades e accesórios sobre vinhos!"
				>
					{#snippet button()}
						<Button
							title="Assine y Ganhe 15% OFF"
							size="md"
							type="sun"
							action={() => {
								document.cookie = 'teaserVisible=true; path=/';
								goto('./?teaser=true');
							}}
						>
							{#snippet icon()}
								<Send class="lucide-button" />
							{/snippet}
						</Button>
					{/snippet}
				</TitleSection>
			</div>

			<!-- Grid Container -->
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#if postsCopy && postsCopy.length > 0}
					{#each postsCopy as post (post.id)}
						<ArticleCard
							url={localizeHref(post.uri)}
							image={post.featuredImage.mediaItemUrl}
							title={post.title}
							date={new Date(post.date).toLocaleDateString()}
							author={{ name: post.author.name, image: post.author.avatar.url }}
							readingTime="Leitura em 6 min"
							categories={post.categories}
						/>
					{/each}
				{:else}
					<p>Sem artigos disponíveis.</p>
				{/if}
			</div>
		</div>
	</div>
</section>
