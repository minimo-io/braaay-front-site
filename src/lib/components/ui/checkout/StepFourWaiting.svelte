<script lang="ts">
	import { DeliveryUIType } from '$lib/types';
	interface Props {
		deliveryType: DeliveryUIType | null;
	}

	let { deliveryType }: Props = $props();
</script>

<div
	class="opacity-50 pointer-events-none mx-auto p-6 bg-white border border-grey-lighter rounded-lg shadow-sm"
>
	<div class="flex justify-between items-center mb-4">
		<h2 class="text-lg font-medium flex items-center">
			<span
				class="inline-flex items-center justify-center w-5 h-5 bg-sun text-grey-background rounded-full mr-2 text-xs"
				>{deliveryType == 'DELIVERY' ? 4 : 3}</span
			>
			Pagamento
		</h2>
	</div>
	{#if deliveryType == 'DELIVERY'}
		<div class="space-y-4">Aguardando opções de envio.</div>
	{:else}
		<div class="space-y-4">Aguardando dados cadastrais.</div>
	{/if}
</div>
