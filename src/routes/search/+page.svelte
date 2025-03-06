<script>
	import FilteringMenu from '$components/ui/menues/FilteringMenu.svelte';
	import SortingMenu from '$components/ui/menues/SortingMenu.svelte';
</script>

<main class="w-full mx-auto">
	<FilteringMenu />

	<SortingMenu />

	<!-- Product list -->
	<div class="max-w-screen-lg mx-[1.5rem] md:mx-auto mt-1 mb-[2rem]">
		<div class="bry-product-list">
			<!-- Wine Box 1 -->
			<div class="wine wine-transparent">
				<div class="mb-3 flex-grow">
					<img
						src="/images/wines/Deica-2-1.webp"
						alt="Pizzato Merlot de Merlots 2022"
						class="mx-auto"
					/>
				</div>
				<div class="absolute top-4 left-4">
					<div class="wine-stars">
						<span>★</span>
						4.5
					</div>
				</div>
				<h5 class="wine-title">Pizzato Merlot de Merlots 2022</h5>
				<p class="wine-price">R$ 150</p>
				<a href="/product" class="wine-button">VER DETALHES</a>
			</div>

			<!-- Wine Box 2 -->
			<div class="wine wine-transparent">
				<div class="mb-3 flex-grow">
					<img
						src="/images/wines/PIZZATO-concentus.webp"
						alt="Artesana Cabernet Franc/Merlot Reserva"
						class="mx-auto"
					/>
				</div>
				<div class="absolute top-4 left-4">
					<div class="wine-stars">
						<span>★</span>
						4.5
					</div>
				</div>
				<h5 class="wine-title">Artesana Cabernet Franc/Merlot Reserva</h5>
				<p class="wine-price">R$ 100</p>
				<a href="/" class="wine-button">VER DETALHES</a>
			</div>

			<!-- Wine Box 3 -->
			<div class="wine wine-transparent">
				<div class="mb-3 flex-grow">
					<img
						src="/images/wines/Pizzato-Legno-Chardonnay.webp"
						alt="Pizzato Chardonnay de Chardonnays"
						class="mx-auto"
					/>
				</div>
				<div class="absolute top-4 left-4">
					<div class="wine-stars">
						<span>★</span>
						4.5
					</div>
				</div>
				<h5 class="wine-title">Pizzato Chardonnay de Chardonnays</h5>
				<p class="wine-price">R$ 119</p>
				<a href="/" class="wine-button">VER DETALHES</a>
			</div>

			<!-- Wine Box 4 -->
			<div class="wine wine-transparent">
				<div class="mb-3 flex-grow">
					<img
						src="/images/wines/vinho-don-pascual-cabernet-merlot.webp"
						alt="Mayos Jovem Branco da Basso"
						class="mx-auto"
					/>
				</div>
				<div class="absolute top-4 left-4">
					<div class="wine-stars">
						<span>★</span>
						4.5
					</div>
				</div>
				<h5 class="wine-title">Mayos Jovem Branco da Basso</h5>
				<p class="wine-price">R$ 43</p>
				<a href="/" class="wine-button">VER DETALHES</a>
			</div>

			<!-- Wine Box 6 (with discount) -->
			<div class="wine wine-transparent !bg-white">
				<div class="mb-3 flex-grow">
					<img
						src="/images/wines/vinho-mayos-jovem-branco.webp"
						alt="Artesana Cabernet Franc/Merlot Reserva"
						class="mx-auto"
					/>
				</div>
				<div class="absolute top-4 left-4">
					<div class="wine-stars">
						<span>★</span>
						4.5
					</div>
				</div>
				<h5 class="wine-title">Artesana Cabernet Franc/Merlot Reserva</h5>
				<p class="wine-price">R$ 100</p>
				<a href="/" class="wine-button">VER DETALHES</a>
				<div class="absolute top-4 right-4 bg-black text-white px-2 py-1 text-xs rounded-lg">
					55% OFF
				</div>
			</div>
		</div>
	</div>
</main>
