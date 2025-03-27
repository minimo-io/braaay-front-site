<script lang="ts">
	import { localizeHref, getLocale } from '$lib/paraglide/runtime';
	import { ChevronDown, ChevronRight } from '@lucide/svelte';
	import { getSiteCategories } from '$lib/data/categories';

	let currentCategories = getSiteCategories(getLocale());
</script>

<div class="bry-secondary-menu">
	<nav class="container max-w-screen-lg py-2 mx-[30px] lg:mx-auto">
		<ul class="flex space-x-4">
			{#each currentCategories.slice(0, 4) as category, i}
				<li class={['relative group transition-all duration-300', i == 0 && 'md:!ml-0']}>
					<a
						href={category.url}
						class={[
							i == 0 && '!pr-2 !lg:pr-3 md:!pl-0',
							category.color == 'green' && '!text-bra',
							category.color == 'red' && '!text-[red]'
						]}
					>
						{#if category.icon}
							<category.icon class="lucide-menu" />
						{/if}
						{category.name}

						{#if category.subcategories}
							<ChevronDown class="ml-1 h-4 top-[2px] relative" />
						{/if}
					</a>

					<!-- Sub-items if exists -->
					{#if category.subcategories}
						<div class="absolute left-0 w-full h-4 bg-transparent"></div>
						<div
							class="absolute z-10 bg-white border border-grey-lighter shadow-lg mt-1 rounded-xl md:w-[300px] w-48 origin-top overflow-y-auto hidden group-hover:block"
							style="max-height: calc(55vh - 170px)"
						>
							<div class="text-xs px-0 flex flex-col">
								{#each category.subcategories as subcat}
									<a
										href={subcat.url}
										class="shine-effect px-4 py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle"
									>
										<div class="text-left self-center flex align-middle justify-center">
											<span class="self-center mx-2 text-sm">{subcat.name}</span>
										</div>
										<div class="text-grey-medium flex justify-end align-middle">
											<!-- <span class="self-center mr-3 text-xs">251</span> -->
											<ChevronRight class="w-4 aspect-1 text-grey-dark " />
										</div>
									</a>
								{/each}
							</div>
						</div>
					{/if}
				</li>
			{/each}

			<!-- Divider -->
			<li class="self-center text-grey-medium antialiased">/</li>

			{#each currentCategories.slice(4) as category, i}
				<li class={['relative group transition-all duration-300']}>
					<a
						href={category.url}
						class={[
							category.color == 'green' && '!text-bra',
							category.color == 'red' && '!text-[red]'
						]}
					>
						{#if category.icon}<category.icon class="lucide-menu" />{/if}
						{category.name}
					</a>
				</li>
			{/each}

			<li
				class="!ml-0 md:!ml-5 relative group transition-all duration-300 animate__animated animate__swing order-first md:order-none"
			>
				<a href={localizeHref('/blog')} class="!py-0 !pr-5 !pl-0 h-full">
					<!-- <BadgePercent class="lucide-menu badge-percent" color="white" fill="#000" /> -->
					<img
						src="/images/badge-offer.png"
						alt="sale-badge"
						width="40px"
						height="40px"
						class="pr-3"
					/>
					<div class="flex flex-col gap-0 self-center">
						<span class="text-xs text-left leading-none">Compre por</span>
						<span class="text-sm font-bold text-left leading-5">R$45 ou menos</span>
					</div>
				</a>
			</li>
		</ul>
	</nav>
</div>
