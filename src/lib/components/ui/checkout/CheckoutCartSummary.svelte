<!-- src/lib/components/ui/checkout/CheckoutCartSummary.svelte -->
<script lang="ts">
	import Divider from '../dividers/Divider.svelte';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { clearAllCoupons } from '$stores/cart.store.svelte';
	import { m } from '$lib/paraglide/messages';
	import { correctPrice } from '$lib/utils';
	import type { ShippingOption, DeliveryUIType, PaymentMethod } from '$lib/types';
	import MoreInfoButton from '../buttons/MoreInfoButton.svelte';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';
	import { getUrqlClient } from '$stores/urqlClient.state.svelte';
	import { COUPON_CLEAR_ALL } from '$lib/graphql/mutations';
	import Button from '../buttons/Button.svelte';
	import { openModal } from '$stores/modalState.state.svelte';
	import CouponForm from '../forms/couponForm.svelte';
	import type { Component } from 'svelte';
	import { Gift } from '@lucide/svelte';
	import { subtractPercentage } from '$lib/utils';

	interface Props {
		items: number;
		cartTotal: number;
		cartSubTotal: number;
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

	let cartTotalMinus5 = $derived(subtractPercentage(cartTotal, 5));
	let totalCartAmountWithDiscounts = $derived(cartTotal - cartDiscounts);
	// let cartSubTotalMinus5 = $derived(subtractPercentage(cartSubTotal, 5));
</script>

<div class="mt-5">
	<div class="hidden md:block bg-white py-4 px-5 border border-grey-lighter rounded-lg">
		<!-- Sub-total -->
		<div class="flex justify-between mt-2">
			<p class="font-light text-[15px] self-center">
				Sub-total ({items} item{items > 1 ? 's' : ''})
			</p>
			<p class="font-roboto self-center">{m.currencySymbol()} {correctPrice(cartSubTotal)}</p>
		</div>
		<!-- Divider  -->
		<div class="my-4 border-t border-t-grey-lighter"></div>

		<!-- Coupons -->
		<div class="flex justify-between items-center">
			<div class="!font-light font-roboto text-[15px] self-center flex flex-col">
				{m.discountCouponTitle()}
				{#if couponsCount >= 1}
					<MoreInfoButton
						title={m.remove()}
						action={async () => {
							// Clear remote coupons session
							toggleLoader();
							try {
								await getUrqlClient().client.mutation(COUPON_CLEAR_ALL, {}).toPromise();
								// emptyCart();
							} catch (err) {
								console.error('Failed to clear coupons from remote server', err);
							}
							clearAllCoupons();
							toggleLoader();
						}}
						customStyles="w-fit !ml-0 mt-2"
					/>
				{/if}
			</div>

			{#if couponsCount < 1}
				<Button
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
				</Button>
			{:else}
				<span class="font-roboto text-red-dark"
					>- {m.currencySymbol()} {correctPrice(cartDiscounts)}</span
				>
			{/if}
		</div>

		<!-- Divider  -->
		<div class="my-4 border-t border-t-grey-lighter"></div>

		<!-- Shipping costs -->
		<div class="flex justify-between mt-2">
			<p class="font-light text-[15px] self-center">Envío</p>
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
				<p class="font-roboto self-center">A calcular</p>
			{/if}
		</div>

		<!-- Payment method discount -->
		{#if paymentMethodSelected?.cost}
			<!-- Divider  -->
			<div class="my-4 border-t border-t-grey-lighter"></div>

			<div class="flex justify-between mt-2">
				<p class="font-light text-[15px] self-center">
					Desconto {paymentMethodSelected.title}
				</p>
				<p class="font-roboto self-center text-red-dark">
					{m.currencySymbol()}
					{correctPrice(paymentMethodSelected.cost)}
					<!-- {paymentMethodSelected.feeDetails[0].label} -->
				</p>
			</div>
		{:else if paymentMethodSelected == undefined}
			<div class="my-4 border-t border-t-grey-lighter"></div>

			<div class="flex justify-between mt-2">
				<p class="font-light text-[15px] self-center">Desconto PIX</p>
				<p class="font-roboto self-center text-red-dark">
					{m.currencySymbol()}
					-{correctPrice(cartTotal - cartTotalMinus5)}
				</p>
			</div>
		{/if}

		<Divider color="blue" extraClasses="my-4 !border-b-grey-lighter" />

		<div class="flex justify-between pt-1 mb-2">
			<p class="font-roboto font-bold">Valor total</p>
			<div class="flex flex-col font-roboto text-right font-bold">
				{#if paymentMethodSelected}
					{m.currencySymbol()}
					{correctPrice(cartTotal + paymentMethodSelected.cost)}
				{:else}
					<!-- <br />
					{cartTotal} - {cartTotalMinus5} -->
					<span class="font-bold text-[17px]">
						{m.currencySymbol()}
						{correctPrice(cartTotalMinus5)} no
						<span class="relative inline-block">
							Pix
							<span
								class="pill pill-success text-xs px-2 py-0.5 absolute -top-[5px] left-2 ml-1 -translate-y-1/2 whitespace-nowrap scale-90 md:scale-100"
							>
								{m.cashDiscountValue()} OFF
							</span>
						</span>
					</span>

					<span class="text-sm text-[#28BA48] font-bold leading-4">
						ou 4x de {m.currencySymbol()}
						{correctPrice(totalCartAmountWithDiscounts / 4)} sem juros
						<br />
						no cartão
						<!-- {#if AppConfig.cashbackEnabled}
							<br />
							<a href="/"><u>+ {AppConfig.cashbackPercentage}% em CASHBACK</u></a>
						{/if} -->
					</span>
				{/if}
			</div>
		</div>
		<div class="py-2 mt-4 px-5 border border-grey-lighter rounded-full bg-blue text-white">
			<a
				href={localizeHref('/cart/')}
				class="mt-0 block text-sm font-roboto hover:underline text-center">{m.backToCart()}</a
			>
		</div>
		<a
			href={getLocale() == 'pt' ? localizeHref('/vinhos/') : localizeHref('/uy/cervezas/')}
			class="bg-white text-xs block text-center font-roboto text-grey-blueish py-2 px-4 rounded-full w-full mt-2"
		>
			{m.continueShopping()}
		</a>
	</div>
</div>
