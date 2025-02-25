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
