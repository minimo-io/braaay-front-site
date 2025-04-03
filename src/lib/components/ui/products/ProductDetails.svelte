<script lang="ts">
	import ProductAccordion from '$components/ui/products/ProductAccordion.svelte';
	import MoreInfoButton from '$components/ui/buttons/MoreInfoButton.svelte';
	import { stripHtml, correctPrice } from '$lib/utils/index';
	import type { Product } from '$lib/types';
	import { m } from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/paraglide/runtime';

	interface Props {
		product: Product;
	}

	let { product }: Props = $props();

	let stockStatus = $state('');
	if (product.stockStatus == 'OUT_OF_STOCK') {
		stockStatus = `<span style="color:red;">${m.outOfStock()}</span>`;
	} else if (product.stockStatus == 'IN_STOCK') {
		stockStatus = `<span>${m.inStock()}</span>`;
	}
	const clubCashbackValue = 10;
	const clubMoreInfoText = `<strong>${m.currencySymbol()}${correctPrice(clubCashbackValue)}</strong> em cashback no Clube`;
</script>

<div class="md:w-[50%] pt-8 pb-0 pl-8 pr-8 md:pr-0">
	<h1 class="bry-product-title pt-4">{product.title}</h1>
	<p class="mb-4 font-roboto text-[15px] tracking-[0.5px] text-grey-blueish font-normal">
		{@html stripHtml(product.shortDescription)}
	</p>

	<div class="mb-4">
		{#if product.regularPrice != product.price}
			<span class="line-through text-gray-500 mr-2 text-grey-darkest font-roboto"
				>{product.regularPrice}</span
			>
		{/if}
		<span class="text-2xl font-bold text-grey-darkest font-roboto">{product.price}</span>
		<h4 class="!text-[13px] font-bold mb-2">
			<span class="text-green-dark"
				>{m.currencySymbol()} {correctPrice(product.floatPrice * 0.95)}</span
			>
			{m.cashDiscountText()}
		</h4>
		<MoreInfoButton title={clubMoreInfoText} customStyles="!mx-0" url="/clube/" />
	</div>

	{#if stockStatus}
		<p class="text-grey-medium-dark font-roboto text-[15px] mb-4">{@html stockStatus}</p>
	{/if}
	<div class="flex items-center mb-4">
		<a
			href={localizeHref('/cart')}
			class="px-8 py-2 text-white rounded-lg uppercase font-roboto text-[13px] tracking-[2.5px] text-center w-full md:w-auto"
			style="background-color: var(--bry-current-color)"
		>
			ADICIONAR À SACOLA
		</a>
	</div>

	<!-- Product accordion -->
	<ProductAccordion {product} />
</div>
