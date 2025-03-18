<script lang="ts">
	import Button from '$components/ui/buttons/Button.svelte';
	import type { Post } from '$lib/types';
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
		<img
			src={post.featuredImage.mediaItemUrl}
			alt="Receita de Geleia de Vinho"
			class="w-full h-[300px] object-cover rounded-2xl"
		/>
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
			<span>•</span>
			<div class="text-grey-medium">
				{new Date(post.date).toLocaleDateString()}
				{#if post.date !== post.modified}
					<span class="hidden md:inline">(atualizado)</span>
				{/if}
			</div>
		</div>

		<!-- Title -->
		<h2 class="text-lg md:text-xl mb-4 font-prata mt-5 uppercase">
			<a href="/article">{post.title}</a>
		</h2>

		<!-- Description -->

		<p class="text-grey-blueish text-[15px] md:text-[15px] font-roboto mb-4">
			{post.plainExcerpt}
		</p>

		<div class="mb-3 max-w-none md:max-w-[150px]">
			<Button title="Ler artigo" size="sm" type="light" url={post.uri} bold={true}></Button>
		</div>

		<!-- Tags -->
		<div class="text-sm text-grey-medium-dark flex items-center space-x-2">
			<a href="/category" class="text-sun font-bold py-1 rounded">Dica do Chef</a>
			<span>•</span>
			<span>Leitura em 6 min</span>
		</div>
	</div>
</div>
