<script lang="ts">
	import {
		ChevronRight,
		Wine,
		Gift,
		PackageOpen,
		Globe,
		CircleUser,
		Headset,
		Grape
	} from '@lucide/svelte';
	import { openSubmenu } from '$stores/drawerState.state.svelte';
</script>

<div class="flex flex-1 text-xs px-0 flex-col">
	<!-- <h2 class="px-[30px] my-5 uppercase font-extrabold text-base">Olá Erika,</h2> -->
	<!-- Item with submenu -->
	<button
		onclick={() => openSubmenu('vinhos')}
		class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px] w-full"
	>
		<div class="text-left self-center flex align-middle justify-center">
			<Wine class="w-4 h-4 self-center mr-2" />
			<span class="self-center font-semibold">Vinhos</span>
		</div>
		<div class="text-grey-medium flex flex-row align-middle self-center">
			<ChevronRight class="w-4 aspect-1 text-grey-dark" />
		</div>
	</button>

	<!-- Item with submenu -->
	<button
		onclick={() => openSubmenu('paises')}
		class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px] w-full"
	>
		<div class="text-left self-center flex align-middle justify-center">
			<Globe class="w-4 h-4 self-center mr-2" />
			<span class="self-center font-semibold">Paises</span>
		</div>
		<div class="text-grey-medium flex flex-row align-middle self-center">
			<ChevronRight class="w-4 aspect-1 text-grey-dark" />
		</div>
	</button>

	<!-- Item with submenu -->
	<button
		onclick={() => openSubmenu('uvas')}
		class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px] w-full"
	>
		<div class="text-left self-center flex align-middle justify-center">
			<Grape class="w-4 h-4 self-center mr-2" />
			<span class="self-center font-semibold">Uvas</span>
		</div>
		<div class="text-grey-medium flex flex-row align-middle self-center">
			<ChevronRight class="w-4 aspect-1 text-grey-dark" />
		</div>
	</button>

	<!-- Item with submenu -->
	<a
		href="/kits/"
		class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px]"
	>
		<div class="text-left self-center flex align-middle justify-center">
			<!-- <img class="w-4 h-4 self-center mr-2" src="/images/flags/uruguay.png" alt="uruguay-flag" /> -->
			<Gift class="w-4 h-4 self-center mr-2" />
			<span class="self-center font-semibold">Presentes</span>
		</div>
		<!-- <div class="text-grey-medium flex flex-row align-middle self-center">
			<ChevronRight class="w-4 aspect-1 text-grey-dark" />
		</div> -->
	</a>
	<!-- Item with submenu -->
	<a
		href="/kits/"
		class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px]"
	>
		<div class="text-left self-center flex align-middle justify-center">
			<!-- <img class="w-4 h-4 self-center mr-2" src="/images/flags/uruguay.png" alt="uruguay-flag" /> -->
			<PackageOpen class="w-4 h-4 self-center mr-2" />
			<span class="self-center font-semibold">Kits</span>
		</div>
		<!-- <div class="text-grey-medium flex flex-row align-middle self-center">
			<ChevronRight class="w-4 aspect-1 text-grey-dark" />
		</div> -->
	</a>

	<h2 class="px-[30px] my-5 uppercase font-extrabold text-base">Conta</h2>
	<!-- Item with submenu -->
	<button
		onclick={() => openSubmenu('account')}
		class="py-3 border-b border-t border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px] w-full"
	>
		<div class="text-left self-center flex align-middle justify-center">
			<CircleUser class="w-4 h-4 self-center mr-2" />
			<span class="self-center font-semibold">Conta</span>
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
