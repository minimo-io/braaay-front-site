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
	import { CHECKOUT_PAYMENT_METHODS_MUTATION } from '$lib/graphql/mutations';
	import { cart } from '$stores/cart.store.svelte';
	import CheckoutCreditCardInfo from './CheckoutCreditCardInfo.svelte';
	import { AppConfig } from '$config';
	import Button from '../buttons/Button.svelte';
	import { Lock } from '@lucide/svelte';
	import NoticeBox from '../NoticeBox.svelte';

	interface Props {
		deliveryType: DeliveryUIType | null;
		sessionToken: string | null;
		address: CustomerAddress | null;
		shippingOption: ShippingOption | undefined;
		couponCode?: string | undefined;
		// FIX: Renamed prop to match parent component's variable name
		cartTotalAmount: number;
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
		// FIX: Destructured the renamed prop
		cartTotalAmount,
		onCheckoutDone,
		onCreditCardChange,
		couponCode = ''
	}: Props = $props();

	let loading = $state(false);
	let error = $state('');

	let countryCode = $state(address ? address.country : 'BR');
	let postCode = $state(address ? address.postcode : '05411-000');
	let paymentMethods = $state<PaymentMethod[] | undefined>();
	let methodSelected = $state<PaymentMethod | undefined>();
	let newsletter = $state(false);

	let lastFetchedShippingId = $state<string | undefined>();

	async function fetchAndSetPaymentMethods(shippingId: string) {
		if (!shippingId || !sessionToken) {
			console.error('Missing required data, skipping fetch.');
			return;
		}

		console.log('Fetching payment methods for shipping option:', shippingId);

		toggleLoader();
		loading = true;
		error = '';

		paymentMethods = undefined;
		methodSelected = undefined;
		onUpdatePayment(undefined);

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
						shippingMethodId: shippingId,
						couponCode: couponCode
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

			console.log('paymentMethodsRaw', paymentMethodsRaw);

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

			console.log('Payment methods updated:');
			console.log(paymentMethods);
		} catch (err) {
			console.error(`${err}`);
			launchToast(`Erro obtendo métodos de pagamento ${err}`, 'error', 2000);
		} finally {
			toggleLoader();
			loading = false;
		}
	}

	$effect(() => {
		const currentShippingId = shippingOption?.id;

		if (currentShippingId && currentShippingId !== lastFetchedShippingId) {
			fetchAndSetPaymentMethods(currentShippingId);
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
					cartTotalAmount,
					cartTotalAmount + method.cost
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
							<span class="ml-2 text-grey-blueish md:text-base">{method.title}</span>
						</div>
						<div class="font-bold font-roboto md:text-base">
							{#if discountPercentage > 0}
								<span class="text-green-medium font-medium">
									{discountPercentage}% OFF
								</span>
								/
							{/if}
							{m.currencySymbol()}&nbsp;{correctPrice(cartTotalAmount + method.cost)}
						</div>
					</label>
				</div>
			{/each}
		{:else}
			<div class="text-xs">{m.checkoutLoadingPayments()}</div>
		{/if}

		{#if methodSelected?.id == 'woo-mercado-pago-pix'}
			<NoticeBox>
				{@html m.checkoutSafePayPix()}
			</NoticeBox>
		{:else if methodSelected?.id == 'woo-mercado-pago-custom' && AppConfig.payments.checkoutCreditCardMode == 'redirect'}
			<NoticeBox>{@html m.checkoutSafePayCard()}</NoticeBox>
		{:else if methodSelected?.id == 'woo-mercado-pago-custom' && AppConfig.payments.checkoutCreditCardMode == 'transparent'}
			<CheckoutCreditCardInfo
				onCreditCardChange={(formData: CreditCardFormData) => {
					onCreditCardChange(formData);
				}}
			/>
		{/if}

		<img src="/images/safe-site.svg" alt="site-seguro" class="h-7 md:h-9 ml-1 my-5" />

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
