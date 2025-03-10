<script lang="ts">
	import '@fontsource/prata';
	import '@fontsource-variable/open-sans';
	/* @import '@fontsource/roboto'; */

	import Footer from '$components/layout/Footer.svelte';
	import Header from '$components/layout/Header.svelte';

	import '../app.css';
	import 'animate.css';
	let { children } = $props();
</script>

<Header />

{@render children()}

<Footer />

<style global>
	:root {
		--bry-current-color: #211a2e;
		--bry-current-gradient-start: #847f87;
		--bry-current-gradient-end: #77747d;
	}
</style>
