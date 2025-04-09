<script lang="ts">
	import { ChevronRight } from '@lucide/svelte';
	import { grapes } from '$data/grapes.data';
	import { getLocale } from '$lib/paraglide/runtime';

	let grapesForLanguage = $state(grapes[getLocale()]);
</script>

{#each grapesForLanguage as grape}
	<a
		href={grape.url}
		class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px]"
	>
		<div class="text-left self-center">
			<span class="self-center">{grape.name}</span>
		</div>
		<div class="text-grey-medium flex flex-row align-middle self-center">
			<span class="self-center mr-3 text-xs">{grape.count || 0}</span>
			<ChevronRight class="w-4 aspect-1 text-grey-dark" />
		</div>
	</a>
{/each}
