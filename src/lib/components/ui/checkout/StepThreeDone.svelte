<script lang="ts">
	import type { ShippingOption } from '$lib/types';
	import { Check } from '@lucide/svelte';
	import Button from '../buttons/Button.svelte';
	import { m } from '$lib/paraglide/messages';

	interface Props {
		shippingAddress: ShippingOption | undefined;
		onUpdate: () => void;
	}

	let { shippingAddress, onUpdate }: Props = $props();
</script>

<div class="mx-auto p-6 border border-green-dark bg-green-light rounded-lg shadow-sm">
	<div class="flex justify-between items-center mb-4">
		<h2 class="text-base font-medium flex items-center text-green-medium">
			<span
				class="inline-flex items-center justify-center w-5 h-5 bg-green-medium text-grey-background rounded-full mr-2 text-xs"
			>
				<Check class="h-3 ml-1" />
			</span>
			<span class="font-bold">Opção de envio</span>
		</h2>

		<Button
			title="Alterar"
			type="light"
			customPx="max-w-[100px]"
			action={() => onUpdate()}
			size="xs"
		/>
	</div>

	<div class="flex flex-col gap-1 text-sm text-green-medium">
		<div>
			{shippingAddress?.label} <br /> <strong>{m.currencySymbol()} {shippingAddress?.cost}</strong>
		</div>
	</div>
</div>
