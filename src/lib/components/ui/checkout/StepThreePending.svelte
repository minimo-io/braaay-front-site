<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '../buttons/Button.svelte';
	import { Lock } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages';
	import { UPDATE_GUEST_SHIPPING_ADDRESS } from '$lib/graphql/mutations/shipping-update.mutation';
	import { GET_SHIPPING_ESTIMATES } from '$lib/graphql/mutations/shipping-estimates.mutation';
	import type { Customer, CustomerAddress, ShippingOption, ShippingRate } from '$lib/types';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';
	import { launchToast } from '$lib/utils';
	import { getUrqlClient } from '$stores/urqlClient.state.svelte';
	import { CART_ADD_ITEMS_MUTATION, EMPTY_CART_MUTATION } from '$lib/graphql/mutations';
	import { cart } from '$stores/cart.store.svelte';

	interface Props {
		customer: Customer | undefined;
		shippingAddress: CustomerAddress | null;
		sessionToken: string | undefined; // The session token is now passed as a prop
		onUpdate: (shippingOption: ShippingOption | undefined, sessionToken: string) => void;
	}
	let { customer, shippingAddress, sessionToken, onUpdate }: Props = $props();

	let finalShippingDetails: ShippingRate[] = $state([]);
	let finalShippingValueSelected = $state<ShippingOption>();
	let loading = $state(false);
	let error = $state('');

	let currentSessionToken = $state(sessionToken);

	onMount(async () => {
		toggleLoader();
		loading = true;
		error = '';

		try {
			// Step 1: Ensure a session token exists.
			if (!currentSessionToken) {
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
				currentSessionToken = updateResult.data.updateCustomer.customer.sessionToken;
			}

			const sessionHeaders = {
				'Content-Type': 'application/json',
				'woocommerce-session': `Session ${currentSessionToken}`
			};

			// Step 2: Empty the cart before we add items to prevent duplicates.
			const emptyCartResult = await getUrqlClient()
				.client.mutation(EMPTY_CART_MUTATION, {}, { fetchOptions: { headers: sessionHeaders } })
				.toPromise();

			if (emptyCartResult.error) {
				// Log and continue, as the error might just mean the cart was already empty.
				console.error(`Failed to empty cart: ${emptyCartResult.error.message}`);
			}

			// Step 3: Add items from the client-side store to the now-empty cart.
			let cartItemsForGraphQL: { productId: number; quantity: number }[] = [];
			cart.subscribe((cart) => {
				cart.items.forEach((item) => {
					cartItemsForGraphQL.push({
						productId: item.id,
						quantity: item.quantity
					});
				});
			});

			// Only add if there are items to add.
			if (cartItemsForGraphQL.length > 0) {
				const addToCartResult = await getUrqlClient()
					.client.mutation(
						CART_ADD_ITEMS_MUTATION,
						{
							items: cartItemsForGraphQL
						},
						{
							fetchOptions: { headers: sessionHeaders },
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
					throw new Error(`Failed to add product: ${addToCartResult.error.message}`);
				}
			}

			// Step 4: Get shipping estimates using the correct session token.
			const updatedSessionHeaders = {
				'Content-Type': 'application/json',
				'woocommerce-session': `Session ${currentSessionToken}`
			};

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

			// Defensive programming: check if the cart object exists before accessing its properties.
			const availableShippingMethods = estimatesResult.data?.cart?.availableShippingMethods;
			if (!availableShippingMethods || availableShippingMethods.length === 0) {
				throw new Error('No shipping methods available for the current cart.');
			}

			const shippingData = availableShippingMethods[0].rates;

			finalShippingDetails = [];
			for (const result of shippingData) {
				finalShippingDetails.push({
					id: result.id,
					label: result.label,
					cost: result.cost
				});
			}
			console.log('currentSessionToken', currentSessionToken);
		} catch (err) {
			console.log(`Error from query: ${err}`);
		}
		loading = false;
		toggleLoader();
	});
</script>

<div class="mx-auto p-6 bg-white border border-grey-lighter rounded-lg shadow-sm">
	<div class="mb-4">
		<h2 class="text-lg font-medium text-left mb-4">
			<span
				class="inline-flex items-center justify-center w-5 h-5 bg-sun text-grey-background rounded-full mr-2 text-xs"
				>3</span
			>
			{m.shippingOptions()}
		</h2>
		{#if loading}
			<div class="text-xs">{m.loading()}</div>
		{:else}
			<div class="flex flex-col">
				{#each finalShippingDetails as shipping, i}
					<div class="flex flex-row justify-between text-xs items-center my-1">
						<label
							class="text-[13px] md:text-[15px] flex cursor-pointer justify-between w-full"
							for="radio-{i}"
						>
							<div class="flex justify-start items-center">
								<input
									bind:group={finalShippingValueSelected}
									onclick={() => (error = '')}
									name="shippingOption"
									id="radio-{i}"
									type="radio"
									value={{ id: shipping.id, label: shipping.label, cost: shipping.cost }}
								/>
								<span class="ml-2 capitalize">
									{shipping.label.replace('Entrega ', '')}
								</span>
							</div>

							<div class="font-bold">
								{m.currencySymbol()}
								{shipping.cost}
							</div>
						</label>
					</div>
				{/each}
			</div>
		{/if}
	</div>

	<form class="space-y-4">
		{#if error}
			<div class="text-red-medium text-xs">
				{error}
			</div>
		{/if}
		<div class="py-1">
			<Button
				action={() => {
					// toggleLoader();
					if (finalShippingValueSelected) {
						// Pass the session token back to the parent
						onUpdate(finalShippingValueSelected, currentSessionToken!);
					} else {
						error = 'Seleccione al menos una opción de envío.';
					}

					// toggleLoader();
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
