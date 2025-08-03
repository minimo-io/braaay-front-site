<script lang="ts">
	import { AppConfig } from '$config';
	import Divider from '$components/ui/dividers/Divider.svelte';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { isAuthenticated } from '$lib/graphql/auth';
	import { onMount } from 'svelte';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';
	import { getUrqlClient } from '$stores/urqlClient.state.svelte';
	import { CUSTOMER_QUERY, mapCustomerToUser } from '$lib/graphql/queries';
	import {
		CHECKOUT_CREATE_ORDER_MUTATION,
		CART_ADD_ITEMS_MUTATION,
		EMPTY_CART_MUTATION
	} from '$lib/graphql/mutations';
	import { UPDATE_GUEST_SHIPPING_ADDRESS } from '$lib/graphql/mutations/shipping-update.mutation';
	import type {
		CreditCardFormData,
		Customer,
		CustomerAddress,
		PaymentMethod,
		ProductGraphQL,
		ShippingOption
	} from '$lib/types';
	import { DeliveryUIType } from '$lib/types';
	import {
		generateBasicAuthorization,
		launchToast,
		truncate,
		validateCreditCard
	} from '$lib/utils';
	import { goto } from '$app/navigation';

	import CheckoutMobileSummary from '$components/ui/checkout/CheckoutMobileSummary.svelte';
	import CheckoutChooseDelivery from '$components/ui/checkout/CheckoutChooseDelivery.svelte';
	import PromoClub from '$components/ui/PromoClub.svelte';
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

	import { cart, emptyCart } from '$stores/cart.store.svelte';
	import { m } from '$lib/paraglide/messages';

	import { PUBLIC_APP_PASSWORD_EMAIL, PUBLIC_APP_PASSWORD_KEY } from '$env/static/public';
	import Meta from '$components/layout/Meta.svelte';

	interface Steps {
		step1: boolean | object;
		step2: boolean | object;
		step3: boolean | object;
		step4: boolean | object;
	}

	// State variables
	let steps: Steps = $state({ step1: false, step2: false, step3: false, step4: false });
	let editStep1 = $state(false);
	let editStep2 = $state(false);
	let editStep3 = $state(false);

	let deliveryType = $state<DeliveryUIType | null>(DeliveryUIType.DELIVERY);
	let shippingAddress = $state<CustomerAddress | null>(null);
	let shippingOption: ShippingOption | undefined = $state();
	let sessionToken = $state<string | null>(null);
	let paymentMethodSelected = $state<PaymentMethod>();
	let creditCardData = $state<CreditCardFormData | undefined>();
	let customer: Customer | undefined = $state();

	// Loading states for better UX
	let isInitializing = $state(true);
	let isSynchronizingCart = $state(false);
	let isProcessingOrder = $state(false);

	// Cart derived state
	let cartItemsCount = $state(0);
	let cartSubTotalAmount = $state(0);
	let cartDiscounts = $state(0);
	let couponsCount = $state(0);
	let isGuestUser = $state(isAuthenticated() ? false : true);

	// Memoized cart total calculation
	let cartTotalAmount = $derived(
		cartSubTotalAmount +
			parseFloat(shippingOption && deliveryType != 'PICKUP' ? shippingOption.cost : '0') -
			cartDiscounts
	);

	// Get cart items for GraphQL (memoized)
	let cartItemsForGraphQL = $derived(() => {
		let items: { productId: number; quantity: number }[] = [];
		cart.subscribe((c) => {
			c.items.forEach((item) => {
				items.push({ productId: item.id, quantity: item.quantity });
			});
		});
		return items;
	});

	// Get coupons for GraphQL (memoized)
	let couponsForGraphQL = $derived(() => {
		let coupons: string[] = [];
		cart.subscribe((c) => {
			if (c.coupons && c.coupons.length > 0) {
				c.coupons.forEach((item) => coupons.push(item.code));
			}
		});
		return coupons;
	});

	onMount(async () => {
		await initializeCheckout();
	});

	async function initializeCheckout() {
		// toggleLoader();
		isInitializing = true;
		try {
			if (isAuthenticated()) {
				steps.step1 = true;
			}

			const customerResult = await getUrqlClient().client.query(CUSTOMER_QUERY, {});
			if (customerResult?.error) {
				throw new Error(customerResult.error.message);
			}

			customer = mapCustomerToUser(customerResult.data);
		} catch (err) {
			console.error(`Error initializing checkout: ${err}`);
			launchToast('Houve um erro tentando obter os dados do cliente', 'error');
			goto(localizeHref('/cart/'));
		} finally {
			// toggleLoader();
			isInitializing = false;
		}
	}

	async function synchronizeCart(postcode: string): Promise<string | null> {
		isSynchronizingCart = true;
		launchToast('Sincronizando carrinho...', 'info', 1000);

		try {
			// Update shipping address
			const updateResult = await getUrqlClient()
				.client.mutation(UPDATE_GUEST_SHIPPING_ADDRESS, {
					input: {
						shipping: {
							postcode: postcode,
							country: 'BR',
							overwrite: true
						}
					}
				})
				.toPromise();

			if (updateResult.error) {
				throw new Error(`Shipping update failed: ${updateResult.error.message}`);
			}

			const currentSessionToken = updateResult.data.updateCustomer.customer.sessionToken;
			sessionToken = currentSessionToken;

			const sessionHeaders = {
				'Content-Type': 'application/json',
				'woocommerce-session': `Session ${currentSessionToken}`
			};

			// Empty cart
			await getUrqlClient()
				.client.mutation(EMPTY_CART_MUTATION, {}, { fetchOptions: { headers: sessionHeaders } })
				.toPromise();

			// Add items back to cart if any exist
			if (cartItemsForGraphQL().length > 0) {
				const addToCartResult = await getUrqlClient()
					.client.mutation(
						CART_ADD_ITEMS_MUTATION,
						{ items: cartItemsForGraphQL() },
						{ fetchOptions: { headers: sessionHeaders } }
					)
					.toPromise();

				if (addToCartResult.error) {
					throw new Error(`Failed to add products: ${addToCartResult.error.message}`);
				}
			}

			launchToast('Carrinho sincronizado com sucesso!', 'success', 1500);
			return currentSessionToken;
		} catch (err) {
			console.error(`Error synchronizing cart: ${err}`);
			launchToast('Houve um erro ao sincronizar o carrinho', 'error');
			return null;
		} finally {
			isSynchronizingCart = false;
		}
	}

	// Subscribe to cart changes once
	cart.subscribe((cartData) => {
		cartItemsCount = cartData.items.reduce((count, item) => count + item.quantity, 0);
		cartSubTotalAmount = cartData.items.reduce(
			(count, item) => count + item.price * item.quantity,
			0
		);

		if (cartData.coupons?.length > 0) {
			couponsCount = cartData.coupons.length;
			cartDiscounts = cartData.coupons[0].discount; // Take first coupon discount
		} else {
			couponsCount = 0;
			cartDiscounts = 0;
		}
	});

	function resetStepsAfter(step: number) {
		if (step < 2) {
			steps.step2 = false;
			editStep2 = false;
		}
		if (step < 3) {
			steps.step3 = false;
			editStep3 = false;
			shippingOption = undefined;
		}
		if (step < 4) {
			paymentMethodSelected = undefined;
		}
	}

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
		resetStepsAfter(1);
	}

	async function handleDeliveryTypeUpdate(delivery: DeliveryUIType) {
		deliveryType = delivery;

		if (deliveryType == 'PICKUP') {
			resetStepsAfter(2);
			const syncedToken = await synchronizeCart(AppConfig.address[getLocale()].zipCode);
			if (syncedToken) {
				shippingOption = {
					id: 'local_pickup:11',
					label: 'Retirada no showroom (São Paulo)',
					cost: '0.00'
				};
				steps.step2 = true;
				steps.step3 = true;
			}
		} else if (deliveryType == 'DELIVERY') {
			// When switching from pickup to delivery, we need to reset shipping data
			// and make sure step2 is not completed so the address form shows
			shippingAddress = null;
			shippingOption = undefined;
			paymentMethodSelected = undefined;

			// Reset steps properly for delivery mode
			steps.step2 = false;
			steps.step3 = false;
			editStep2 = false;
			editStep3 = false;
		}
	}

	async function onUpdateShippingData(shippingData: CustomerAddress) {
		const sessionTokenResult = await synchronizeCart(shippingData.postcode);

		if (sessionTokenResult) {
			shippingAddress = shippingData;
			editStep2 = false;
			resetStepsAfter(3);

			if (steps.step1) {
				steps.step2 = true;
			}
		} else {
			launchToast('Não foi possível sincronizar o carrinho. Tente novamente.', 'error');
		}
	}

	async function checkoutCreateOrder() {
		try {
			let currentSessionToken;

			const billingForGraphQL =
				deliveryType !== 'PICKUP'
					? {
							...shippingAddress,
							email: customer?.email,
							phone: customer?.telephone
						}
					: {
							firstName: customer?.firstName,
							lastName: customer?.lastName,
							company: '',
							address1: `${AppConfig.address[getLocale()].street}, ${AppConfig.address[getLocale()].number} - ${AppConfig.address[getLocale()].complement}`,
							address2: AppConfig.address[getLocale()].neighborhood,
							city: AppConfig.address[getLocale()].city,
							postcode: AppConfig.address[getLocale()].zipCode,
							country: AppConfig.address[getLocale()].countryCode,
							state: AppConfig.address[getLocale()].state,
							email: customer?.email,
							phone: customer?.telephone
						};

			// Already done when choosing
			// if (deliveryType === 'PICKUP') {
			// 	shippingOption = {
			// 		id: 'local_pickup',
			// 		label: m.checkoutStorePickup(),
			// 		cost: '0'
			// 	};
			// }

			const orderDataForMutation = {
				cpf: customer?.cpf,
				lineItems: cartItemsForGraphQL(),
				couponCodes: couponsForGraphQL(),
				paymentMethod: paymentMethodSelected?.id,
				customerBilling: billingForGraphQL,
				shippingLines: [
					{
						methodId: shippingOption?.id,
						methodTitle: shippingOption?.label,
						total: shippingOption?.cost
					}
				]
			};

			const createOrderResult = await getUrqlClient()
				.client.mutation(CHECKOUT_CREATE_ORDER_MUTATION, orderDataForMutation, {
					fetchOptions: {
						headers: {
							authorization: `Basic ${generateBasicAuthorization(PUBLIC_APP_PASSWORD_EMAIL, PUBLIC_APP_PASSWORD_KEY)}`
						}
					},
					fetch: (input, init) => {
						return fetch(input, init).then((response) => {
							const newSession = response.headers.get('woocommerce-session');
							if (newSession) {
								currentSessionToken = newSession.replace('Session ', '');
							}
							return response;
						});
					}
				})
				.toPromise();

			if (createOrderResult.error) {
				console.error(`Error: ${createOrderResult.error.message}`);
				console.error('Error details', createOrderResult.error);
				goto(localizeHref(`/checkout/error?code=${createOrderResult.error.name}`));
				return null;
			}

			return {
				orderId: createOrderResult.data.createOrder.orderId,
				orderKey: createOrderResult.data.createOrder.orderKey,
				session: currentSessionToken
			};
		} finally {
			isProcessingOrder = false;
		}
	}

	/**
	 * Processes the credit card payment by sending the data to a secure backend endpoint.
	 *
	 * @param orderData - The created order details from WooCommerce.
	 * @param cardData - The validated credit card form data.
	 * @param customerData - The customer information.
	 * @param totalAmount - The total amount for the transaction.
	 */
	export async function processCreditCardPayment(
		orderData: { orderId: any; orderKey: any },
		cardData: CreditCardFormData,
		customerData: Customer,
		totalAmount: number
	) {
		// This function encapsulates the logic to call your backend to process the payment.
		// IMPORTANT: You MUST create a backend endpoint (e.g., a serverless function)
		// that securely handles the payment processing with Mercado Pago.
		// Never expose your Mercado Pago private access token on the client-side.
		// launchToast(m.sendingPayment(), 'info', 4000);

		try {
			// 1. Prepare the payload for your backend. Your backend will then use this
			// information to make a secure call to Mercado Pago's /v1/payments API.
			const paymentPayload = {
				orderId: orderData.orderId,
				orderKey: orderData.orderKey,
				transaction_amount: totalAmount,
				description: `Pedido #${orderData.orderId}`,
				card: {
					number: cardData.cardNumber.replace(/\s/g, ''),
					holderName: cardData.cardholderName,
					expirationMonth: parseInt(cardData.expiryDate.split('/')[0].trim(), 10),
					expirationYear: parseInt('20' + cardData.expiryDate.split('/')[1].trim(), 10),
					securityCode: cardData.securityCode
				},
				payer: {
					email: customerData.email,
					first_name: customerData.firstName,
					last_name: customerData.lastName,
					identification: {
						type: 'CPF',
						number: customerData.cpf?.replace(/\D/g, '') // Ensure only digits for CPF
					}
				}
			};

			// 2. Call your backend API. Replace with your actual endpoint.
			const response = await fetch('/api/payments/credit-card', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(paymentPayload)
			});

			const result = await response.json();

			console.log('CREDT_CARD_RESULT', result);
			console.log('CREDT_CARD_RESULT_STATUS', result.status);

			if (!response.ok) {
				// Handle errors from your API, which should ideally forward Mercado Pago's error.
				const errorMessage = result.message || 'Payment failed. Please try again.';
				console.error(errorMessage);
				throw new Error(errorMessage);
			}

			// 3. Handle the payment status returned from your backend.
			// These statuses are based on Mercado Pago's API response.
			switch (result.status) {
				case 'approved':
					launchToast('Pagamento aprovado! Redirecionando...', 'success');
					// cart.clear(); // Clear the cart on successful purchase
					emptyCart();
					// goto(localizeHref(`/checkout/obrigado/${orderData.orderId}/?key=${orderData.orderKey}`), {
					// 	replaceState: true
					// });
					break;
				// case 'in_process':
				// 	launchToast('Seu pagamento está sendo processado.', 'info');
				// 	emptyCart();
				// 	// cart.clear(); // Clear the cart
				// 	// goto(localizeHref(`/checkout/pagamento/${orderData.orderId}/?status=pending`), {
				// 	// 	replaceState: true
				// 	// });
				// 	break;
				case 'rejected':
					launchToast(
						`Pagamento recusado: ${result.status_detail || 'verifique os dados do cartão.'}`,
						'error',
						5000
					);
					isProcessingOrder = false; // Re-enable the UI for another attempt
					break;
				default:
					console.error(`Status de pagamento desconhecido: ${result.status}`);
					throw new Error(`Status de pagamento desconhecido: ${result.status}`);
			}
		} catch (error: any) {
			console.error('Credit card processing error:', error);
			launchToast(error.message || 'Ocorreu um erro ao processar seu pagamento.', 'error', 5000);
			isProcessingOrder = false; // Re-enable the UI on error to allow retry
		}
	}

	/**
	 * Finally process the payment
	 *
	 * @param newsletter - Will be used for subscription
	 */
	async function handleCheckoutDone(newsletter: boolean) {
		if (!paymentMethodSelected) {
			console.error(`Selecione um método de pagamento`, paymentMethodSelected);
			launchToast('Selecione um método de pagamento', 'error', 2500);
			return;
		}

		// Validate credit card if needed
		if (paymentMethodSelected.id === 'woo-mercado-pago-custom') {
			if (
				!creditCardData ||
				!creditCardData.cardNumber ||
				!creditCardData.cardholderName ||
				!creditCardData.expiryDate ||
				!creditCardData.securityCode
			) {
				launchToast('Adicionar todos os dados do cartão de crédito.', 'error');
				return;
			}

			if (!validateCreditCard(creditCardData)) {
				launchToast('Alguns dados do cartão de crédito são inválidos. Verifique.', 'error');
				return;
			}
		}

		// Create the actual order in woocommerce
		isProcessingOrder = true;
		launchToast('Processando pedido...', 'info');
		const orderCreateResult = await checkoutCreateOrder();

		// Check the result
		if (orderCreateResult?.orderId) {
			console.log('ORDER SESSION_FROM_CHECKOUT', orderCreateResult.session);

			// If the payment type is credit card, then we should send this data to mercado pago
			// CREDIT_CARD PAYMENT
			if (paymentMethodSelected.id === 'woo-mercado-pago-custom') {
				console.log('Processing with credit card...');
				// Credit card stuff
				await processCreditCardPayment(
					orderCreateResult,
					creditCardData!, // Already validated above
					customer!, // Should exist at this point
					cartTotalAmount
				);
			} else {
				// Else we redirect to the second step for QR Code Payment (PIX)
				goto(
					localizeHref(
						`/checkout/pagamento/${orderCreateResult.orderId}/?sess=${orderCreateResult.session}`
					)
					// { replaceState: true }
				);
			}
		} else {
			launchToast('Não foi possível criar o pedido. Tente novamente.', 'error');
			goto(localizeHref('/checkout/error/?code=no-order-id'));
		}
	}
</script>

<Meta title="{m.seoCheckoutTitle()} {m.seoDivider()} {m.seoBase()}" noindex={true} />

<main>
	{#if isInitializing}
		<div class="max-w-screen-lg mx-[10px] md:mx-auto py-8">
			<div class="flex justify-center items-center min-h-[400px]">
				<div class="text-center">
					<div
						class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"
					></div>
					<p class="text-gray-600">{m.loadingCheckout()}</p>
				</div>
			</div>
		</div>
	{:else}
		<div class="max-w-screen-lg mx-[10px] md:mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-0 md:gap-7">
				<div class="mt-5 md:mt-8">
					<div class="flex justify-start mb-3 mx-3 md:mx-1">
						<h1 class="text-[19px] font-roboto font-extrabold ml-1">Checkout</h1>
					</div>

					<!-- Loading overlay for cart synchronization -->
					{#if isSynchronizingCart}
						<div
							class="fixed inset-0 flex items-center justify-center z-50"
							style="background-color: rgba(33, 38, 128, 0.2);"
						>
							<div class="bg-white p-6 rounded-lg shadow-lg text-center">
								<div
									class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"
								></div>
								<p class="text-gray-800">{m.syncingCart()}</p>
								<p class="text-sm text-gray-600 mt-2">{m.waiting()}</p>
							</div>
						</div>
					{/if}

					<!-- Loading overlay for order processing -->
					{#if isProcessingOrder}
						<div
							class="fixed inset-0 flex items-center justify-center z-50"
							style="background-color: rgba(33, 38, 128, 0.2);"
						>
							<div class="bg-white p-6 rounded-lg shadow-lg text-center">
								<div
									class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"
								></div>
								<p class="text-gray-800">{m.processingOrder()}</p>
								<p class="text-sm text-gray-600 mt-2">{m.completingPurchase()}</p>
							</div>
						</div>
					{/if}

					<CheckoutMobileSummary
						items={cartItemsCount}
						cartTotal={cartTotalAmount}
						cartSubTotal={cartSubTotalAmount}
						shippingAddress={shippingOption}
						{deliveryType}
						{couponsCount}
						{cartDiscounts}
						{paymentMethodSelected}
					/>

					<div class="space-y-4 px-3 md:mb-24">
						<CheckoutChooseDelivery
							initialValue={deliveryType}
							onUpdate={handleDeliveryTypeUpdate}
						/>

						<div>
							<Divider color="blue" extraClasses="!border-b-grey-lighter my-7" />
						</div>

						{#if steps.step1 && !editStep1}
							<StepOneDone {customer} onActionClick={onActionStepOneDone} />
						{:else}
							<StepOnePending {customer} onUpdate={onUpdateStepOne} />
						{/if}

						{#if deliveryType == 'PICKUP'}
							<StepTwoPickup />
						{:else if steps.step1}
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
							{#if !steps.step2 || editStep2}
								<StepTwoPending {customer} onActionClick={onUpdateShippingData} />
							{/if}
						{:else}
							<StepTwoWaiting />
						{/if}

						{#if deliveryType == 'DELIVERY'}
							{#if editStep3 || (steps.step1 && steps.step2 && !steps.step3)}
								<StepThreePending
									{customer}
									{shippingAddress}
									{sessionToken}
									onUpdate={(shippingFetched: ShippingOption | undefined) => {
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

						{#if steps.step1 && steps.step2 && steps.step3}
							{#key `${deliveryType || 'none'}-${cartTotalAmount}-${cartDiscounts}-${couponsCount}`}
								<StepFourPending
									{deliveryType}
									couponCode={couponsForGraphQL().length > 0 ? couponsForGraphQL()[0] : ''}
									{sessionToken}
									address={shippingAddress}
									{shippingOption}
									{cartTotalAmount}
									onUpdatePayment={(method) => {
										paymentMethodSelected = method;
									}}
									onCreditCardChange={(formData: CreditCardFormData) => {
										creditCardData = formData;
									}}
									onCheckoutDone={handleCheckoutDone}
								/>
							{/key}

							<!-- {#key `${deliveryType || 'none'}-${cartTotalAmount}-${cartDiscounts}-${couponsCount}`}
								<StepFourPending
									{deliveryType}
									{sessionToken}
									address={shippingAddress}
									{shippingOption}
									{cartTotalAmount}
									onUpdatePayment={(method) => {
										paymentMethodSelected = method;
									}}
									onCreditCardChange={(formData) => {
										creditCardData = formData;
									}}
									onCheckoutDone={handleCheckoutDone}
								/>
							{/key} -->
						{:else}
							<StepFourWaiting {deliveryType} />
						{/if}
					</div>
				</div>

				<div class="mt-8">
					<div class="hidden md:block mx-3 md:mx-auto">
						<PromoClub isSquare={true} isRounded={true} />
					</div>
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
	{/if}
</main>

{#if AppConfig.debug}
	<div class="fixed bottom-0 left-0 border z-50 py-5 px-8 bg-white text-xs">
		<h2 class="font-bold mb-3 text-[15px]">DEBUG</h2>
		<div class="pb-2 border-b border-grey-light">
			<strong>Loading States:</strong>
			Init: {isInitializing}, Sync: {isSynchronizingCart}, Order: {isProcessingOrder}
		</div>
		<div class="pb-2 border-b border-grey-light">
			<strong>Edit:</strong>
			1: {editStep1}, 2: {editStep2}, 3: {editStep3}
		</div>
		<div class="py-2 border-b border-grey-light">
			<strong>Steps:</strong>
			1: {steps.step1}, 2: {steps.step2}, 3: {steps.step3}, 4: {steps.step4}
		</div>
		<div class="py-2">
			<strong>DeliveryType:</strong>
			{deliveryType} - <strong>DeliveryOption:</strong>
			{shippingOption || 'undefined'}
		</div>
		<div class="pb-2">
			<strong>Session:</strong>
			{sessionToken ? truncate(sessionToken, 50) : 'undefined'}
		</div>
		<div class="py-2 border-t border-grey-light">
			<strong>Credit Card Data:</strong>
			{#if creditCardData}
				{creditCardData.cardNumber} - {creditCardData.cardholderName} - {creditCardData.expiryDate} -
				{creditCardData.securityCode}
			{:else}
				undefined
			{/if}
		</div>
	</div>
{/if}
