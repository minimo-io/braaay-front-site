<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Button from '../buttons/Button.svelte';
	import { Lock } from '@lucide/svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';
	import { CircleUserRound } from '@lucide/svelte';
	import { UPDATE_GUEST_SHIPPING_ADDRESS } from '$lib/graphql/mutations/shipping-update.mutation';
	import { GET_SHIPPING_ESTIMATES } from '$lib/graphql/mutations/shipping-estimates.mutation';
	import type { Customer, CustomerAddress, ShippingRate } from '$lib/types';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';
	import { launchToast } from '$lib/utils';
	import { getUrqlClient } from '$stores/urqlClient.state.svelte';
	import { CART_ADD_MUTATION } from '$lib/graphql/mutations';

	interface Props {
		customer: Customer | undefined;
		shippingAddress: CustomerAddress | null;
		onUpdate: (customerData: Customer) => void;
	}
	let { customer, shippingAddress, onUpdate }: Props = $props();

	let finalShippingDetails: ShippingRate[] = $state([]);

	onMount(async () => {
		toggleLoader();
		console.log('Get shipping options for...');
		console.log(shippingAddress);

		try {
			// Check ------------------------------------------
			launchToast(`Obtendo parceiros...`, 'info', 2000);
			const updateResult = await getUrqlClient()
				.client.mutation(UPDATE_GUEST_SHIPPING_ADDRESS, {
					input: {
						shipping: {
							postcode: shippingAddress!.postcode,
							country: 'BR',
							overwrite: true
						}
					}
				})
				.toPromise();

			if (updateResult.error) {
				throw new Error(`Shipping update failed: ${updateResult.error.message}`);
			}

			// Get the initial session token
			const sessionToken = updateResult.data.updateCustomer.customer.sessionToken;
			console.log('Session token', sessionToken);

			// Step 2: Add product to cart with this session, but CAPTURE any new session that's created
			const sessionHeaders = {
				'Content-Type': 'application/json',
				'woocommerce-session': `Session ${sessionToken}`
			};

			let currentSessionToken = sessionToken;
			let addToCartResponse;

			const addToCartResult = await getUrqlClient()
				.client.mutation(
					CART_ADD_MUTATION,
					{ productId: 131701, quantity: 1 },
					{
						fetchOptions: { headers: sessionHeaders },
						fetch: (input, init) => {
							return fetch(input, init).then((response) => {
								// Capture any new session token if provided
								const newSession = response.headers.get('woocommerce-session');
								if (newSession) {
									currentSessionToken = newSession.replace('Session ', '');
									// console.log('New session from add to cart:', currentSessionToken);
								}
								addToCartResponse = response;
								return response;
							});
						}
					}
				)
				.toPromise();

			if (addToCartResult.error) {
				throw new Error(`Failed to add product: ${addToCartResult.error.message}`);
			}

			// Update headers with the latest session token
			const updatedSessionHeaders = {
				'Content-Type': 'application/json',
				'woocommerce-session': `Session ${currentSessionToken}`
			};

			// Get shipping estimates
			const estimatesResult = await getUrqlClient()
				.client.query(
					GET_SHIPPING_ESTIMATES,
					{},
					{ fetchOptions: { headers: updatedSessionHeaders } }
				)
				.toPromise();

			if (estimatesResult.error) {
				console.error(estimatesResult.error.message);
				throw new Error('Failed to get shipping estimates');
			}

			// return shipping data
			const shippingData = estimatesResult.data.cart.availableShippingMethods[0].rates;
			// final shipping details

			for (const result of shippingData) {
				finalShippingDetails.push({
					id: result.id,
					label: result.label,
					cost: result.cost
				});
			}

			console.log('ALL_SHIPPINGS', finalShippingDetails);
			// -------------------------------------------------
		} catch (err) {
			console.log(`Error from query: ${err}`);
		}
		toggleLoader();
	});
</script>

<div class="mx-auto p-6 bg-white border border-grey-lighter rounded-lg shadow-sm">
	<div class="mb-4">
		<h2 class="text-lg font-medium text-left mb-4">
			<!-- <span
				class="inline-flex items-center justify-center w-5 h-5 bg-sun text-grey-background rounded-full mr-2 text-xs"
				>1</span
			> -->
			Opções de envio
		</h2>
		<div class="flex flex-col">
			{#each finalShippingDetails as shipping}
				<div class="flex flex-row justify-between text-xs">
					<div class="flex justify-start">
						<input type="radio" />
						<span class="ml-2">
							{shipping.label}
						</span>
					</div>

					<div class="font-bold">
						{shipping.cost}
					</div>
				</div>
			{/each}
		</div>
	</div>

	<form class="space-y-4">
		<!-- Next -->
		<div class="py-1">
			<Button
				action={() => {
					toggleLoader();

					// const frmValues = {
					// 	email: emailValue,
					// 	cpf: cpfValue,
					// 	telephone: phoneValue,
					// 	birthDate: birthDateValue,
					// 	firstName,
					// 	lastName
					// };

					// const validation = validateCheckoutStepOne(frmValues);

					// if (validation.valid) {
					// 	onUpdate({ ...frmValues, databaseId: undefined });
					// } else {
					// 	// launchToast('Hey! Wrong! Mehh!', 'error');
					// 	Object.values(validation.errors).forEach((msg) => launchToast(msg, 'error'));
					// }

					toggleLoader();
				}}
				type="sun"
				url="#"
				title="CONTINUAR →"
				size="md"
				rounded="lg"
				font="md"
			>
				{#snippet icon()}
					<Lock class="h-4" />
				{/snippet}
			</Button>
		</div>
	</form>
</div>
