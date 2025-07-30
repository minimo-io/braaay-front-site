<!-- src/lib/components/ui/Drawer.svelte -->
<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import { drawerState, goBackToMainMenu } from '$stores/drawerState.state.svelte';
	import { ArrowLeft } from '@lucide/svelte';

	import DrawerCountries from './DrawerCountries.svelte';
	import DrawerMain from './DrawerMain.svelte';
	import DrawerUvas from './DrawerUvas.svelte';
	import DrawerCategories from './DrawerCategories.svelte';
	import DrawerAccount from './DrawerAccount.svelte';
	import DrawerAccountLoggedIn from './DrawerAccountLoggedIn.svelte';
	import DrawerPairings from './DrawerPairings.svelte';
</script>

<div
	class="fixed border-0 inset-y-0 left-0 z-10 transform transition-transform duration-200 ease-in-out"
	class:translate-y-0={drawerState.active}
	class:-translate-y-full={!drawerState.active}
	class:mt-[115px]={drawerState.active}
>
	<div class="w-screen md:w-64 bg-white h-full flex flex-col justify-start overflow-hidden">
		{#if drawerState.currentSubmenu}
			<div class="flex text-xs px-0 flex-col">
				<div class="flex items-center px-[30px] border-b border-grey-lighter">
					<button onclick={goBackToMainMenu} class="flex items-center text-blue mr-3">
						<ArrowLeft class="w-4 h-4" />

						<h2 class="my-5 uppercase font-extrabold text-base">{drawerState.currentName}</h2>
					</button>
				</div>
			</div>
		{/if}

		{#if !drawerState.currentSubmenu}
			<DrawerMain />
		{:else if drawerState.currentSubmenu === 'countries'}
			<div in:fly={{ x: 300, duration: 300, easing: quintOut }} class="overflow-y-auto">
				<DrawerCountries />
			</div>
		{:else if drawerState.currentSubmenu === 'grapes'}
			<div in:fly={{ x: 300, duration: 300, easing: quintOut }} class=" overflow-y-auto">
				<DrawerUvas />
			</div>
		{:else if drawerState.currentSubmenu === 'pairings'}
			<div in:fly={{ x: 300, duration: 300, easing: quintOut }} class=" overflow-y-auto">
				<DrawerPairings />
			</div>
		{:else if drawerState.currentSubmenu === 'wines'}
			<div in:fly={{ x: 300, duration: 300, easing: quintOut }} class=" overflow-y-auto">
				<DrawerCategories />
			</div>
		{:else if drawerState.currentSubmenu === 'beers'}
			<div in:fly={{ x: 300, duration: 300, easing: quintOut }} class=" overflow-y-auto">
				<div class="text-center py-5">EM BREVE</div>
			</div>
		{:else if drawerState.currentSubmenu === 'beerstyles'}
			<div in:fly={{ x: 300, duration: 300, easing: quintOut }} class=" overflow-y-auto">
				<div class="text-center py-5">EM BREVE</div>
			</div>
		{:else if drawerState.currentSubmenu === 'account'}
			<div in:fly={{ x: 300, duration: 300, easing: quintOut }} class="overflow-y-auto">
				<DrawerAccount />
			</div>
		{:else if drawerState.currentSubmenu === 'account_loggedin'}
			<div in:fly={{ x: 300, duration: 300, easing: quintOut }} class="overflow-y-auto">
				<DrawerAccountLoggedIn />
			</div>
		{/if}
	</div>
</div>
