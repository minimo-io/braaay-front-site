<!-- src/lib/components/ui/forms/cupomForm.svelte -->
<script lang="ts">
	import Button from '../buttons/Button.svelte';
	import { closeModal } from '$stores/modalState.state.svelte';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';
	import { getUrqlClient } from '$stores/urqlClient.state.svelte';
	import {
		addCoupon,
		cart,
		emptyRemoteCart,
		hasCoupon,
		removeCoupon
	} from '$lib/stores/cart.store.svelte';
	import {
		CART_ADD_ITEMS_MUTATION,
		COUPON_APPLY,
		EMPTY_CART_MUTATION
	} from '$lib/graphql/mutations';
	import { isNumber, launchToast, toFloatPrice } from '$lib/utils';
	import { processCoupon } from '$lib/services/couponsService';

	// let { initialValue = '' } = $props<{ initialValue?: string }>();

	// let couponCode = $state(initialValue);
	let couponCode = $state('');
	let error = $state('');
	let couponCodeSanitized = $derived(couponCode.trim());
	let processing = $state(false);
	let currentSessionToken = $state('');

	// async function handleCouponSubmit() {
	// 	processing = true;
	// 	error = '';
	// 	toggleLoader();
	// 	document.body.classList.toggle('no-scroll');
	// 	try {
	// 		if (couponCodeSanitized.length > 3) {
	// 			processing = false;
	// 			let addToCartResponse;
	// 			// Add items to cart temporarly --------------------------------------------------------
	// 			// Get items
	// 			let cartItemsForGraphQL: { productId: number; quantity: number }[] = [];
	// 			cart.subscribe((cart) => {
	// 				cart.items.forEach((item) => {
	// 					cartItemsForGraphQL.push({
	// 						productId: item.id,
	// 						quantity: item.quantity
	// 					});
	// 				});
	// 			});
	// 			// Add items
	// 			const addToCartResult = await getUrqlClient()
	// 				.client.mutation(
	// 					CART_ADD_ITEMS_MUTATION,
	// 					{
	// 						items: cartItemsForGraphQL
	// 					},
	// 					{
	// 						// fetchOptions: { headers: sessionHeaders },
	// 						fetch: (input, init) => {
	// 							return fetch(input, init).then((response) => {
	// 								// Capture any new session token if provided
	// 								const newSession = response.headers.get('woocommerce-session');
	// 								if (newSession) {
	// 									currentSessionToken = newSession.replace('Session ', '');
	// 									// console.log('New session from add to cart:', currentSessionToken);
	// 								}
	// 								addToCartResponse = response;
	// 								return response;
	// 							});
	// 						}
	// 					}
	// 				)
	// 				.toPromise();

	// 			console.log('CURRENT_SESSION', currentSessionToken);
	// 			console.log('ADD_TO_CART_RESPONSE', addToCartResponse);

	// 			// -------------------------------------------------------------------------------------
	// 			// Add coupon
	// 			const updatedSessionHeaders = {
	// 				'Content-Type': 'application/json',
	// 				'woocommerce-session': `Session ${currentSessionToken}`
	// 			};
	// 			const result = await getUrqlClient('', false)
	// 				.client.mutation(
	// 					COUPON_APPLY,
	// 					{
	// 						couponCode: couponCodeSanitized
	// 					},

	// 					{ fetchOptions: { headers: updatedSessionHeaders } }
	// 				)
	// 				.toPromise();

	// 			// -----------------------------------------------------------------------------------
	// 			// Empty temporar cart
	// 			await emptyRemoteCart();
	// 			// -----------------------------------------------------------------------------------
	// 			if (result.error && result.error.message) {
	// 				error = `Error: ${result.error.message.replaceAll('[GraphQL]', '').trim()}`;
	// 			} else if (result.data.applyCoupon && result.data.applyCoupon.applied.code) {
	// 				// Coupon was appllied OK! So it passed all tests, let's apply it in the front-end
	// 				const couponCodeFromDb = result.data.applyCoupon.applied.code ?? undefined;
	// 				const couponDiscountFromDb = result.data.applyCoupon.applied.discountAmount ?? undefined;
	// 				const couponDiscountFloat = toFloatPrice(couponDiscountFromDb);

	// 				if (couponCodeFromDb && couponDiscountFromDb && isNumber(couponDiscountFloat)) {
	// 					console.log('Discount Float', couponDiscountFloat);
	// 					if (hasCoupon(couponCodeFromDb)) {
	// 						removeCoupon(couponCodeFromDb);
	// 					}
	// 					addCoupon(couponCodeFromDb, couponDiscountFloat);
	// 				}

	// 				launchToast(`Cupom "${couponCodeSanitized}"" aplicado!`, 'success');

	// 				couponCode = '';
	// 				closeModal();

	// 				// Apply coupon code
	// 			} else {
	// 				error = 'Error inesperado com o código do cupom';
	// 				processing = false;
	// 			}
	// 		} else {
	// 			error = 'O código do cupom deve ter pelo menos 4 letras ou números';
	// 			processing = false;
	// 			// closeModal();
	// 		}

	// 		document.body.classList.toggle('no-scroll');
	// 		toggleLoader();
	// 	} catch (error) {
	// 		// processing = false;

	// 		launchToast(`Error procesando o cupom: ${error}`, 'error');
	// 		toggleLoader();
	// 		document.body.classList.toggle('no-scroll');
	// 		processing = false;
	// 		closeModal();
	// 	}
	// }

	async function handleCouponSubmit() {
		processing = true;
		error = '';
		toggleLoader();
		document.body.classList.toggle('no-scroll');

		try {
			const result = await processCoupon(couponCode);

			if (result.success) {
				launchToast(`Cupom "${couponCodeSanitized}" aplicado!`, 'success');
				couponCode = '';
				closeModal();
			} else {
				error = result.error || 'Error inesperado com o código do cupom';
				launchToast(`Error: ${result.error}`, 'error');
			}
		} catch (err) {
			const errorMessage = err instanceof Error ? err.message : String(err);
			launchToast(`Error procesando o cupom: ${errorMessage}`, 'error');
			error = errorMessage;
		} finally {
			document.body.classList.toggle('no-scroll');
			toggleLoader();
			processing = false;
		}
	}
</script>

<form>
	<input
		disabled={processing}
		bind:value={couponCode}
		type="text"
		pattern="[A-Za-z0-9]+"
		oninput={(e) =>
			(couponCode = (e.target as HTMLInputElement).value.replace(/[^a-zA-Z0-9]/g, ''))}
		placeholder="Código do cupom"
		class="w-full px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
		maxlength="20"
		required
		onkeydown={(e) => {
			if (e.key === 'Enter') {
				e.preventDefault();
				handleCouponSubmit();
			}
		}}
	/>
	<div>
		<!-- <button type="submit" onclick={() => handleCouponSubmit()}>Aplicar cupom</button> -->
		<Button
			disabled={processing}
			type="blue"
			size="md"
			rounded="lg"
			customPx="!h-[38px] !mt-2"
			title="Aplicar cupom"
			action={() => handleCouponSubmit()}
		/>
	</div>
	{#if error}
		<div class="text-center text-xs mt-2 text-red-medium">{@html error}</div>
	{/if}
</form>
