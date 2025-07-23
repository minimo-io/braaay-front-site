<!-- src/lib/components/ui/forms/cupomForm.svelte -->
<script lang="ts">
	import Button from '../buttons/Button.svelte';
	import { closeModal } from '$stores/modalState.state.svelte';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';
	import { getUrqlClient } from '$stores/urqlClient.state.svelte';
	import { addCoupon, hasCoupon, removeCoupon } from '$lib/stores/cart.store.svelte';
	import { COUPON_APPLY } from '$lib/graphql/mutations';
	import { launchToast } from '$lib/utils';

	// let { initialValue = '' } = $props<{ initialValue?: string }>();

	// let couponCode = $state(initialValue);
	let couponCode = $state('');
	let error = $state('');
	let couponCodeSanitized = $derived(couponCode.trim());
	let processing = $state(false);

	async function handleCouponSubmit() {
		processing = true;
		error = '';
		toggleLoader();
		document.body.classList.toggle('no-scroll');
		try {
			if (couponCodeSanitized.length > 3) {
				const result = await getUrqlClient('', false)
					.client.mutation(COUPON_APPLY, {
						couponCode: couponCodeSanitized
					})
					.toPromise();

				processing = false;
				if (result.error && result.error.message) {
					error = `Error: ${result.error.message.replaceAll('[GraphQL]', '').trim()}`;
				} else if (result.data.applyCoupon && result.data.applyCoupon.applied.code) {
					// Coupon was appllied OK!
					const couponCodeFromDb = result.data.applyCoupon.applied.code;
					if (couponCodeFromDb) {
						if (hasCoupon(couponCodeFromDb)) {
							removeCoupon(couponCodeFromDb);
						}
						addCoupon(couponCodeFromDb);
					}

					launchToast(`Cupom "${couponCodeSanitized}"" aplicado!`, 'success');

					couponCode = '';
					closeModal();

					// Apply coupon code
				} else {
					error = 'Error inesperado com o código do cupom';
					processing = false;
				}
			} else {
				error = 'O código do cupom deve ter pelo menos 4 letras ou números';
				processing = false;
				// closeModal();
			}

			document.body.classList.toggle('no-scroll');
			toggleLoader();
		} catch (error) {
			// processing = false;

			launchToast(`Error procesando o cupom: ${error}`, 'error');
			toggleLoader();
			document.body.classList.toggle('no-scroll');
			processing = false;
			closeModal();
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
