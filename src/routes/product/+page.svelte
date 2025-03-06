<script>
	import BottomArticleTwoColumns from '$components/ui/articles/BottomArticleTwoColumns.svelte';
	import ProductDetails from '$components/ui/products/ProductDetails.svelte';
	import ProductImage from '$components/ui/products/ProductImage.svelte';
</script>

<main class="max-w-screen-lg mx-auto">
	<!-- Main Product section -->
	<section class="flex flex-col md:flex-row mx-auto">
		<!-- Left side - Image -->
		<ProductImage />

		<!-- Right side - Product details -->
		<ProductDetails />
	</section>
</main>

<!-- Product Article -->
<BottomArticleTwoColumns />
