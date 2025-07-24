<script lang="ts">
	import { onMount } from 'svelte';
	import Glide from '@glidejs/glide';
	import '@glidejs/glide/dist/css/glide.core.css';
	import { localizeHref } from '$lib/paraglide/runtime';

	onMount(async () => {
		let glide = new Glide('#glide-carousel', {
			type: 'carousel',
			perView: 1,
			autoplay: 5000,
			hoverpause: true,
			gap: 0
		});

		glide.mount();
	});
</script>

<!-- Carrousel -->
<div id="glide-carousel" class="glide">
	<div class="glide__track" data-glide-el="track">
		<ul class="glide__slides">
			<li class="glide__slide w-full">
				<a
					href={localizeHref('/produto/confraria-entre-tacas-e-mulheres/')}
					class="not-hover-effect"
				>
					<picture>
						<!-- Mobile image: for screens up to 767px -->
						<source
							srcset="/images/carousel/braaay-carousel-mobile-1.jpg"
							media="(max-width: 767px)"
						/>
						<!-- Desktop image: for screens 768px and above -->
						<source
							srcset="/images/carousel/braaay-carousel-desktop-1.jpg"
							media="(min-width: 768px)"
						/>
						<!-- Fallback image -->
						<img
							src="/images/carousel/braaay-carousel-desktop-1.jpg"
							alt="placeholder 2"
							class="carousel-image w-full"
							width="800"
							height="600"
						/>
					</picture>
				</a>
			</li>
			<li class="glide__slide w-full">
				<a href="./" class="not-hover-effect">
					<picture>
						<!-- Mobile image: for screens up to 767px -->
						<source
							srcset="/images/carousel/frete-gratis-2025-mobile.png"
							media="(max-width: 767px)"
						/>
						<!-- Desktop image: for screens 768px and above -->
						<source
							srcset="/images/carousel/frete-gratis-2025-desktop.png"
							media="(min-width: 768px)"
						/>
						<!-- Fallback image -->
						<img
							src="/images/carousel/frete-gratis-2025-desktop.png"
							alt="placeholder 2"
							class="carousel-image w-full"
							width="800"
							height="600"
						/>
					</picture>
				</a>
			</li>

			<li class="glide__slide w-full">
				<a href="/" class="not-hover-effect">
					<picture>
						<!-- Mobile image: for screens up to 767px -->
						<source
							srcset="/images/carousel/braaay-carousel-mobile-2.png"
							media="(max-width: 767px)"
						/>
						<!-- Desktop image: for screens 768px and above -->
						<source
							srcset="/images/carousel/braaay-carousel-desktop-2.png"
							media="(min-width: 768px)"
						/>
						<!-- Fallback image -->
						<img
							src="/images/carousel/braaay-carousel-desktop-2.png"
							alt="placeholder 3"
							class="carousel-image w-full"
							width="800"
							height="600"
						/>
					</picture>
				</a>
			</li>
			<!-- Add more slides as needed -->
		</ul>
	</div>
	<!-- Dots for Slide Navigation -->
	<div
		class="glide__bullets absolute bottom-4 left-1/2 transform -translate-x-1/2"
		data-glide-el="controls[nav]"
	>
		<button class="glide__bullet" aria-label="bullet" data-glide-dir="=0">&nbsp;</button>
		<button class="glide__bullet" aria-label="bullet" data-glide-dir="=1">&nbsp;</button>
		<button class="glide__bullet" aria-label="bullet" data-glide-dir="=2">&nbsp;</button>
	</div>
</div>
