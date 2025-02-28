<script lang="ts">
	import { page } from '$app/state';
	import GlobalFooter from '$components/ui/footers/GlobalFooter.svelte';
	import CheckoutFooter from '$components/ui/footers/CheckoutFooter.svelte';
</script>

<!-- Top header -->
{#if page.url.pathname.startsWith('/cart') || page.url.pathname.startsWith('/checkout') || page.url.pathname.startsWith('/thank-you')}
	<CheckoutFooter />
{:else}
	<GlobalFooter />
{/if}
