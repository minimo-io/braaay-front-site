<script lang="ts">
	import Divider from '../dividers/Divider.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
</script>

<div class="mt-5">
	<div class="hidden md:block bg-white py-4 px-5 border border-grey-lighter rounded-lg">
		<div class="flex justify-between mt-2">
			<p class="font-light text-[15px] self-center">Sub-total (3 item)</p>
			<p class="font-roboto self-center">R$ 59,90</p>
		</div>
		<div class="my-4 border-t border-t-grey-lighter"></div>
		<div class="flex justify-between mt-2">
			<p class="font-light text-[15px] self-center">Entrega</p>
			<p class="font-roboto self-center">A calcular</p>
		</div>

		<Divider color="blue" extraClasses="my-4 !border-b-grey-lighter" />
		<div class="flex justify-between pt-1 mb-2">
			<p class="font-roboto font-bold">Valor total</p>
			<div class="flex flex-col font-roboto text-right">
				<span class="font-bold text-[17px]">R$ 59,90 no Pix</span>

				<span class="text-sm text-[#28BA48] font-bold leading-4">
					ou 4x de R$ 5,99 sem juros
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
