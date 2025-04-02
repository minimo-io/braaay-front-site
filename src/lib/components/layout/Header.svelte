<script lang="ts">
	import { page } from '$app/state';
	import GlobalHeader from '$components/ui/headers/GlobalHeader.svelte';
	import CheckoutHeader from '$components/ui/headers/CheckoutHeader.svelte';
</script>

<!-- Top header -->
{#if page.url.pathname.startsWith('/carrinho') || page.url.pathname.startsWith('/uy/carrito') || page.url.pathname.startsWith('/checkout') || page.url.pathname.startsWith('/thank-you')}
	<CheckoutHeader />
{:else}
	<GlobalHeader />
{/if}
