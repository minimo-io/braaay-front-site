<!-- src/lib/components/ui/drawer/DrawerCategories.svelte -->
<script lang="ts">
	import { ChevronRight } from '@lucide/svelte';
	import { getSiteCategories } from '$data/categories.data';
	import WineSubcategories from '$data/jsons/wine-subcategories.json';
	import { getLocale } from '$lib/paraglide/runtime';

	let currentCategories = WineSubcategories[getLocale()] || null;
</script>

{#if currentCategories}
	{#each currentCategories as subcategory}
		<a
			href={subcategory.url}
			class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px]"
		>
			<div class="text-left self-center">
				<span class="self-center">{subcategory.name}</span>
			</div>
			<div class="text-grey-medium flex flex-row align-middle self-center">
				<span class="self-center mr-3 text-xs">{subcategory.count || 0}</span>
				<ChevronRight class="w-4 aspect-1 text-grey-dark" />
			</div>
		</a>
	{/each}
{/if}
