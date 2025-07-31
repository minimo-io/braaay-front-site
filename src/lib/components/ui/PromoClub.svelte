<script lang="ts">
	import { Sparkle } from '@lucide/svelte';
	import Button from './buttons/Button.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';

	let { isSquare = true, isRounded = false }: { isSquare?: boolean; isRounded?: boolean } =
		$props();
</script>

{#if isSquare}
	<!-- Mostly used on mobile -->
	<img class={[isRounded && 'rounded-lg']} src="/images/cart-promo-mobile.jpg" alt="cart-promo" />

	<!-- FUTURE CLUB INVITATION -->
	<!-- <div class="border bg-white rounded-md border-sun shadow-md p-6 max-w-sm md:mt-2">
		<div class="text-center">
			<h2 class="text-xl tracking-widest text-sun font-prata flex justify-center scale-90">
				<Sparkle class="pr-1" />
				<span>SEJA PASSPORT!</span>
				<Sparkle class="pl-1" />
			</h2>
			<p class="text-lg font-semibold mt-2 leading-[23px]">
				Ganhe 10% em cashback, fretes grátis + 3 vinhos todo mês!
			</p>
			<p class="text-xs text-grey-dark mt-3 leading-2">
				Junte-se ao APP do Clube e
				<strong>Economize, Ganhe, Diverta-se com vinho!</strong>
				Com cashbacks entre 5 e 10% em toda compra, 3 vinhos top todo mês + fretes grátis! Além de experiências
				com outros Passport e compras coletivas!!
			</p>
			<div class="mx-11 py-2">
				<Button
					title="Adicionar ao carrinho"
					type="sun"
					url={localizeHref('/club/')}
					tracking="normal"
				/>
			</div>
			<p class="text-xs text-gray-500 mt-2">
				<a href={localizeHref('/club/')} class="text-blue-500 underline">Saiba mais</a>
			</p>
		</div>
	</div> -->
{:else}
	<!-- Horizontal -->
	<img class={[isRounded && 'rounded-lg']} src="/images/cart-promo-desktop.jpg" alt="cart-promo" />
	<!-- FUTURE CLUB INVITATION -->
	<!-- <div
		class="border order-2 bg-white rounded-md border-sun shadow-md p-6 mx-auto mt-6 mb-28 hidden md:block"
	>
		<div class="text-center">
			<h2 class="text-xl tracking-widest text-sun font-prata flex justify-center Xscale-90">
				<Sparkle class="pr-1" />
				<span>SEJA PASSPORT!</span>
				<Sparkle class="pl-1" />
			</h2>
			<p class="text-lg font-semibold mt-2 leading-[23px] w-5/6 mx-auto">
				Ganhe 10% em cashback, fretes grátis e mais!
			</p>
			<p class="text-xs text-grey-dark mt-3 leading-2 w-5/6 block mx-auto">
				Junte-se ao APP do Clube e
				<strong>Economize, Ganhe, Diverta-se com vinho!</strong>
				Com cashbacks entre 5 e 10% em toda compra, 3 vinhos top todo mês + fretes grátis! Além de experiências
				com outros Passport e compras coletivas!
			</p>
			<div class="w-1/3 py-2 mx-auto">
				<Button
					title="Adicionar ao carrinho"
					type="sun"
					url={localizeHref('/club/')}
					tracking="normal"
					bold={false}
				/>
			</div>
			<p class="text-xs text-gray-500 mt-2">
				<a href={localizeHref('/club/')} class="text-blue-500 underline">Saiba mais</a>
			</p>
		</div>
	</div> -->
{/if}
