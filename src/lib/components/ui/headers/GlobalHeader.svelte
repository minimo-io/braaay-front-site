<script lang="ts">
	import { page } from '$app/state';
	// import { onMount } from 'svelte';

	import {
		// Newspaper,
		Search,
		CircleUser,
		Heart,
		Menu,
		EllipsisVertical,
		AlignJustify
	} from '@lucide/svelte';

	import SecondaryMenuGeneral from '$components/ui/menues/SecondaryMenuGeneral.svelte';
	import SecondaryMenuBlog from '$components/ui/menues/SecondaryMenuBlog.svelte';
	import Button from '$components/ui/buttons/Button.svelte';
	import { CashbackButton } from '$components/ui/buttons/index';
	import SearchBar from '../search/SearchBar.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
	import GlobalBanner from './GlobalBanner.svelte';

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
</script>

<header class="bg-white">
	<nav
		class="mx-[30px] lg:mx-auto flex max-w-screen-lg items-center justify-between h-[63px] lg:h-[90px]"
		aria-label="Global"
	>
		<!-- logo -->
		<div class="flex">
			<button class="flex md:hidden justify-start mr-6">
				<AlignJustify class="h-[22px] !mr-0 text-grey-medium-dark" />
			</button>
			<div class="flex lg:flex-none pr-0 emd:pr-8 justify-start">
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

		<!-- Search-->
		<div class="hidden lg:flex flex-1 lg:gap-x-12">
			<!-- Search form -->
			<SearchBar />
		</div>

		<div class="hidden lg:flex lg:flex-none lg:justify-end pl-5">
			<!-- My account -->
			<Button
				chevron={true}
				customPx="!pr-[12px] !pl-3"
				title="Entrar"
				url="/account"
				type="blue"
				size="xl"
			>
				{#snippet icon()}
					<CircleUser class="lucide-button h-[10px]" />
				{/snippet}
			</Button>

			<!-- Favorites -->

			<Button
				chevron={false}
				customPx="!pl-3 ml-[12px]"
				title="Minha lista"
				url="/account"
				type="light"
				size="xl"
			>
				{#snippet icon()}
					<Heart class="lucide-button h-[10px]" fill="red" color="red" />
				{/snippet}
			</Button>

			<!-- Cashback -->
			<CashbackButton title="Cashback" currency="R$" value={123.42} />
		</div>

		<div class="flex md:hidden justify-end items-center">
			<Button
				chevron={false}
				customPx="!pr-4 !pl-4 !my-0 max-h-[30px]"
				title="Entrar"
				url="/account"
				type="blue"
				size="sm"
			></Button>
			<!-- Bag -->
			<a
				href={localizeHref('/cart')}
				class="bry-cart relative h-[45px] uppercase flex items-center"
			>
				<i class="bry-bag"></i>
				<span
					class="flex justify-center items-center rounded-full bg-sun p-0 w-4 h-4 lg:w-5 lg:h-5 font-roboto text-[10px] text-white ring-inset absolute top-1 lg:top-0 -right-2"
				>
					0
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
	<SecondaryMenuComponent />
</header>

<!-- Global Banner -->
<GlobalBanner />
