<script>
	import FunMessageSection from '$components/layout/FunMessageSection.svelte';
	import { Button } from '$components/ui/buttons';
	import { AppConfig } from '$config';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { CheckCheck, Sparkle } from '@lucide/svelte';
</script>

<main class="md:w-1/2 md:mx-auto my-12 mx-[35px]">
	<!-- <div class="flex justify-center border-b py-10 border-grey-lighter">CLUB DE BENEFICIOS.</div> -->
	<h2 class="text-xl tracking-widest text-sun font-prata flex justify-center mt-5 mb-4">
		<Sparkle class="pr-1" />
		<span></span>
		<span class="font-bold text-center">BENEFÍCIOS DO CLUBE</span>
		<Sparkle class="pl-1" />
	</h2>
	<ul class="font-medium text-grey-medium-dark text-sm text-center justify-center flex flex-col">
		<li class="mb-2 flex">
			<CheckCheck class="w-[18px] min-w-[18px] aspect-1 text-sun" /> Compras coletivas com até 50% OFF
			no final do ano
		</li>
		<li class="mb-2 flex">
			<CheckCheck class="w-[18px] min-w-[18px] aspect-1 text-sun" /> 2 vinhos por mes na sua casa
		</li>
		<li class="mb-2 flex">
			<CheckCheck class="w-[18px] min-w-[18px] aspect-1 text-sun" /> Cashback fixo de 5% em todos os
			produtos
		</li>
		<li class="mb-2 flex">
			<CheckCheck class="w-[18px] min-w-[18px] aspect-1 text-sun" /> Accesso a vinhos ícones premium,
			reservados para assinantes
		</li>
		<li class="mb-2 flex">
			<CheckCheck class="w-[18px] min-w-[18px] aspect-1 text-sun" /> Assistencia direta de nossos sommeliers
			na escolha do seu vinho
		</li>
		<li class="mb-2 flex">
			<CheckCheck class="w-[18px] min-w-[18px] aspect-1 text-sun" /> + Todos os benefícios da comunidade
			Braaay
		</li>
		<hr class="my-4 text-grey-lighter" />
		<div class="text-center text-black text-lg font-bold">
			R$69/mês <br />
		</div>

		<!-- <hr class="my-4 text-grey-lighter" /> -->
		<div class="text-center text-black text-xs mt-2">
			Se paga em 2 pedidos<br />*Aplicam-se exceções. Veja os
			<a href="/termos-e-condicoes/">termos</a>.
		</div>
		<hr class="my-4 text-grey-lighter" />
	</ul>
	<div class="w-[80%] md:w-1/2 mx-auto scale-110">
		<Button
			rounded="lg"
			size="xl"
			shineEffect={false}
			title="Quero fazer parte"
			type="sun"
			newTab
			bold
			url={AppConfig.whatsappLink}
		/>
	</div>
</main>
<FunMessageSection />

<style lang="postcss">
	li {
		@apply self-start md:self-center text-lg;
	}
</style>
