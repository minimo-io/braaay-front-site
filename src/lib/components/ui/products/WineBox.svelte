<script lang="ts">
	import type { Wine } from '$lib/types';

	interface Props {
		wine: Wine;
		image: {
			src: string;
			alt?: string;
		};
		discount?: string;
	}
	let props: Props = $props();
</script>

<div class="wine wine-transparent">
	<div class="mb-3 flex-grow">
		<img
			src={props.image.src}
			alt={JSON.stringify(props.image.alt ? props.image.alt : props.wine.title)}
			class="mx-auto"
		/>
	</div>
	<div class="absolute top-4 left-4">
		<div class="wine-stars">
			<span>★</span>
			{props.wine.score}
		</div>
	</div>
	<h5 class="wine-title">{props.wine.title}</h5>
	<p class="wine-price">R$ {props.wine.price}</p>
	<a href={props.wine.url} class="wine-button">VER DETALHES</a>
	{#if props.discount}
		<div class="absolute top-4 right-4 bg-black text-white px-2 py-1 text-xs rounded-lg">
			{props.discount} OFF
		</div>
	{/if}
</div>
