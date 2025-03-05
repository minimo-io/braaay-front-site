<script lang="ts">
	import {
		CircleChevronDown,
		CircleChevronUp,
		CreditCard,
		Grape,
		MapPinHouse,
		Truck
	} from 'lucide-svelte';
	import { slide } from 'svelte/transition';

	// Active tab can be 'frete', 'caracteristicas', 'vinicola', or 'pagamento'
	let activeAccordion: 'frete' | 'caracteristicas' | 'vinicola' | 'pagamento' | null = 'pagamento';

	function toggleAccordion(tab: 'frete' | 'caracteristicas' | 'vinicola' | 'pagamento') {
		// If the clicked tab is already active, close it; otherwise, open it and close others.
		activeAccordion = activeAccordion === tab ? null : tab;
	}
</script>

<div class="bry-product-accordion">
	<!-- FRETE E PRAZOS -->
	<div>
		<button
			type="button"
			on:click={() => toggleAccordion('frete')}
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
	<div>
		<button
			type="button"
			on:click={() => toggleAccordion('caracteristicas')}
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
								<td class="px-4 py-1 text-left text-gray-700 font-light">Branco</td>
							</tr>
							<tr>
								<td class="px-4 py-1 text-left text-gray-700 normal-case">Uvas</td>
								<td class="px-4 py-1 text-left text-gray-700 font-light">Chardonnay</td>
							</tr>
							<tr>
								<td class="px-4 py-1 text-left text-gray-700 normal-case">Paladar</td>
								<td class="px-4 py-1 text-left text-gray-700 font-light">Seco</td>
							</tr>
							<tr>
								<td class="px-4 py-1 text-left text-gray-700 normal-case">Serviço</td>
								<td class="px-4 py-1 text-left text-gray-700 font-light">8 a 11°C</td>
							</tr>
							<tr>
								<td class="px-4 py-1 text-left text-gray-700 normal-case">País</td>
								<td class="px-4 py-1 text-left text-gray-700 font-light">Uruguai</td>
							</tr>
							<tr>
								<td class="px-4 py-1 text-left text-gray-700 normal-case">Região</td>
								<td class="px-4 py-1 text-left text-gray-700 font-light">Canelones</td>
							</tr>
							<tr>
								<td class="px-4 py-1 text-left text-gray-700 normal-case">Temperatura de serviço</td
								>
								<td class="px-4 py-1 text-left text-gray-700 font-light">13°C a 17°C</td>
							</tr>
							<tr>
								<td class="px-4 py-1 text-left text-gray-700 normal-case">Teor alcoólico</td>
								<td class="px-4 py-1 text-left text-gray-700 font-light">12,5%</td>
							</tr>
							<tr>
								<td class="px-4 py-1 text-left text-gray-700 normal-case">Potencial de guarda</td>
								<td class="px-4 py-1 text-left text-gray-700 font-light">10 a 15 anos</td>
							</tr>
							<tr>
								<td class="px-4 py-1 text-left text-gray-700 normal-case">Amadurecimento</td>
								<td class="px-4 py-1 text-left text-gray-700 font-light">
									Barricas de carvalho francês de 18 a 22 meses
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
			on:click={() => toggleAccordion('vinicola')}
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
					<h4 class="text-[18px] font-prata normal-case">Família Deicas</h4>
				</div>
				<p class="pt-2 px-3 !text-[14px] !leading-normal">
					Família Deicas Fundada em 1886, Deicas tem uma história que começa com o pioneiro Juan
					Carlos Deicas, que transformou a adega histórica do século 18, Estabelecimento Juanicó, em
					um símbolo da excelência vinícola uruguaia.
				</p>
				<a
					href="/"
					style="background-color: var(--bry-current-color)"
					class="opacity-55 text-white px-4 py-1 text-[12px] rounded-full my-3 inline-block mx-3 uppercase"
				>
					Saiba mais
				</a>
			</div>
		{/if}
	</div>

	<!-- FORMAS DE PAGAMENTO -->
	<div>
		<button
			type="button"
			on:click={() => toggleAccordion('pagamento')}
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
						<h3 class="text-[13px] font-bold mb-3">CARTÃO DE CRÉDITO</h3>
						<ul class="space-y-1">
							<li class="font-light text-[12px] normal-case">
								1x R$ <strong>1000,00</strong> sem juros
							</li>
							<li class="font-light text-[12px] normal-case">
								2x R$ <strong>500,00</strong> sem juros
							</li>
							<li class="font-light text-[12px] normal-case">
								3x R$ <strong>333,33</strong> sem juros
							</li>
							<li class="font-light text-[12px] normal-case">
								4x R$ <strong>250,00</strong> sem juros
							</li>
						</ul>
						<div class="mt-3">
							<h4 class="!text-[13px] font-bold mb-2">PIX</h4>
							<p class="font-light !text-[12px]">R$ 1000,00 (5% OFF)</p>
						</div>
						<div class="mt-3">
							<h4 class="!text-[13px] font-bold mb-2">BOLETO</h4>
							<p class="font-light !text-[12px]">R$ 1000,00</p>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
