<!-- src/lib/components/ui/Drawer.svelte -->
<script lang="ts">
	import { drawerState } from '$stores/drawerState.state.svelte';
	import { ChevronRight, ChevronDown } from '@lucide/svelte';
	import { getSiteCategories } from '$lib/data/categories';
	import { getLocale } from '$lib/paraglide/runtime';

	// let currentCategories = getSiteCategories(getLocale());

	// function closeDrawer() {
	// 	drawerState.active = false;
	// }
</script>

<div
	class="fixed border-0 inset-y-0 left-0 z-10 transform transition-transform duration-200 ease-in-out"
	class:translate-y-0={drawerState.active}
	class:-translate-y-full={!drawerState.active}
	class:mt-[115px]={drawerState.active}
>
	<div class="w-screen md:w-64 bg-white h-full">
		<!-- <button on:click={closeDrawer} class="p-4 text-gray-600"> Fechar </button> -->

		<!-- Second part (Countries for BR) -->
		{#if getLocale() == 'pt'}
			<div class="flex flex-1 text-xs px-0 flex-col">
				<h2 class="px-[30px] my-5 uppercase font-extrabold text-base">Paises</h2>
				<a
					href="/pais/uruguai/"
					class="py-3 border-b border-t border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px]"
				>
					<div class="text-left self-center flex align-middle justify-center">
						<img
							class="w-4 h-4 self-center mr-2"
							src="/images/flags/uruguay.png"
							alt="uruguay-flag"
						/>
						<span class="self-center font-semibold">Uruguai</span>
					</div>
					<div class="text-grey-medium flex flex-row align-middle self-center">
						<!-- <span class="self-center mr-3 text-xs">251</span> -->
						<ChevronRight class="w-4 aspect-1 text-grey-dark" />
					</div>
				</a>
				<a
					href="/pais/brasil"
					class=" py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px]"
				>
					<div class="text-left self-center flex align-middle justify-center">
						<img
							class="w-4 h-4 self-center mr-2"
							src="/images/flags/brazil.png"
							alt="uruguay-flag"
						/>
						<span class="self-center font-semibold">Brasil</span>
					</div>
					<div class="text-grey-medium flex flex-row align-middle self-center">
						<!-- <span class="self-center mr-3 text-xs">142</span> -->
						<ChevronRight class="w-4 aspect-1 text-grey-dark" />
					</div>
				</a>
				<a
					href="/pais/chile/"
					class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px]"
				>
					<div class="text-left self-center flex align-middle justify-center">
						<img
							class="w-4 h-4 self-center mr-2"
							src="/images/flags/chile.png"
							alt="uruguay-flag"
						/>
						<span class="self-center">Chile</span>
					</div>
					<div class="text-grey-medium flex flex-row align-middle self-center">
						<!-- <span class="self-center mr-3 text-xs">89</span> -->
						<ChevronRight class="w-4 aspect-1 text-grey-dark" />
					</div>
				</a>
				<a
					href="/pais/argentina/"
					class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px]"
				>
					<div class="text-left self-center flex align-middle justify-center">
						<img
							class="w-4 h-4 self-center mr-2"
							src="/images/flags/argentina.png"
							alt="uruguay-flag"
						/>
						<span class="self-center">Argentina</span>
					</div>
					<div class="text-grey-medium flex flex-row align-middle self-center">
						<!-- <span class="self-center mr-3 text-xs">142</span> -->
						<ChevronRight class="w-4 aspect-1 text-grey-dark" />
					</div>
				</a>
				<a
					href="/pais/portugal/"
					class="px-[30px] py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect"
				>
					<div class="text-left self-center flex align-middle justify-center">
						<img
							class="w-4 h-4 self-center mr-2"
							src="/images/flags/portugal.png"
							alt="portugal-flag"
						/>
						<span class="self-center">Portugal</span>
					</div>
					<div class="text-grey-medium flex flex-row align-middle self-center">
						<!-- <span class="self-center mr-3 text-xs">142</span> -->
						<ChevronRight class="w-4 aspect-1 text-grey-dark" />
					</div>
				</a>
				<a
					href="/pais/italia/"
					class="px-[30px] border-b border-grey-lighter py-3 text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect"
				>
					<div class="text-left self-center flex align-middle justify-center">
						<img class="w-4 h-4 self-center mr-2" src="/images/flags/italy.png" alt="italy-flag" />
						<span class="self-center">Italia</span>
					</div>
					<div class="text-grey-medium flex flex-row align-middle self-center">
						<!-- <span class="self-center mr-3 text-xs">142</span> -->
						<ChevronRight class="w-4 aspect-1 text-grey-dark" />
					</div>
				</a>
			</div>
		{/if}
	</div>
</div>
