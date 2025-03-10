<script lang="ts">
	import ProductAccordion from '$components/ui/products/ProductAccordion.svelte';
</script>

<div class="md:w-[50%] pt-8 pb-0 pl-8 pr-8 md:pr-0">
	<h1 class="bry-product-title pt-4">Familia Deicas Massimo Tannat</h1>
	<p class="mb-4 font-roboto text-[15px] tracking-[0.5px] text-grey-blueish font-normal">
		O vinho Familia Deicas Massimo Tannat é a mais sofisticada e refinada expressão da casta em
		Uruguai. Esse vinho destaca-se por sua intensidade, complexidade e elegância. Amadurecido em
		barricas de carvalho e ânforas de barro. Com um potencial de guarda de 10 a 15 anos.
	</p>

	<div class="mb-4">
		<span class="line-through text-gray-500 mr-2 text-grey-darkest font-roboto">R$1.199,00</span>
		<span class="text-2xl font-bold text-grey-darkest font-roboto">R$1.000,00</span>
	</div>

	<p class="text-grey-medium-dark font-roboto text-[15px] mb-4">Em estoque</p>

	<div class="flex items-center mb-4">
		<a
			href="/cart"
			class="px-8 py-2 text-white rounded-lg uppercase font-roboto text-[13px] tracking-[2.5px] text-center w-full md:w-auto"
			style="background-color: var(--bry-current-color)"
		>
			ADICIONAR À SACOLA
		</a>
	</div>

	<!-- Product accordion -->
	<ProductAccordion />
</div>
