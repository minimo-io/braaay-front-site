// src/lib/services/couponsService.ts
import { getUrqlClient } from '$stores/urqlClient.state.svelte';
import {
	addCoupon,
	cart,
	emptyRemoteCart,
	hasCoupon,
	removeCoupon
} from '$lib/stores/cart.store.svelte';
import { CART_ADD_ITEMS_MUTATION, COUPON_APPLY } from '$lib/graphql/mutations';
import { isNumber, toFloatPrice } from '$lib/utils';
import type { CouponResult } from '$lib/types';

export async function processCoupon(couponCode: string): Promise<CouponResult> {
	try {
		if (couponCode.trim().length < 4) {
			return {
				success: false,
				error: 'O código do cupom deve ter pelo menos 4 letras ou números'
			};
		}

		// Step 1: Prepare cart items
		const cartItemsForGraphQL: { productId: number; quantity: number }[] = [];
		cart.subscribe((cart) => {
			cart.items.forEach((item) => {
				cartItemsForGraphQL.push({
					productId: item.id,
					quantity: item.quantity
				});
			});
		})();

		// Step 2: Add items to remote cart and capture session token
		let currentSessionToken = '';
		const addToCartResult = await getUrqlClient()
			.client.mutation(
				CART_ADD_ITEMS_MUTATION,
				{
					items: cartItemsForGraphQL
				},
				{
					fetch: (input, init) => {
						return fetch(input, init).then((response) => {
							const newSession = response.headers.get('woocommerce-session');
							if (newSession) {
								currentSessionToken = newSession.replace('Session ', '');
							}
							return response;
						});
					}
				}
			)
			.toPromise();

		if (addToCartResult.error) {
			return {
				success: false,
				error: 'Erro ao adicionar itens ao carrinho temporário.'
			};
		}

		// Step 3: Apply coupon
		const updatedSessionHeaders = {
			'Content-Type': 'application/json',
			'woocommerce-session': `Session ${currentSessionToken}`
		};

		const result = await getUrqlClient('', false)
			.client.mutation(
				COUPON_APPLY,
				{
					couponCode: couponCode.trim()
				},
				{ fetchOptions: { headers: updatedSessionHeaders } }
			)
			.toPromise();

		if (result.error) {
			return {
				success: false,
				error: result.error.message,
				sessionToken: currentSessionToken
			};
		}

		// Step 4: Empty remote cart
		await emptyRemoteCart();

		if (result.data?.applyCoupon?.applied?.code) {
			const couponCodeFromDb = result.data.applyCoupon.applied.code;
			const couponDiscountFromDb = result.data.applyCoupon.applied.discountAmount;
			const couponDiscountFloat = toFloatPrice(couponDiscountFromDb);

			if (couponCodeFromDb && couponDiscountFromDb && isNumber(couponDiscountFloat)) {
				if (hasCoupon(couponCodeFromDb)) {
					removeCoupon(couponCodeFromDb);
				}
				addCoupon(couponCodeFromDb, couponDiscountFloat);
			}

			return {
				success: true,
				sessionToken: currentSessionToken
			};
		} else {
			return {
				success: false,
				error: 'Erro inesperado ao aplicar o cupom.',
				sessionToken: currentSessionToken
			};
		}
	} catch (err) {
		const message = err instanceof Error ? err.message : String(err);
		return {
			success: false,
			error: message
		};
	}
}
