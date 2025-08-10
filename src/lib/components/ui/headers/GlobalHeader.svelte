<!-- src/lib/components/ui/headers/GlobalHeader.svelte -->
<script lang="ts">
	import { page } from '$app/state';
	// import { onMount } from 'svelte';
	import { drawerState, toggleDrawer } from '$stores/drawerState.state.svelte';
	import { X, CircleUser, Heart, AlignJustify, Check } from '@lucide/svelte';

	import SecondaryMenuGeneral from '$components/ui/menues/SecondaryMenuGeneral.svelte';
	import SecondaryMenuBlog from '$components/ui/menues/SecondaryMenuBlog.svelte';
	import Button from '$components/ui/buttons/Button.svelte';
	import { CashbackButton } from '$components/ui/buttons/index';
	import SearchBar from '../search/SearchBar.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
	import GlobalBanner from './GlobalBanner.svelte';
	import { isAuthenticated } from '$lib/graphql/auth';
	import { cart } from '$stores/cart.store.svelte';
	import { AppConfig } from '$config';
	import { m } from '$lib/paraglide/messages';

	// Using runes for reactive state
	let SecondaryMenuComponent = $state(
		page.url.pathname.startsWith('/blog') || page.url.pathname.startsWith('/uy/blog')
			? SecondaryMenuBlog
			: SecondaryMenuGeneral
	);
	// Subscribe to page store changes
	$effect(() => {
		SecondaryMenuComponent =
			page.url.pathname.startsWith('/blog') || page.url.pathname.startsWith('/uy/blog')
				? SecondaryMenuBlog
				: SecondaryMenuGeneral;
	});

	let isLogin = $derived(page.url.href.includes('/login'));
	let originRoute = $derived(page.url.href);

	// Cart amount
	let totalCartAmount = $state(0);
	cart.subscribe((cart) => {
		totalCartAmount = cart.items.reduce((count, item) => count + item.quantity, 0);
	});
</script>

<header class="bg-white relative">
	<nav
		class="mx-[30px] lg:mx-auto flex max-w-screen-lg items-center justify-between h-[63px] lg:h-[90px]"
		aria-label="Global"
	>
		<!-- logo -->
		<div class="flex">
			<button
				class="flex md:hidden justify-start mr-6"
				onclick={() => {
					toggleDrawer();
					// drawerOpen.set(true);
				}}
			>
				{#if drawerState.active}
					<!-- When active, display the cross icon -->
					<X class="h-[22px] !mr-0 text-blue" />
				{:else}
					<!-- When inactive, display the hamburger icon -->
					<AlignJustify class="h-[22px] !mr-0 text-blue" />
				{/if}
			</button>
			<div class="flex lg:flex-none pr-0 md:pr-8 justify-start">
				<a href={localizeHref('/')} class="">
					<span class="sr-only">{m.seoBase()}</span>
					<img
						class="h-[38px] w-auto hidden lg:block"
						src="/images/logo-braaay-desktop.svg"
						alt="braaay-logo-desktop"
						height="38"
					/>
					<img
						height="21"
						class="h-[21px] w-auto lg:hidden"
						src="/images/logo-braaay-mobile.svg"
						alt="braaay-logo-mobile"
					/>
				</a>
			</div>
		</div>

		<div class="hidden lg:flex flex-1 lg:gap-x-12">
			<SearchBar />
		</div>

		<!-- Desktop -->
		<div class="hidden lg:flex lg:flex-none lg:justify-end pl-5">
			{#if !isAuthenticated()}
				<!--Entrar -->
				<Button
					chevron={false}
					customPx="!pr-[12px] !pl-3 !pr-[20px]"
					title="Conectar"
					url={localizeHref(`/login/${originRoute ? `?returnUrl=${originRoute}` : ''}`)}
					type="blue"
					size="xl"
				>
					{#snippet icon()}
						<CircleUser class="lucide-button h-[10px]" />
					{/snippet}
				</Button>
			{:else}
				<!-- My account -->
				<Button
					chevron={true}
					customPx="!pr-[12px] !pl-3"
					title="Conta"
					url={localizeHref('/account/')}
					type="blue"
					size="xl"
				>
					{#snippet icon()}
						<CircleUser class="lucide-button h-[10px]" />
					{/snippet}
				</Button>
			{/if}

			<!-- Favorites -->

			<Button
				chevron={false}
				customPx="!pl-3 ml-[12px]"
				title={m.favorites()}
				url={localizeHref('/account/my-favorites/')}
				type="light"
				size="xl"
			>
				{#snippet icon()}
					<Heart class="lucide-button h-[10px]" fill="red" color="red" />
				{/snippet}
			</Button>

			<!-- Cashback -->
			{#if AppConfig.cashbackEnabled}
				<CashbackButton title="Cashback" currency="R$" value={0.0} />
			{/if}
		</div>

		<div class="flex">
			<!-- Account Mobile -->
			<a
				href={localizeHref('/login/')}
				class="bry-cart relative h-[45px] uppercase flex items-center md:hidden"
			>
				<!-- <i class="bry-bag"></i> -->
				<!-- <CircleUser strokeWidth="1" class="text-blue h-[45px] scale-125" /> -->
				<img src="/images/bry-user.png" alt="bry-user" class="h-[29px] top-[1px] relative" />
				{#if isAuthenticated()}
					<span
						class="flex justify-center items-center rounded-full bg-green-medium p-0 w-4 h-4 lg:w-5 lg:h-5 font-roboto text-[10px] text-white ring-inset absolute top-1 lg:top-0 -right-2"
					>
						<Check class="self-center h-[10px] left-[2px] relative" />
					</span>
				{:else}
					<!-- <span
						class="flex justify-center items-center rounded-full bg-red-medium p-0 w-4 h-4 lg:w-5 lg:h-5 font-roboto text-[10px] text-white ring-inset absolute top-1 lg:top-0 -right-2"
					>
						<span>!</span>
					</span> -->
				{/if}
			</a>
			<!-- Bag -->
			<a
				href={localizeHref('/cart/')}
				class="bry-cart relative h-[45px] uppercase flex items-center"
			>
				<i class="bry-bag"></i>
				<span
					class="flex justify-center items-center rounded-full bg-sun p-0 w-4 h-4 lg:w-5 lg:h-5 font-roboto text-[10px] text-white ring-inset absolute top-1 lg:top-0 -right-2"
				>
					{totalCartAmount}
				</span>
			</a>
		</div>
	</nav>

	<!-- Mobile search -->
	<div class="lg:hidden h-[50px]">
		<SearchBar mobile={true} />
	</div>

	<!-- Secondary menu -->
	{#if isLogin}
		<div class="border-t border-grey-lighter"></div>
	{:else}
		<SecondaryMenuComponent />
	{/if}
</header>

<!-- Global Banner -->
<GlobalBanner />
