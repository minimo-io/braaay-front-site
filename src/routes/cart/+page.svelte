<script lang="ts">
	import { onMount, type Component } from 'svelte';
	import { slide } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';
	import { m, seoDivider } from '$lib/paraglide/messages';

	import { cart, calculateDiscount, clearAllCoupons } from '$stores/cart.store.svelte';
	import Button from '$components/ui/buttons/Button.svelte';
	import Divider from '$components/ui/dividers/Divider.svelte';
	import { Gift, Sparkle, Truck, X } from '@lucide/svelte';
	import { openModal } from '$stores/modalState.state.svelte';
	import CouponForm from '$components/ui/forms/couponForm.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
	import CartItemElement from '$components/ui/cart/CartItemElement.svelte';
	import { addCouponToCart, correctPrice } from '$lib/utils';
	import { MoreInfoButton } from '$components/ui/buttons';
	import { COUPON_CLEAR_ALL } from '$lib/graphql/mutations';
	import { getUrqlClient } from '$stores/urqlClient.state.svelte';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';
	import ShippingForm from '$components/ui/forms/shippingForm.svelte';
	import { shippingDetails } from '$stores/shippingDetails.state.svelte';
	import Meta from '$components/layout/Meta.svelte';
	import { page } from '$app/state';
	import { AppConfig } from '$config';

	// Cart amount
	let hasItems = $state(false);
	let totalCartAmount = $state(0);
	let totalAmount = $state(0);
	let discounts = $state(0);
	let couponsCount = $state(0);
	let couponName = $state('');

	cart.subscribe((cart) => {
		totalCartAmount = cart.items.reduce((count, item) => count + item.quantity, 0);
		totalAmount = cart.items.reduce((count, item) => count + item.price * item.quantity, 0);
		if (cart.coupons) {
			couponsCount = cart.coupons.length;
			for (const couponCode of cart.coupons) {
				discounts = calculateDiscount(couponCode);
				couponName = couponCode;
				break; // just one coupon allowed
			}
		}

		hasItems = cart.items.length > 0;
	});
	let totalCartAmountWithDiscounts = $derived(totalAmount - discounts);

	onMount(() => {
		if (
			page.url.searchParams.has('adicionar-cupom') ||
			page.url.searchParams.has('agregar-cupon')
		) {
			addCouponToCart();
		}
	});
</script>

<Meta
	title="{m.seoCartTitle()} {m.seoDivider()} {m.seoBase()}"
	description={m.seoCartDescription()}
	noindex={true}
/>
<main>
	<!-- Cart -->
	<div class="max-w-screen-lg mx-[30px] md:mx-auto">
		<div class="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-0 md:gap-7">
			<div class="mt-8">
				<div class="flex justify-start mb-4">
					<div class="scale-75 relative right-2">
						<a href="/" class="bry-cart relative h-[25px] uppercase flex items-center">
							<i class="bry-bag"></i>
							<span
								class="flex justify-center items-center rounded-full bg-sun p-0 w-4 h-4 lg:w-5 lg:h-5 font-roboto font-bold text-[10px] text-white ring-inset absolute top-1 lg:top-0 -right-2"
							>
								{totalCartAmount}
							</span>
						</a>
					</div>

					<h1 class="text-[19px] ml-0 font-roboto font-extrabold">{m.cartMyCart()}</h1>
				</div>
				<div class="flex flex-col">
					<div class="border border-grey-lighter bg-white rounded-lg p-5 order-1">
						{#if $cart.items.length > 0}
							{#each $cart.items as item (item.id)}
								<div animate:flip={{ duration: 200, easing: quintOut }}>
									<!-- Cart item -->
									<CartItemElement cartItem={item} />

									{#if item !== $cart.items[$cart.items.length - 1]}
										<div class="my-5 border-t border-t-grey-lighter"></div>
									{/if}
								</div>
							{/each}
						{:else}
							<p class="text-center font-bold">{@html m.emptyCart()}</p>
						{/if}
					</div>

					<!-- <h2 class="text-[20px] mb-4 mt-10 ml-2 font-prata">
                                Aproveite as ofertas
                            </h2> -->
					<!-- Promo clube main -->
					<div
						class="border order-2 bg-white rounded-md border-sun shadow-md p-6 mx-auto mt-6 mb-28 hidden md:block"
					>
						<div class="text-center">
							<h2 class="text-xl tracking-widest text-sun font-prata flex justify-center Xscale-90">
								<Sparkle class="pr-1" />
								<span>SEJA PASSPORT!</span>
								<Sparkle class="pl-1" />
							</h2>
							<p class="text-lg font-semibold mt-2 leading-[23px] w-5/6 mx-auto">
								Ganhe 10% em cashback, fretes grátis e mais!
							</p>
							<p class="text-xs text-grey-dark mt-3 leading-2 w-5/6 block mx-auto">
								Junte-se ao APP do Clube e
								<strong>Economize, Ganhe, Diverta-se com vinho!</strong>
								Com cashbacks entre 5 e 10% em toda compra, 3 vinhos top todo mês + fretes grátis! Além
								de experiências com outros Passport e compras coletivas!
							</p>
							<!-- <button class="bg-sun text-white font-medium py-1 px-4 rounded-full mt-4">
								Adicionar ao carrinho
							</button> -->
							<div class="w-1/3 py-2 mx-auto">
								<Button
									title="Adicionar ao carrinho"
									type="sun"
									url={localizeHref('/club/')}
									tracking="normal"
									bold={false}
								/>
							</div>
							<p class="text-xs text-gray-500 mt-2">
								<a href={localizeHref('/club/')} class="text-blue-500 underline">Saiba mais</a>
							</p>
						</div>
					</div>
				</div>

				<!-- Quick Offer -->
				<!-- <div class="relative">
                            <a href="#" class="not-hover-effect hidden md:block relative">
                                <picture>
                                    <source
                                        srcset="./images/happy-wine-home-desktop-mobile.webp"
                                        media="(max-width: 640px)"
                                    />

                                    <source
                                        srcset="./images/carousel/braaay-carousel-desktop-1.webp"
                                        media="(min-width: 768px)"
                                    />
                                    <img
                                        alt="oferta-do-mes"
                                        class="rounded-lg mb-5 mt-2 border border-grey-lighter opacity-90"
                                        src="/src/images/carousel/braaay-carousel-desktop-1.webp"
                                    />
                                </picture>
                                <div
                                    href="#"
                                    class="btn block absolute not-hover-effect hover:opacity-90 transition-all scale-90 bottom-2 right-2 border-0 text-white bg-blue uppercase md:items-center text-center mt-3 lg:mt-0 self-center"
                                >
                                    ADICIONAR AO CARRINHO
                                </div>
                            </a>
                        </div> -->
			</div>

			<div class="mt-8">
				<h2 class="text-[19px] ml-2 mb-4 font-roboto">{m.cartSummaryTitle()}</h2>

				<div class="bg-white py-4 px-5 border border-grey-lighter rounded-lg">
					<div class="flex justify-between mt-2">
						<p class="font-light text-[15px] self-center">
							Sub-total ({totalCartAmount} item{totalCartAmount > 1 ? 's' : ''})
						</p>
						<p class="font-roboto self-center">{m.currencySymbol()} {correctPrice(totalAmount)}</p>
					</div>
					<div class="my-4 border-t border-t-grey-lighter"></div>
					<!-- Coupons -->
					<div class="flex justify-between items-center">
						<div class="!font-light font-roboto text-[15px] self-center flex flex-col">
							{#if couponsCount < 1}
								{m.discountCouponTitle()}
							{:else}
								<div>
									Cupom: <span class="font-bold">{couponName}</span>
								</div>
							{/if}
							{#if couponsCount >= 1}
								<MoreInfoButton
									title={m.remove()}
									action={async () => {
										// Clear remote coupons session
										toggleLoader();
										try {
											await getUrqlClient().client.mutation(COUPON_CLEAR_ALL, {}).toPromise();
											// emptyCart();
										} catch (err) {
											console.error('Failed to clear coupons from remote server', err);
										}
										clearAllCoupons();
										toggleLoader();
									}}
									customStyles="w-fit !ml-0 mt-2"
								/>
							{/if}
						</div>

						{#if couponsCount < 1}
							<Button
								title={m.add()}
								width="130px"
								size="sm-short"
								type="grey"
								disabled={!hasItems}
								borderDark={true}
								customPx="max-h-min"
								action={() => {
									openModal({
										header: 'Adicionar cupom',
										content: CouponForm as Component
									});
								}}
							>
								{#snippet icon()}
									<Gift class="lucide-button" />
								{/snippet}
							</Button>
						{:else}
							<span class="font-roboto text-red-dark"
								>- {m.currencySymbol()} {correctPrice(discounts)}</span
							>
						{/if}
					</div>

					{#if !shippingDetails.details || shippingDetails.details.length == 0}
						<div class="my-4 border-t border-t-grey-lighter"></div>
						<div class="flex justify-between items-center">
							<p class="font-light text-[15px] self-center">Frete</p>

							<Button
								title="CALCULAR"
								disabled={!hasItems}
								size="sm-short"
								width="130px"
								type="grey"
								borderDark={true}
								customPx="max-h-min disabled:opacity-20"
								action={() => {
									openModal({
										header: 'Calcular frete',
										content: ShippingForm as Component
									});
								}}
							>
								{#snippet icon()}
									<Truck class="lucide-button" />
								{/snippet}
							</Button>
						</div>
					{/if}

					{#if shippingDetails.details && shippingDetails.details.length > 0}
						<div in:slide={{ duration: 200 }} out:slide={{ duration: 200 }}>
							<div class="my-4 border-t border-t-grey-lighter"></div>
							<div class="flex flex-col">
								<div class="flex justify-between items-center">
									<span
										class="font-bold text-[10px] mb-2 bg-blue w-fit py-1 px-2 rounded text-white uppercase"
										>Estimativas de envio</span
									>

									<button onclick={() => (shippingDetails.details = [])}
										><X class="h-3 m-0 p-0 ml-2 mb-2 text-grey-medium" /></button
									>
								</div>

								{#each shippingDetails.details as rate}
									<div class="flex text-sm justify-between text-grey-dark items-center">
										<div class="text-[11px] truncate">{rate.label}</div>
										<div class="text-xs">{m.currencySymbol()} {rate.cost}</div>
									</div>
								{/each}
							</div>
						</div>
					{/if}

					<Divider color="blue" extraClasses="my-4 !border-b-grey-lighter" />
					<div class="flex justify-between pt-1 mb-2">
						<p class="font-roboto font-bold">Valor total</p>
						<div class="flex flex-col font-roboto text-right">
							<span class="font-bold text-[17px]"
								>{m.currencySymbol()}
								{correctPrice(totalCartAmountWithDiscounts)} no Pix <br />+ Envio</span
							>

							<span class="text-sm text-[#28BA48] font-bold leading-4 pt-2">
								ou 4x de {m.currencySymbol()}
								{correctPrice(totalCartAmountWithDiscounts / 4)} sem juros
								{#if AppConfig.cashbackEnabled}
									<br />
									<a href={localizeHref('/club/')}
										><u>+ {AppConfig.cashbackPercentage}% em CASHBACK</u></a
									>
								{/if}
							</span>
						</div>
					</div>
					<div class="my-4 mb-1">
						{#if $cart.items.length > 0}
							<Button
								type="sun"
								url={localizeHref('/checkout/')}
								title={m.continue()}
								size="xl"
								tracking="normal"
								font="xl"
								bold={false}
							/>
						{/if}
					</div>
				</div>

				<!-- Promo clube lateral -->
				<div
					class="border bg-white rounded-md border-sun shadow-md p-6 max-w-sm mx-auto mt-6 md:hidden"
				>
					<div class="text-center">
						<h2 class="text-xl tracking-widest text-sun font-prata flex justify-center scale-90">
							<Sparkle class="pr-1" />
							<span>SEJA PASSPORT!</span>
							<Sparkle class="pl-1" />
						</h2>
						<p class="text-lg font-semibold mt-2 leading-[23px]">
							Ganhe 10% em cashback, fretes grátis e mais!
						</p>
						<p class="text-xs text-grey-dark mt-3 leading-2">
							Junte-se ao APP do Clube e
							<strong>Economize, Ganhe, Diverta-se com vinho!</strong>
							Com cashbacks entre 5 e 10% em toda compra, 3 vinhos top todo mês + fretes grátis! Além
							de experiências com outros Passport e compras coletivas!
						</p>
						<div class="mx-11 py-2">
							<Button
								title="Adicionar ao carrinho"
								type="sun"
								url={localizeHref('/club/')}
								tracking="normal"
							/>
						</div>

						<p class="text-xs text-gray-500 mt-2">
							<a href={localizeHref('/club/')} class="text-blue-500 underline">Saiba mais</a>
						</p>
					</div>
				</div>

				<!-- Extra cart elements -->
				<div class="mt-5">
					<!-- <h2 class="text-[19px] font-prata ml-2 mb-4">Entrega grátis</h2>
					<div class="bg-white py-3 px-5 border border-grey-lighter rounded-lg">
						<p class="text-xs mt-2 text-center">
							Faltam <strong>R$ 35,18</strong> para você conseguir frete grátis!
						</p>
						<div class="w-full bg-gray-200 rounded-full h-4 relative mb-2">
							<div
								class="bg-sun h-3 rounded-full transition-all duration-500 mt-3"
								style="width: 80%"
							></div>
							<span
								class="absolute inset-0 flex items-center justify-end pr-2 border-r border-r-grey-lighter text-[10px] font-semibold text-black"
							>
								80%
							</span>
						</div>
					</div> -->
					<Button
						title="Continuar comprando"
						size="sm"
						type="light"
						url={localizeHref('/')}
						tracking="normal"
					/>
				</div>

				<div class="hidden md:block md:my-36"></div>
			</div>
		</div>
	</div>
</main>
