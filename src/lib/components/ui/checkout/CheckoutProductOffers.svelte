<script lang="ts">
	import PrevNextButton from '../buttons/PrevNextButton.svelte';
	import Button from '../buttons/Button.svelte';
	import onSaleProducts from '$lib/data/jsons/on-sale-products.json';
	import { getLocale } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';
	import { setShippingDetails } from '$stores/shippingDetails.state.svelte';
	import { activateMiniCart, addToCart } from '$stores/cart.store.svelte';
	import { browser } from '$app/environment';
	import type { CartItem } from '$lib/types';

	let onSaleForLang = onSaleProducts[getLocale()];
	let processing = $state(false);

	const handleAddToCart = async (item: CartItem) => {
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

{#if onSaleForLang.length}
	<div class="flex items-center justify-between mb-2 pl-2 mt-3">
		<div class="uppercase font-bold font-roboto text-sm">🎉&nbsp;&nbsp;{m.superOffers()}</div>

		<!-- <div class="flex items-center">
			<PrevNextButton
				moveBackward={true}
				action={() => {
					alert("Let's move backard");
				}}
			/>
			<PrevNextButton
				moveForward={true}
				action={() => {
					alert("Let's move forward");
				}}
			/>
		</div> -->
	</div>

	<div class="bg-yellow-light border-grey-light border rounded-lg border-dashed p-5 mb-2">
		<div class="flex justify-center align-middle">
			<div class="flex flex-col md:flex-row">
				{#each onSaleForLang.slice(0, 2) as product, i (i)}
					{#if i == 0}
						<div class="md:border-r md:border-dashed md:border-grey-light md:mr-4 md:pr-4">
							<div class="flex items-center md:mx-auto md:justify-center">
								<img
									src={product.image.mediaItemUrl}
									alt={product.image.altText}
									class="mr-4 h-20"
								/>
								<div>
									<h2 class="font-bold leading-none mb-1 text-[14px]">{product.name}</h2>
									<div>
										<span class="text-grey-dark line-through text-[14px]">
											{product.regularPrice}
										</span>
										<span class="text-green-dark font-bold ml-2 text-[14px]">
											{product.priceString}</span
										>
									</div>
								</div>
							</div>
							<div class="bry-dashed-line my-5"></div>
							<p class="font-bold text-sm text-left md:text-center">Oferta imperdível!</p>
							<p class="mt-2 text-xs text-left md:text-center">
								Não perca a oportunidade, adquira agora esta promoção exclusiva.
							</p>

							<div class="mt-4">
								<Button
									title={m.addToCart()}
									rounded="lg"
									type="light"
									size="sm"
									action={() =>
										handleAddToCart({
											id: product.id,
											name: product.name,
											priceString: product.priceString,
											price: product.price,
											regularPrice: product.regularPrice,
											quantity: product.quantity,
											maxQuantity: product.maxQuantity ?? 0,
											image: {
												altText: product.image.altText,
												url: product.image.mediaItemUrl
											},
											sku: product.sku,
											uri: product.uri
										})}
								>
									{#snippet icon()}
										<!-- <Headset class="lucide-button" /> -->
									{/snippet}
								</Button>
							</div>
						</div>
					{:else}
						<div class="hidden md:block">
							<div class="flex items-center md:mx-auto md:justify-center">
								<img
									src={product.image.mediaItemUrl}
									alt={product.image.altText}
									class="mr-4 h-20"
								/>
								<div>
									<h2 class="font-bold text-[14px] leading-none mb-1">
										{product.name}
									</h2>
									<div>
										<span class="text-grey-dark line-through text-[14px]">
											{product.regularPrice}
										</span>
										<span class="ml-2 text-green-dark font-bold text-[14px]">
											{product.priceString}</span
										>
									</div>
								</div>
							</div>
							<div class="bry-dashed-line my-5"></div>
							<p class="font-bold text-sm text-left md:text-center">Oferta imperdível!</p>
							<p class="mt-2 text-xs text-left md:text-center">
								Não perca a oportunidade, adquira agora esta promoção exclusiva.
							</p>

							<div class="mt-4">
								<Button
									title={m.addToCart()}
									rounded="lg"
									type="light"
									size="sm"
									action={() =>
										handleAddToCart({
											id: product.id,
											name: product.name,
											priceString: product.priceString,
											price: product.price,
											regularPrice: product.regularPrice,
											quantity: product.quantity,
											maxQuantity: product.maxQuantity ?? 0,
											image: {
												altText: product.image.altText,
												url: product.image.mediaItemUrl
											},
											sku: product.sku,
											uri: product.uri
										})}
								>
									{#snippet icon()}
										<!-- <Headset class="lucide-button" /> -->
									{/snippet}
								</Button>
							</div>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
{/if}
