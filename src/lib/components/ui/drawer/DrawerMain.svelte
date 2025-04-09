<script lang="ts">
	import {
		ChevronRight,
		Wine,
		Gift,
		PackageOpen,
		Globe,
		Grape,
		CircleUser,
		Headset
	} from '@lucide/svelte';
	import { openSubmenu } from '$stores/drawerState.state.svelte';
	import { drawerData } from '$lib/data/drawer.data';
	import { getLocale } from '$lib/paraglide/runtime';

	let drawerDataForLang = $state(drawerData[getLocale()]);
</script>

<div class="flex flex-1 text-xs px-0 flex-col overflow-y-auto">
	<!-- <h2 class="px-[30px] my-5 uppercase font-extrabold text-base">Olá Erika,</h2> -->
	<!-- Item with submenu -->
	{#each drawerDataForLang as drawer, i}
		{#if drawer.subMenu}
			<button
				onclick={() => openSubmenu(drawer.id, drawer.name)}
				class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px] w-full"
			>
				<div class="text-left self-center flex align-middle justify-center">
					<!-- <Wine class="w-4 h-4 self-center mr-2" /> -->
					{#if drawer.icon}
						<drawer.icon class="w-4 h-4 self-center mr-2" />
					{/if}
					<span class="self-center font-semibold">{drawer.name}</span>
				</div>
				<div class="text-grey-medium flex flex-row align-middle self-center">
					<ChevronRight class="w-4 aspect-1 text-grey-dark" />
				</div>
			</button>
		{:else}
			<a
				href={drawer.url}
				class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px]"
			>
				<div class="text-left self-center flex align-middle justify-center">
					<drawer.icon class="w-4 h-4 self-center mr-2" />
					<span class="self-center font-semibold">{drawer.name}</span>
				</div>
			</a>
		{/if}
	{/each}

	<!-- Fixed Extra Menu -->
	<h2 class="px-[30px] my-5 uppercase font-extrabold text-base">Conta</h2>
	<!-- Item with submenu -->
	<button
		onclick={() => openSubmenu('account', 'Conta')}
		class="py-3 border-b border-t border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px] w-full"
	>
		<div class="text-left self-center flex align-middle justify-center">
			<CircleUser class="w-4 h-4 self-center mr-2" />
			<span class="self-center font-semibold">Acessar</span>
		</div>
		<div class="text-grey-medium flex flex-row align-middle self-center">
			<ChevronRight class="w-4 aspect-1 text-grey-dark" />
		</div>
	</button>
	<!-- Item with submenu -->
	<a
		href="/"
		class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px]"
	>
		<div class="text-left self-center flex align-middle justify-center">
			<!-- <img class="w-4 h-4 self-center mr-2" src="/images/flags/uruguay.png" alt="uruguay-flag" /> -->
			<Headset class="w-4 h-4 self-center mr-2" />
			<span class="self-center font-semibold">Atendimento</span>
		</div>
		<!-- <div class="text-grey-medium flex flex-row align-middle self-center">
			<ChevronRight class="w-4 aspect-1 text-grey-dark" />
		</div> -->
	</a>
</div>
