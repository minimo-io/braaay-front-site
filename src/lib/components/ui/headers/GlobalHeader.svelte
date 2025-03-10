<script lang="ts">
	import { page } from '$app/state';

	import {
		// Newspaper,
		Search,
		Coins,
		ChevronDown,
		CircleUser
	} from 'lucide-svelte';

	import SecondaryMenuGeneral from '$components/ui/menues/SecondaryMenuGeneral.svelte';
	import SecondaryMenuBlog from '$components/ui/menues/SecondaryMenuBlog.svelte';
	import Button from '$components/ui/buttons/Button.svelte';
	import CashbackButton from '../buttons/CashbackButton.svelte';

	// Using runes for reactive state
	let SecondaryMenuComponent = $state(
		page.url.pathname.startsWith('/blog') ? SecondaryMenuBlog : SecondaryMenuGeneral
	);

	// Subscribe to page store changes
	$effect(() => {
		SecondaryMenuComponent = page.url.pathname.startsWith('/blog')
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
		<div class="flex lg:flex-none pr-8">
			<a href="./" class="">
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

		<!-- Search-->
		<div class="hidden lg:flex flex-1 lg:gap-x-12">
			<!-- Search form -->
			<form action="/search" method="get" class="w-full">
				<div class="relative px-5 border-r border-r-1 border-r-grey-lighter h-[45px]">
					<input
						id="search"
						type="search"
						minlength="3"
						class="rounded-3xl focus:ring-1 ring-sun w-full text-sm h-[45px] placeholder:tracking-wide placeholder:text-grey-medium border border-grey-lighter px-5 py-2.5 font-roboto placeholder:font-light shadow-[inset_0_2px_1px_rgba(0,0,0,0.025)]"
						placeholder="Pesquisar…"
						value=""
						name="s"
						title="Procurar:"
					/>
					<!-- KBD -->
					<kbd class="bry-search-kbd">
						<abbr title="Command" class="no-underline">⌘</abbr>
						K
					</kbd>
				</div>
			</form>
		</div>

		<div class="hidden lg:flex lg:flex-none lg:justify-end pl-5">
			<!-- My account -->
			<Button chevron={true} title="Conta" url="/account" type="blue" size="xl">
				{#snippet icon()}
					<CircleUser class="lucide-button h-[10px]" />
				{/snippet}
			</Button>

			<!-- Cashback -->
			<CashbackButton title="Cashback" currency="R$" value={123.42} />
		</div>

		<!-- Bag -->
		<a href="/cart" class="bry-cart relative h-[45px] uppercase flex items-center">
			<i class="bry-bag"></i>
			<span
				class="flex justify-center items-center rounded-full bg-sun p-0 w-4 h-4 lg:w-5 lg:h-5 font-roboto text-[10px] text-white ring-inset absolute top-1 lg:top-0 -right-2"
			>
				0
			</span>
		</a>
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
