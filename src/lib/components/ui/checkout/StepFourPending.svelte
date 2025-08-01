<script lang="ts">
	import { getUrqlClient } from '$stores/urqlClient.state.svelte';
	import { m } from '$lib/paraglide/messages';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';
	import { correctPrice, launchToast, calculateDiscountPercentage } from '$lib/utils';
	import { Sparkle } from '@lucide/svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
	import CheckoutProductOffers from './CheckoutProductOffers.svelte';
	import {
		DeliveryUIType,
		type CreditCardFormData,
		type CustomerAddress,
		type PaymentMethod,
		type ProductGraphQL,
		type ShippingOption
	} from '$lib/types';
	import {
		CART_ADD_ITEMS_MUTATION,
		CHECKOUT_PAYMENT_METHODS_MUTATION
	} from '$lib/graphql/mutations';
	import { cart } from '$stores/cart.store.svelte';
	import CheckoutCreditCardInfo from './CheckoutCreditCardInfo.svelte';
	import { AppConfig } from '$config';
	import Button from '../buttons/Button.svelte';
	import { Lock } from '@lucide/svelte';

	interface Props {
		deliveryType: DeliveryUIType | null;
		sessionToken: string;
		address: CustomerAddress | null;
		shippingOption: ShippingOption | undefined;
		cartTotal: number;
		onUpdatePayment: (method) => void;
		onCheckoutDone: (newsletter: boolean) => void;
		onCreditCardChange: (creditCardData: CreditCardFormData) => void;
	}

	let {
		deliveryType,
		sessionToken,
		address,
		onUpdatePayment,
		shippingOption,
		cartTotal,
		onCheckoutDone,
		onCreditCardChange
	}: Props = $props();

	let loading = $state(false);
	let error = $state('');

	let countryCode = $state(address ? address.country : 'BR');
	let postCode = $state(address ? address.postcode : '05411-000');
	let paymentMethods = $state<PaymentMethod[] | undefined>();
	let methodSelected = $state<PaymentMethod | undefined>();
	let newsletter = $state(false);

	// This state variable acts as a gatekeeper. It's the key to breaking the loop.
	let lastFetchedShippingId = $state<string | undefined>();

	// This is the core logic to fetch and update payment methods.
	async function fetchAndSetPaymentMethods(shippingId: string) {
		// This is a crucial check to prevent fetching when data is not ready
		if (!address || !shippingId || !sessionToken) {
			console.log('Missing required data, skipping fetch.');
			return;
		}

		console.log('Fetching payment methods for shipping option:', shippingId);

		toggleLoader();
		loading = true;
		error = '';

		// --- THIS IS THE CRITICAL CHANGE ---
		// We immediately clear the old data so the template shows a loading state.
		paymentMethods = undefined;
		methodSelected = undefined;
		onUpdatePayment(undefined);
		// -----------------------------------

		const sessionHeaders = {
			'Content-Type': 'application/json',
			'woocommerce-session': `Session ${sessionToken}`
		};

		try {
			launchToast(`Obtendo formas de pagamento...`, 'info', 2000);

			const updateResult = await getUrqlClient()
				.client.mutation(
					CHECKOUT_PAYMENT_METHODS_MUTATION,
					{
						countryCode: countryCode,
						postCode: postCode,
						shippingMethodId: shippingId
					},
					{
						fetchOptions: { headers: sessionHeaders }
					}
				)
				.toPromise();

			if (updateResult.error && !updateResult.data) {
				launchToast(`Erro obtendo métodos de pagamento`, 'error', 2000);
			}

			let paymentMethodsRaw =
				updateResult.data?.getAvailablePaymentMethods?.shippingPaymentMethods?.paymentMethods ||
				undefined;

			paymentMethods = [];
			if (paymentMethodsRaw) {
				for (const pm of paymentMethodsRaw) {
					let methodObject: PaymentMethod = {
						id: pm.id,
						title: pm.title,
						description: pm.description,
						cost: pm.cost,
						feeDetails: pm.feeDetails
					};
					paymentMethods?.push(methodObject);
				}
			}

			console.log('Payment methods updated:', paymentMethods);
		} catch (err) {
			console.error(`${err}`);
			launchToast(`Erro obtendo métodos de pagamento ${err}`, 'error', 2000);
		} finally {
			toggleLoader();
			loading = false;
		}
	}

	// This is the correct, loop-free reactive block.
	// It will only trigger the fetch function if a new, different ID is provided.
	$effect(() => {
		const currentShippingId = shippingOption?.id;

		// We check if a shipping ID exists AND if it has changed since the last fetch.
		if (currentShippingId && currentShippingId !== lastFetchedShippingId) {
			fetchAndSetPaymentMethods(currentShippingId);
			// We immediately set the guard here to prevent the loop
			// before the async function even returns.
			lastFetchedShippingId = currentShippingId;
		}
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

	<form>
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
									methodSelected = method;
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

		<!-- Method details -->
		<!-- {#if method.id == 'woo-mercado-pago-pix'} -->
		{#if methodSelected?.id == 'woo-mercado-pago-pix'}
			<!-- <div>PIX DETAILS</div> -->
		{:else if methodSelected?.id == 'woo-mercado-pago-custom'}
			<!-- <div>CARD DETAILS</div> -->
			<CheckoutCreditCardInfo
				onCreditCardChange={(formData: CreditCardFormData) => {
					onCreditCardChange(formData);
				}}
			/>
		{/if}
		<!-- {/if} -->

		<!-- Promocoes -->
		{#if AppConfig.receiveEmailsEnabled}
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
		{/if}

		<!-- Offers controls -->
		<!-- <CheckoutProductOffers /> -->

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
				<Button title={m.addToCart()} type="sun" url={localizeHref('/club/')} tracking="normal" />
			</div>
			<p class="text-xs text-gray-500 mt-2">
				<a href={localizeHref('/club/')} class="text-blue-500 underline">Saiba mais</a>
			</p>
		</div>
	</div>
</div>
