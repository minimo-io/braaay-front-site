<script>
	import {
		ChevronDown,
		ChevronRight,
		Globe,
		Grape,
		SlidersHorizontal,
		DollarSign,
		Smile,
		Truck,
		Ruler,
		ArrowDownUp,
		LayoutGrid
	} from 'lucide-svelte';
</script>

<svelte:head>
	<title>Vinhos do Uruguai - Braaay</title>
	<meta name="description" content="" />
</svelte:head>

<main>
	<!-- Header menu -->
	<div class="bg-white border-b border-b-grey-lighter">
		<!-- Category Header -->
		<div class="max-w-screen-lg border-sky bg-gray-100 md:mx-auto">
			<div class="flex flex-col md:flex-row items-center md:min-h-40 relative">
				<div
					class="flex justify-between items-center text-right md:text-left md:items-start md:justify-normal flex-row md:flex-col w-full md:w-[55%] py-4 md:py-[20px] mx-[30px] px-[30px] md:pl-0"
				>
					<h1
						class="font-prata uppercase text-[25px] my-1 font-light text-grey-dark tracking-wider antialiased"
					>
						<div class="flex">
							<img
								class="w-7 h-7 self-center mr-2"
								src="./images/flags/uruguay.png"
								alt="uruguay-flag"
							/>
							<span class="self-center align-bottom pt-1">Uruguai</span>
						</div>
					</h1>
					<div
						class="flex flex-col md:flex-row text-grey-medium-dark font-roboto text-[14px] antialiased"
					>
						<span>36 produtos</span>
						<button
							class="font-roboto text-grey-medium-dark font-[11px] text-xs border border-grey-light py-[3px] px-[7px] antialiased ml-2 rounded-md"
						>
							CONHEÇA MAIS
						</button>
					</div>
				</div>
				<div class="block">
					<img
						src="./images/uruguai.webp"
						alt="Uruguai"
						class="md:min-h-40 md:max-h-40 max-h-40 h-40 md:full-width-r object-cover"
					/>
				</div>
			</div>
		</div>
	</div>

	<div class="pb-8 border-b border-b-grey-lighter">
		<!-- Filtering menu -->
		<div class="bry-filtering-inline relative">
			<!-- All Filters Button -->
			<button class="!bg-sun !text-white !border-sun">
				<SlidersHorizontal class="lucide-button w-5 h-5 mr-2" />
				Todos os filtros
			</button>

			<!-- Menu button -->
			<div class="relative">
				<button>
					<Grape class="lucide-button w-5 h-5 mr-2" />
					Variedade
					<ChevronDown class="lucide-button w-5 h-5 mr-2" />
				</button>
				<div
					class="absolute z-10 bg-white border border-grey-lighter shadow-lg mt-2 rounded-2xl md:w-[300px] w-48 origin-top overflow-y-auto"
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
			<div class="relative">
				<button>
					<Globe class="lucide-button w-5 h-5 mr-2" />
					País
					<ChevronDown class="lucide-button w-5 h-5 mr-2" />
				</button>
				<div
					class="absolute z-10 bg-white border border-grey-lighter shadow-lg mt-2 rounded-2xl md:w-[300px] w-48 origin-top overflow-y-auto"
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
			<div class="relative">
				<button>
					<DollarSign class="lucide-button w-5 h-5 mr-2" />
					Preço
					<ChevronDown class="lucide-button w-5 h-5 mr-2" />
				</button>
				<div
					class="absolute z-10 bg-white border border-grey-lighter shadow-lg mt-2 rounded-2xl md:w-[300px] w-48 origin-top overflow-y-auto px-10 py-5"
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
			<div class="relative">
				<button>
					<Smile class="lucide-button w-5 h-5 mr-2" />
					Paladar Típico
					<ChevronDown class="lucide-button w-5 h-5 mr-2" />
				</button>
				<div
					class="absolute bg-white border border-grey-light z-50 shadow-lg mt-2 rounded-lg w-48 text-left"
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
			<div class="relative">
				<button>
					<Truck class="lucide-button w-5 h-5 mr-2" />
					Envío
					<ChevronDown class="lucide-button w-5 h-5 mr-2" />
				</button>
				<div
					class="absolute z-10 bg-white border border-grey-lighter shadow-lg mt-2 rounded-2xl md:w-[300px] w-48 origin-top overflow-y-auto px-5 py-5 text-xs"
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
			<div class="relative">
				<button>
					<Ruler class="lucide-button w-5 h-5 mr-2" />
					Tamanho
					<ChevronDown class="lucide-button w-5 h-5 mr-2" />
				</button>
				<div
					class="absolute bg-white border border-grey-light z-50 shadow-lg mt-2 rounded-lg w-48 text-left"
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

	<!-- Sorting/View menu -->
	<div class="bry-sorting">
		<!-- Sorting Button -->
		<span class="text-xs mr-1 text-grey-blueish uppercase">Ordenação:</span>
		<button>
			<ArrowDownUp class="lucide-button w-5 h-5" />
			Mais relevante
		</button>
		<!-- Columns -->
		<button>
			<LayoutGrid class="lucide-button w-5 h-5 mr-2" />
			Grade
		</button>
		<!-- Map Button -->
		<!-- <button>
                    <i data-lucide="map" class="lucide-button w-5 h-5 mr-2"></i>
                    Mapa
                </button> -->
	</div>

	<!-- Product list -->
	<div class="max-w-screen-lg mx-[1.5rem] md:mx-auto mt-1 mb-[2rem]">
		<div class="bry-product-list">
			<!-- Wine Box 1 -->
			<div class="wine wine-transparent">
				<div class="mb-3 flex-grow">
					<img
						src="./images/wines/Deica-2-1.webp"
						alt="Pizzato Merlot de Merlots 2022"
						class="mx-auto"
					/>
				</div>
				<div class="absolute top-4 left-4">
					<div class="wine-stars">
						<span>★</span>
						4.5
					</div>
				</div>
				<h5 class="wine-title">Pizzato Merlot de Merlots 2022</h5>
				<p class="wine-price">R$ 150</p>
				<a href="./product.html" class="wine-button">VER DETALHES</a>
			</div>

			<!-- Wine Box 2 -->
			<div class="wine wine-transparent">
				<div class="mb-3 flex-grow">
					<img
						src="./images/wines/PIZZATO-concentus.webp"
						alt="Artesana Cabernet Franc/Merlot Reserva"
						class="mx-auto"
					/>
				</div>
				<div class="absolute top-4 left-4">
					<div class="wine-stars">
						<span>★</span>
						4.5
					</div>
				</div>
				<h5 class="wine-title">Artesana Cabernet Franc/Merlot Reserva</h5>
				<p class="wine-price">R$ 100</p>
				<a href="/" class="wine-button">VER DETALHES</a>
			</div>

			<!-- Wine Box 3 -->
			<div class="wine wine-transparent">
				<div class="mb-3 flex-grow">
					<img
						src="./images/wines/Pizzato-Legno-Chardonnay.webp"
						alt="Pizzato Chardonnay de Chardonnays"
						class="mx-auto"
					/>
				</div>
				<div class="absolute top-4 left-4">
					<div class="wine-stars">
						<span>★</span>
						4.5
					</div>
				</div>
				<h5 class="wine-title">Pizzato Chardonnay de Chardonnays</h5>
				<p class="wine-price">R$ 119</p>
				<a href="/" class="wine-button">VER DETALHES</a>
			</div>

			<!-- Wine Box 4 -->
			<div class="wine wine-transparent">
				<div class="mb-3 flex-grow">
					<img
						src="./images/wines/vinho-don-pascual-cabernet-merlot.webp"
						alt="Mayos Jovem Branco da Basso"
						class="mx-auto"
					/>
				</div>
				<div class="absolute top-4 left-4">
					<div class="wine-stars">
						<span>★</span>
						4.5
					</div>
				</div>
				<h5 class="wine-title">Mayos Jovem Branco da Basso</h5>
				<p class="wine-price">R$ 43</p>
				<a href="/" class="wine-button">VER DETALHES</a>
			</div>

			<!-- Wine Box 6 (with discount) -->
			<div class="wine wine-transparent !bg-white">
				<div class="mb-3 flex-grow">
					<img
						src="./images/wines/vinho-mayos-jovem-branco.webp"
						alt="Artesana Cabernet Franc/Merlot Reserva"
						class="mx-auto"
					/>
				</div>
				<div class="absolute top-4 left-4">
					<div class="wine-stars">
						<span>★</span>
						4.5
					</div>
				</div>
				<h5 class="wine-title">Artesana Cabernet Franc/Merlot Reserva</h5>
				<p class="wine-price">R$ 100</p>
				<a href="/" class="wine-button">VER DETALHES</a>
				<div class="absolute top-4 right-4 bg-black text-white px-2 py-1 text-xs rounded-lg">
					55% OFF
				</div>
			</div>
		</div>
	</div>
</main>
<!-- Category article -->
<article class="relative bg-white py-10 mt-14">
	<div class="absolute inset-x-0 -top-3 flex justify-center">
		<img
			src="./images/divider-green.svg"
			width="23px"
			height="23px"
			alt="divider"
			class="w-[20px] h-[20px] lg:w-[23px] lg:h-[23px]"
		/>
	</div>
	<div class="max-w-screen-lg mx-auto relative">
		<!-- General title header -->
		<div
			class="bry-header Xmax-w-[750px] mx-auto h-[200px] max-h-[200px] bg-[#d1d1d0] relative md:rounded-2xl mb-36"
		>
			<div
				class="absolute inset-0 opacity-70 z-0 md:rounded-2xl"
				style="
                    background-size: cover;
                    background-image: url(./images/uruguai.webp);
                    background-blend-mode: multiply;
                "
			></div>
			<!-- Header deck -->
			<h3 class="bry-header-deck">
				<a href="/" style="border-color: var(--bry-current-color)">Uruguay</a>
			</h3>
			<!-- Header title -->
			<h2 class="bry-header-title">A terra da uva Tannat</h2>
			<!-- Header author -->
			<div class="bry-header-author">
				<img src="./images/erika-96x96.jpeg" alt="Erika Bezerra" />
				<p class="text-lg font-bold mt-2 text-grey-darkest">Erika Bezerra</p>
				<p class="text-sm mt-0 text-grey-darkest italic font-thin">Sommelier</p>
			</div>
		</div>

		<!-- Article content -->
		<div class="md:px-32 px-[30px]">
			<h2
				class="text-[1.2rem] md:text-[1.3rem] leading-[1.75] uppercase text-center font-prata tracking-wider font-thin mb-6"
			>
				Sobre esse
				<i>blend</i>
				perfeito do Uruguai
			</h2>
			<p class="bry-article-main-p">
				Se você é um entusiasta de vinhos em busca de uma experiência para o seu paladar, o Don
				Pascual Tannat Merlot é uma parada quase obrigatória em sua jornada. Este
				<a href="/pais/uruguai/">vinho uruguaio</a>
				cativa todos os seus sentidos de maneira surpreendente, desde a visão até o último gole. Vamos
				embarcar juntos nesta aventura, explorando o que faz deste vinho uma escolha tão interessante.
			</p>
			<div class="bry-divider bry-bullet-blue"></div>

			<div class="bry-article-content">
				<div class="w-full">
					<p>
						As uvas tannat e merlot são muito diferentes entre si. E daí a magia deste vinho
						uruguaio que nos traz o melhor de dois mundos de sabores diferentes.
					</p>
					<p>
						O Tannat por um lado é responsável por vinhos que abraçam uma abordagem mais rústica,
						carregando consigo uma robustez cativante e taninos audaciosos. Em contraste,
						encontramos a Merlot, outra variedade originária de solo francês, mais precisamente de
						Bordeaux presenteia os tintos com uma suavidade envolvente, uma textura aveludada que
						dança delicadamente pelo paladar, resultando em vinhos que são verdadeiros abraços
						gustativos.
					</p>
					<p>
						<strong>🗣️ DICA:</strong>
						Se quiser saber ainda mais sobre esses vinhos tannat, especialidade uruguaia, em algumas
						versões mais puras, é interessante considerar outras opções mais robustas como o
						<strong>
							<a href="https://braaay.com/produto/vinho-tinto-uruguai-cerro-del-toro-tannat/">
								Tannat da vinícola Cerro del Toro
							</a>
						</strong>
						ou o excelente vinho reserva
						<a href="https://braaay.com/produto/vinho-uruguaio-artesana-tannat-zinfandel-reserva/">
							<strong>tannat da</strong>
							Artesana
						</a>
						em um blend com a uva Zinfandel.
					</p>

					<p>
						Neste encontro de Tannat e Merlot, a Don Pascual (uma marca de vinho em homenagem ao
						imigrante basco-francês que foi o primeiro a levar a uva tannat para o Uruguai) promete
						atingir um
						<em>equilíbrio único</em>
						, um ponto de fusão onde as características de cada uva se entrelaçam harmoniosamente. Não
						se aventura aos extremos – não é um vinho que se inclina excessivamente para a leveza ou
						pesadez. É um convite para a mesa farta, um vinho para compartilhar entre amigos. Mas, ao
						mesmo tempo, ele sorri para o happy hour, trazendo consigo a versatilidade que o torna bem-vindo
						em diferentes ocasiões.
					</p>
					<h3>Visual: Uma Tela de Cores Vibrantes</h3>
					<blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-700">
						“This is a sample blockquote that emphasizes a quote from a source.”
					</blockquote>
					<p>
						A jornada começa com o sentido da visão, onde somos recebidos por uma tapeçaria de cores
						profundas e vibrantes. O Don Pascual Tannat Merlot apresenta um tom rubi intenso,
						revelando sua personalidade rica e ousada. Ao inclinar a taça, você notará suas lágrimas
						que escorrem lentamente, indicando sua textura encorpada. A visão deste vinho convida
						você a mergulhar mais profundamente na experiência que está prestes a desfrutar.
					</p>
					<h2>Aroma do Don Pascual Tannat Merlot</h2>
					<p>
						Ao aproximar o nariz da taça, um abraço perfumado e acolhedor é oferecido pelo Don
						Pascual Tannat Merlot.
					</p>
					<p>
						Notas de frutas vermelhas maduras, como cerejas e ameixas, dançam elegantemente com
						toques sutis de especiarias, criando uma sinfonia aromática que desperta a curiosidade.
					</p>
					<p>
						A presença do Merlot traz uma suavidade delicada, enquanto o Tannat adiciona uma pitada
						de ousadia e complexidade. Este aroma convida você a explorar ainda mais, preparando o
						paladar para a jornada de sabores que está por vir.
					</p>
					<h2>Paladar: Uma Dança de Sabores</h2>
					<p>
						No momento tão aguardado do primeiro gole, o Don Pascual Tannat Merlot revela sua
						verdadeira personalidade no paladar. Uma dança de sabores intrigantes acontece, onde a
						fruta suculenta do Merlot se mistura com a estrutura robusta do Tannat. O encontro de
						cerejas maduras e um toque sutil de baunilha proporciona uma experiência equilibrada e
						envolvente. Os taninos firmes do Tannat adicionam uma textura aveludada que envolve a
						língua, criando uma sensação de profundidade e complexidade. Este é um vinho que mantém
						sua promessa, entregando uma experiência de sabor gratificante.
					</p>
					<h2>Harmonização: O Parceiro Perfeito</h2>
					<p>
						A busca pelo parceiro perfeito para o Don Pascual Tannat Merlot leva a um universo de
						possibilidades culinárias. Sua estrutura versátil o torna um excelente acompanhamento
						para uma variedade de pratos. Experimente com carnes grelhadas, como um suculento bife
						de cordeiro ou um saboroso hambúrguer caseiro. Queijos de média intensidade, como gouda
						ou cheddar, também encontram um equilíbrio elegante com o caráter deste vinho. A
						experiência de harmonização com Don Pascual Tannat Merlot é uma aventura gastronômica em
						si mesma, onde cada mordida e gole se complementam harmoniosamente.
					</p>
					<h2>Conclusão sobre o vinho Don Pascual Tannat Merlot</h2>
					<p>
						O Don Pascual Tannat Merlot é mais do que apenas um vinho – é uma jornada sensorial
						inesquecível que celebra os sentidos de maneira encantadora. Desde a visão hipnotizante
						até o último gole satisfatório, este vinho uruguaio oferece uma experiência que envolve
						todos os aspectos da apreciação vinícola. Combinando a intensidade do Tannat com a
						suavidade do Merlot, o Don Pascual Tannat Merlot é uma verdadeira celebração de sabores
						e aromas que cativará tanto o novato quanto o entusiasta de vinhos experiente. Então,
						pegue sua taça, reúna os amigos e desfrute desta jóia vinícola que nos leva em uma
						jornada deliciosa através dos sentidos.
					</p>
					<p>Saúde!</p>
				</div>
			</div>
		</div>
	</div>
</article>
