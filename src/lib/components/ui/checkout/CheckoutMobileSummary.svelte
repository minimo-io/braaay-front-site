<!-- src/lib/components/ui/checkout/CheckoutMobileSummary.svelte -->
<script lang="ts">
	import { CircleChevronDown, CircleChevronUp, ShoppingBag, Gift } from '@lucide/svelte';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';
	import { correctPrice, subtractPercentage } from '$lib/utils';
	import { onMount } from 'svelte';
	import type { DeliveryUIType, PaymentMethod, ShippingOption } from '$lib/types';
	import Divider from '../dividers/Divider.svelte';
	import { clearAllCoupons } from '$stores/cart.store.svelte';
	import MoreInfoButton from '../buttons/MoreInfoButton.svelte';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';
	import { getUrqlClient } from '$stores/urqlClient.state.svelte';
	import { COUPON_CLEAR_ALL } from '$lib/graphql/mutations';
	import Button from '../buttons/Button.svelte';
	import { openModal } from '$stores/modalState.state.svelte';
	import CouponForm from '../forms/couponForm.svelte';
	import type { Component } from 'svelte';

	interface Props {
		cartTotal: number;
		cartSubTotal: number;
		items: number;
		shippingAddress: ShippingOption | undefined;
		deliveryType: DeliveryUIType | null;
		couponsCount: number;
		cartDiscounts: number;
		paymentMethodSelected: PaymentMethod | undefined;
	}

	let {
		items,
		cartTotal,
		cartSubTotal,
		shippingAddress,
		deliveryType,
		couponsCount,
		cartDiscounts,
		paymentMethodSelected
	}: Props = $props();

	// Same calculation as desktop component
	let cartTotalMinus5 = $derived(subtractPercentage(cartTotal, 5));
	let totalCartAmountWithDiscounts = $derived(cartTotal - cartDiscounts);

	// State to track if the component should be fixed
	let isFixed = $state(false);
	// State to track if details are expanded
	let isExpanded = $state(false);
	// Flag to prevent scroll handler from closing when we're intentionally opening
	let isIntentionallyOpening = $state(false);
	// Reference to the component element
	let componentElement: HTMLDivElement;
	// Store the original position of the element
	let originalOffsetTop = $state(0);
	// Store dimensions for fixed positioning
	let componentWidth = $state(0);
	let componentHeight = $state(0);

	// Function to handle scroll events
	function handleScroll() {
		if (window.scrollY > originalOffsetTop) {
			// Close details when scrolling and make it fixed (unless we're intentionally opening)
			if (!isIntentionallyOpening) {
				isExpanded = false;
			}
			isFixed = true;
		} else {
			isFixed = false;
			// Reset the flag when we're back to normal position
			isIntentionallyOpening = false;
		}
	}

	// Function to toggle details expansion
	function toggleDetails() {
		// If we're expanding from a fixed state, scroll to top first
		if (!isExpanded && isFixed) {
			isIntentionallyOpening = true;
			window.scrollTo({ top: 0, behavior: 'smooth' });
			// Small delay to let the scroll complete before expanding
			setTimeout(() => {
				isExpanded = true;
			}, 300);
		} else {
			isExpanded = !isExpanded;
		}
	}

	// Calculate final total (same logic as desktop)
	let finalTotal = $derived(() => {
		if (paymentMethodSelected) {
			return cartTotal + paymentMethodSelected.cost;
		} else {
			return cartTotalMinus5;
		}
	});

	onMount(() => {
		if (componentElement) {
			originalOffsetTop = componentElement.offsetTop;
			componentWidth = componentElement.offsetWidth;
			componentHeight = componentElement.offsetHeight;

			window.addEventListener('scroll', handleScroll);

			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		}
	});
</script>

<!-- Add a placeholder div that takes up space when the summary is fixed -->
{#if isFixed && !isExpanded}
	<div class="block md:hidden" style="height: {componentHeight}px;"></div>
{/if}

<!-- Mobile Summary -->
<div
	bind:this={componentElement}
	class="block md:hidden bg-white py-2 mb-4 px-5 border border-grey-lighter rounded-lg mx-3 transition-all duration-200"
	class:fixed={isFixed && !isExpanded}
	class:top-0={isFixed && !isExpanded}
	class:left-0={isFixed && !isExpanded}
	class:right-0={isFixed && !isExpanded}
	class:z-50={isFixed && !isExpanded}
	class:mx-0={isFixed && !isExpanded}
	class:rounded-none={isFixed && !isExpanded}
	class:shadow-md={isFixed && !isExpanded}
	style={isFixed && !isExpanded ? `width: 100vw; margin-left: 0; margin-right: 0;` : ''}
>
	<!-- Summary Header (always visible) -->
	<div class="w-full py-1">
		<!-- Main summary line (clickable to toggle) -->
		<div
			class="flex justify-between items-center cursor-pointer"
			onclick={toggleDetails}
			role="button"
			tabindex="0"
			onkeydown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					toggleDetails();
				}
			}}
		>
			<div class="flex items-center">
				<ShoppingBag class="h-4 w-4 mr-2 text-sun flex-shrink-0" />
				<span class="font-bold font-roboto text-sm leading-tight pl-2">{@html m.cartMyCart()}</span>
			</div>
			<div class="flex items-center gap-2">
				<div class="text-right mr-2">
					<div class="font-roboto font-bold text-sm">
						{m.currencySymbol()}
						{correctPrice(finalTotal())}
					</div>
					{#if !paymentMethodSelected}
						<div class="text-xs text-[#28BA48] font-bold leading-tight">
							{m.in()}
							{m.cash()}
						</div>
					{/if}
				</div>
				{#if isExpanded}
					<CircleChevronUp class="h-5 w-5 text-sun flex-shrink-0" />
				{:else}
					<CircleChevronDown class="h-5 w-5 text-sun flex-shrink-0" />
				{/if}
			</div>
		</div>

		<!-- Cart button row (visible only when collapsed and not fixed) -->
		{#if !isExpanded && !isFixed}
			<div class="flex justify-center mt-2">
				<a
					href={localizeHref('/cart/')}
					class="w-full py-2 text-xs bg-grey-background text-blue border border-grey-lighter rounded-md hover:bg-grey-light transition-colors text-center"
				>
					{m.backToCart()}
				</a>
			</div>
		{/if}
	</div>

	<!-- Expanded Details (same as desktop component) -->
	{#if isExpanded}
		<div class="mt-2 pt-1 border-t border-grey-lighter">
			<!-- Sub-total -->
			<div class="flex justify-between mt-1">
				<p class="font-light text-sm self-center">
					Sub-total ({items} item{items > 1 ? 's' : ''})
				</p>
				<p class="font-roboto self-center text-sm">
					{m.currencySymbol()}
					{correctPrice(cartSubTotal)}
				</p>
			</div>

			<!-- Divider -->
			<div class="my-2 border-t border-t-grey-lighter"></div>

			<!-- Coupons -->
			<div class="flex justify-between items-center">
				<div class="!font-light font-roboto text-sm self-center flex flex-col">
					{m.discountCouponTitle()}
					{#if couponsCount >= 1}
						<MoreInfoButton
							title={m.remove()}
							action={async () => {
								toggleLoader();
								try {
									await getUrqlClient().client.mutation(COUPON_CLEAR_ALL, {}).toPromise();
								} catch (err) {
									console.error('Failed to clear coupons from remote server', err);
								}
								clearAllCoupons();
								toggleLoader();
							}}
							customStyles="w-fit !ml-0 mt-1"
						/>
					{/if}
				</div>

				{#if couponsCount < 1}
					<div class="scale-90 left-1 relative">
						<!-- <Button
							title={m.add()}
							width="130px"
							size="sm-short"
							type="grey"
							borderDark={true}
							customPx="max-h-min"
							action={() => {
								openModal({
									header: 'Adicionar cupom',
									content: CouponForm as Component
								});
							}}
						>
							{#snippet icon()}
								<Gift class="lucide-button" />
							{/snippet}
						</Button> -->
						<Button
							title={m.add()}
							width="130px"
							size="sm-short"
							type="grey"
							borderDark={true}
							customPx="max-h-min"
							url={localizeHref('/cart/?open-coupon=1')}
						>
							{#snippet icon()}
								<Gift class="lucide-button" />
							{/snippet}
						</Button>
					</div>
				{:else}
					<span class="font-roboto text-red-dark">
						- {m.currencySymbol()}
						{correctPrice(cartDiscounts)}
					</span>
				{/if}
			</div>

			<!-- Divider -->
			<div class="my-2 border-t border-t-grey-lighter"></div>

			<!-- Shipping costs -->
			<div class="flex justify-between mt-2">
				<p class="font-light text-sm self-center">Envío</p>
				{#if deliveryType == 'PICKUP'}
					<p class="font-roboto self-center">
						{m.currencySymbol()}
						{correctPrice(0)}
					</p>
				{:else if shippingAddress}
					<p class="font-roboto self-center">
						{m.currencySymbol()}
						{correctPrice(parseFloat(shippingAddress.cost))}
					</p>
				{:else}
					<p class="font-roboto self-center text-sm">A calcular</p>
				{/if}
			</div>

			<!-- Payment method discount -->
			{#if paymentMethodSelected?.cost}
				<div class="my-2 border-t border-t-grey-lighter"></div>
				<div class="flex justify-between mt-2">
					<p class="font-light text-[15px] self-center">
						{m.discount()}
						{paymentMethodSelected.title}
					</p>
					<p class="font-roboto self-center text-red-dark">
						{m.currencySymbol()}
						{correctPrice(paymentMethodSelected.cost)}
					</p>
				</div>
			{:else if paymentMethodSelected == undefined}
				<div class="my-2 border-t border-t-grey-lighter"></div>
				<div class="flex justify-between mt-2">
					<p class="font-light text-sm self-center">{m.cashDiscount()}</p>
					<p class="font-roboto self-center text-red-dark text-sm">
						{m.currencySymbol()} -{correctPrice(cartTotal - cartTotalMinus5)}
					</p>
				</div>
			{/if}

			<Divider color="blue" extraClasses="my-2 !border-b-grey-lighter" />

			<!-- Final Total -->
			<div class="flex justify-between pt-1 mb-2">
				<p class="font-roboto font-bold">Valor total</p>
				<div class="flex flex-col font-roboto text-right font-bold">
					{#if paymentMethodSelected}
						{m.currencySymbol()} {correctPrice(cartTotal + paymentMethodSelected.cost)}
					{:else}
						<span class="font-bold text-[17px]">
							{m.currencySymbol()}
							{correctPrice(cartTotalMinus5)}
							{m.in()}
							<span class="relative inline-block">
								{m.cash()}
								<span
									class="pill pill-success text-xs px-2 py-0.5 absolute -top-[5px] left-2 ml-1 -translate-y-1/2 whitespace-nowrap scale-90 md:scale-100"
								>
									{m.cashDiscountValue()} OFF
								</span>
							</span>
						</span>
						<span class="text-sm text-[#28BA48] font-bold leading-4">
							ou 4x de {m.currencySymbol()}
							{correctPrice(totalCartAmountWithDiscounts / 4)}
							<span class="lowercase">{m.noInterests()}</span><br />
							<span>
								{m.byCard()}
							</span>
						</span>
					{/if}
				</div>
			</div>

			<!-- Action Buttons -->
			<div class="py-2 mt-4 px-5 border border-grey-lighter rounded-full bg-blue text-white">
				<a
					href={localizeHref('/cart/')}
					class="mt-0 block text-sm font-roboto hover:underline text-center"
				>
					{m.backToCart()}
				</a>
			</div>
			<a
				href={getLocale() == 'pt' ? localizeHref('/vinhos/') : localizeHref('/uy/cervezas/')}
				class="bg-white text-xs block text-center font-roboto text-grey-blueish py-2 px-4 rounded-full w-full mt-2"
			>
				{m.continueShopping()}
			</a>
		</div>
	{/if}
</div>
