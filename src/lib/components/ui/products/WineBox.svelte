<script lang="ts">
	import type { Wine } from '$lib/types';
	import Button from '../buttons/Button.svelte';

	interface Props {
		wine: Wine;
		image: {
			src: string;
			alt?: string;
		};
		discount?: string;
	}
	let { wine, image, discount }: Props = $props();
</script>

<div class="wine wine-transparent">
	<div class="mb-3 flex-grow">
		<a href={wine.url}>
			<img
				src={image.src}
				alt={JSON.stringify(image.alt ? image.alt : wine.title)}
				class="mx-auto rounded-lg"
			/>
		</a>
	</div>
	{#if wine.score != '0.0'}
		<div class="absolute top-4 left-4">
			<div class="wine-stars">
				<span>★</span>
				{wine.score}
			</div>
		</div>
	{/if}
	<h5 class="wine-title">{wine.title}</h5>
	<p class="wine-price">{wine.price}</p>

	<!-- <a href={wine.url} class="wine-button">VER DETALHES</a> -->
	<div class="mt-2">
		<Button title="DETALHES" type="light" url={wine.url} borderDark={true} tracking="normal" />
	</div>
	{#if discount}
		<div class="absolute top-4 right-4 bg-black text-white px-2 py-1 text-xs rounded-lg">
			{discount} OFF
		</div>
	{/if}
</div>
