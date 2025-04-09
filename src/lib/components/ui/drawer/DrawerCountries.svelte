<script lang="ts">
	import { ChevronRight, ChevronDown } from '@lucide/svelte';
	import { allCountries } from '$data/countries.data';
	import { getLocale } from '$lib/paraglide/runtime';

	let pageCountries = $state(allCountries[getLocale()]);
</script>

<div class="flex flex-1 text-xs px-0 flex-col">
	{#each pageCountries as country}
		<a
			href={country.url}
			class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px]"
		>
			<div class="text-left self-center flex align-middle justify-center">
				<img class="w-4 h-4 self-center mr-2" src={country.flag.url} alt={country.flag.altText} />
				<span class="self-center font-semibold">{country.name}</span>
			</div>
			<div class="text-grey-medium flex flex-row align-middle self-center">
				<span class="self-center mr-3 text-xs">{country.count || 0}</span>
				<ChevronRight class="w-4 aspect-1 text-grey-dark" />
			</div>
		</a>
	{/each}
</div>
