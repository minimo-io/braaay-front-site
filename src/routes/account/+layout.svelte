<script lang="ts">
	// import { page } from '$app/state';
	import Button from '$components/ui/buttons/Button.svelte';
	import MoreInfoButton from '$components/ui/buttons/MoreInfoButton.svelte';
	import Divider from '$components/ui/dividers/Divider.svelte';
	import {
		CircleUser,
		Coins,
		Database,
		Heart,
		PackageOpen,
		User,
		Phone,
		LogOut,
		ChevronDown,
		ChevronUp
	} from '@lucide/svelte';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';
	import { isAuthenticated, logout } from '$lib/graphql/auth';
	import { redirectHref } from '$lib/utils';
	import FunMessageSection from '$components/layout/FunMessageSection.svelte';
	import { authState } from '$stores/auth.state.svelte';
	import { m } from '$lib/paraglide/messages';
	import { AppConfig } from '$config';
	import Meta from '$components/layout/Meta.svelte';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { page } from '$app/state';
	import { beforeNavigate } from '$app/navigation';

	let returnUrl = $derived('/login/');
	let userName = $state('');
	let userEmail = $state('');
	let isDropdownOpen = $state(false);

	authState.subscribe((auth) => {
		if (auth.user && auth.user.name && auth.user.email) {
			userName = auth.user.name;
			userEmail = auth.user.email;
		}
	});

	async function handleLogout() {
		toggleLoader();
		let logoutResult = await logout();
		redirectHref(localizeHref(returnUrl));
	}

	let myFavoritesBold = $state(false);
	let myCashbackBold = $state(false);
	let myOrdersBold = $state(false);
	let myInfoBold = $state(false);

	$effect(() => {
		const currentRoute = page.route?.id;
		myFavoritesBold = currentRoute === '/account/my-favorites';
		myCashbackBold = currentRoute === '/account/my-cashback';
		myOrdersBold = currentRoute === '/account/my-orders';
		myInfoBold = currentRoute === '/account/my-info';
	});

	// Menu items configuration
	const menuItems = [
		{
			href: '/account/my-favorites/',
			icon: Heart,
			iconProps: { fill: 'red', color: 'red' },
			label: () => m.myFavorites(),
			shortLabel: m.myFavorites(),
			isActive: () => myFavoritesBold,
			color: ''
		},
		{
			href: '/account/my-cashback/',
			icon: Coins,
			iconProps: { fill: '#BD8836', color: '' },
			label: () => m.myCashback(),
			shortLabel: m.myCashback(),
			isActive: () => myCashbackBold,
			color: ''
		},
		{
			href: '/account/my-orders/',
			icon: PackageOpen,
			iconProps: { class: '' },
			label: () => m.myOrders(),
			shortLabel: m.myOrders(),
			isActive: () => myOrdersBold,
			color: 'text-blue-600'
		},
		{
			href: '/account/my-info/',
			icon: Database,
			iconProps: { class: '' },
			label: () => m.myInfo(),
			shortLabel: m.myInfo(),
			isActive: () => myInfoBold,
			color: ''
		}
	];

	// Get current active item
	const currentItem = $derived(menuItems.find((item) => item.isActive()) || menuItems[0]);

	// Close dropdown when clicking outside
	function handleBackdropClick() {
		isDropdownOpen = false;
	}

	let { children } = $props();
</script>

<Meta
	title="{m.seoMyAccountTitle()} {m.seoDivider()} {m.seoBase()}"
	description={m.seoMyAccountDescription()}
	noindex={true}
/>

<main class="w-full mx-auto">
	<!-- Header menu -->
	<div class="bg-white border-b border-b-grey-lighter">
		<!-- Category Header -->
		<div class="max-w-screen-lg border-sky bg-gray-100 md:mx-auto">
			<div class="flex flex-col md:flex-row items-center md:min-h-40 relative">
				<div
					class="flex justify-between items-center text-right md:text-left md:items-start md:justify-normal flex-row md:flex-col w-full md:w-[55%] py-4 md:py-[20px] mx-[30px] px-[30px] md:pl-0"
				>
					<h1
						class="font-prata uppercase text-[25px] my-1 font-light text-grey-dark tracking-wider antialiased"
					>
						<div class="flex">
							<span class="self-center align-middle pt-2 pb-2 pr-2">👋</span>
							<span
								class={[
									'self-center font-roboto font-extrabold align-bottom pt-0 text-left text-[18px] md:text-[22px] text-wrap',
									'md:max-w-max max-w-[87%] leading-tight pr-2 md:pr-0'
								]}>Olá, {userName}</span
							>
						</div>
					</h1>
				</div>
				<!-- {#if !isAuthenticated} -->
				<div class="block">
					<img
						src="/images/my-account.png"
						alt="Uruguai"
						class="md:min-h-40 md:max-h-40 max-h-32 h-32 md:full-width-r object-cover"
					/>
				</div>
				<!-- {/if} -->
			</div>
		</div>
	</div>

	<!-- Mobile Navigation Dropdown - Immediately Visible -->
	<div class="md:hidden bg-white border-b border-grey-lighter mb-6 relative">
		<div class="py-2 px-4">
			<!-- Current Selection Button -->
			<button
				onclick={() => (isDropdownOpen = !isDropdownOpen)}
				class="w-full flex items-center justify-between p-4 border-none border-gray-200 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-all duration-200"
			>
				<div class="flex items-center gap-3">
					<!-- Current item icon -->
					<currentItem.icon class="w-5 h-5" {...currentItem.iconProps} />
					<!-- Current item text -->
					<div class="text-left">
						<div class={`font-semibold ${currentItem.color}`}>
							{currentItem.shortLabel}
						</div>
						<div class="text-sm text-gray-500">{m.tapToChangeSection()}</div>
					</div>
				</div>

				<div class="flex items-center gap-2">
					{#if isDropdownOpen}
						<ChevronUp class="w-5 h-5 text-gray-400" />
					{:else}
						<ChevronDown class="w-5 h-5 text-gray-400" />
					{/if}
				</div>
			</button>

			<!-- Dropdown Menu -->
			{#if isDropdownOpen}
				<div
					class="absolute left-4 right-4 top-20 bg-white border border-grey-lighter rounded-xl shadow-lg z-50 overflow-hidden"
				>
					{#each menuItems as item}
						{#if !item.isActive()}
							<a
								href={localizeHref(item.href)}
								onclick={() => (isDropdownOpen = false)}
								class="flex items-center gap-2 p-3 hover:bg-gray-50 active:bg-grey-lighter transition-colors duration-200 border-b text-sm border-grey-lighter last:border-b-0"
							>
								<item.icon class="w-4 h-4" />
								<!-- {#if item.icon === Heart}
									<Heart class="w-4 h-4" {...item.iconProps} />
								{:else if item.icon === Coins}
									<Coins class="w-4 h-4" {...item.iconProps} />
								{:else if item.icon === PackageOpen}
									<Heart class="w-4 h-4" {...item.iconProps} />
								{:else if item.icon === Database}
									<Database class="w-4 h-4" {...item.iconProps} />
								{/if} -->
								<span class={`font-normal ${item.color}`}>
									{item.shortLabel}
								</span>
							</a>
						{/if}
					{/each}

					<!-- Support and Logout -->
					<a
						href={AppConfig.whatsappLink}
						target="_blank"
						rel="noopener"
						onclick={() => (isDropdownOpen = false)}
						class="flex items-center gap-2 p-3 text-sm transition-colors duration-200 border-b border-grey-lighter"
					>
						<Phone class="w-4 h-4" />
						<span class="font-normal">{m.clientSupport()}</span>
					</a>

					<button
						onclick={() => {
							isDropdownOpen = false;
							handleLogout();
						}}
						class="w-full flex items-center text-sm gap-2 p-3 transition-colors duration-200 text-left"
					>
						<LogOut class="w-4 h-4 text-red-600" />
						<span class="font-normal">{m.exit()}</span>
					</button>
				</div>
			{/if}

			<!-- Backdrop overlay -->
			<!-- {#if isDropdownOpen}
				<div class="fixed inset-0 bg-transparent z-40" onclick={handleBackdropClick}></div>
			{/if} -->
			{#if isDropdownOpen}
				<button
					class="fixed inset-0 bg-transparent z-40 border-none cursor-default focus:outline-none"
					onclick={handleBackdropClick}
					aria-label="Close dropdown menu"
					type="button"
				></button>
			{/if}
		</div>
	</div>

	<!-- My account -->
	<div class="flex flex-col md:flex-row max-w-screen-lg mx-auto">
		<!-- Desktop Left Sidebar (hidden on mobile) -->
		<div class="hidden md:block border-r border-grey-lighter p-8 w-full md:w-1/4">
			<h1 class="text-lg font-bold mb-6">MENU</h1>
			<nav class="space-y-4">
				<div>
					<ul class="space-y-3 text-base">
						<li>
							<a href={localizeHref('/account/my-favorites/')} class="text-grey-blueish flex gap-1">
								<Heart class="w-4 h-4 self-center mr-2" fill="red" color="red" />
								<span class={[myFavoritesBold && 'font-bold']}>{m.myFavorites()}</span>
							</a>
						</li>
						<li>
							<a href={localizeHref('/account/my-cashback/')} class="text-grey-blueish flex gap-1">
								<Coins class="w-4 h-4 text-sun" fill="#BD8836" />
								<span class={[myCashbackBold && 'font-bold']}>{m.myCashback()}</span>
							</a>
						</li>
						<li>
							<a href={localizeHref('/account/my-orders/')} class="text-grey-blueish flex gap-1">
								<PackageOpen class="w-4 h-4 self-center mr-2" />
								<span class={[myOrdersBold && 'font-bold']}>{m.myOrders()}</span>
							</a>
						</li>
						<li>
							<a href={localizeHref('/account/my-info/')} class="text-grey-blueish flex gap-1">
								<Database class="w-4 h-4 self-center mr-2" />
								<span class={[myInfoBold && 'font-bold']}>{m.myInfo()}</span>
							</a>
						</li>
						<li>
							<div class="border-t border-grey-lighter my-5"></div>
						</li>
						<li>
							<a
								href={AppConfig.whatsappLink}
								target="_blank"
								rel="noopener"
								class="text-grey-blueish"
								>{m.clientSupport()}
								<span class="block text-sm font-sans font-bold">{AppConfig.tel[getLocale()]}</span>
							</a>
						</li>
						<li>
							<div class="border-t border-grey-lighter my-5"></div>
						</li>
						<li class="border-b md:border-b-none border-grey-lighter pb-5">
							<Button title={m.accountExit()} action={() => handleLogout()} type="blue" />
						</li>
					</ul>
				</div>
			</nav>
		</div>

		<!-- Main Content Pane -->
		<div class="flex-1 p-8 pt-0 md:pt-8">
			<div class="grid gap-8">
				{@render children()}
			</div>
		</div>
	</div>
</main>

<FunMessageSection />
