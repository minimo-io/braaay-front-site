<script lang="ts">
	import Button from '../buttons/Button.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';
	import { CircleUserRound } from '@lucide/svelte';
	import IMask from 'imask';
	import type { Customer } from '$lib/types';
	import { onMount, onDestroy } from 'svelte';

	interface Props {
		customer: Customer | undefined;
	}
	let { customer }: Props = $props();

	// Create a state variable to hold the current value of the input
	let zipValue = $state(customer?.addresses.shipping.postcode || '');

	// Update zipValue whenever customer changes
	$effect(() => {
		if (customer?.addresses.shipping.postcode) {
			zipValue = customer.addresses.shipping.postcode;

			// If mask is already initialized, update its value too
			if (zipMask) {
				zipMask.unmaskedValue = customer.addresses.shipping.postcode;
			}
		}
	});

	// Input masking logic
	let zipMask: any;
	let zipInputElement: HTMLInputElement;
	const zipPlaceholder = '00000-000';

	onMount(() => {
		// Initialize the mask
		zipMask = IMask(zipInputElement, {
			mask: zipPlaceholder
		});

		// Set initial value if available
		if (zipValue) {
			zipMask.unmaskedValue = zipValue;
		}

		// Update state when input changes
		zipMask.on('accept', () => {
			zipValue = zipMask.unmaskedValue;
		});
	});

	onDestroy(() => {
		if (zipMask) {
			zipMask.destroy();
		}
	});

	// Function to handle input changes manually if needed
	function handleZipChange(event: Event) {
		const target = event.target as HTMLInputElement;
		zipValue = zipMask ? zipMask.unmaskedValue : target.value;
	}
</script>

<div class="mx-auto p-6 bg-white border border-grey-lighter rounded-lg shadow-sm">
	<div class="flex justify-between items-center mb-4">
		<h2 class="text-lg font-medium flex items-center">
			<span
				class="inline-flex items-center justify-center w-5 h-5 bg-sun text-grey-background rounded-full mr-2 text-xs"
				>2</span
			>
			Local de entrega
		</h2>
	</div>

	<form class="space-y-4">
		<!-- ZIP -->
		<input
			bind:this={zipInputElement}
			oninput={handleZipChange}
			type="text"
			placeholder={zipPlaceholder}
			class="w-full px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
		/>

		<!-- For debugging - show current value -->
		<div>Current value: {zipValue}</div>

		<div class="py-1">
			<Button type="sun" url="#" title="CONTINUAR →" size="md" rounded="lg" font="md" />
		</div>
	</form>
</div>
