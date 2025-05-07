<script lang="ts">
	import Divider from '$components/ui/dividers/Divider.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { isAuthenticated } from '$lib/graphql/auth';
	import { onMount } from 'svelte';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';
	import { getUrqlClient } from '$stores/urqlClient.state.svelte';
	import { CUSTOMER_QUERY, mapCustomerToUser } from '$lib/graphql/queries';
	import type { Customer, CustomerAddress } from '$lib/types';
	import { DeliveryUIType } from '$lib/types';
	import { launchToast } from '$lib/utils';
	import { goto } from '$app/navigation';
	import CheckoutSummary from '$components/ui/checkout/CheckoutSummary.svelte';
	import CheckoutChooseDelivery from '$components/ui/checkout/CheckoutChooseDelivery.svelte';
	import StepOneDone from '$components/ui/checkout/StepOneDone.svelte';
	import StepOnePending from '$components/ui/checkout/StepOnePending.svelte';
	import StepTwoWaiting from '$components/ui/checkout/StepTwoWaiting.svelte';
	import StepThreeWaiting from '$components/ui/checkout/StepThreeWaiting.svelte';
	import StepFourActive from '$components/ui/checkout/StepFourActive.svelte';
	import PromoClub from '$components/ui/checkout/PromoClub.svelte';
	import CheckoutCartSummary from '$components/ui/checkout/CheckoutCartSummary.svelte';
	import StepTwoDone from '$components/ui/checkout/StepTwoDone.svelte';
	import StepTwoPending from '$components/ui/checkout/StepTwoPending.svelte';
	import StepTwoPickup from '$components/ui/checkout/StepTwoPickup.svelte';
	import StepThreePending from '$components/ui/checkout/StepThreePending.svelte';
	import StepFourWaiting from '$components/ui/checkout/StepFourWaiting.svelte';

	interface Steps {
		step1: boolean | object;
		step2: boolean | object;
		step3: boolean | object;
		step4: boolean | object;
	}
	let steps: Steps = $state({ step1: false, step2: false, step3: false, step4: false });
	let editStep1 = $state(false);
	let editStep2 = $state(false);

	// Initialize as null to have no default selection
	let deliveryType = $state<DeliveryUIType | null>(DeliveryUIType.DELIVERY);
	let shippingAddress = $state<CustomerAddress | null>(null);
	let guestSessionToken = $state('');

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

	function onUpdateStepOne(customerData: Customer) {
		editStep1 = false;
		customer = customerData;

		steps.step1 = customer;
	}

	function onActionStepOneDone() {
		editStep1 = true;
	}

	function handleDeliveryTypeUpdate(delivery: DeliveryUIType) {
		deliveryType = delivery;

		// You might want to do additional logic here
		// like enabling step2 when a selection is made
		if (deliveryType == 'PICKUP') {
			// Only progress to step2 if user is logged in (step1 complete)
			// if (steps.step1) {
			editStep2 = false;
			steps.step2 = true;
			steps.step3 = true;
			// }
		} else if (deliveryType == 'DELIVERY') {
			if (steps.step1) {
				editStep2 = false;
				steps.step2 = false;
				steps.step3 = false;
			}
		}
	}

	// Update the delivery data, also save in localStorage (in the future)
	function onUpdateShippingData(shippingData: CustomerAddress) {
		shippingAddress = shippingData;
		editStep2 = false;
		if (steps.step1) {
			steps.step2 = true;
		}
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
				<CheckoutSummary />

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
						{#if steps.step1 && steps.step2 && !steps.step3}
							<StepThreePending
								{customer}
								{shippingAddress}
								onUpdate={() => {
									alert('updated');
								}}
							/>
						{:else if steps.step1 && steps.step2 && steps.step3}
							STEP 3 DONE.
						{:else}
							<StepThreeWaiting />
						{/if}
					{/if}
					<!-- Form step 4 -->
					<!-- DEBUG -->
					<!-- Edit Step 1: {editStep1} - Edit Step 2: {editStep2}
					<br />
					Step 1: {steps.step1} - Step 2: {steps.step2} - Step 3: {steps.step3}
					<br />
					deliveryType: {deliveryType} -->
					{#if steps.step1 && steps.step2 && steps.step3}
						<StepFourActive {deliveryType} />
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
				<CheckoutCartSummary />

				<div class="hidden md:block md:my-36">&nbsp;</div>
			</div>
		</div>
	</div>
</main>
