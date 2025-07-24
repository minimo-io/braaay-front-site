<script lang="ts">
	import { localizeHref } from '$lib/paraglide/runtime';
	import { CheckCheck, PackageOpen, Sparkle } from '@lucide/svelte';
	import { Button } from './buttons';
</script>

<!-- <h2 class="mt-5">Mais?</h2> -->
<h2 class="text-xl tracking-widest text-sun font-prata flex justify-center scale-90 mt-5 mb-4">
	<Sparkle class="pr-1" />
	<span></span>
	<span>BENEFÍCIOS DO CADASTRO!</span>
	<Sparkle class="pl-1" />
</h2>

<ul class="font-medium text-grey-medium-dark text-sm text-left">
	<li class="mb-2 flex">
		<CheckCheck class="w-[18px] min-w-[18px] aspect-1 text-sun" /> Cupons de até 15% OFF
	</li>
	<li class="mb-2 flex">
		<CheckCheck class="w-[18px] min-w-[18px] aspect-1 text-sun" /> 2% de cashback em cada compra
	</li>
	<li class="mb-2 flex">
		<CheckCheck class="w-[18px] min-w-[18px] aspect-1 text-sun" /> Guarde produtos na sua adega e seja
		notificado sobre descontos e reposições
	</li>
	<li class="mb-2 flex">
		<CheckCheck class="w-[18px] min-w-[18px] aspect-1 text-sun" /> Siga chefs e sommeliers para harmonizações
		e receitas
	</li>
	<li class="mb-2 flex">
		<CheckCheck class="w-[18px] min-w-[18px] aspect-1 text-sun" /> Participe do sorteio mensal de 1 ingresso
		para eventos no showroom
	</li>
	<hr class="my-4 text-grey-lighter" />
	<li class="mb-2 flex items-center self-center justify-center">
		<PackageOpen class="w-[18px] min-w-[18px] aspect-1 text-sun" />
		<strong class="tracking-wide ml-1">Quer mais?</strong>
		<a href={localizeHref('/club/')} class="font-bold ml-1 text-blue underline">
			Venha para o Clube
		</a>
	</li>
</ul>
