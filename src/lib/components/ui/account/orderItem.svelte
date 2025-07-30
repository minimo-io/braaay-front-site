<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { OrderStatus, type CustomerOrder } from '$lib/types';
	import { formatDate } from '$lib/utils';
	import {
		ChevronRight,
		ChevronDown,
		CircleCheckBig,
		User,
		CreditCard,
		Package,
		Truck,
		CircleOff
	} from '@lucide/svelte';

	interface Props {
		order: CustomerOrder;
	}
	let { order }: Props = $props();

	let isExpanded = $state(false);

	function toggleExpanded() {
		isExpanded = !isExpanded;
	}

	let realDiscounTotal = $derived.by(() => {
		let totalDiscount = 0;
		for (const feeLine of order.feeLines.nodes) {
			totalDiscount = parseFloat(feeLine.amount);
		}
		return totalDiscount;
	});

	let finalUserName = $derived.by(() => {
		if (order.customer.firstName && order.customer.lastName) {
			return `${order.customer.firstName} ${order.customer.lastName}`;
		} else if (order.customer.displayName) {
			return order.customer.displayName;
		} else {
			return order.customer.username;
		}
	});
</script>

<div
	class="w-full max-w-full bg-white border border-grey-lighter rounded-xl p-5 sm:p-4 my-2 shadow-sm overflow-hidden"
>
	<!-- Order Header - Always Visible -->
	<div class="w-full flex flex-col gap-3">
		<!-- Top Row: Order Info + Status -->
		<div
			class="w-full flex flex-col md:flex-row md:items-center justify-start md:justify-between gap-2"
		>
			<div class="flex items-center justify-between md:justify-normal gap-2 min-w-0 flex-1">
				<h2 class="font-bold text-sm sm:text-base text-gray-900 truncate">
					{m.order()}: #{order.databaseId}
				</h2>
				<ChevronRight class="hidden md:block h-3 w-3 text-grey-light flex-shrink-0" />
				<span class="text-grey-medium text-xs sm:text-sm whitespace-nowrap">
					{formatDate(order.date)}
				</span>
			</div>
			<div class="flex items-center text-green-600 flex-shrink-0">
				{#if order.status == 'CANCELLED'}
					<CircleOff class="h-4 w-4 mr-1 text-red-medium" />
				{:else if order.status == 'completed'}
					<CircleCheckBig class="h-4 w-4 mr-1 text-green-medium" />
				{:else}
					<CircleCheckBig class="h-4 w-4 mr-1 text-green-medium" />
				{/if}

				<span
					class={[
						'font-medium text-xs sm:text-sm whitespace-nowrap text-green-medium',
						order.status == 'CANCELLED' && '!text-red-medium'
					]}
				>
					{OrderStatus[order.status] || order.status}
				</span>
			</div>
		</div>

		<!-- Bottom Row: Summary + Toggle -->
		<div class="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
			<!-- Details -->
			<div
				class="flex items-center justify-evenly md:justify-normal w-full gap-3 text-xs sm:text-sm text-gray-600 min-w-0 flex-1"
			>
				<div class="flex items-center gap-1 flex-shrink-0">
					<User class="h-3 w-3 sm:h-4 sm:w-4" />
					<span class="truncate max-w-20 sm:max-w-32">{order.customer.username}</span>
				</div>
				<div class="flex items-center gap-1 flex-shrink-0">
					<Package class="h-3 w-3 sm:h-4 sm:w-4" />
					<span class="whitespace-nowrap"
						>{order.products.length} {order.products.length === 1 ? 'item' : 'items'}</span
					>
				</div>
				<div class="font-semibold text-gray-900 text-sm sm:text-base flex-shrink-0">
					{order.total}
				</div>
			</div>

			<!-- Details button -->
			<button
				onclick={toggleExpanded}
				class="flex items-center self-start my-2 md:my-0 text-gray-600 hover:text-gray-800 transition-colors flex-shrink-0 md:ml-2"
				aria-label={isExpanded ? 'Hide order details' : 'Show order details'}
			>
				<span class="text-xs sm:text-sm mr-1 whitespace-nowrap"
					>{isExpanded ? m.hide() : m.details()}</span
				>
				<ChevronDown
					class="h-4 w-4 transition-transform duration-200 {isExpanded ? 'rotate-180' : ''}"
				/>
			</button>
		</div>
	</div>

	<!-- Expanded Details -->
	{#if isExpanded}
		<div class="w-full mt-4 space-y-4 overflow-hidden">
			<!-- Order Details Grid -->
			<div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
				<!-- Customer Info -->
				<div class="w-full flex items-center p-3 bg-gray-50 rounded-lg overflow-hidden">
					<User class="h-4 w-4 text-gray-600 flex-shrink-0 mr-3" />
					<div class="min-w-0 flex-1">
						<p class="text-xs text-gray-500 uppercase tracking-wide">{m.customer()}</p>
						<p class="font-medium text-gray-900 text-sm truncate">{finalUserName}</p>
					</div>
				</div>

				<!-- Payment Method -->
				<div class="w-full flex items-center p-3 bg-gray-50 rounded-lg overflow-hidden">
					<CreditCard class="h-4 w-4 text-gray-600 flex-shrink-0 mr-3" />
					<div class="min-w-0 flex-1">
						<p class="text-xs text-gray-500 uppercase tracking-wide">{m.payment()}</p>
						<p class="font-medium text-gray-900 text-sm truncate">{order.paymentMethodTitle}</p>
					</div>
				</div>

				<!-- Shipping Cost -->
				<div class="w-full flex items-center p-3 bg-gray-50 rounded-lg overflow-hidden">
					<Truck class="h-4 w-4 text-gray-600 flex-shrink-0 mr-3" />
					<div class="min-w-0 flex-1">
						<p class="text-xs text-gray-500 uppercase tracking-wide">{m.shipping()}</p>
						<p class="font-medium text-gray-900 text-sm">{order.shippingTotal}</p>
					</div>
				</div>

				<!-- Total -->
				<div class="w-full flex items-center p-3 bg-blue-50 rounded-lg overflow-hidden">
					<!-- <div
						class="h-4 w-4 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mr-3"
					>
						<span class="text-white text-xs font-bold">{m.currencySymbol()}</span>
					</div> -->
					<div class="min-w-0 flex-1">
						<p class="text-xs text-blue-600 uppercase tracking-wide font-medium">
							{m.discountApplied()}
						</p>
						<p class="font-medium text-gray-900 text-sm">
							{#if order.discountTotal != 'R$0,00'}
								-{order.discountTotal}
							{:else}
								{m.currencySymbol()}{realDiscounTotal}
							{/if}
						</p>
					</div>
				</div>
			</div>

			<!-- Discount Section (if applicable) -->
			<!-- {#if order.discountTotal && order.discountTotal !== '0' && order.discountTotal !== '$0.00'} -->
			<!-- <div class="w-full p-3 bg-green-50 border border-grey-lighter rounded-lg overflow-hidden">
				<div class="flex items-center justify-between">
					<span class="text-green-700 font-medium text-sm">{m.discountApplied()}</span>
					<span class="text-green-800 font-bold text-sm">-{order.discountTotal}</span>
				</div>
			</div> -->
			<!-- {/if} -->

			<!-- Products Section -->
			<div class="w-full border-t border-grey-lighter pt-5 overflow-hidden">
				<div class="flex items-center mb-3">
					<Package class="h-4 w-4 text-gray-600 mr-2 flex-shrink-0" />
					<h3 class="font-semibold text-gray-900 text-sm sm:text-base">
						{m.products()} ({order.products.length})
					</h3>
				</div>

				<div class="w-full space-y-2">
					{#each order.products as item}
						<div class="w-full flex items-start gap-3 p-3 bg-gray-50 rounded-lg overflow-hidden">
							<!-- Product Image -->
							<div class="flex-shrink-0">
								<img
									src={item.product.node.image.mediaItemUrl}
									alt={item.product.node.image.altText || item.product.node.name}
									class="h-12 w-12 object-cover rounded border border-gray-200"
								/>
							</div>

							<!-- Product Details -->
							<div class="min-w-0 flex-1">
								<h4 class="font-medium text-gray-900 text-sm leading-tight mb-1">
									<span class="line-clamp-2">{item.product.node.name}</span>
								</h4>
								<div class="flex flex-col gap-1 text-xs text-gray-500">
									<span>{m.qty()}: {item.quantity}</span>
									<span class="font-medium text-gray-900">{m.currencySymbol()}{item.total}</span>
								</div>
							</div>

							<!-- Product Link (optional) -->
							{#if item.product.node.uri}
								<div class="flex-shrink-0">
									<a
										href={item.product.node.uri}
										class="text-blue-600 hover:text-blue-800 text-xs font-medium px-2 py-1 rounded border border-blue-200 hover:bg-blue-50 transition-colors"
										target="_blank"
										rel="noopener noreferrer"
									>
										{m.view()}
									</a>
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
