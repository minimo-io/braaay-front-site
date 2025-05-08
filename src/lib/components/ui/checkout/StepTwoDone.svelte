<script lang="ts">
	import type { CustomerAddress } from '$lib/types';
	import { Check } from '@lucide/svelte';
	import Button from '../buttons/Button.svelte';
	import IMask from 'imask';
	import { getLocale } from '$lib/paraglide/runtime';

	interface Props {
		shippingAddress: CustomerAddress;
		onActionClick: () => void;
	}

	let { shippingAddress, onActionClick }: Props = $props();
	// Format
	let formattedZip = {
		mask: '00000-000'
	};
	if (getLocale() == 'pt') {
		formattedZip = {
			mask: '00000-000'
		};
	} else if (getLocale() == 'uy') {
		formattedZip = {
			mask: '00000'
		};
	}

	const maskedValue = IMask.pipe(shippingAddress.postcode, formattedZip);
</script>

<div class="mx-auto p-6 border border-green-dark bg-green-light rounded-lg shadow-sm">
	<div class="flex justify-between items-center mb-4">
		<h2 class="text-base font-medium flex items-center text-green-medium">
			<span
				class="inline-flex items-center justify-center w-5 h-5 bg-green-medium text-grey-background rounded-full mr-2 text-xs"
			>
				<Check class="h-3 ml-1" />
			</span>
			<span class="font-bold">Endereço</span>
		</h2>

		<Button
			title="Alterar"
			type="light"
			customPx="max-w-[100px]"
			action={() => onActionClick()}
			size="xs"
		/>
	</div>

	<div class="flex flex-col gap-1 text-sm text-green-medium">
		<div>
			{shippingAddress.address1} - {shippingAddress.address2} - {shippingAddress.city}, - {shippingAddress.state},
			{maskedValue}
		</div>
	</div>
</div>
