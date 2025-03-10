<script lang="ts">
	import ArticleAuthor from './ArticleAuthor.svelte';
	interface Props {
		fullWidth: boolean;
		useCurrentColor?: boolean; // -- use a gradient for header bg color or not
	}
	let { fullWidth, useCurrentColor = false }: Props = $props();
</script>

{#if fullWidth}
	<!-- Mostly for Blog Articles -->
	<div class="bry-header w-full h-[250px] max-h-[250px] bg-[#d1d1d0] relative mb-36">
		<div
			class="absolute inset-0 opacity-70 z-0"
			style="
    background-size: cover;
    background-image: url(/images/Geleia-de-Vinho.jpg),
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
			Vinhos brasileiros premiados que vão te surpreender
		</h2>
		<!-- Header author -->
		<ArticleAuthor />
	</div>
{:else}
	<!-- Mostly for products and categories -->
	<div
		class="bry-header mx-auto h-[200px] max-h-[200px] bg-[#d1d1d0] relative md:rounded-2xl mb-36"
	>
		<div
			class="absolute inset-0 opacity-70 z-0 md:rounded-2xl"
			style="
                    background-size: cover;
                    background-image: url(/images/uruguai.webp){useCurrentColor ? ',' : ';'}
					{useCurrentColor
				? 'linear-gradient(to bottom, var(--bry-current-color), var(--bry-current-color));'
				: ''}
                    background-blend-mode: multiply;
                "
		></div>

		<h3 class="bry-header-deck">
			<a href="/" style="border-color: var(--bry-current-color)">Uruguay</a>
		</h3>

		<h2 class="bry-header-title">A terra da uva Tannat</h2>
		<ArticleAuthor />
	</div>

	<!-- <div class="bry-header h-[200px] max-h-[200px] bg-[#d1d1d0] relative md:rounded-2xl mb-36">
			<div
				class="absolute inset-0 opacity-70 z-0 md:rounded-2xl"
				style="
                            background-size: cover;
                            background-image: url(./images/vinicola-don-pascual-uruguai.webp),
                                linear-gradient(to bottom, var(--bry-current-color), var(--bry-current-color));
                            background-blend-mode: multiply;
                        "
			></div>

			<h3 class="bry-header-deck">
				<a href="/" style="border-color: var(--bry-current-color)">Don Pascual</a>
			</h3>

			<h2 class="bry-header-title">Don Pascual Tannat Merlot</h2>

			<ArticleAuthor />
		</div> -->
{/if}
