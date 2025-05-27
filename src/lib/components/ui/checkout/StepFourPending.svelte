<script lang="ts">
	import { getUrqlClient } from '$stores/urqlClient.state.svelte';

	import Button from '../buttons/Button.svelte';
	import { Lock } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';
	import { correctPrice, launchToast, calculateDiscountPercentage } from '$lib/utils';
	import { Sparkle } from '@lucide/svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
	import CheckoutProductOffers from './CheckoutProductOffers.svelte';

	import {
		DeliveryUIType,
		type CustomerAddress,
		type PaymentMethod,
		type ShippingOption
	} from '$lib/types';
	import { onMount } from 'svelte';
	import {
		CART_ADD_ITEMS_MUTATION,
		CHECKOUT_PAYMENT_METHODS_MUTATION
	} from '$lib/graphql/mutations';

	import { cart } from '$stores/cart.store.svelte';

	interface Props {
		deliveryType: DeliveryUIType | null;
		sessionToken: string;
		address: CustomerAddress | null;
		shippingOption: ShippingOption | undefined;
		cartTotal: number;
		onUpdatePayment: (method) => void;
		onCheckoutDone: (newsletter: boolean) => void;
	}

	let {
		deliveryType,
		sessionToken,
		address,
		onUpdatePayment,
		shippingOption,
		cartTotal,
		onCheckoutDone
	}: Props = $props();

	let loading = $state(false);
	let error = $state('');

	if (!address) {
		console.log(`NO ADDRESS, DELIVERY TYPE ${deliveryType}`);
	} else {
		// alert(address);
	}

	let countryCode = $state(address ? address.country : 'BR');
	let postCode = $state(address ? address.postcode : '05411-000');
	let paymentMethods = $state<PaymentMethod[] | undefined>();
	let newsletter = $state(false);

	onMount(async () => {
		// console.log('Session', sessionToken);
		toggleLoader();
		loading = true;
		error = '';

		// If no user session then it's a guest, then we have to create the cart and session ---------------------------
		let currentSessionToken;
		if (!sessionToken) {
			console.log('No session/guest, then creating one...');
			let cartItemsForGraphQL: { productId: number; quantity: number }[] = [];
			cart.subscribe((cart) => {
				cart.items.forEach((item) => {
					cartItemsForGraphQL.push({
						productId: item.id,
						quantity: item.quantity
					});
				});
			});
			// console.log('CART ITEMS:');
			// console.log(cartItemsForGraphQL);
			const addToCartResult = await getUrqlClient()
				.client.mutation(
					CART_ADD_ITEMS_MUTATION,
					{
						items: cartItemsForGraphQL
					},
					{
						// fetchOptions: { headers: sessionHeaders },
						fetch: (input, init) => {
							return fetch(input, init).then((response) => {
								// Capture any new session token if provided
								const newSession = response.headers.get('woocommerce-session');
								if (newSession) {
									currentSessionToken = newSession.replace('Session ', '');
									// console.log('New session from add to cart:', currentSessionToken);
								}
								// addToCartResponse = response;
								return response;
							});
						}
					}
				)
				.toPromise();

			if (addToCartResult.error) {
				throw new Error(`Failed to add product: ${addToCartResult.error.message}`);
			}
			console.log('New session...', currentSessionToken);
		}

		// -------------------------------------------------------------------------------------------------------------

		const sessionHeaders = {
			'Content-Type': 'application/json',
			'woocommerce-session': `Session ${sessionToken || currentSessionToken}`
		};

		try {
			launchToast(`Obtendo formas de pagamento...`, 'info', 2000);

			const updateResult = await getUrqlClient()
				.client.mutation(
					CHECKOUT_PAYMENT_METHODS_MUTATION,
					{
						// input: {
						countryCode: countryCode,
						postCode: postCode,
						shippingMethodId: shippingOption ? shippingOption.id : '0'
						// }
					},
					{
						fetchOptions: { headers: sessionHeaders }
					}
				)
				.toPromise();
			//Result
			if (updateResult.error && !updateResult.data) {
				launchToast(`Error obteniendo métodos de pagamento`, 'error', 2000);
			}

			// paymentMethods = [];

			let paymentMethodsRaw =
				updateResult.data.getAvailablePaymentMethods.shippingPaymentMethods.paymentMethods ||
				undefined;

			// console.log('RAW', paymentMethodsRaw);

			paymentMethods = [];
			for (const pm of paymentMethodsRaw) {
				let methodObject: PaymentMethod = {
					id: pm.id,
					title: pm.title,
					description: pm.description,
					cost: pm.cost,
					feeDetails: pm.feeDetails
				};

				// Add payment method
				paymentMethods?.push(methodObject);
			}
			console.log('Payment methods', paymentMethods);
		} catch (err) {
			console.error(`${err}`);
			launchToast(`Error obteniendo métodos de pagamento ${err}`, 'error', 2000);
			// alert(sessionToken);
		}
		toggleLoader();
	});
</script>

<div class="mx-auto p-6 bg-white border border-grey-lighter rounded-lg shadow-sm">
	<div class="flex justify-between items-center mb-4">
		<h2 class="text-lg font-medium flex items-center">
			<span
				class="inline-flex items-center justify-center w-5 h-5 bg-sun text-grey-background rounded-full mr-2 text-xs"
				>{deliveryType == 'DELIVERY' ? 4 : 3}</span
			>
			Pagamento
		</h2>
	</div>

	<form class="">
		{#if paymentMethods}
			{#each paymentMethods as method, i (i)}
				{@const discountPercentage = calculateDiscountPercentage(
					cartTotal,
					cartTotal + method.cost
				)}
				<div
					class="bg-grey-background border-grey-light border px-3 py-2 rounded-lg font-roboto mb-2"
				>
					<label class="flex justify-between text-sm cursor-pointer">
						<div class="self-center flex">
							<input
								type="radio"
								tabindex="0"
								name="radio1"
								value={method.id}
								onclick={() => {
									onUpdatePayment(method);
								}}
							/>
							<span class="ml-2 text-grey-blueish">{method.title}</span>
						</div>
						<div class="font-bold font-roboto">
							{#if discountPercentage > 0}
								<span class="text-green-medium font-medium">
									{discountPercentage}% OFF
								</span>
								/
							{/if}
							<!-- CartTotal: {cartTotal} - Method Discount: {method.cost} - {method.feeDetails} - Shipping:{shippingOption?.cost}
							- -->
							{m.currencySymbol()}&nbsp;{correctPrice(cartTotal + method.cost)}
						</div>
					</label>
				</div>
			{/each}
		{:else}
			<div class="text-xs">{m.checkoutLoadingPayments()}</div>
		{/if}

		<!-- Promocoes -->
		<div class="flex items-center text-sm my-5 px-3">
			<input
				type="checkbox"
				id="radio-promos"
				name="radio-promos"
				class="mr-2 cursor-pointer"
				bind:checked={newsletter}
			/>
			<label class="cursor-pointer" for="radio-promos">{m.checkoutNewsletterOptIn()}</label>
		</div>

		<!-- Offers controls -->
		<CheckoutProductOffers />

		<!-- Botão de continuar -->
		<div class="py-3">
			<Button
				type="sun"
				url="#"
				action={() => {
					onCheckoutDone(newsletter);
				}}
				title="FINALIZAR COMPRA"
				size="xl"
				rounded="lg"
				font="md"
			>
				{#snippet icon()}
					<Lock class="h-4" />
				{/snippet}
			</Button>
		</div>
	</form>

	<!-- Promo -->
	<div
		class="border bg-white rounded-md border-sun shadow-md p-6 max-w-sm md:mx-auto mt-4 md:hidden"
	>
		<div class="text-center">
			<h2 class="text-xl tracking-widest text-sun font-prata flex justify-center scale-90">
				<Sparkle class="pr-1" />
				<span>SEJA PASSPORT!</span>
				<Sparkle class="pl-1" />
			</h2>
			<p class="text-lg font-semibold mt-2 leading-[23px]">
				Ganhe 10% em cashback, fretes grátis + 3 vinhos todo mês!
			</p>
			<p class="text-xs text-grey-dark mt-3 leading-2">
				Junte-se ao APP do Clube e
				<strong>Economize, Ganhe, Diverta-se com vinho!</strong>
				Com cashbacks entre 5 e 10% em toda compra, 3 vinhos top todo mês + fretes grátis! Além de experiências
				com outros Passport e compras coletivas!
			</p>
			<div class="mx-10 py-2">
				<Button title={m.addToCart()} type="sun" url={localizeHref('/cart/')} tracking="normal" />
			</div>
			<p class="text-xs text-gray-500 mt-2">
				<a href={localizeHref('/club/')} class="text-blue-500 underline">Saiba mais</a>
			</p>
		</div>
	</div>
</div>
