<script lang="ts">
	import { AppConfig } from '$config';
	import Divider from '$components/ui/dividers/Divider.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { isAuthenticated } from '$lib/graphql/auth';
	import { onMount } from 'svelte';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';
	import { getUrqlClient } from '$stores/urqlClient.state.svelte';
	import { CUSTOMER_QUERY, mapCustomerToUser } from '$lib/graphql/queries';
	import type {
		Customer,
		CustomerAddress,
		PaymentMethod,
		ProductGraphQL,
		ShippingOption
	} from '$lib/types';
	import { DeliveryUIType } from '$lib/types';
	import { launchToast, truncate } from '$lib/utils';
	import { goto } from '$app/navigation';

	import CheckoutMobileSummary from '$components/ui/checkout/CheckoutMobileSummary.svelte';
	import CheckoutChooseDelivery from '$components/ui/checkout/CheckoutChooseDelivery.svelte';
	import PromoClub from '$components/ui/checkout/PromoClub.svelte';
	import CheckoutCartSummary from '$components/ui/checkout/CheckoutCartSummary.svelte';

	// Step 1
	import StepOneDone from '$components/ui/checkout/StepOneDone.svelte';
	import StepOnePending from '$components/ui/checkout/StepOnePending.svelte';
	// Step 2
	import StepTwoWaiting from '$components/ui/checkout/StepTwoWaiting.svelte';
	import StepTwoPending from '$components/ui/checkout/StepTwoPending.svelte';
	import StepTwoDone from '$components/ui/checkout/StepTwoDone.svelte';
	import StepTwoPickup from '$components/ui/checkout/StepTwoPickup.svelte';
	// Step 3
	import StepThreeDone from '$components/ui/checkout/StepThreeDone.svelte';
	import StepThreeWaiting from '$components/ui/checkout/StepThreeWaiting.svelte';
	import StepThreePending from '$components/ui/checkout/StepThreePending.svelte';
	// Step 4
	import StepFourPending from '$components/ui/checkout/StepFourPending.svelte';
	import StepFourWaiting from '$components/ui/checkout/StepFourWaiting.svelte';

	import { calculateDiscount, cart } from '$stores/cart.store.svelte';
	import { CHECKOUT_CREATE_ORDER_MUTATION } from '$lib/graphql/mutations';

	interface Steps {
		step1: boolean | object;
		step2: boolean | object;
		step3: boolean | object;
		step4: boolean | object;
	}
	let steps: Steps = $state({ step1: false, step2: false, step3: false, step4: false });
	let editStep1 = $state(false);
	let editStep2 = $state(false);
	let editStep3 = $state(false);

	// Initialize as null to have no default selection
	let deliveryType = $state<DeliveryUIType | null>(DeliveryUIType.DELIVERY);
	let shippingAddress = $state<CustomerAddress | null>(null);
	let shippingOption: ShippingOption | undefined = $state();
	let userSessionToken = $state('');

	let paymentMethodSelected = $state<PaymentMethod>();

	// Cart stuff
	let cartItemsCount = $state(0);
	let cartSubTotalAmount = $state(0);
	// let cartTotalAmount = $state(0);
	let cartDiscounts = $state(0);
	let couponsCount = $state(0);
	let isGuestUser = $state(isAuthenticated() ? false : true);

	let customer: Customer | undefined = $state();

	onMount(async () => {
		toggleLoader();
		try {
			// Check for step 1
			if (isAuthenticated()) {
				steps.step1 = true;
			}
			// Query customer in database
			const customerResult = await getUrqlClient().client.query(CUSTOMER_QUERY, {});
			if (customerResult && customerResult.error) {
				launchToast('Houve um error tentando obter os dados do cliente 2', 'error');
				goto(localizeHref('/cart/'));
			}
			customer = mapCustomerToUser(customerResult.data);
		} catch (err) {
			console.error(`Error: ${err}`);
			launchToast('Houve um error tentando obter os dados do cliente 1 (try)', 'error');
			goto(localizeHref('/cart/'));
		}

		toggleLoader();
	});

	// Cart Stuff ------------------------------------------------------------------------------------------------------
	cart.subscribe((cart) => {
		cartItemsCount = cart.items.reduce((count, item) => count + item.quantity, 0);
		cartSubTotalAmount = cart.items.reduce((count, item) => count + item.price * item.quantity, 0);
		if (cart.coupons) {
			couponsCount = cart.coupons.length;
			for (const couponCode of cart.coupons) {
				cartDiscounts = calculateDiscount(couponCode);
				break; // just one coupon allowed
			}
		}
	});

	let cartTotalAmount = $derived(
		cartSubTotalAmount +
			parseFloat(shippingOption && deliveryType != 'PICKUP' ? shippingOption.cost : '0') -
			cartDiscounts
	);

	//  End-of Cart Stuff ----------------------------------------------------------------------------------------------

	function onUpdateStepOne(customerData: Customer) {
		editStep1 = false;
		customer = customerData;

		steps.step1 = customer;

		if (deliveryType == 'PICKUP') {
			steps.step2 = true;
			steps.step3 = true;
		}
	}

	function onActionStepOneDone() {
		editStep1 = true;
		steps.step1 = false;
		steps.step2 = false;
		steps.step3 = false;
		paymentMethodSelected = undefined;
		shippingOption = undefined;
	}

	function handleDeliveryTypeUpdate(delivery: DeliveryUIType) {
		deliveryType = delivery;
		paymentMethodSelected = undefined;

		// You might want to do additional logic here
		// like enabling step2 when a selection is made
		if (deliveryType == 'PICKUP') {
			// Only progress to step2 if user is logged in (step1 complete)
			// if (steps.step1) {
			if (isGuestUser) userSessionToken = '';
			editStep2 = false;
			steps.step2 = true;
			steps.step3 = true;
			shippingOption = undefined;
			// }
		} else if (deliveryType == 'DELIVERY') {
			if (steps.step1) {
				editStep2 = false;
				steps.step2 = false;
				steps.step3 = false;
			} else {
				editStep2 = false;
				steps.step1 = false;
				steps.step2 = false;
				steps.step3 = false;
			}
		}
	}

	// Update the delivery data, also save in localStorage (in the future)
	function onUpdateShippingData(shippingData: CustomerAddress) {
		shippingAddress = shippingData;
		editStep2 = false;
		steps.step3 = false;

		shippingOption = undefined;
		if (steps.step1) {
			steps.step2 = true;
		}
	}

	// Create order ----------------------------------------------------------------------------------------------------
	async function checkoutCreateOrder() {
		let currentSessionToken;

		// Prepare products array & cupons
		let cartItemsForGraphQL: ProductGraphQL[] = [];
		let couponsForGraphQL: string[] = [];
		cart.subscribe((cart) => {
			cart.items.forEach((item) => {
				cartItemsForGraphQL.push({
					productId: item.id,
					quantity: item.quantity
				});
			});

			cart.coupons.forEach((item) => {
				couponsForGraphQL.push(item);
			});
		});

		// Prepare billing address
		let billingForGraphQL = {};
		if (deliveryType != 'PICKUP') {
			console.log('Billing address client');

			billingForGraphQL = {
				...shippingAddress,
				email: customer?.email,
				phone: customer?.telephone
			};
		} else {
			console.log('Billing address showroom');
			billingForGraphQL = {
				firstName: customer?.firstName,
				lastName: customer?.lastName,
				company: '',
				address1: 'R. Cristiano Viana, 62 - cj 35',
				address2: 'Cerqueira César',
				city: 'São Paulo',
				postcode: '05411-000',
				country: 'BR',
				state: 'São Paulo',
				email: customer?.email,
				phone: customer?.telephone
			};
		}

		// const createOrderResult = await getUrqlClient(undefined, true)
		const createOrderResult = await getUrqlClient()
			.client.mutation(
				CHECKOUT_CREATE_ORDER_MUTATION,
				{
					cpf: customer?.cpf,
					lineItems: cartItemsForGraphQL,
					couponCodes: couponsForGraphQL,
					paymentMethod: paymentMethodSelected?.id,
					customerBilling: billingForGraphQL,
					shippingLines: [
						{
							methodId: shippingOption?.id,
							methodTitle: shippingOption?.label,
							total: shippingOption?.cost
						}
					]
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

		console.log('RESULT_CREATE_ORDER:');
		console.log(createOrderResult);
		// Check for errors
		if (createOrderResult.error) {
			console.error(`Error: ${createOrderResult.error.message}`);
			goto(localizeHref(`/checkout/error?code=${createOrderResult.error.name}`));
			return;
		}

		// Get the order id

		return createOrderResult.data.createOrder.orderId;
	}
</script>

<main>
	<!-- Cart -->
	<div class="max-w-screen-lg mx-[10px] md:mx-auto">
		<div class="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-0 md:gap-7">
			<div class="mt-8">
				<div class="flex justify-start mb-3 mx-3 md:mx-1">
					<h2 class="text-[19px] font-roboto font-extrabold ml-1">Checkout</h2>
				</div>

				<!-- On mobile -->
				<CheckoutMobileSummary cartTotal={cartTotalAmount} {paymentMethodSelected} />

				<div class="space-y-4 px-3 md:mb-24">
					<!-- Delivery or Pickup -->
					<CheckoutChooseDelivery initialValue={deliveryType} onUpdate={handleDeliveryTypeUpdate} />

					<div>
						<Divider color="blue" extraClasses="!border-b-grey-lighter my-7" />
					</div>

					<!-- Step 1: Client info -->
					{#if steps.step1 && !editStep1}
						<StepOneDone {customer} onActionClick={onActionStepOneDone} />
					{:else}
						<StepOnePending {customer} onUpdate={onUpdateStepOne} />
					{/if}

					<!-- Step 2: Shipping address -->
					{#if deliveryType == 'PICKUP'}
						<!-- Pickup -->
						<StepTwoPickup />
					{:else if steps.step1}
						<!-- Step 2 Done -->
						{#if steps.step2 && shippingAddress && !editStep2}
							<StepTwoDone
								{shippingAddress}
								onActionClick={() => {
									paymentMethodSelected = undefined;
									editStep2 = true;
									steps.step2 = false;
								}}
							/>
						{/if}
						<!-- Step 2 Pending -->
						{#if !steps.step2 || editStep2}
							<StepTwoPending {customer} onActionClick={onUpdateShippingData} />
						{/if}
					{:else}
						<StepTwoWaiting />
					{/if}

					<!-- Step 3: Delivery options -->
					{#if deliveryType == 'DELIVERY'}
						{#if editStep3 || (steps.step1 && steps.step2 && !steps.step3)}
							<StepThreePending
								{customer}
								{shippingAddress}
								onUpdate={(shippingFetched: ShippingOption | undefined, sessionToken: string) => {
									userSessionToken = sessionToken;
									shippingOption = shippingFetched;
									steps.step3 = true;
									editStep3 = false;
								}}
							/>
						{:else if steps.step1 && steps.step2 && steps.step3 && !editStep3}
							<StepThreeDone
								shippingAddress={shippingOption}
								onUpdate={() => {
									paymentMethodSelected = undefined;
									editStep3 = true;
									steps.step3 = false;
									shippingOption = undefined;
								}}
							/>
						{:else}
							<StepThreeWaiting />
						{/if}
					{/if}

					<!-- Form step 4 -->
					{#if steps.step1 && steps.step2 && steps.step3}
						{#key deliveryType}
							<StepFourPending
								{deliveryType}
								sessionToken={userSessionToken}
								address={shippingAddress}
								cartTotal={cartTotalAmount}
								{shippingOption}
								onUpdatePayment={(method: PaymentMethod) => {
									paymentMethodSelected = method;
								}}
								onCheckoutDone={async (newsletter: boolean) => {
									if (!paymentMethodSelected) {
										launchToast('Selecione um método de pagamento', 'error', 2500);
									} else {
										let orderId = await checkoutCreateOrder();
										if (orderId) {
											// console.log(`ORDER ID FINAL STAGE: ${orderId}`);
											goto(localizeHref(`/checkout/pagamento/${orderId}`));
										} else {
											goto(localizeHref('/checkout/error?code=no-order-id'));
											return;
										}
									}
								}}
							/>
						{/key}
					{:else}
						<StepFourWaiting {deliveryType} />
					{/if}
				</div>
			</div>

			<!-- Advertising -->
			<div class="mt-8">
				<!-- Promo clube -->
				<PromoClub />

				<!-- Extra cart elements -->
				<CheckoutCartSummary
					items={cartItemsCount}
					cartTotal={cartTotalAmount}
					cartSubTotal={cartSubTotalAmount}
					shippingAddress={shippingOption}
					{deliveryType}
					{couponsCount}
					{cartDiscounts}
					{paymentMethodSelected}
				/>

				<div class="hidden md:block md:my-36">&nbsp;</div>
			</div>
		</div>
	</div>
</main>

{#if AppConfig.debug}
	<!-- DEBUG -->
	<div class="fixed bottom-0 left-0 border z-50 py-5 px-8 bg-white text-xs">
		<h2 class="font-bold mb-3 text-[15px]">DEBUG</h2>
		<div class="pb-2 border-b border-grey-light">
			<strong>Edit (1):</strong>
			{editStep1} - <strong>Edit (2):</strong>
			{editStep2} - <strong>Edit (3):</strong>
			{editStep3}
		</div>
		<div class="py-2 border-b border-grey-light">
			<strong>Step (1):</strong>
			{steps.step1} - <strong>Step (2):</strong>
			{steps.step2} - <strong>Step (3):</strong>
			{steps.step3} - <strong>Step (4):</strong>
			{steps.step4}
		</div>
		<div class="py-2">
			<strong>DeliveryType:</strong>
			{deliveryType} - <strong>DeliveryOption:</strong>
			{shippingOption || 'undefined'}
		</div>
		<div><strong>Session:</strong> {truncate(userSessionToken, 50) || 'undefined'}</div>
	</div>
{/if}
