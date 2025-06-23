<script lang="ts">
	import { page } from '$app/state';
	// import { onMount } from 'svelte';
	import { drawerState, toggleDrawer } from '$stores/drawerState.state.svelte';
	import { X, Search, CircleUser, Heart, AlignJustify, User, Circle, Check } from '@lucide/svelte';

	import SecondaryMenuGeneral from '$components/ui/menues/SecondaryMenuGeneral.svelte';
	import SecondaryMenuBlog from '$components/ui/menues/SecondaryMenuBlog.svelte';
	import Button from '$components/ui/buttons/Button.svelte';
	import { CashbackButton } from '$components/ui/buttons/index';
	import SearchBar from '../search/SearchBar.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
	import GlobalBanner from './GlobalBanner.svelte';
	import { isAuthenticated } from '$lib/graphql/auth';
	import { cart } from '$stores/cart.store.svelte';

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

	// Cart amount
	let totalCartAmount = $state(0);
	cart.subscribe((cart) => {
		totalCartAmount = cart.items.reduce((count, item) => count + item.quantity, 0);
	});

	// Effect to control page scrolling
	$effect(() => {
		if (drawerState.active) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth' // Use 'auto' instead of 'smooth' for instant scrolling
			});
		}
		document.body.style.overflow = drawerState.active ? 'hidden' : '';
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
					<span class="sr-only">Braaay</span>
					<img
						class="h-[38px] w-auto hidden lg:block"
						src="/images/logo-braaay-desktop.svg"
						alt="braaay-logo-desktop"
					/>
					<img
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
					title="Entrar"
					url={localizeHref('/login/')}
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
				title="Minha adega"
				url={localizeHref('/login/')}
				type="light"
				size="xl"
			>
				{#snippet icon()}
					<Heart class="lucide-button h-[10px]" fill="red" color="red" />
				{/snippet}
			</Button>

			<!-- Cashback -->
			<CashbackButton title="Cashback" currency="R$" value={0.0} />
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
		<form
			action="/search"
			method="get"
			class="w-full flex items-center relative flex-align-items-center"
		>
			<Search class="mr-1 h-[16px] absolute top-1/2 -translate-y-1/2 left-[30px]" />
			<input
				type="search"
				minlength="3"
				class="h-[50px] focus:ring-0 focus-visible:outline-none w-full text-sm placeholder:tracking-wide placeholder:text-grey-medium border-t border-grey-lighter pl-[60px] pr-[30px] py-2.5 font-roboto placeholder:font-light Xshadow-[inset_0_2px_1px_rgba(0,0,0,0.025)]"
				placeholder="Pesquisar…"
				value=""
				name="s"
				title="Procurar:"
			/>
		</form>
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
