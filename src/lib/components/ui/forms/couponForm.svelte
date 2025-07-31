<!-- src/lib/components/ui/forms/cupomForm.svelte -->
<script lang="ts">
	import Button from '../buttons/Button.svelte';
	import { closeModal } from '$stores/modalState.state.svelte';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';

	import { isNumber, launchToast, stripHtml } from '$lib/utils';
	import { processCoupon } from '$lib/services/couponsService';

	// let { initialValue = '' } = $props<{ initialValue?: string }>();

	// let couponCode = $state(initialValue);
	let couponCode = $state('');
	let error = $state('');
	let couponCodeSanitized = $derived(couponCode.trim());
	let processing = $state(false);

	async function handleCouponSubmit() {
		processing = true;
		error = '';

		launchToast('Tentando aplicar cupom...', 'info', 2000);
		toggleLoader();
		document.body.classList.toggle('no-scroll');

		try {
			const result = await processCoupon(couponCode);

			if (result.success) {
				launchToast(`Cupom "${couponCodeSanitized}" aplicado!`, 'success');
				couponCode = '';
				closeModal();
			} else {
				let errorDetails =
					result.error?.replaceAll('[GraphQL] ', '') ?? 'Error inesperado com o código do cupom';

				errorDetails = stripHtml(errorDetails);
				errorDetails = errorDetails.replaceAll('&#82;&#36;', 'R$');

				console.error(errorDetails);
				launchToast(`Error: ${errorDetails}`, 'error', 3000);
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
