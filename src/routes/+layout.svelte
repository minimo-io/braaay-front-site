<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import '@fontsource/prata';
	import '@fontsource-variable/open-sans';

	// In case we want SSG
	// import { page } from '$app/state';
	// import { localizeHref, locales } from '$lib/paraglide/runtime';

	import Footer from '$components/layout/Footer.svelte';
	import Header from '$components/layout/Header.svelte';

	// Modal
	// import { urqlClient } from '$stores/urqlClient.state.svelte';
	import { modalState } from '$stores/modalState.state.svelte';
	import Modal from '$components/ui/Modal.svelte';

	// Toasts

	import { Toasts } from 'svoast';

	import '../app.css';
	import 'animate.css';

	// Loader
	import { navigating } from '$app/state';
	import { loaderActivated } from '$stores/loaderStore.state.svelte';
	// import { navigating } from '$app/stores';
	// import { derived } from 'svelte/store';
	// const isNavigating = derived(navigating, ($navigating) => $navigating !== null);

	let { children } = $props();

	let showLoader = $derived.by(() => {
		// $navigation and $loaderStore are auto-subscribed values.
		return navigating.to || loaderActivated.active;
	});
</script>

<!-- {#if navigating.to}
	<div class="loader active"></div>
{/if} -->
{#if showLoader}
	<div class="loader active"></div>
{/if}

<Header />

{@render children()}

<Footer />

<Modal
	bind:showModal={modalState.current}
	header={modalState.header}
	content={modalState.content}
/>

<Toasts position="bottom-right" />

<!-- <div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div> -->

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
		z-index: 9999;
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
</style>
