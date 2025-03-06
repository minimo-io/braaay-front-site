<script>
	import { EllipsisVertical, Newspaper, Undo2 } from 'lucide-svelte';
</script>

<div class="bry-secondary-menu">
	<nav class="container max-w-screen-lg py-2 mx-[30px] lg:mx-auto">
		<ul class="flex space-x-4">
			<li class="relative group transition-all duration-300 flex">
				<a href="/" class="!pr-2 !lg:pr-3 !pl-0 !text-sm">
					<Undo2 class="lucide-menu badge-percent text-blue !h-4 self-center" />
					Voltar á loja
				</a>
			</li>

			<li class="relative group transition-all duration-300 flex">
				<a href="./blog" class="bg-blue !py-1 rounded-full text-white self-center">
					<Newspaper class="lucide-menu badge-percent text-white" />
					<span class="text-white">Blog</span>
				</a>
			</li>
			<li class="relative group transition-all duration-300 flex">
				<i
					data-lucide="chevron-right"
					class="lucide-menu badge-percent text-grey-medium-dark self-center"
				></i>
			</li>
			<li class="relative group transition-all duration-300 !ml-0">
				<a href="/kits/"> Curiosidades e dicas </a>
			</li>
			<li class="relative group transition-all duration-300">
				<a href="/tag/premiados/"> Entrevistas </a>
			</li>
			<li class="relative group transition-all duration-300">
				<a href="/tag/oportunidades/"> Accesórios </a>
			</li>
			<li class="relative group transition-all duration-300">
				<a href="/em-breve/"> Harmonizações </a>
			</li>
			<li class="relative group transition-all duration-300">
				<a href="/blog"> Uvas </a>
			</li>
			<li class="relative group transition-all duration-300 flex justify-center">
				<a href="/blog" class="!pl-0 self-center !pr-5">
					<EllipsisVertical class="lucide-menu badge-percent text-blue !h-4" />
					Mais
				</a>
			</li>
		</ul>
	</nav>
</div>
