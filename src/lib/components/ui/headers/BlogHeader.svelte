<script lang="ts">
	import { localizeHref } from '$lib/paraglide/runtime';
	import Button from '$components/ui/buttons/Button.svelte';
	import type { Post } from '$lib/types';
	import { ChevronRight } from '@lucide/svelte';
	import { formatDate } from '$lib/utils';
	import { m } from '$lib/paraglide/messages';
	interface Props {
		post: Post;
	}

	let { post }: Props = $props();
</script>

<div
	class="max-w-screen-xl mx-auto flex flex-col md:flex-row rounded-md overflow-hidden pt-10 pb-5 md:pb-0 px-[30px] md:px-10"
>
	<!-- Image Section -->
	<div class="lg:w-1/2 max-h-[300px] self-center">
		<a href={localizeHref(post.uri)}>
			<img
				src={post.featuredImage.mediaItemUrl}
				alt="Receita de Geleia de Vinho"
				class="w-full h-[300px] object-cover rounded-2xl"
			/>
		</a>
	</div>

	<!-- Text Content Section -->
	<div class="lg:w-1/2 pt-10 px-5 md:p-10">
		<!-- Metadata -->
		<div class="text-sm flex items-center space-x-2 mb-2">
			<span class="font-medium flex align-middle justify-center">
				<img
					src={post.author.avatar.url}
					alt={post.author.name}
					class="self-center rounded-full w-9 h-9 mr-2"
				/>
				<span class="self-center text-sm md:text-lg">{post.author.name}</span>
			</span>
			{#if post.date}
				<span>•</span>
				<div class="text-grey-medium">
					{formatDate(post.date)}
					{#if post.date !== post.modified}
						<span class="hidden md:inline">({m.updated()})</span>
					{/if}
				</div>
			{/if}
		</div>

		<!-- Title -->
		<h1 class="text-lg md:text-xl mb-4 font-prata mt-5 uppercase">
			<a href={localizeHref(post.uri)}>{post.title}</a>
		</h1>

		<!-- Description -->

		<p class="text-grey-blueish text-[15px] md:text-[15px] font-roboto mb-4">
			{post.plainExcerpt}
		</p>

		<div class="mb-3 max-w-none md:max-w-[150px]">
			<Button title="Ler artigo" size="sm" type="light" url={localizeHref(post.uri)} bold={true} />
		</div>

		<!-- Tags -->
		<div class="text-sm text-grey-medium-dark flex items-center space-x-2">
			<div class="flex items-center gap-0">
				{#each post.categories as category, i (i)}
					{#if category.name != 'Blog'}
						<!-- <a href={localizeHref(category.uri)} class="text-sun font-bold py-1 rounded">
						{category.name}
					</a> -->
						<span class="text-sun font-bold py-1 rounded">
							{category.name}
						</span>
						{#if i + 1 != post.categories.length}
							<span class="text-xs font-bold">
								<ChevronRight class="h-3" />
							</span>
						{/if}
					{/if}
				{/each}
			</div>

			<!-- <span>•</span>
			<span>Leitura em 6 min</span> -->
		</div>
	</div>
</div>
