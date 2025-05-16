<script lang="ts">
	import { Check, MapPin } from '@lucide/svelte';
	import MoreInfoButton from '../buttons/MoreInfoButton.svelte';
	import { AppConfig } from '$config';
	import { m } from '$lib/paraglide/messages';
</script>

<div class="mx-auto p-6 border border-green-dark bg-green-light rounded-lg shadow-sm">
	<div class="flex justify-between items-center mb-4">
		<h2 class="text-base font-medium flex items-center text-green-medium">
			<span
				class="inline-flex items-center justify-center w-5 h-5 bg-green-medium text-grey-background rounded-full mr-2 text-xs"
			>
				<Check class="h-3 ml-1" />
			</span>
			<span class="font-bold">Entrega:&nbsp;</span> Retirada no Showroom
		</h2>
	</div>

	<div class="flex flex-col gap-1 text-sm text-green-medium">
		<div>R. Cristiano Viana, 62 - cj 35 - Cerqueira César, São Paulo - SP, 05411-000</div>
		<div class="mt-1 right-[6px] relative">
			<a
				href={AppConfig.mapLink}
				rel="nofollow noreferrer"
				target="_blank"
				class="font-bold flex items-center"
			>
				<MapPin class="h-4" />
				<span>{m.viewOnMap()}</span>
			</a>
		</div>
	</div>
</div>
