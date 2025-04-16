<script lang="ts">
	import { page } from '$app/state';
	import GlobalHeader from '$components/ui/headers/GlobalHeader.svelte';
	import CheckoutHeader from '$components/ui/headers/CheckoutHeader.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
</script>

<!-- Top header -->
{#if page.url.pathname.startsWith(localizeHref('/cart/')) || page.url.pathname.startsWith(localizeHref('/checkout/')) || page.url.pathname.startsWith(localizeHref('/thank-you/'))}
	<CheckoutHeader />
{:else}
	<GlobalHeader />
{/if}
