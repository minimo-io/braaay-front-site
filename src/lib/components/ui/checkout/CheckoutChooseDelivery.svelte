<script lang="ts">
	import { AppConfig } from '$config';
	import { m } from '$lib/paraglide/messages';
	import { DeliveryUIType } from '$lib/types';
	import { MapPin } from '@lucide/svelte';
	interface Props {
		onUpdate: (deliveryType: DeliveryUIType) => void;
		initialValue?: DeliveryUIType | null; // Allow null/undefined initial value
	}
	let { onUpdate, initialValue = null }: Props = $props();
	let deliveryType = $state<DeliveryUIType | null>(initialValue);

	function handleChange(type: DeliveryUIType) {
		deliveryType = type;
		onUpdate(type); // Call onUpdate with the new value
	}
</script>

<div class="mx-2 md:mx-auto">
	<label class="flex items-center space-x-3 cursor-pointer">
		<input
			type="radio"
			value={DeliveryUIType.DELIVERY}
			checked={deliveryType === DeliveryUIType.DELIVERY}
			onchange={() => handleChange(DeliveryUIType.DELIVERY)}
			name="delivery"
			class="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
		/>
		<span class="text-sm">Enviar para casa ou trabalho</span>
	</label>

	<!-- Local Pickup -->
	<label class="flex items-start space-x-3 mt-3 cursor-pointer">
		<input
			type="radio"
			value={DeliveryUIType.PICKUP}
			checked={deliveryType === DeliveryUIType.PICKUP}
			onchange={() => handleChange(DeliveryUIType.PICKUP)}
			name="delivery"
			class="w-5 h-5 text-sun border-grey-medium focus:ring-sun cursor-pointer"
		/>
		<span class="flex flex-col">
			<div class="flex text-sm">
				Retirada no Showroom - São Paulo →
				<div class="flex items-center">
					<MapPin class="h-3 !mx-0 !px-0" />
					<a rel="nofollow noreferrer" target="_blank" href={AppConfig.mapLink}>{m.viewOnMap()}</a>
				</div>
			</div>
			<span class="text-xs text-grey-medium"> Seg a Sex, das 09:00 às 18:30, exceto feriados </span>
		</span>
	</label>
</div>
