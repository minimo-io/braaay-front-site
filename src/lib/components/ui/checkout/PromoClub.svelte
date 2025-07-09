<script lang="ts">
	import { Sparkle } from '@lucide/svelte';
	import Button from '../buttons/Button.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
</script>

<div
	class="hidden md:block border bg-white rounded-md border-sun shadow-md p-6 max-w-sm mx-3 md:mx-auto md:mt-2"
>
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
</div>
