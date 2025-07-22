<!-- src/routes/account/my-orders/+page.svelte -->
<script lang="ts">
	import OrderItem from '$components/ui/account/orderItem.svelte';
	import { Button } from '$components/ui/buttons';
	import { AppConfig } from '$config';
	import { m } from '$lib/paraglide/messages';
	import { customerOrdersGet } from '$lib/services';
	import type { CustomerOrder } from '$lib/types';
	import { launchToast } from '$lib/utils';
	import { Headset, Share2, ShoppingBag } from '@lucide/svelte';
	import { onMount } from 'svelte';

	// let customerOrders = $state({});
	let customerOrders = $state<{ products: CustomerOrder[] | undefined }>({ products: undefined });
	let isLoading = $state(false);

	onMount(async () => {
		isLoading = true;
		customerOrders = await customerOrdersGet();
		isLoading = true;
	});
</script>

<div>
	<div class="flex justify-between">
		<h2 class="text-xl mb-4 font-prata flex gap-1 items-center">
			<ShoppingBag class="w-5 h-5 self-center mr-2 mb-[5px]" />
			<span>{m.myOrders()}</span>
		</h2>
		<div class="relative block">
			<!-- Share -->
			<a
				class="flex items-center bg-transparent border bg-white border-grey-lighter -top-1 relative text-grey-medium-dark py-2 px-2 rounded-lg scale-90 md:scale-100"
				href={AppConfig.whatsappLink}
				rel="nofollow noopener"
				target="_blank"
			>
				<Headset class="h-[15px]" />
				<span class="text-xs mr-1">{'Entrar em contato'}</span>
			</a>
		</div>
	</div>

	<!-- Favorites products list -->
	{#if customerOrders && customerOrders.products}
		<div>
			<ul>
				{#each customerOrders.products as order}
					<li>
						<OrderItem {order} />
					</li>
				{/each}
			</ul>
		</div>
	{:else if isLoading}
		<div class="text-sm text-grey-medium-dark">{m.loadingOrders()}</div>
	{/if}

	<!-- No products -->
	{#if customerOrders.products && customerOrders?.products.length < 1}
		<div class="text-base mb-5 text-grey-medium-dark">{m.noOrders()}</div>
		<Button title="Vamos a explorar 🚀" size="md" type="light" url={m.letsExploreSlug()} />
	{/if}
</div>

<!-- <Divider color="blue" extraClasses="!my-0" /> -->
