<script lang="ts">
	import { ChevronRight } from '@lucide/svelte';
	import { grapes } from '$data/grapes.data';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import pairiingsData from '$data/jsons/pairings.data.json';

	let pairingsForLocale = $state(pairiingsData[getLocale()]);
</script>

{#if pairingsForLocale.length > 0}
	{#each pairingsForLocale as pairing}
		<a
			href={localizeHref(pairing.uri)}
			class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px]"
		>
			<div class="text-left self-center">
				<span class="self-center">{pairing.name}</span>
			</div>
			<div class="text-grey-medium flex flex-row align-middle self-center">
				<span class="self-center mr-3 text-xs">{pairing.count || 0}</span>
				<ChevronRight class="w-4 aspect-1 text-grey-dark" />
			</div>
		</a>
	{/each}
{:else}
	<div>No pairings.</div>
{/if}
