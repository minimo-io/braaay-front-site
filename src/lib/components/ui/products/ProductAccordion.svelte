<script lang="ts">
	import type { Product, ProductAttributes, ProductCategory } from '$lib/types';
	import { correctPrice } from '$lib/utils';
	import {
		CircleChevronDown,
		CircleChevronUp,
		CreditCard,
		Grape,
		MapPinHouse,
		Truck
	} from '@lucide/svelte';
	import { slide } from 'svelte/transition';
	import { m } from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { AppConfig } from '$config';

	// Active tab can be 'frete', 'caracteristicas', 'vinicola', or 'pagamento'
	let activeAccordion: 'frete' | 'caracteristicas' | 'vinicola' | 'pagamento' | null =
		$state('pagamento');

	function toggleAccordion(tab: 'frete' | 'caracteristicas' | 'vinicola' | 'pagamento') {
		// If the clicked tab is already active, close it; otherwise, open it and close others.
		activeAccordion = activeAccordion === tab ? null : tab;
	}

	interface Props {
		product: Product;
		attributes: ProductAttributes | undefined;
		productCategories: ProductCategory[] | undefined;
	}

	let { product, attributes, productCategories }: Props = $props();

	const isSingleProduct = productCategories?.some((category) =>
		AppConfig.kitsImageCategories.includes(category.slug)
	);

	const isBeer = productCategories?.some((category) => category.slug == 'cervejas');
</script>

<div class="bry-product-accordion">
	<!-- {#if productCategories && !AppConfig.kitsImageCategories.includes(productCategories[0].slug)} -->
	{#if !isSingleProduct}
		<!-- FRETE E PRAZOS -->
		<div>
			<button
				type="button"
				onclick={() => toggleAccordion('frete')}
				class="flex items-center w-full justify-between py-2 cursor-pointer transition-colors duration-200 ease-in-out"
			>
				<div class="flex items-center">
					<Truck class="lucide-icon" />
					<span class="font-roboto text-[13px] tracking-[1.1px] font-semibold text-grey-blueish">
						FRETE E PRAZOS
					</span>
				</div>
				<div>
					{#if activeAccordion === 'frete'}
						<CircleChevronUp
							class="lucide-icon !mr-0 transform transition-transform duration-200 ease-in-out"
						/>
					{:else}
						<CircleChevronDown
							class="lucide-icon !mr-0 transform transition-transform duration-200 ease-in-out"
						/>
					{/if}
				</div>
			</button>
			{#if activeAccordion === 'frete'}
				<div transition:slide>
					<p class="p-4">Informações sobre frete e prazos aqui.</p>
				</div>
			{/if}
		</div>

		<!-- CARACTERÍSTICAS DO VINHO -->
		{#if !isBeer}
			<div>
				<button
					type="button"
					onclick={() => toggleAccordion('caracteristicas')}
					class="flex items-center w-full justify-between py-2 cursor-pointer transition-colors duration-200 ease-in-out"
				>
					<div class="flex items-center">
						<Grape class="lucide-icon" />
						<span class="font-roboto text-[13px] tracking-[1.1px] font-semibold text-grey-blueish">
							CARACTERÍSTICAS DO VINHO
						</span>
					</div>
					{#if activeAccordion === 'caracteristicas'}
						<CircleChevronUp
							class="lucide-icon !mr-0 transform transition-transform duration-200 ease-in-out"
						/>
					{:else}
						<CircleChevronDown
							class="lucide-icon !mr-0 transform transition-transform duration-200 ease-in-out"
						/>
					{/if}
				</button>
				{#if activeAccordion === 'caracteristicas'}
					<div transition:slide>
						<div class="py-4">
							<table class="table-fixed border-collapse w-full text-[12px]">
								<tbody>
									<tr>
										<td class="px-4 py-1 text-left text-gray-700 normal-case">Tipo</td>
										<td class="px-4 py-1 text-left text-gray-700 font-light">
											{#if productCategories}
												{#each productCategories as category, i (i)}
													{#if i != 0}
														<br />
													{/if}
													<a class="underline font-bold" href={category.uri}>{category.name}</a>
												{/each}
											{/if}
										</td>
									</tr>
									<tr>
										<td class="px-4 py-1 text-left text-gray-700 normal-case">Uvas</td>
										<td class="px-4 py-1 text-left text-gray-700 font-light">
											{#if attributes && attributes.grapes}
												{#each attributes.grapes as grape, i (i)}
													{#if i != 0}
														<br />
													{/if}
													<a class="underline font-bold" href={grape.uri}>{grape.name}</a>
												{/each}
											{/if}
										</td>
									</tr>
									<tr>
										<td class="px-4 py-1 text-left text-gray-700 normal-case">Paladar</td>
										<td class="px-4 py-1 text-left text-gray-700 font-light"
											>{attributes?.typicalPalate}</td
										>
									</tr>
									<tr>
										<td class="px-4 py-1 text-left text-gray-700 normal-case">Serviço</td>
										<td class="px-4 py-1 text-left text-gray-700 font-light"
											>{attributes?.servingTemperature}</td
										>
									</tr>
									<tr>
										<td class="px-4 py-1 text-left text-gray-700 normal-case">País</td>
										<td class="px-4 py-1 text-left text-gray-700 font-light">
											<a class="font-bold underline" href={attributes?.country.uri}>
												{attributes?.country.name}
											</a>
										</td>
									</tr>
									<tr>
										<td class="px-4 py-1 text-left text-gray-700 normal-case">Região</td>
										<td class="px-4 py-1 text-left text-gray-700 font-light"
											>{attributes?.region}</td
										>
									</tr>
									<tr>
										<td class="px-4 py-1 text-left text-gray-700 normal-case">Temp. de serviço</td>
										<td class="px-4 py-1 text-left text-gray-700 font-light"
											>{attributes?.servingTemperature}</td
										>
									</tr>
									<tr>
										<td class="px-4 py-1 text-left text-gray-700 normal-case">Teor alcoólico</td>
										<td class="px-4 py-1 text-left text-gray-700 font-light">{attributes?.abv}</td>
									</tr>
									<tr>
										<td class="px-4 py-1 text-left text-gray-700 normal-case"
											>Potencial de guarda</td
										>
										<td class="px-4 py-1 text-left text-gray-700 font-light"
											>{attributes?.agingPotential}</td
										>
									</tr>
									<tr>
										<td class="px-4 py-1 text-left text-gray-700 normal-case">Safra</td>
										<td class="px-4 py-1 text-left text-gray-700 font-light">
											{attributes?.vintage || '-'}
										</td>
									</tr>
									<tr>
										<td class="px-4 py-1 text-left text-gray-700 normal-case">Amadurecimento</td>
										<td class="px-4 py-1 text-left text-gray-700 font-light">
											{attributes?.maturation}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				{/if}
			</div>

			<!-- A VINÍCOLA -->
			<div>
				<button
					type="button"
					onclick={() => toggleAccordion('vinicola')}
					class="flex items-center w-full justify-between py-2 cursor-pointer transition-colors duration-200 ease-in-out"
				>
					<div class="flex items-center">
						<MapPinHouse class="lucide-icon" />
						<span class="font-roboto text-[13px] tracking-[1.1px] font-semibold text-grey-blueish">
							A VINÍCOLA
						</span>
					</div>
					{#if activeAccordion === 'vinicola'}
						<CircleChevronUp
							class="lucide-icon !mr-0 transform transition-transform duration-200 ease-in-out"
						/>
					{:else}
						<CircleChevronDown
							class="lucide-icon !mr-0 transform transition-transform duration-200 ease-in-out"
						/>
					{/if}
				</button>
				{#if activeAccordion === 'vinicola'}
					<div transition:slide>
						<div class="flex items-center px-3 mt-3 mb-1">
							<img
								src="/images/partners/familia-deicas-uruguai-150x150.webp"
								alt="Vinicola logo"
								class="w-8 h-8 mr-4"
								height="32"
								width="32"
							/>
							<h4 class="text-[18px] font-prata normal-case">{attributes?.producer.name}</h4>
						</div>
						<p class="pt-2 px-3 !text-[14px] !leading-normal">
							{attributes?.producer.shortDescription}
						</p>
						<a
							href={localizeHref(`${attributes?.producer.uri}`)}
							style="background-color: var(--bry-current-color)"
							class="opacity-55 text-white px-4 py-1 text-[12px] rounded-full my-3 inline-block mx-3 uppercase"
						>
							Saiba mais
						</a>
					</div>
				{/if}
			</div>
		{/if}
	{/if}

	<!-- FORMAS DE PAGAMENTO -->
	<div>
		<button
			type="button"
			onclick={() => toggleAccordion('pagamento')}
			class="flex items-center w-full justify-between py-2 cursor-pointer transition-colors duration-200 ease-in-out"
		>
			<div class="flex items-center">
				<CreditCard class="lucide-icon" />
				<span class="font-roboto text-[13px] tracking-[1.1px] font-semibold text-grey-blueish">
					FORMAS DE PAGAMENTO
				</span>
			</div>
			{#if activeAccordion === 'pagamento'}
				<CircleChevronUp
					class="lucide-icon !mr-0 transform transition-transform duration-200 ease-in-out"
				/>
			{:else}
				<CircleChevronDown
					class="lucide-icon !mr-0 transform transition-transform duration-200 ease-in-out"
				/>
			{/if}
		</button>
		{#if activeAccordion === 'pagamento'}
			<div transition:slide>
				<div class="p-4">
					<div class="text-left">
						<div class="mb-3">
							<h4 class="!text-[13px] mb-2">
								<span class="font-bold">PIX:</span>
								<span>{m.currencySymbol()}{correctPrice(product.floatPrice * 0.95)}</span> (5% OFF)
							</h4>
						</div>
						<div class="mt-3">
							<h4 class="!text-[13px] mb-2">
								<span class="font-bold">BOLETO:</span>
								{product.price}
							</h4>
						</div>
						<h3 class="text-[13px] font-bold mb-3">CARTÃO DE CRÉDITO</h3>
						<ul class="space-y-1">
							<li class="font-light text-[12px] normal-case">
								1x {m.currencySymbol()} <strong>{correctPrice(product.floatPrice / 1)}</strong> sem juros
							</li>
							<li class="font-light text-[12px] normal-case">
								2x {m.currencySymbol()} <strong>{correctPrice(product.floatPrice / 2)}</strong> sem juros
							</li>
							<li class="font-light text-[12px] normal-case">
								3x {m.currencySymbol()} <strong>{correctPrice(product.floatPrice / 3)}</strong> sem juros
							</li>
							<li class="font-light text-[12px] normal-case">
								4x {m.currencySymbol()} <strong>{correctPrice(product.floatPrice / 4)}</strong> sem juros
							</li>
						</ul>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
