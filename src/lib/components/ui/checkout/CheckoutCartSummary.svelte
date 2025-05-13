<script lang="ts">
	import Divider from '../dividers/Divider.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { cart } from '$stores/cart.store.svelte';
	import { m } from '$lib/paraglide/messages';
	import { correctPrice } from '$lib/utils';
	import type { ShippingOption, DeliveryUIType } from '$lib/types';

	interface Props {
		items: number;
		cartTotal: number;
		cartSubTotal: number;
		shippingAddress: ShippingOption | undefined;
		deliveryType: DeliveryUIType | null;
	}

	let { items, cartTotal, cartSubTotal, shippingAddress, deliveryType }: Props = $props();
</script>

<div class="mt-5">
	<div class="hidden md:block bg-white py-4 px-5 border border-grey-lighter rounded-lg">
		<div class="flex justify-between mt-2">
			<p class="font-light text-[15px] self-center">
				Sub-total ({items} item{items > 1 ? 's' : ''})
			</p>
			<p class="font-roboto self-center">{m.currencySymbol()} {correctPrice(cartSubTotal)}</p>
		</div>
		<div class="my-4 border-t border-t-grey-lighter"></div>
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

		<Divider color="blue" extraClasses="my-4 !border-b-grey-lighter" />
		<div class="flex justify-between pt-1 mb-2">
			<p class="font-roboto font-bold">Valor total</p>
			<div class="flex flex-col font-roboto text-right">
				<span class="font-bold text-[17px]"
					>{m.currencySymbol()} {correctPrice(cartTotal)} no Pix</span
				>

				<span class="text-sm text-[#28BA48] font-bold leading-4">
					ou 4x de {m.currencySymbol()} 5,99 sem juros
					<br />
					<a href="/"><u>+ 5% em CASHBACK</u></a>
				</span>
			</div>
		</div>
		<div class="py-2 mt-4 px-5 border border-grey-lighter rounded-full bg-blue text-white">
			<a
				href={localizeHref('/cart/')}
				class="mt-0 block text-sm font-roboto hover:underline text-center">Voltar ao carrinho</a
			>
		</div>
		<a
			href="/"
			class="bg-white text-xs block text-center font-roboto text-grey-blueish py-2 px-4 rounded-full w-full mt-2"
		>
			Continuar comprando
		</a>
	</div>
</div>
