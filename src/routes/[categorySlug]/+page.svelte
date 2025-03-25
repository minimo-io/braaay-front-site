<script lang="ts">
	import FilteringMenu from '$components/ui/menues/FilteringMenu.svelte';
	// import BottomArticle from '$components/ui/articles/BottomArticle.svelte';
	import SortingMenu from '$components/ui/menues/SortingMenu.svelte';
	import CategoryHeader from '$components/ui/headers/CategoryHeader.svelte';
	import WineBox from '$components/ui/products/WineBox.svelte';
	import type { Product } from '$lib/types';

	const { data } = $props();
	let products: Product[] = $state(data.products);
	// console.log('DATA', props.data.products);
</script>

<svelte:head>
	<title>Vinhos do Uruguai - Braaay</title>
	<meta name="description" content="" />
</svelte:head>

<main>
	<CategoryHeader />

	<FilteringMenu />

	<SortingMenu />

	<div class="max-w-screen-lg mx-[1.5rem] md:mx-auto mt-1 mb-[2rem]">
		<div class="bry-product-list">
			{#each products as product}
				<WineBox
					image={{
						src: product.image.url
					}}
					wine={{
						title: product.title,
						price: product.price,
						url: `/produto/${product.slug}`,
						score: product.averageRating
					}}
				/>
			{/each}

			<!-- <WineBox
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

			<WineBox
				image={{
					src: '/images/wines/PIZZATO-concentus.webp'
				}}
				wine={{
					title: 'Artesana Cabernet Franc/Merlot Reserva',
					price: 100.0,
					url: '/product',
					score: 4.5
				}}
			/>

			<WineBox
				image={{
					src: '/images/wines/Pizzato-Legno-Chardonnay.webp'
				}}
				wine={{
					title: 'Pizzato Chardonnay de Chardonnays',
					price: 119.0,
					url: '/product',
					score: 4.5
				}}
			/>

			<WineBox
				image={{
					src: '/images/wines/vinho-don-pascual-cabernet-merlot.webp'
				}}
				wine={{
					title: 'Mayos Jovem Branco da Basso',
					price: 43.0,
					url: '/product',
					score: 4.5
				}}
			/>

			<WineBox
				image={{
					src: '/images/wines/vinho-mayos-jovem-branco.webp',
					alt: 'Artesana Cabernet Franc/Merlot Reserva'
				}}
				wine={{
					title: 'Artesana Cabernet Franc/Merlot Reserva',
					price: 100.0,
					url: '/product',
					score: 4.5
				}}
				discount={'50%'}
			/> -->
		</div>
	</div>
</main>

<!-- Category article -->
<!-- <BottomArticle twoColumns={false} /> -->
