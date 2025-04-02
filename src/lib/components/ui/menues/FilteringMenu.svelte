<script lang="ts">
	import {
		SlidersHorizontal,
		Grape,
		ChevronDown,
		ChevronRight,
		Globe,
		DollarSign,
		Smile,
		Truck,
		Ruler
	} from '@lucide/svelte';
</script>

<!-- Filtering menu -->
<div class="pb-0 md:pb-8 border-b border-b-grey-lighter">
	<div class="bry-filtering-inline relative">
		<!-- All Filters Button -->
		<button
			class="!bg-sun !shadow-none active:shadow-none !text-white !border-none shine-effect filtering-button-primary"
		>
			<div class="flex items-center relative -left-2 md:left-0">
				<SlidersHorizontal class="lucide-button w-5 h-5 mr-2" />
				Todos os filtros
			</div>
		</button>

		<!-- Menu button -->
		<div class="relative group filtering-button">
			<button class="shine-effect">
				<Grape class="lucide-button w-5 h-5 mr-2" />
				Variedade
				<ChevronDown class="lucide-button w-5 h-5 mr-2" />
			</button>

			<!-- Invisible bridge to prevent accidental mouseout -->
			<div class="absolute left-0 w-full h-4 bg-transparent"></div>
			<div
				class="absolute z-10 bg-white border border-grey-lighter shadow-lg mt-2 rounded-2xl md:w-[300px] w-48 origin-top overflow-y-auto hidden group-hover:block"
				style="max-height: calc(55vh - 170px)"
			>
				<div class="text-xs px-3 flex flex-col">
					<a
						href="/"
						class="px-4 py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle"
					>
						<span class="text-left self-center">Vinho Tinto</span>
						<div class="text-grey-medium flex flex-row align-middle self-center">
							<span class="self-center mr-3 text-xs">251</span>
							<ChevronRight class="w-4 aspect-1 text-grey-dark" />
						</div>
					</a>
					<a
						href="/"
						class="px-4 py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle"
					>
						<span class="text-left self-center">Espumantes</span>
						<div class="text-grey-medium flex flex-row align-middle self-center">
							<span class="self-center mr-3 text-xs">142</span>
							<ChevronRight class="w-4 aspect-1 text-grey-dark" />
						</div>
					</a>
					<a
						href="/"
						class="px-4 py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle"
					>
						<span class="text-left self-center">Vinho Branco</span>
						<div class="text-grey-medium flex flex-row align-middle self-center">
							<span class="self-center mr-3 text-xs">89</span>
							<ChevronRight class="w-4 aspect-1 text-grey-dark" />
						</div>
					</a>
					<a
						href="/"
						class="px-4 py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle"
					>
						<span class="text-left self-center">Frisantes</span>
						<div class="text-grey-medium flex flex-row align-middle self-center">
							<span class="self-center mr-3 text-xs">142</span>
							<ChevronRight class="w-4 aspect-1 text-grey-dark" />
						</div>
					</a>
				</div>
			</div>
		</div>

		<!-- Menu button -->
		<div class="relative group filtering-button">
			<button class="shine-effect">
				<Globe class="lucide-button w-5 h-5 mr-2" />
				País
				<ChevronDown class="lucide-button w-5 h-5 mr-2" />
			</button>
			<!-- Invisible bridge to prevent accidental mouseout -->
			<div class="absolute left-0 w-full h-4 bg-transparent"></div>
			<div
				class="absolute z-10 bg-white border border-grey-lighter shadow-lg mt-2 rounded-2xl md:w-[300px] w-48 origin-top overflow-y-auto hidden group-hover:block"
				style="max-height: calc(55vh - 170px)"
			>
				<div class="text-xs px-3 flex flex-col">
					<a
						href="/"
						class="px-4 py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle"
					>
						<div class="text-left self-center flex align-middle justify-center">
							<img
								class="w-4 h-4 self-center mr-2"
								src="/images/flags/uruguay.png"
								alt="uruguay-flag"
							/>
							<span class="self-center">Uruguai</span>
						</div>
						<div class="text-grey-medium flex flex-row align-middle self-center">
							<span class="self-center mr-3 text-xs">251</span>
							<ChevronRight class="w-4 aspect-1 text-grey-dark" />
						</div>
					</a>
					<a
						href="/"
						class="px-4 py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle"
					>
						<div class="text-left self-center flex align-middle justify-center">
							<img
								class="w-4 h-4 self-center mr-2"
								src="/images/flags/brazil.png"
								alt="uruguay-flag"
							/>
							<span class="self-center">Brasil</span>
						</div>
						<div class="text-grey-medium flex flex-row align-middle self-center">
							<span class="self-center mr-3 text-xs">142</span>
							<ChevronRight class="w-4 aspect-1 text-grey-dark" />
						</div>
					</a>
					<a
						href="/"
						class="px-4 py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle"
					>
						<div class="text-left self-center flex align-middle justify-center">
							<img
								class="w-4 h-4 self-center mr-2"
								src="/images/flags/chile.png"
								alt="uruguay-flag"
							/>
							<span class="self-center">Chile</span>
						</div>
						<div class="text-grey-medium flex flex-row align-middle self-center">
							<span class="self-center mr-3 text-xs">89</span>
							<ChevronRight class="w-4 aspect-1 text-grey-dark" />
						</div>
					</a>
					<a
						href="/"
						class="px-4 py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle"
					>
						<div class="text-left self-center flex align-middle justify-center">
							<img
								class="w-4 h-4 self-center mr-2"
								src="/images/flags/argentina.png"
								alt="uruguay-flag"
							/>
							<span class="self-center">Argentina</span>
						</div>
						<div class="text-grey-medium flex flex-row align-middle self-center">
							<span class="self-center mr-3 text-xs">142</span>
							<ChevronRight class="w-4 aspect-1 text-grey-dark" />
						</div>
					</a>
					<a
						href="/"
						class="px-4 py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle"
					>
						<div class="text-left self-center flex align-middle justify-center">
							<img
								class="w-4 h-4 self-center mr-2"
								src="/images/flags/portugal.png"
								alt="portugal-flag"
							/>
							<span class="self-center">Portugal</span>
						</div>
						<div class="text-grey-medium flex flex-row align-middle self-center">
							<span class="self-center mr-3 text-xs">142</span>
							<ChevronRight class="w-4 aspect-1 text-grey-dark" />
						</div>
					</a>
					<a
						href="/"
						class="px-4 py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle"
					>
						<div class="text-left self-center flex align-middle justify-center">
							<img
								class="w-4 h-4 self-center mr-2"
								src="/images/flags/italy.png"
								alt="italy-flag"
							/>
							<span class="self-center">Italia</span>
						</div>
						<div class="text-grey-medium flex flex-row align-middle self-center">
							<span class="self-center mr-3 text-xs">142</span>
							<ChevronRight class="w-4 aspect-1 text-grey-dark" />
						</div>
					</a>
				</div>
			</div>
		</div>

		<!-- Menu button -->
		<div class="relative group filtering-button">
			<button class="shine-effect">
				<DollarSign class="lucide-button w-5 h-5 mr-2" />
				Preço
				<ChevronDown class="lucide-button w-5 h-5 mr-2" />
			</button>
			<!-- Invisible bridge to prevent accidental mouseout -->
			<div class="absolute left-0 w-full h-4 bg-transparent"></div>
			<div
				class="absolute z-10 bg-white border border-grey-lighter shadow-lg mt-2 rounded-2xl md:w-[300px] w-48 origin-top overflow-y-auto px-10 py-5 hidden group-hover:block"
				style="max-height: calc(55vh - 170px)"
			>
				<div class="relative mb-6">
					<label for="labels-range-input" class="sr-only">Faixa de preço</label>
					<input
						id="labels-range-input"
						type="range"
						value="0"
						min="10"
						max="500"
						class="w-full fill-black h-2 bg-grey-light rounded-lg appearance-none cursor-pointer"
					/>
					<span class="text-xs text-grey-medium absolute start-0 -bottom-6">R$10</span>
					<span class="text-xs text-grey-medium absolute end-0 -bottom-6">R$500</span>
				</div>
			</div>
		</div>

		<!-- Menu button -->
		<div class="relative group filtering-button">
			<button class="shine-effect">
				<Smile class="lucide-button w-5 h-5 mr-2" />
				Paladar Típico
				<ChevronDown class="lucide-button w-5 h-5 mr-2" />
			</button>
			<!-- Invisible bridge to prevent accidental mouseout -->
			<div class="absolute left-0 w-full h-4 bg-transparent"></div>
			<div
				class="absolute bg-white border border-grey-light z-50 shadow-lg mt-2 rounded-lg w-48 text-left hidden group-hover:block"
			>
				<div class="text-xs px-3 flex flex-col">
					<a
						href="/"
						class="px-4 py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle"
					>
						<span class="text-left self-center">Seco</span>
						<div class="text-grey-medium flex flex-row align-middle self-center">
							<span class="self-center mr-3 text-xs">132</span>
							<ChevronRight class="w-4 aspect-1 text-grey-dark" />
						</div>
					</a>
					<a
						href="/"
						class="px-4 py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle"
					>
						<span class="text-left self-center">Suave</span>
						<div class="text-grey-medium flex flex-row align-middle self-center">
							<span class="self-center mr-3 text-xs">142</span>
							<ChevronRight class="w-4 aspect-1 text-grey-dark" />
						</div>
					</a>
					<a
						href="/"
						class="px-4 py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle"
					>
						<span class="text-left self-center">Doce</span>
						<div class="text-grey-medium flex flex-row align-middle self-center">
							<span class="self-center mr-3 text-xs">89</span>
							<ChevronRight class="w-4 aspect-1 text-grey-dark" />
						</div>
					</a>
					<a
						href="/"
						class="px-4 py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle"
					>
						<span class="text-left self-center">Demi-Sec</span>
						<div class="text-grey-medium flex flex-row align-middle self-center">
							<span class="self-center mr-3 text-xs">142</span>
							<ChevronRight class="w-4 aspect-1 text-grey-dark" />
						</div>
					</a>
					<a
						href="/"
						class="px-4 py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle"
					>
						<span class="text-left self-center">Extra-Brut</span>
						<div class="text-grey-medium flex flex-row align-middle self-center">
							<span class="self-center mr-3 text-xs">142</span>
							<ChevronRight class="w-4 aspect-1 text-grey-dark" />
						</div>
					</a>
					<a
						href="/"
						class="px-4 py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle"
					>
						<span class="text-left self-center">Nature</span>
						<div class="text-grey-medium flex flex-row align-middle self-center">
							<span class="self-center mr-3 text-xs">142</span>
							<ChevronRight class="w-4 aspect-1 text-grey-dark" />
						</div>
					</a>
				</div>
			</div>
		</div>

		<!-- Menu button -->
		<div class="relative group filtering-button">
			<button class="shine-effect">
				<Truck class="lucide-button w-5 h-5 mr-2" />
				Envío
				<ChevronDown class="lucide-button w-5 h-5 mr-2" />
			</button>
			<!-- Invisible bridge to prevent accidental mouseout -->
			<div class="absolute left-0 w-full h-4 bg-transparent"></div>
			<div
				class="absolute z-10 bg-white border border-grey-lighter shadow-lg mt-2 rounded-2xl md:w-[300px] w-48 origin-top overflow-y-auto px-5 py-5 text-xs hidden group-hover:block"
				style="max-height: calc(55vh - 170px)"
			>
				<div class="flex items-center space-x-3">
					<input
						id="option1"
						type="radio"
						name="shipping"
						class="appearance-none w-5 h-5 border-2 border-grey-dark rounded-full checked:bg-sun checked:border-sun cursor-pointer transition-all"
						checked
					/>
					<label for="option1" class="text-grey-dark font-medium text-left cursor-pointer">
						Envio hoje
					</label>
				</div>

				<div class="flex items-center space-x-3 mt-2">
					<input
						id="option2"
						type="radio"
						name="shipping"
						class="appearance-none w-5 h-5 border-2 border-grey-dark rounded-full checked:bg-sun checked:border-sun transition-all cursor-pointer"
					/>
					<label for="option2" class="text-grey-dark font-medium text-left cursor-pointer">
						Envio o mais rápido possível
					</label>
				</div>
				<div class="flex items-center space-x-3 mt-2">
					<input
						id="option3"
						type="radio"
						name="shipping"
						class="appearance-none w-5 h-5 border-2 border-grey-dark rounded-full checked:bg-sun checked:border-sun transition-all"
					/>
					<label for="option3" class="text-grey-dark font-medium text-left cursor-pointer">
						Assim que voltar no estoque
					</label>
				</div>
			</div>
		</div>

		<!-- Menu button -->
		<div class="relative group filtering-button">
			<button class="shine-effect">
				<Ruler class="lucide-button w-5 h-5 mr-2" />
				Tamanho
				<ChevronDown class="lucide-button w-5 h-5 mr-2" />
			</button>
			<!-- Invisible bridge to prevent accidental mouseout -->
			<div class="absolute left-0 w-full h-4 bg-transparent"></div>
			<div
				class="absolute bg-white border border-grey-light z-50 shadow-lg mt-2 rounded-lg w-48 text-left hidden group-hover:block"
			>
				<ul class="text-xs p-3">
					<li class="px-4 py-2 hover:bg-gray-100">Padrão (750ml)</li>
					<li class="px-4 py-2 hover:bg-gray-100">Mini Garrafa (250ml)</li>
					<li class="px-4 py-2 hover:bg-gray-100">Garrafa pequena (375ml)</li>
					<li class="px-4 py-2 hover:bg-gray-100">Bag-in-box (3000ml)</li>
				</ul>
			</div>
		</div>
	</div>
</div>
