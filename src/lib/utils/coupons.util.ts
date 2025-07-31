import { goto } from '$app/navigation';
import { isAuthenticated } from '$lib/graphql/auth';
import { COUPON_APPLY } from '$lib/graphql/mutations';
import { localizeHref } from '$lib/paraglide/runtime';
import { addCoupon, hasCoupon, removeCoupon } from '$stores/cart.store.svelte';
import { toggleLoader } from '$stores/loaderStore.state.svelte';
import { getUrqlClient } from '$stores/urqlClient.state.svelte';
import { stripHtml } from './html.util';
import { launchToast } from './launchToast.util';

export async function addCouponToCart() {
	if (isAuthenticated()) {
		toggleLoader();
		launchToast(`Aplicando cupom...`, 'info');
		const result = await getUrqlClient('', false)
			.client.mutation(COUPON_APPLY, {
				couponCode: 'primeira10'
			})
			.toPromise();

		if (result.error && result.error.message) {
			let errorMessage = result.error.message.replaceAll('[GraphQL]', '').trim();
			errorMessage = stripHtml(errorMessage);
			errorMessage = errorMessage.replaceAll('&#82;&#36;', 'R$');

			console.error(errorMessage);
			launchToast(`Error: ${errorMessage}`, 'error', 3000);
		} else if (result.data.applyCoupon && result.data.applyCoupon.applied.code) {
			// Coupon was appllied OK!
			const couponCodeFromDb = result.data.applyCoupon.applied.code;
			const couponDiscountFromDb = result.data.applyCoupon.applied.discount;
			if (couponCodeFromDb) {
				if (hasCoupon(couponCodeFromDb)) {
					removeCoupon(couponCodeFromDb);
				}
				addCoupon(couponCodeFromDb, couponDiscountFromDb);
			}
			launchToast(`Desconto aplicado! Agora e só adicionar produtos no carrinho`, 'success', 3500);
			goto(localizeHref('/vinhos/'));
		}
		toggleLoader();
	} else {
		launchToast('Precisa fazer login para adicionar um cupom.', 'info', 3000);
		goto(localizeHref('/login/'));
	}
}
