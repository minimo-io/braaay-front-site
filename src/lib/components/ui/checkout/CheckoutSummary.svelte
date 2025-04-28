<script lang="ts">
	import { CircleChevronDown, ShoppingBag } from '@lucide/svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
</script>

<!-- Resumo mobile -->
<div class="block md:hidden bg-white py-2 mb-4 px-5 border border-grey-lighter rounded-lg mx-3">
	<a class="flex justify-between cursor-pointer" href={localizeHref('/cart/')}>
		<p class="font-light text-[15px] self-center justify-center flex">
			<ShoppingBag class="pr-1 h-4 aspect-1 self-center text-sun" />
			<span class="font-bold font-roboto h-5 self-center">Resumo do carrinho</span>
		</p>
		<p class="font-roboto self-center flex">
			<span class="text-sm self-center font-bold">R$ 233</span>
			<CircleChevronDown class="pl-2 self-center text-sun" />
		</p>
	</a>
</div>
