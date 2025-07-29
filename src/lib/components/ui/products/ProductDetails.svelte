<script lang="ts">
	import ProductAccordion from '$components/ui/products/ProductAccordion.svelte';
	import MoreInfoButton from '$components/ui/buttons/MoreInfoButton.svelte';
	import { stripHtml, correctPrice, calculateCashback } from '$lib/utils/index';
	import type { Product, ProductAttributes, ProductCategory } from '$lib/types';
	import { m } from '$lib/paraglide/messages';
	import { type CartItem } from '$lib/types/cart.types';
	import { activateMiniCart, addToCart } from '$stores/cart.store.svelte';
	import { browser } from '$app/environment';
	import { setShippingDetails } from '$stores/shippingDetails.state.svelte';
	import { AppConfig } from '$config';
	import { localizeHref } from '$lib/paraglide/runtime';

	interface Props {
		product: Product;
		attributes: ProductAttributes | undefined;
		productCategories: ProductCategory[] | undefined;
	}

	let { product, attributes, productCategories }: Props = $props();

	let stockStatus = $state('');
	if (product.stockStatus == 'OUT_OF_STOCK') {
		stockStatus = `<span style="color:red;">${m.outOfStock()}</span>`;
	} else if (product.stockStatus == 'IN_STOCK') {
		stockStatus = `<span>${m.inStock()}</span>`;
	}
	const cashbackValue = calculateCashback(product.floatPrice, AppConfig.cashbackPercentage);
	const clubMoreInfoText = `Ganhe <strong>${m.currencySymbol()}${correctPrice(cashbackValue)}</strong> em cashback no Clube`;

	let reversedCategories: ProductCategory[] = [...(productCategories ?? [])].reverse() ?? [];

	const item: CartItem = {
		id: product.id,
		sku: product.sku,
		uri: product.uri,
		name: product.title,
		priceString: product.price,
		price: product.floatPrice,
		regularPrice: product.regularPrice,
		quantity: 1,
		maxQuantity: product.stockQuantity,
		image: product.image
	};

	let processing = $state(false);
	let originalButtonRef: HTMLButtonElement | null = $state(null);
	let showFixedButton = $state(false);

	// Track button visibility with Intersection Observer
	$effect(() => {
		if (browser && originalButtonRef) {
			const observer = new IntersectionObserver(
				([entry]) => {
					// Show fixed button when original is NOT in viewport
					showFixedButton = !entry.isIntersecting;
				},
				{
					root: null,
					threshold: 0 // Trigger when 0% of element is visible
				}
			);

			observer.observe(originalButtonRef);

			return () => {
				observer.unobserve(originalButtonRef!);
				observer.disconnect();
			};
		}
	});

	const handleAddToCart = async () => {
		processing = true;
		setShippingDetails([]);
		addToCart(item, () => {
			if (browser) {
				// toast.success(m.addingToCartOk(), { closable: true });
			}
		});
		activateMiniCart();
		processing = false;
	};
</script>

<div class="md:w-[50%] pt-8 pb-0 pl-8 pr-8 md:pr-0 relative">
	<!-- Breadcrumbs -->
	<ul
		id="breadcrumb"
		class="flex text-xs text-grey-medium-dark space-x-2 items-center"
		itemscope
		itemtype="https://schema.org/BreadcrumbList"
	>
		<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
			<a href={localizeHref('/')} itemprop="item">
				<span itemprop="name">{m.start()}</span>
			</a>
			<meta itemprop="position" content="1" />
		</li>

		{#if productCategories}
			<li class="text-grey-medium-dark">›</li>
			{#each reversedCategories as category, i (i)}
				<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
					<a href={localizeHref(category.uri)} itemprop="item" class="hover:underline">
						<span itemprop="name">{category.name}</span>
					</a>
					<meta itemprop="position" content={(i + 2).toString()} />
				</li>
				{#if i + 1 < reversedCategories.length}
					<li class="text-grey-medium-dark">›</li>
				{/if}
			{/each}
		{/if}
	</ul>

	<!-- Product title -->
	<h1 class="bry-product-title pt-4">{product.title}</h1>

	<!-- Produt short description  -->
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
				>{m.currencySymbol()}{correctPrice(product.floatPrice * 0.95)}</span
			>
			{m.cashDiscountText()}
		</h4>
		{#if AppConfig.cashbackEnabled}
			<MoreInfoButton title={clubMoreInfoText} customStyles="!mx-0 " url="/clube/" />
		{/if}
	</div>

	{#if stockStatus}
		<p class="text-grey-medium-dark font-roboto text-[15px] mb-4">{@html stockStatus}</p>
	{/if}
	<div class="flex items-center mb-4">
		{#if product.stockStatus == 'IN_STOCK'}
			<button
				bind:this={originalButtonRef}
				onclick={() => handleAddToCart()}
				class="px-8 py-2 text-white rounded-lg uppercase font-roboto text-[13px] tracking-[2.5px] text-center w-full md:w-auto"
				style="background-color: var(--bry-current-color)"
				disabled={processing}
			>
				{#if processing}
					{m.addingToCart()}
				{:else}
					{m.addToCart()}
				{/if}
			</button>
		{:else}
			<button
				bind:this={originalButtonRef}
				onclick={() => {
					window.location.href = `${AppConfig.whatsappLink}?text=Olá,%20quero%20conhecer%20sobre%20a%20pré-venda%20do%20vinho%20${product.title}`;
				}}
				class="px-8 py-2 text-white rounded-lg uppercase font-roboto text-[13px] tracking-[2.5px] text-center w-full md:w-auto !bg-green-dark font-semibold"
				style="background-color: var(--bry-current-color)"
			>
				{m.availableViaWhatsapp()}
			</button>
		{/if}
	</div>

	<!-- Product accordion -->
	<ProductAccordion {product} {attributes} {productCategories} />

	<!-- Fixed bottom button -->
	{#if showFixedButton}
		<div
			class="fixed bottom-0 left-0 right-0 bg-transparent glass px-4 py-3 z-50 md:max-w-screen-lg md:mx-auto rounded-t-lg"
		>
			{#if product.stockStatus == 'IN_STOCK'}
				<button
					onclick={() => handleAddToCart()}
					class="w-full py-2 text-white rounded-lg uppercase font-roboto text-[14px] tracking-wider font-medium"
					style="background-color: var(--bry-current-color)"
					disabled={processing}
				>
					{#if processing}
						{m.addingToCart()}
					{:else}
						{m.addToCart()} — {product.price}
					{/if}
				</button>
			{:else}
				<button
					onclick={() => {
						window.location.href = `${AppConfig.whatsappLink}?text=Olá,%20quero%20conhecer%20sobre%20a%20pré-venda%20do%20vinho%20${product.title}`;
					}}
					class="px-8 py-2 text-white rounded-lg uppercase font-roboto text-[13px] tracking-[2.5px] text-center w-full md:w-auto !bg-green-dark font-semibold"
					style="background-color: var(--bry-current-color)"
				>
					{m.availableViaWhatsapp()}
				</button>
			{/if}
		</div>
	{/if}
</div>
