<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Button from '../buttons/Button.svelte';
	import { Lock } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages';
	import { GET_SHIPPING_ESTIMATES } from '$lib/graphql/mutations/shipping-estimates.mutation';
	import type { Customer, CustomerAddress, ShippingOption, ShippingRate } from '$lib/types';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';
	import { launchToast } from '$lib/utils';
	import { getUrqlClient } from '$stores/urqlClient.state.svelte';

	interface Props {
		customer: Customer | undefined;
		shippingAddress: CustomerAddress | null;
		sessionToken: string | null | undefined;
		// The onUpdate function now only needs to pass the shipping option.
		onUpdate: (shippingOption: ShippingOption | undefined) => void;
	}
	let { customer, shippingAddress, sessionToken, onUpdate }: Props = $props();

	let finalShippingDetails: ShippingRate[] = $state([]);
	let finalShippingValueSelected = $state<ShippingOption>();
	let loading = $state(false);
	let error = $state('');

	onMount(async () => {
		toggleLoader();
		loading = true;
		error = '';

		try {
			if (!sessionToken) {
				console.error('Session token is missing.');
				throw new Error('Session token is missing.');
			}

			const sessionHeaders = {
				'Content-Type': 'application/json',
				'woocommerce-session': `Session ${sessionToken}`
			};

			const estimatesResult = await getUrqlClient()
				.client.query(GET_SHIPPING_ESTIMATES, {}, { fetchOptions: { headers: sessionHeaders } })
				.toPromise();

			if (estimatesResult.error) {
				console.error(estimatesResult.error.message);
				throw new Error('Failed to get shipping estimates');
			}

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
		} catch (err) {
			console.log(`Error from query: ${err}`);
			launchToast(
				'Não foi possível carregar as opções de envio. Tente novamente mais tarde.',
				'error'
			);
		}
		loading = false;
		toggleLoader();
	});

	onDestroy(() => {
		// Any cleanup logic can go here if needed.
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
					if (finalShippingValueSelected) {
						// The onUpdate call is now simpler.
						onUpdate(finalShippingValueSelected);
					} else {
						error = 'Seleccione al menos una opción de envío.';
					}
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
