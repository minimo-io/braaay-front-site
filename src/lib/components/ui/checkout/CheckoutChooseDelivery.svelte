<script lang="ts">
	import { AppConfig } from '$config';
	import { m } from '$lib/paraglide/messages';
	import { DeliveryUIType } from '$lib/types';
	import { MoreInfoButton } from '../buttons';
	interface Props {
		onUpdate: (deliveryType: DeliveryUIType) => void;
		initialValue?: DeliveryUIType | null; // Allow null/undefined initial value
		allVirtualProducts?: boolean; // Add the new prop
	}
	let { onUpdate, initialValue = null, allVirtualProducts = false }: Props = $props();
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
			disabled={allVirtualProducts}
			class="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
		/>
		<span class="text-sm {allVirtualProducts ? 'opacity-50' : ''}">{m.sendToHomeOrWork()}</span>
	</label>

	<!-- Local Pickup -->
	<label class="flex items-start space-x-3 mt-3 cursor-pointer">
		<input
			type="radio"
			value={DeliveryUIType.PICKUP}
			checked={deliveryType === DeliveryUIType.PICKUP}
			onchange={() => handleChange(DeliveryUIType.PICKUP)}
			name="delivery"
			disabled={allVirtualProducts}
			class="w-5 h-5 text-sun border-grey-medium focus:ring-sun cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
		/>
		<span class="flex flex-col {allVirtualProducts ? 'opacity-50' : ''}">
			<div
				class="flex text-sm flex-col md:flex-row items-start md:items-center md:-top-[5px] md:relative"
			>
				<span> {m.pickup()}</span>
				<span class="hidden md:inline-block mr-1 ml-1">→</span>

				<MoreInfoButton
					title={m.viewOnMap()}
					customStyles="!mx-0 my-1"
					url={AppConfig.mapLink}
					newTab={true}
				/>

				<!-- <div class="flex items-center -left-2 md:left-0 relative">
					<MapPin class="h-3 !mx-0 !px-0" />
					<a rel="nofollow noreferrer" target="_blank" href={AppConfig.mapLink}>{m.viewOnMap()}</a>
				</div> -->
			</div>
			<span class="text-xs text-grey-medium mt-[1px] md:mt-0">
				{m.pickupWindow()}
			</span>
		</span>
	</label>
</div>

<!-- <script lang="ts">
	import { AppConfig } from '$config';
	import { m } from '$lib/paraglide/messages';
	import { DeliveryUIType } from '$lib/types';
	import { MoreInfoButton } from '../buttons';
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
		<span class="text-sm">{m.sendToHomeOrWork()}</span>
	</label>

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
			<div
				class="flex text-sm flex-col md:flex-row items-start md:items-center md:-top-[5px] md:relative"
			>
				<span> {m.pickup()}</span>
				<span class="hidden md:inline-block mr-1 ml-1">→</span>

				<MoreInfoButton
					title={m.viewOnMap()}
					customStyles="!mx-0 my-1"
					url={AppConfig.mapLink}
					newTab={true}
				/>
			</div>
			<span class="text-xs text-grey-medium mt-[1px] md:mt-0">
				{m.pickupWindow()}
			</span>
		</span>
	</label>
</div> -->
