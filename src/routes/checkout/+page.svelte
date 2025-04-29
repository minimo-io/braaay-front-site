<script lang="ts">
	import Divider from '$components/ui/dividers/Divider.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { isAuthenticated } from '$lib/graphql/auth';
	import { onMount } from 'svelte';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';
	import { getUrqlClient } from '$stores/urqlClient.state.svelte';
	import { CUSTOMER_QUERY, mapCustomerToUser } from '$lib/graphql/queries';
	import type { Customer } from '$lib/types';
	import { launchToast } from '$lib/utils';
	import { goto } from '$app/navigation';
	import CheckoutSummary from '$components/ui/checkout/CheckoutSummary.svelte';
	import CheckoutChooseDelivery from '$components/ui/checkout/CheckoutChooseDelivery.svelte';
	import StepOneLoggedIn from '$components/ui/checkout/StepOneLoggedIn.svelte';
	import StepOneLoggedOut from '$components/ui/checkout/StepOneLoggedOut.svelte';
	import Step2Waiting from '$components/ui/checkout/Step2Waiting.svelte';
	import Step3Waiting from '$components/ui/checkout/Step3Waiting.svelte';
	import Step4Active from '$components/ui/checkout/Step4Active.svelte';
	import PromoClub from '$components/ui/checkout/PromoClub.svelte';
	import CheckoutCartSummary from '$components/ui/checkout/CheckoutCartSummary.svelte';

	// let userName = $state('');
	// let userEmail = $state('');
	// authState.subscribe((auth) => {
	// 	if (auth.user && auth.user.name && auth.user.email) {
	// 		userName = auth.user.name;
	// 		userEmail = auth.user.email;
	// 	}
	// });
	interface Steps {
		step1: boolean;
		step2: boolean;
		step3: boolean;
		step4: boolean;
	}
	let steps: Steps = $state({ step1: false, step2: false, step3: false, step4: false });
	let customer: Customer | undefined = $state();

	onMount(async () => {
		toggleLoader();
		try {
			const customerResult = await getUrqlClient().client.query(CUSTOMER_QUERY, {});
			if (customerResult && customerResult.error) {
				launchToast('Houve um error tentando obter os dados do cliente', 'error');
			}

			customer = mapCustomerToUser(customerResult.data);
		} catch (err) {
			console.error(err);
			launchToast('Houve um error tentando obter os dados do cliente', 'error');
			goto(localizeHref('/cart/'));
		}

		toggleLoader();
	});
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
					<CheckoutChooseDelivery />

					<div>
						<Divider color="blue" extraClasses="!border-b-grey-lighter my-7" />
					</div>

					{#if isAuthenticated()}
						<!-- Step 1: LoggedIn -->
						<StepOneLoggedIn {customer} />
					{:else}
						<!-- Step 1: LoggedOut -->
						<StepOneLoggedOut {customer} />
					{/if}

					<!-- Step 2 -->
					<Step2Waiting />

					<!-- Step 3 -->
					<Step3Waiting />

					<!-- Form step 4 -->
					<Step4Active />
				</div>
			</div>

			<!-- Advertising -->
			<div class="mt-8">
				<!-- Promo clube -->
				<PromoClub />

				<!-- Extra cart elements -->
				<CheckoutCartSummary />

				<div class="hidden md:block md:my-36"></div>
			</div>
		</div>
	</div>
</main>
