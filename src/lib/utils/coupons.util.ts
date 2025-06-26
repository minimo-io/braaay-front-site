import { goto } from '$app/navigation';
import { isAuthenticated } from '$lib/graphql/auth';
import { COUPON_APPLY } from '$lib/graphql/mutations';
import { localizeHref } from '$lib/paraglide/runtime';
import { addCoupon, hasCoupon, removeCoupon } from '$stores/cart.store.svelte';
import { toggleLoader } from '$stores/loaderStore.state.svelte';
import { getUrqlClient } from '$stores/urqlClient.state.svelte';
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
			launchToast(
				`Error: ${result.error.message.replaceAll('[GraphQL]', '').trim()}`,
				'error',
				3000
			);
		} else if (result.data.applyCoupon && result.data.applyCoupon.applied.code) {
			// Coupon was appllied OK!
			const couponCodeFromDb = result.data.applyCoupon.applied.code;
			if (couponCodeFromDb) {
				if (hasCoupon(couponCodeFromDb)) {
					removeCoupon(couponCodeFromDb);
				}
				addCoupon(couponCodeFromDb);
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
