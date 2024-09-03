<script>
	import { onMount } from 'svelte';
	import Glide from '@glidejs/glide/dist/glide.esm.js';

	/**
	 * @type {{ mount: () => void; destroy: () => void; }}
	 */
	let glide;

	onMount(() => {
		glide = new Glide('.glide', {
			type: 'carousel',
			startAt: 0,
			perView: 3,
			autoplay: 3000
		});

		glide.mount();

		// Cleanup on component destruction
		return () => {
			//glide.destroy();
		};
	});
</script>

<div class="glide">
	<div class="glide__track" data-glide-el="track">
		<ul class="glide__slides">
			<li class="glide__slide">Slide 1</li>
			<li class="glide__slide">Slide 2</li>
			<li class="glide__slide">Slide 3</li>
			<li class="glide__slide">Slide 4</li>
			<li class="glide__slide">Slide 5</li>
		</ul>
	</div>
	<div class="glide__arrows" data-glide-el="controls">
		<button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
		<button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
	</div>
</div>

<style>
	.glide {
		max-width: 600px;
		margin: auto;
	}
	.glide__slide {
		text-align: center;
		font-size: 24px;
		padding: 20px;
		background: #f0f0f0;
		border-radius: 8px;
	}
</style>
