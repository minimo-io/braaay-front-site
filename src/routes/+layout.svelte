<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import '@fontsource/prata';
	import '@fontsource-variable/open-sans';

	import Footer from '$components/layout/Footer.svelte';
	import Header from '$components/layout/Header.svelte';

	// Modal
	import { modalState } from '$stores/modalState.state.svelte';
	import Modal from '$components/ui/Modal.svelte';

	// Toasts
	import { Toasts } from 'svoast';

	import '../app.css';
	import 'animate.css';
	let { children } = $props();
</script>

<Header />

{@render children()}

<Footer />

<Modal bind:showModal={modalState.current} header={modalState.header} content={modalState.content}
></Modal>

<Toasts position="bottom-right" />

<style global>
	:root {
		--bry-current-color: #211a2e;
		--bry-current-gradient-start: #847f87;
		--bry-current-gradient-end: #77747d;
	}
</style>
