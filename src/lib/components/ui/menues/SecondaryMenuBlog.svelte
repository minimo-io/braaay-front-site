<script lang="ts">
	import { page } from '$app/state';
	import { ChevronDown, ChevronRight, Newspaper, Undo2 } from '@lucide/svelte';
	import { isBlogPost } from '$lib/utils/index';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { getSiteCategories } from '$data/categories.data';
	import { allCountries } from '$data/countries.data';
	import { m } from '$lib/paraglide/messages';
	import { onMount } from 'svelte';

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

	onMount(() => {
		const element = document.querySelector('.animate__swing');

		if (element) {
			setTimeout(() => {
				element.classList.add('animate__pulse', 'animate__infinite');
				element.classList.remove('animate__swing');
			}, 1000);
		}
	});

	let currentCategories = getSiteCategories(getLocale());
	let pageCountries = $state(allCountries[getLocale()]);
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
			{#each currentCategories.slice(0, 4) as category, i}
				<li class={['relative group transition-all duration-300', i == 0 && 'md:!ml-0']}>
					<a
						href={category.url}
						class={[
							category.color == 'green' && '!text-bra',
							category.color == 'red' && '!text-[red]'
						]}
					>
						{#if category.icon}
							<category.icon class="lucide-menu" />
						{/if}
						{category.name}

						{#if category.subcategories}
							<ChevronDown class="ml-1 h-4 top-[2px] relative hidden md:flex" />
						{/if}
					</a>

					<!-- Sub-items if exists -->
					{#if category.subcategories}
						<div class="absolute left-0 w-full h-4 bg-transparent"></div>

						<div
							class="absolute z-10 bg-white border border-grey-lighter shadow-lg mt-1 rounded-xl md:w-[500px] w-48 origin-top overflow-y-auto hidden md:group-hover:block p-1"
							style="max-height: calc(55vh - 170px)"
						>
							<div class="flex">
								<div class="text-xs px-0 flex-1 flex flex-col">
									{#each category.subcategories as subcat, i}
										{@const realCurrent = i + 1}
										<a
											href={subcat.url}
											class={[
												'shine-effect px-4 py-3 text-left text-sm font-roboto text-grey-dark flex justify-between align-middle',
												realCurrent != category.subcategories.length &&
													'border-b border-grey-lighter'
											]}
										>
											<div class="text-left self-center flex align-middle justify-center">
												<span class="self-center mx-2 text-base">{subcat.name}</span>
											</div>
											<div class="text-grey-medium flex justify-end align-middle">
												<!-- <span class="self-center mr-3 text-xs">251</span> -->
												<ChevronRight class="w-4 aspect-1 text-grey-dark " />
											</div>
										</a>
									{/each}
								</div>

								<!-- Second part (Countries for BR) -->
								{#if getLocale() == 'pt'}
									<div class="flex flex-1 text-xs px-3 flex-col">
										{#each pageCountries as country, i}
											<a
												href={country.url}
												class={[
													'px-4 py-3  border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect',
													i != pageCountries.length - 1 && 'border-b'
												]}
											>
												<div class="text-left self-center flex align-middle justify-center">
													<img
														class="w-4 h-4 self-center mr-2"
														src={country.flag.url}
														alt={country.flag.altText}
													/>
													<span class={['self-center', country.isBold && 'font-semibold']}
														>{country.name}</span
													>
												</div>
												<div class="text-grey-medium flex flex-row align-middle self-center">
													<!-- <span class="self-center mr-3 text-xs">251</span> -->
													<ChevronRight class="w-4 aspect-1 text-grey-dark" />
												</div>
											</a>
										{/each}
									</div>
								{/if}
							</div>
						</div>
					{/if}
				</li>
			{/each}

			<li
				class="!ml-0 md:!ml-5 relative group transition-all duration-300 animate__animated animate__swing order-first md:order-none"
			>
				<a href={localizeHref('/onsale/')} class="!py-0 !pr-5 !pl-0 h-full">
					<!-- <BadgePercent class="lucide-menu badge-percent" color="white" fill="#000" /> -->
					<img
						src="/images/badge-offer.png"
						alt="sale-badge"
						width="40px"
						height="40px"
						class="pr-3"
					/>
					<!-- <div class="flex flex-col gap-0 self-center">
						<span class="text-xs text-left leading-none">Compre por</span>
						<span class="text-sm font-bold text-left leading-5">R$45 ou menos</span>
					</div> -->
					<div class="flex flex-col gap-0 self-center">
						<span class="text-xs text-left leading-none">{m.productsUpTo()}</span>
						<span class="text-sm font-bold text-left leading-5">15% OFF</span>
					</div>
				</a>
			</li>
			<!-- 
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
				<a href="/tag/premium/"> Entrevistas </a>
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
			</li> -->
		</ul>
	</nav>
</div>
