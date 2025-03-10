<script>
	import FilteringMenu from '$components/ui/menues/FilteringMenu.svelte';
	import SortingMenu from '$components/ui/menues/SortingMenu.svelte';
	import WineBox from '$components/ui/products/WineBox.svelte';
</script>

<main class="w-full mx-auto">
	<FilteringMenu />

	<SortingMenu />

	<!-- Product list -->
	<div class="max-w-screen-lg mx-[1.5rem] md:mx-auto mt-1 mb-[2rem]">
		<div class="bry-product-list">
			<!-- Wine Box 0 -->
			<WineBox
				image={{
					src: '/images/wines/vinho-don-pascual-tannat-merlot.webp'
				}}
				wine={{
					title: 'Don Pascual Cabernet Franc',
					price: 150.0,
					url: '/product',
					score: 4.5
				}}
			/>

			<!-- Wine Box 1 -->
			<WineBox
				image={{
					src: '/images/wines/Deica-2-1.webp'
				}}
				wine={{
					title: 'Pizzato Merlot de Merlots 2022',
					price: 150.0,
					url: '/product',
					score: 4.5
				}}
			/>

			<!-- Wine Box 2 -->
			<WineBox
				image={{
					src: './images/wines/PIZZATO-concentus.webp'
				}}
				wine={{
					title: 'Artesana Cabernet Franc/Merlot Reserva',
					price: 100.0,
					url: '/',
					score: 4.5
				}}
			/>

			<!-- Wine Box 3 -->
			<WineBox
				image={{
					src: './images/wines/Pizzato-Legno-Chardonnay.webp'
				}}
				wine={{
					title: 'Pizzato Chardonnay de Chardonnays',
					price: 119.0,
					url: '/',
					score: 4.5
				}}
			/>

			<!-- Wine Box 4 -->
			<WineBox
				image={{
					src: './images/wines/vinho-don-pascual-cabernet-merlot.webp'
				}}
				wine={{
					title: 'Mayos Jovem Branco da Basso',
					price: 43.0,
					url: '/',
					score: 4.5
				}}
			/>

			<!-- Wine Box 6 (with discount) -->
			<WineBox
				image={{
					src: './images/wines/vinho-mayos-jovem-branco.webp',
					alt: 'Artesana Cabernet Franc/Merlot Reserva'
				}}
				wine={{
					title: 'Artesana Cabernet Franc/Merlot Reserva',
					price: 100.0,
					url: '/',
					score: 4.5
				}}
				discount={'50%'}
			/>
		</div>
	</div>
</main>
