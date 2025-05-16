<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Button from '../buttons/Button.svelte';
	import { Lock } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages';
	import { UPDATE_GUEST_SHIPPING_ADDRESS } from '$lib/graphql/mutations/shipping-update.mutation';
	import { GET_SHIPPING_ESTIMATES } from '$lib/graphql/mutations/shipping-estimates.mutation';
	import type {
		CartItem,
		Customer,
		CustomerAddress,
		ShippingOption,
		ShippingRate
	} from '$lib/types';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';
	import { launchToast } from '$lib/utils';
	import { getUrqlClient } from '$stores/urqlClient.state.svelte';
	import { CART_ADD_ITEMS_MUTATION, CART_ADD_MUTATION } from '$lib/graphql/mutations';
	import { cart } from '$stores/cart.store.svelte';

	interface Props {
		customer: Customer | undefined;
		shippingAddress: CustomerAddress | null;
		onUpdate: (shippingOption: ShippingOption | undefined, sessionToken: string) => void;
	}
	let { customer, shippingAddress, onUpdate }: Props = $props();

	let finalShippingDetails: ShippingRate[] = $state([]);
	let finalShippingValueSelected = $state<ShippingOption>();
	let loading = $state(false);
	let error = $state('');
	let currentSessionToken = $state('');

	onMount(async () => {
		toggleLoader();
		loading = true;
		error = '';
		// console.log('Get shipping options for...');
		// console.log(shippingAddress);

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
			// console.log('Session token', sessionToken);

			// Step 2: Add product to cart with this session, but CAPTURE any new session that's created
			const sessionHeaders = {
				'Content-Type': 'application/json',
				'woocommerce-session': `Session ${sessionToken}`
			};

			currentSessionToken = sessionToken;
			let addToCartResponse;

			// let cartItems: CartItem[] = [];
			let cartItemsForGraphQL: { productId: number; quantity: number }[] = [];
			cart.subscribe((cart) => {
				cart.items.forEach((item) => {
					cartItemsForGraphQL.push({
						productId: item.id,
						quantity: item.quantity
					});
				});
			});

			// get all cart items
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

			// console.log('ALL_SHIPPINGS', finalShippingDetails);

			console.log('currentSessionToken', currentSessionToken);

			// -------------------------------------------------
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
			Opções de envio
		</h2>
		{#if loading}
			<div class="text-xs">{m.loading()}</div>
		{:else}
			<div class="flex flex-col">
				{#each finalShippingDetails as shipping, i}
					{#if !shipping.id.startsWith('local_pickup')}
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
					{/if}
				{/each}
			</div>
		{/if}
	</div>

	<form class="space-y-4">
		<!-- Error -->
		{#if error}
			<div class="text-red-medium text-xs">
				{error}
			</div>
		{/if}
		<!-- Next -->
		<div class="py-1">
			<Button
				action={() => {
					// toggleLoader();
					if (finalShippingValueSelected) {
						onUpdate(finalShippingValueSelected, currentSessionToken);
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
