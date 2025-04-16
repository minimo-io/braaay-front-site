<script lang="ts">
	import { page } from '$app/state';
	import GlobalFooter from '$components/ui/footers/GlobalFooter.svelte';
	import CheckoutFooter from '$components/ui/footers/CheckoutFooter.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
</script>

<!-- Top header -->
{#if page.url.pathname.startsWith(localizeHref('/cart/')) || page.url.pathname.startsWith(localizeHref('/checkout/')) || page.url.pathname.startsWith(localizeHref('/thank-you/'))}
	<CheckoutFooter />
{:else}
	<GlobalFooter />
{/if}
