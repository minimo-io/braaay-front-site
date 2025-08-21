<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import '@fontsource/prata';
	import '@fontsource-variable/open-sans';

	import '../app.css';
	import 'animate.css';
	import { LoaderCircle } from '@lucide/svelte';

	import { afterNavigate, beforeNavigate, goto } from '$app/navigation';

	import Footer from '$components/layout/Footer.svelte';
	import Header from '$components/layout/Header.svelte';

	import Drawer from '$components/ui/drawer/Drawer.svelte';
	import { closeDrawer, drawerState } from '$lib/stores/drawerState.state.svelte';

	import { isAuthenticated, requiresAuth } from '$lib/graphql/auth';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';

	// Modal
	import { modalState } from '$stores/modalState.state.svelte';
	import Modal from '$components/ui/Modal.svelte';

	// Toasts
	import { Toasts } from 'svoast';

	// Loader
	import { navigating, page } from '$app/state';
	import { loaderActivated } from '$stores/loaderStore.state.svelte';

	let { children } = $props();

	let showLoader = $derived.by(() => {
		return navigating.to || loaderActivated.active;
	});

	// Mini cart
	import { miniCart } from '$stores/cart.store.svelte';
	import CartToast from '$components/ui/cart/CartToast.svelte';
	import Analytics from '$components/Analytics.svelte';
	import Teaser from '$components/ui/Teaser.svelte';
	import Debugger from '$components/Debugger.svelte';
	import { AppConfig } from '$config';
	import { onMount } from 'svelte';
	import { launchToast } from '$lib/utils';
	import { clearAllCache } from '$stores/urqlClient.state.svelte';
	import { resetFilters } from '$stores/filters.store.svelte';
	import WhatsappButtonFloating from '$components/ui/buttons/WhatsappButtonFloating.svelte';

	onMount(() => {
		if (page.url.searchParams.has('clearCache')) {
			// launchToast('En breve vamos a lanzar esta funcionalidad.', 'info', 3000);
			console.log('Clearning cache...');
			clearAllCache();
		}
	});

	afterNavigate(() => {
		// Close drawer if active
		closeDrawer();
		// reset horizontal scroll on menu if exsits
		const secondaryMenus = document.querySelectorAll('.bry-secondary-menu');

		// Reset filters on navigation
		// resetFilters();

		secondaryMenus.forEach((menu) => {
			if (menu instanceof HTMLElement) {
				menu.scrollLeft = 0;
			}
		});
	});

	// beforeNavigate((navigation) => {
	// 	if (navigation.to && navigation.to.route) {
	// 		// Erase the search field on navigation
	// 		if (navigation.to.route.id != '/search') {
	// 			let searchEl: HTMLInputElement | null = document.querySelector<HTMLInputElement>('#search');
	// 			if (searchEl) {
	// 				searchEl.value = '';
	// 			}
	// 		}

	// 		miniCart.active = false;
	// 		const isAuthTo = requiresAuth(`${navigation.to.route.id}`);
	// 		const isUserAuth = isAuthenticated();
	// 		if (isAuthTo && isUserAuth == false) {
	// 			const returnUrl = new URL(window.location.href);

	// 			goto(`/login/?returnUrl=${returnUrl.pathname}`);
	// 		}

	// 		if (navigation.to.route.id == '/login' && isUserAuth) {
	// 			goto(localizeHref(`/account/`));
	// 		}
	// 	}
	// });

	beforeNavigate((navigation) => {
		if (navigation.to && navigation.to.route) {
			// Erase the search field on navigation
			if (navigation.to.route.id != '/search') {
				let searchEl: HTMLInputElement | null = document.querySelector<HTMLInputElement>('#search');
				if (searchEl) {
					searchEl.value = '';
					// Dispatch input event to sync with Svelte's reactive state
					searchEl.dispatchEvent(new Event('input', { bubbles: true }));
					// Also blur the element to close suggestions
					searchEl.blur();
				}
			}

			miniCart.active = false;
			const isAuthTo = requiresAuth(`${navigation.to.route.id}`);
			const isUserAuth = isAuthenticated();
			if (isAuthTo && isUserAuth == false) {
				const returnUrl = new URL(window.location.href);

				goto(`/login/?returnUrl=${returnUrl.pathname}`);
			}

			if (navigation.to.route.id == '/login' && isUserAuth) {
				goto(localizeHref(`/account/`));
			}
		}
	});

	let overlayActive = $state(false);

	let timer: ReturnType<typeof setTimeout> | null = null;
	$effect(() => {
		if (showLoader) {
			// Start loader
			overlayActive = false;
			if (timer) clearTimeout(timer);
			timer = setTimeout(() => {
				overlayActive = true;
			}, 10);
			document.body.classList.toggle('no-scroll', true);
		} else {
			// Navigation ended
			document.body.classList.toggle('no-scroll', false);
			if (timer) clearTimeout(timer);
			overlayActive = false;
		}
		// Drawer state scroll control and smooth click
		if (drawerState.active) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth' // Use 'auto' instead of 'smooth' for instant scrolling
			});
		}
		document.body.style.overflow = drawerState.active ? 'hidden' : '';
	});
</script>

<Analytics />

{#if showLoader}
	<div class="loader-wrapper">
		<div class="loader active"></div>

		{#if overlayActive}
			<LoaderCircle
				class="h-[30px] w-[30px] relative z-[10000] transition-none animate__animated animate__rotateOut animate__infinite	infinite text-blue"
				strokeWidth={2}
				style=""
			/>
		{/if}
		<div class="loader-overlay"></div>
	</div>
{/if}

<Header />

{@render children()}

<Footer />

<Modal
	bind:showModal={modalState.current}
	header={modalState.header}
	content={modalState.content}
	props={modalState.props}
/>

<!-- Used as a mobile menu -->
<Drawer />

<!-- Used when adding an item to the cart -->
<CartToast bind:showCartToast={miniCart.active} />

<Toasts position="top-center" />

<!-- Teaser -->
{#if getLocale() == 'pt'}
	<Teaser />
{/if}

<!-- Local Storage Debugger -->
{#if AppConfig.debug}
	<!-- <Debugger /> -->
{/if}

<WhatsappButtonFloating phoneNumber={AppConfig.tel[getLocale()]} />

<style global>
	:root {
		--bry-current-color: #211a2e;
		--bry-current-gradient-start: #d2d2d1;
		--bry-current-gradient-end: #b7b6b4;
	}

	/* Loader styles: a fixed top progress bar */
	.loader {
		position: fixed;
		top: 0;
		left: 0;
		height: 4px;
		width: 0%;
		background: linear-gradient(90deg, #bd8836, #212639);
		z-index: 9000;
		transition: width 0.3s ease;
	}
	/* When active, the width can animate (you can customize this) */
	.loader.active {
		width: 100%;
		animation: loaderAnimation 2s infinite;
	}

	@keyframes loaderAnimation {
		0% {
			width: 0%;
		}
		50% {
			width: 80%;
		}
		100% {
			width: 100%;
		}
	}

	/* .loader-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 4px;
		z-index: 9999;
		pointer-events: none;
	} */

	.loader-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 9998;
		display: flex;
		align-items: center;
		justify-content: center;
		pointer-events: none;
	}
	.loader-overlay {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		/* height: 100%; */
		height: 100dvh;
		background-color: rgba(33, 38, 128, 0.2);
		z-index: 9997;
		animation: fadeIn 0.3s ease-in-out;
		pointer-events: all;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
