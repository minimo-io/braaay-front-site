<script lang="ts">
	import { page } from '$app/state';
	import { EllipsisVertical, Newspaper, Undo2 } from '@lucide/svelte';
	import { isBlogPost } from '$lib/utils/index';
	import { localizeHref } from '$lib/paraglide/runtime';

	interface BackLink {
		text: string;
		href: string;
	}

	// Verifica o pathname atual
	// We need to subscribe to page.url.pathname changes
	// Single state object for related values
	let isPost = $state(isBlogPost(page.url.pathname));

	let backParams = $state<BackLink>({
		text: 'Voltar á loja',
		href: '/'
	});

	// Single effect to update both properties together
	$effect(() => {
		// First update isPost based on current pathname
		isPost = isBlogPost(page.url.pathname);

		// Then update the voltar object based on isPost
		backParams = isPost
			? { text: 'Voltar ao blog', href: localizeHref('/blog/') }
			: { text: 'Voltar á loja', href: localizeHref('/') };
	});
</script>

<div class="bry-secondary-menu">
	<nav class="container max-w-screen-lg py-2 mx-[30px] lg:mx-auto">
		<ul class="flex space-x-4">
			<li class="relative group transition-all duration-300 flex">
				<a href={backParams.href} class="!pr-2 !lg:pr-3 !pl-0 !text-sm">
					<Undo2 class="lucide-menu badge-percent text-blue !h-4 self-center" />
					{backParams.text}
				</a>
			</li>

			<li class="relative group transition-all duration-300 flex">
				<a href={localizeHref('/blog/')} class="bg-blue !py-1 rounded-full text-white self-center">
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
				<a href={localizeHref('/blog/')}> Uvas </a>
			</li>
			<li class="relative group transition-all duration-300 flex justify-center">
				<a href={localizeHref('/blog/')} class="!pl-0 self-center !pr-5">
					<EllipsisVertical class="lucide-menu badge-percent text-blue !h-4" />
					Mais
				</a>
			</li>
		</ul>
	</nav>
</div>
