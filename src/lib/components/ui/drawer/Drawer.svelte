<!-- src/lib/components/ui/Drawer.svelte -->
<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import { drawerState, goBackToMainMenu } from '$stores/drawerState.state.svelte';
	import { ArrowLeft, ChevronRight } from '@lucide/svelte';

	import { getSiteCategories } from '$lib/data/categories';
	import { getLocale } from '$lib/paraglide/runtime';
	import DrawerCountries from './DrawerCountries.svelte';
	import DrawerMain from './DrawerMain.svelte';
	import DrawerUvas from './DrawerUvas.svelte';

	let currentCategories = getSiteCategories(getLocale());
</script>

<div
	class="fixed border-0 inset-y-0 left-0 z-10 transform transition-transform duration-200 ease-in-out"
	class:translate-y-0={drawerState.active}
	class:-translate-y-full={!drawerState.active}
	class:mt-[115px]={drawerState.active}
>
	<div class="w-screen md:w-64 bg-white h-full flex flex-col overflow-hidden">
		{#if drawerState.currentSubmenu}
			<div class="flex text-xs px-0 flex-col">
				<div class="flex items-center px-[30px] border-b border-grey-lighter">
					<button on:click={goBackToMainMenu} class="flex items-center text-blue mr-3">
						<ArrowLeft class="w-4 h-4" />
					</button>
					<h2 class="my-5 uppercase font-extrabold text-base">{drawerState.currentSubmenu}</h2>
				</div>
			</div>
		{/if}

		{#if !drawerState.currentSubmenu}
			<DrawerMain />
		{:else if drawerState.currentSubmenu === 'paises'}
			<div in:fly={{ x: 300, duration: 300, easing: quintOut }} class="overflow-y-auto">
				<DrawerCountries />
			</div>
		{:else if drawerState.currentSubmenu === 'account'}
			<div in:fly={{ x: 300, duration: 300, easing: quintOut }}>
				<div class="text-center py-5">EM BREVE</div>
			</div>
		{:else if drawerState.currentSubmenu === 'uvas'}
			<div in:fly={{ x: 300, duration: 300, easing: quintOut }} class=" overflow-y-auto">
				<DrawerUvas />
			</div>
		{:else if drawerState.currentSubmenu === 'vinhos'}
			<div in:fly={{ x: 300, duration: 300, easing: quintOut }} class=" overflow-y-auto">
				<!-- Sub-menu content -->
				<a
					href="/vinhos/tintos/"
					class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px]"
				>
					<div class="text-left self-center">
						<span class="self-center">Tintos</span>
					</div>
					<div class="text-grey-medium flex flex-row align-middle self-center">
						<ChevronRight class="w-4 aspect-1 text-grey-dark" />
					</div>
				</a>
				<!-- Sub-menu content -->
				<a
					href="/vinhos/espumantes/"
					class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px]"
				>
					<div class="text-left self-center">
						<span class="self-center">Espumantes</span>
					</div>
					<div class="text-grey-medium flex flex-row align-middle self-center">
						<ChevronRight class="w-4 aspect-1 text-grey-dark" />
					</div>
				</a>
				<!-- Sub-menu content -->
				<a
					href="/vinhos/brancos/"
					class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px]"
				>
					<div class="text-left self-center">
						<span class="self-center">Brancos</span>
					</div>
					<div class="text-grey-medium flex flex-row align-middle self-center">
						<ChevronRight class="w-4 aspect-1 text-grey-dark" />
					</div>
				</a>
				<!-- Sub-menu content -->
				<a
					href="/vinhos/roses/"
					class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px]"
				>
					<div class="text-left self-center">
						<span class="self-center">Rosés</span>
					</div>
					<div class="text-grey-medium flex flex-row align-middle self-center">
						<ChevronRight class="w-4 aspect-1 text-grey-dark" />
					</div>
				</a>
				<!-- Sub-menu content -->
				<a
					href="/vinhos/frisantes/"
					class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px]"
				>
					<div class="text-left self-center">
						<span class="self-center">Frisantes</span>
					</div>
					<div class="text-grey-medium flex flex-row align-middle self-center">
						<ChevronRight class="w-4 aspect-1 text-grey-dark" />
					</div>
				</a>
				<!-- Sub-menu content -->
				<a
					href="/vinhos/fortificados/"
					class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px]"
				>
					<div class="text-left self-center">
						<span class="self-center">Fortificados</span>
					</div>
					<div class="text-grey-medium flex flex-row align-middle self-center">
						<ChevronRight class="w-4 aspect-1 text-grey-dark" />
					</div>
				</a>
			</div>
		{/if}
	</div>
</div>
