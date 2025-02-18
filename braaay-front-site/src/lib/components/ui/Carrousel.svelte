<!-- Carrousel -->
<div id="glide-carousel" class="glide">
	<div class="glide__track" data-glide-el="track">
		<ul class="glide__slides">
			<li class="glide__slide w-full">
				<a href="./">
					<img
						src="/images/carousel/placeholder.webp"
						alt="placeholder 2"
						class="carousel-image w-full"
						data-desktop="braaay-carousel-desktop-1.webp"
						data-mobile="braaay-carousel-mobile-1.png"
						width="800"
						height="600"
					/>
				</a>
			</li>
			<li class="glide__slide w-full">
				<a href="/">
					<img
						src="/images/carousel/placeholder.webp"
						alt="placeholder 3"
						class="carousel-image w-full"
						data-desktop="braaay-carousel-desktop-2.webp"
						data-mobile="braaay-carousel-mobile-2.png"
						width="800"
						height="600"
					/>
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
		<button class="glide__bullet" aria-label="bullet" data-glide-dir="=0"></button>
		<button class="glide__bullet" aria-label="bullet" data-glide-dir="=1"></button>
		<button class="glide__bullet" aria-label="bullet" data-glide-dir="=2"></button>
		<!-- Add more bullets based on the number of slides -->
	</div>
</div>
