<script lang="ts">
	import { page } from '$app/state';
	import {
		ChevronRight,
		Truck,
		Heart,
		House,
		Mail,
		LogOut,
		UsersRound,
		Coins,
		Sparkle
	} from '@lucide/svelte';
	import { openSubmenu } from '$stores/drawerState.state.svelte';
	import { redirectHref } from '$lib/utils';
	import { logout } from '$lib/graphql/auth';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';
	import { m } from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/paraglide/runtime';

	let returnUrl = $derived(page.url.href);

	async function handleLogout() {
		// event.preventDefault();
		toggleLoader();
		let logoutResult = logout();
		redirectHref(localizeHref(returnUrl));
	}
</script>

<div class="flex flex-1 text-xs px-0 flex-col">
	<!-- Item with submenu -->
	<button
		onclick={() => localizeHref('/account/my-favoritess/')}
		class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px] w-full"
	>
		<div class="text-left self-center flex align-middle justify-center">
			<Heart class="w-4 h-4 self-center mr-2" fill="red" color="red" />
			<span class="self-center font-semibold">{m.myFavorites()}</span>
		</div>
		<div class="text-grey-medium flex flex-row align-middle self-center">
			<ChevronRight class="w-4 aspect-1 text-grey-dark" />
		</div>
	</button>
	<!-- Item with submenu -->
	<button
		onclick={() => openSubmenu('account_loggedin', 'Meus pedidos')}
		class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px] w-full"
	>
		<div class="text-left self-center flex align-middle justify-center">
			<Truck class="w-4 h-4 self-center mr-2" />
			<span class="self-center font-semibold">Meus pedidos</span>
		</div>
		<div class="text-grey-medium flex flex-row align-middle self-center">
			<ChevronRight class="w-4 aspect-1 text-grey-dark" />
		</div>
	</button>

	<!-- Item with submenu -->
	<button
		onclick={() => openSubmenu('account_myaddresses', 'Meus endereços')}
		class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px] w-full"
	>
		<div class="text-left self-center flex align-middle justify-center">
			<House class="w-4 h-4 self-center mr-2" />
			<span class="self-center font-semibold">Meus dados</span>
		</div>
		<div class="text-grey-medium flex flex-row align-middle self-center">
			<ChevronRight class="w-4 aspect-1 text-grey-dark" />
		</div>
	</button>
	<!-- Item with submenu -->
	<button
		onclick={() => openSubmenu('account_emailpreferences', 'Preferências de e-mail')}
		class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px] w-full"
	>
		<div class="text-left self-center flex align-middle justify-center">
			<Mail class="w-4 h-4 self-center mr-2" />
			<span class="self-center font-semibold">Preferências de e-mail</span>
		</div>
		<div class="text-grey-medium flex flex-row align-middle self-center">
			<ChevronRight class="w-4 aspect-1 text-grey-dark" />
		</div>
	</button>

	<button
		class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px]"
		onclick={() => handleLogout()}
	>
		<div class="text-left self-center flex align-middle justify-center">
			<LogOut class="w-4 h-4 self-center mr-2" />
			<span class="self-center font-semibold">{m.exit()}</span>
		</div>
		<div class="text-grey-medium flex flex-row align-middle self-center">
			<ChevronRight class="w-4 aspect-1 text-grey-dark" />
		</div>
	</button>

	<!-- Assinaturas -->
	<div class="flex text-xs px-0 flex-col">
		<div class="flex items-center px-[30px] border-b border-grey-lighter">
			<h2 class="my-5 uppercase font-extrabold text-base">Benefícios</h2>
		</div>
	</div>
	<button
		class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px]"
		onclick={() => alert('Soon')}
	>
		<div class="text-left self-center flex align-middle justify-center">
			<Sparkle class="w-4 h-4 self-center mr-2 text-sun" />
			<span class="self-center font-semibold">Assinatura ao clube</span>
		</div>
		<div class="text-grey-medium flex flex-row align-middle self-center">
			<ChevronRight class="w-4 aspect-1 text-grey-dark" />
		</div>
	</button>
	<button
		class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px]"
		onclick={() => alert('Soon')}
	>
		<div class="text-left self-center flex align-middle justify-center">
			<UsersRound class="w-4 h-4 self-center mr-2" />
			<span class="self-center font-semibold">Compras coletivas</span>
		</div>
		<div class="text-grey-medium flex flex-row align-middle self-center">
			<ChevronRight class="w-4 aspect-1 text-grey-dark" />
		</div>
	</button>

	<button
		class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px]"
		onclick={() => alert('Soon')}
	>
		<div class="text-left self-center flex align-middle justify-center">
			<Coins class="w-4 h-4 self-center mr-2" />
			<span class="self-center font-semibold">Cashback</span>
		</div>
		<div class="text-grey-medium flex flex-row align-middle self-center">
			<ChevronRight class="w-4 aspect-1 text-grey-dark" />
		</div>
	</button>
</div>
