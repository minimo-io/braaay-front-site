<!-- Top header -->
<header class="bg-white">
	<nav
		class="mx-[30px] lg:mx-auto flex max-w-screen-lg items-center justify-between h-[63px] lg:h-[90px]"
		aria-label="Global"
	>
		<!-- logo -->
		<div class="flex lg:flex-none pr-8">
			<a href="./" class="">
				<span class="sr-only">Braaay</span>
				<img
					class="h-[38px] w-auto hidden lg:block"
					src="/images/logo-braaay-desktop.svg"
					alt="braaay-logo-desktop"
				/>
				<img
					class="h-[21px] w-auto lg:hidden"
					src="/images/logo-braaay-mobile.svg"
					alt="braaay-logo-mobile"
				/>
			</a>
		</div>
		<!-- Mobile Menu Hamburger -->
		<div class="flex lg:hidden hidden">
			<button
				type="button"
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
			>
				<span class="sr-only">Abrir menu principal</span>
				<svg
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>

		<!-- Desktop & Mobile menu -->
		<div class="hidden lg:flex flex-1 lg:gap-x-12">
			<!-- Search form -->
			<form action="./search.html" method="get" class="w-full">
				<div class="relative px-5 border-r border-r-1 border-r-grey-lighter h-[45px]">
					<input
						id="search"
						type="search"
						minlength="3"
						class="rounded-3xl focus:ring-1 ring-sun w-full text-sm h-[45px] placeholder:tracking-wide placeholder:text-grey-medium border border-grey-lighter px-5 py-2.5 font-roboto placeholder:font-light shadow-[inset_0_2px_1px_rgba(0,0,0,0.025)]"
						placeholder="Pesquisar…"
						value=""
						name="s"
						title="Procurar:"
					/>
					<!-- KBD -->
					<kbd class="bry-search-kbd">
						<abbr title="Command" class="no-underline">⌘</abbr>
						K
					</kbd>
				</div>
			</form>
		</div>
		<div class="hidden lg:flex lg:flex-none lg:justify-end pl-5">
			<a href="./account.html" class="btn h-[45px] uppercase flex items-center justify-center">
				<!-- <i class="fa fa-user pr-2"></i> -->
				<i data-lucide="user" class="lucide-button"></i>
				Minha conta
			</a>
		</div>
		<a href="./cart.html" class="bry-cart relative h-[45px] uppercase flex items-center">
			<i class="bry-bag"></i>
			<span
				class="flex justify-center items-center rounded-full bg-sun p-0 w-4 h-4 lg:w-5 lg:h-5 font-roboto text-[10px] text-white ring-inset absolute top-1 lg:top-0 -right-2"
			>
				0
			</span>
		</a>
	</nav>

	<!-- Mobile search -->
	<div class="lg:hidden h-[50px]">
		<form
			action="./search.html"
			method="get"
			class="w-full flex items-center relative flex-align-items-center"
		>
			<!-- <i
                class="fa fa-search mr-2 absolute top-1/2 -translate-y-1/2 left-[30px]"
            ></i> -->
			<i data-lucide="search" class="mr-1 h-[16px] absolute top-1/2 -translate-y-1/2 left-[30px]"
			></i>
			<input
				type="search"
				minlength="3"
				class="h-[50px] focus:ring-0 focus-visible:outline-none w-full text-sm placeholder:tracking-wide placeholder:text-grey-medium border-t border-grey-lighter pl-[60px] pr-[30px] py-2.5 font-roboto placeholder:font-light Xshadow-[inset_0_2px_1px_rgba(0,0,0,0.025)]"
				placeholder="Pesquisar…"
				value=""
				name="s"
				title="Procurar:"
			/>
		</form>
	</div>

	<!-- Secondary menu -->
	<div class="bry-secondary-menu">
		<nav class="container max-w-screen-lg py-2 mx-[30px] lg:mx-auto">
			<ul class="flex space-x-4">
				<li class="relative group transition-all duration-300">
					<a href="./category.html" class="!pr-2 !lg:pr-3 !pl-0">
						<i data-lucide="wine" class="lucide-menu"></i>
						Vinhos
					</a>
				</li>
				<li class="relative group transition-all duration-300">
					<a href="https://braaay.com/experiencias/">
						<!-- <i class="fa fa-calendar mr-2"></i> -->
						<i data-lucide="calendar-days" class="lucide-menu"></i>
						Experiências
					</a>
				</li>
				<li class="relative group transition-all duration-300">
					<a href="/kits/">
						<!-- <i class="fa fa-gift mr-2"></i> -->
						<i data-lucide="gift" class="lucide-menu"></i>
						Presentes
					</a>
				</li>
				<li class="relative group transition-all duration-300">
					<a href="/tag/premiados/">
						<!-- <i class="fa fa-trophy mr-2"></i> -->
						<i data-lucide="award" class="lucide-menu"></i>
						Premiados
					</a>
				</li>
				<li class="relative group transition-all duration-300">
					<a href="/tag/oportunidades/">
						<!-- <i class="fa fa-calendar mr-2"></i> -->
						<i data-lucide="target" class="lucide-menu badge-percent"></i>
						Oportunidades
					</a>
				</li>
				<li class="relative group transition-all duration-300">
					<a href="/em-breve/">
						<!-- <i class="fa fa-graduation-cap mr-2"></i> -->
						<i data-lucide="graduation-cap" class="lucide-menu badge-percent"></i>
						Cursos
					</a>
				</li>
				<li class="relative group transition-all duration-300">
					<a href="./blog.html" class="!pr-5">
						<!-- <i class="fa fa-newspaper-o mr-2"></i> -->
						<i data-lucide="newspaper" class="lucide-menu badge-percent"></i>
						Blog
					</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<main>
	<!-- Carrousel mobile -->
	<div id="glide-carousel" class="glide">
		<div class="glide__track" data-glide-el="track">
			<ul class="glide__slides">
				<li class="glide__slide w-full">
					<a href="./">
						<img
							src="/images/carousel/placeholder.webp"
							alt="placeholder 2"
							class="carousel-image w-full"
							data-desktop="braaay-carousel-desktop-1.webp"
							data-mobile="braaay-carousel-mobile-1.png"
							width="800"
							height="600"
						/>
					</a>
				</li>
				<li class="glide__slide w-full">
					<a href="/">
						<img
							src="/images/carousel/placeholder.webp"
							alt="placeholder 3"
							class="carousel-image w-full"
							data-desktop="braaay-carousel-desktop-2.webp"
							data-mobile="braaay-carousel-mobile-2.png"
							width="800"
							height="600"
						/>
					</a>
				</li>
				<!-- Add more slides as needed -->
			</ul>
		</div>
		<!-- Dots for Slide Navigation -->
		<div
			class="glide__bullets absolute bottom-4 left-1/2 transform -translate-x-1/2"
			data-glide-el="controls[nav]"
		>
			<button class="glide__bullet" aria-label="bullet" data-glide-dir="=0"></button>
			<button class="glide__bullet" aria-label="bullet" data-glide-dir="=1"></button>
			<button class="glide__bullet" aria-label="bullet" data-glide-dir="=2"></button>
			<!-- Add more bullets based on the number of slides -->
		</div>
	</div>

	<!-- Header section -->
	<div
		class="max-w-screen-lg flex flex-col lg:flex-row justify-between items-center py-10 px-0 mx-[30px] lg:mx-auto mt-5"
	>
		<!-- Left section -->
		<div class="lg:w-[65%]">
			<h4
				class="text-[13px] lg:text-[15px] text-gray-500 font-light font-roboto tracking-wide uppercase border-b-2 inline-block border-bra"
			>
				Showroom
			</h4>
			<h2 class="text-[18px] lg:text-[26px] font-prata text-black mt-3 uppercase tracking-wide">
				Encontros & Jantares
			</h2>
			<p
				class="text-[13px] lg:text-[16px] tracking-[1px] text-grey-blueish mt-2 lg:mt-0 leading-tight"
			>
				Venha descobrir o inesperado em nosso showroom e prepare-se para eventos inesquecíveis.
			</p>
		</div>

		<!-- Right section -->
		<div class="self-start lg:self-auto">
			<a href="/" class="btn text-white bg-sun uppercase flex lg:items-right mt-3 lg:mt-0 lg:py-3">
				<!-- <i
                    class="fa fa-calendar mr-1 pt-px"
                    aria-hidden="true"
                ></i> -->
				<i data-lucide="calendar" class="lucide-button"></i>

				Reserve sua experiência
			</a>
		</div>
	</div>

	<!-- Home images -->
	<div class="max-w-screen-lg-2x mx-[30px] lg:mx-auto items-center flex justify-between">
		<div class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
			<!-- Image 1 with play button overlay -->
			<div class="relative">
				<img
					src="/images/home-video-braaay-erika.png"
					alt="1 description"
					class="rounded-lg w-full h-auto"
				/>
				<a href="/" class="play-button not-hover-effect" aria-label="button">
					<span></span>
				</a>
			</div>

			<!-- Image 2 -->
			<div>
				<img
					src="/images/home-braaay-2-2.webp"
					alt="2 description"
					class="rounded-lg w-full h-auto"
				/>
			</div>

			<!-- Image 3 -->
			<div>
				<img
					src="/images/braaay-homepage-3.webp"
					alt=" 3 description"
					class="rounded-lg w-full h-auto"
				/>
			</div>

			<!-- Image 4 -->
			<div>
				<img
					src="/images/home-braaay-4-2.webp"
					alt=" 4 description"
					class="rounded-lg w-full h-auto"
				/>
			</div>
		</div>
	</div>

	<!-- Section with white background and divider -->
	<section class="relative bg-white py-10 mt-14">
		<!-- SVG Divider Dot -->
		<div class="absolute inset-x-0 -top-3 flex justify-center">
			<img
				src="/images/divider-green.svg"
				width="23px"
				height="23px"
				alt="divider"
				class="w-[20px] h-[20px] lg:w-[23px] lg:h-[23px]"
			/>
		</div>

		<!-- Header section -->
		<div
			class="max-w-screen-lg flex flex-col lg:flex-row justify-between items-center pt-0 px-0 mx-[30px] lg:mx-auto mt-5"
		>
			<!-- Left section -->
			<div class="lg:w-[65%]">
				<h4
					class="text-[13px] lg:text-[15px] text-gray-500 font-light font-roboto tracking-wide uppercase border-b-2 inline-block border-bra"
				>
					E-Commerce
				</h4>
				<h2 class="text-[18px] lg:text-[26px] font-prata text-black mt-3 uppercase tracking-wide">
					Vinhos & Presentes
				</h2>
				<p
					class="text-[13px] lg:text-[16px] tracking-[1px] text-grey-blueish mt-2 lg:mt-0 leading-tight"
				>
					Dê uma olhada em nossa seleção com os melhores vinhos uruguaios e brasileiros e nossas
					sugestões para presentes empresariais
				</p>
			</div>

			<!-- Right section -->
			<div class="self-start lg:self-auto">
				<a
					href="/"
					class="btn text-white bg-sun uppercase flex lg:items-right mt-3 lg:mt-0 lg:py-3"
				>
					Ver todos
				</a>
			</div>
		</div>

		<!-- Wine list -->
		<section class="bg-white max-w-screen-lg-2x py-12 mx-[20px] lg:mx-auto">
			<div class="bry-product-list">
				<!-- Wine Box 1 -->
				<div class="wine">
					<div class="mb-3 flex-grow">
						<img
							src="/images/wines/Deica-2-1.webp"
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
				<div class="wine">
					<div class="mb-3 flex-grow">
						<img
							src="/images/wines/PIZZATO-concentus.webp"
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
				<div class="wine">
					<div class="mb-3 flex-grow">
						<img
							src="/images/wines/Pizzato-Legno-Chardonnay.webp"
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
				<div class="wine">
					<div class="mb-3 flex-grow">
						<img
							src="/images/wines/vinho-don-pascual-cabernet-merlot.webp"
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

				<!-- Wine Box 5 (with discount) -->
				<div class="wine">
					<div class="mb-3 flex-grow">
						<img
							src="/images/wines/vinho-mayos-jovem-branco.webp"
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
		</section>

		<!-- Header section: Harmonizacoes -->
		<div
			class="max-w-screen-lg flex flex-col lg:flex-row justify-between items-center pt-0 px-0 mx-[30px] lg:mx-auto mt-5"
		>
			<!-- Left section -->
			<div class="lg:w-[65%]">
				<h4
					class="text-[13px] lg:text-[15px] text-gray-500 font-light font-roboto tracking-wide uppercase border-b-2 inline-block border-bra"
				>
					Revista
				</h4>
				<h2 class="text-[18px] lg:text-[26px] font-prata text-black mt-3 uppercase tracking-wide">
					HARMONIZAÇÕES
				</h2>
				<p
					class="text-[13px] lg:text-[16px] tracking-[1px] text-grey-blueish mt-2 lg:mt-0 leading-tight"
				>
					Acompanhe aqui uma seleção dos nossos melhores vinhos e espumantes uruguaios e brasileiros
					para harmonizar com seus pratos favoritos.
				</p>
			</div>

			<!-- Right section -->
			<div class="self-start lg:self-auto">
				<a
					href="/"
					class="btn text-white bg-sun uppercase flex lg:items-right mt-3 lg:mt-0 lg:py-3"
				>
					Ver todas
				</a>
			</div>
		</div>

		<!-- Harmonizacoes -->
		<div
			class="max-w-screen-lg-2x mx-[30px] mt-12 mb-5 lg:mx-auto items-center flex justify-between"
		>
			<div class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
				<!-- Image 1 with play button overlay -->
				<div class="relative">
					<img
						src="/images/harmonizacoes/carnes-vermelhas-2.webp"
						alt="1 description"
						class="rounded-lg w-full h-auto"
					/>
				</div>

				<!-- Image 2 -->
				<div>
					<img
						src="/images/harmonizacoes/harmonizacoes-vegetariano.png"
						alt="2 description"
						class="rounded-lg w-full h-auto"
					/>
				</div>

				<!-- Image 3 -->
				<div>
					<img
						src="/images/harmonizacoes/culinaria-japonesa-2.webp"
						alt="3 description"
						class="rounded-lg w-full h-auto"
					/>
				</div>

				<!-- Image 4 -->
				<div>
					<img
						src="/images/harmonizacoes/harmonizacao-carnes-brancas.webp"
						alt="4 description"
						class="rounded-lg w-full h-auto"
					/>
				</div>
			</div>
		</div>

		<!-- Header section: Parceiros -->
		<div
			class="max-w-screen-lg flex flex-col lg:flex-row justify-between items-center pt-0 px-0 mx-[30px] lg:mx-auto mt-14"
		>
			<!-- Left section -->
			<div class="lg:w-[65%]">
				<h4
					class="text-[13px] lg:text-[15px] text-gray-500 font-light font-roboto tracking-wide uppercase border-b-2 inline-block border-bra"
				>
					Produtores
				</h4>
				<h2 class="text-[18px] lg:text-[26px] font-prata text-black mt-3 uppercase tracking-wide">
					PARCEIROS DESTACADOS
				</h2>
				<p
					class="text-[13px] lg:text-[16px] tracking-[1px] text-grey-blueish mt-2 lg:mt-0 leading-tight"
				>
					Os melhores produtores do Uruguai e Brasil estão na Braaay compartilhando suas
					experiências.
				</p>
			</div>

			<!-- Right section -->
			<div class="self-start lg:self-auto">
				<a
					href="/"
					class="btn text-white bg-sun uppercase flex lg:items-right mt-3 lg:mt-0 lg:py-3"
				>
					Ver todos
				</a>
			</div>
		</div>
		<section class="bry-partners-list">
			<div>
				<a href="/">
					<img
						src="/images/partners/vina-eden-logo.webp"
						alt="Viña Edén"
						class="w-full h-full object-contain"
					/>
				</a>
			</div>
			<div>
				<a href="/">
					<img
						src="/images/partners/artesana-logo-3.webp"
						alt="Artesana"
						class="w-full h-full object-contain"
					/>
				</a>
			</div>
			<div>
				<a href="/">
					<img
						src="/images/partners/capoani-logo-3.webp"
						alt="Manus Logo"
						class="w-full h-full object-contain"
					/>
				</a>
			</div>
			<div>
				<a href="/">
					<img
						src="/images/partners/cerro-del-toro-logo-2.webp"
						alt="AC Logo"
						class="w-full h-full object-contain"
					/>
				</a>
			</div>
			<div>
				<a href="/">
					<img
						src="/images/partners/don-pascual-logo-2.webp"
						alt="Coroa Acheira Logo"
						class="w-full h-full object-contain"
					/>
				</a>
			</div>
			<div>
				<a href="/">
					<img
						src="/images/partners/familia-deicas-uruguai.webp"
						alt="Pizzato Logo"
						class="w-full h-full object-contain"
					/>
				</a>
			</div>
			<div>
				<a href="/">
					<img
						src="/images/partners/pizzato-logo.webp"
						alt="Casa Eva Logo"
						class="w-full h-full object-contain"
					/>
				</a>
			</div>
			<div>
				<a href="/">
					<img
						src="/images/partners/vinicola-manus-logo.webp"
						alt="Anina Logo"
						class="w-full h-full object-contain"
					/>
				</a>
			</div>
			<div>
				<a href="/">
					<img
						src="/images/partners/garzon-logo-2.webp"
						alt="Anina Logo"
						class="w-full h-full object-contain"
					/>
				</a>
			</div>
			<div>
				<a href="/">
					<img
						src="/images/partners/giaretta-logo-2.webp"
						alt="Anina Logo"
						class="w-full h-full object-contain"
					/>
				</a>
			</div>
			<div>
				<a href="/">
					<img
						src="/images/partners/casa-eva-logo-2.webp"
						alt="Anina Logo"
						class="w-full h-full object-contain"
					/>
				</a>
			</div>
			<div>
				<a href="/">
					<img
						src="/images/partners/casa-da-coheleira-logo-3.webp"
						alt="Anina Logo"
						class="w-full h-full object-contain"
					/>
				</a>
			</div>
		</section>
	</section>

	<!-- <div class="py-10"></div> -->
</main>

<!-- Footer -->
<footer class="relative bg-grey-background py-0 mt-0">
	<div class="absolute inset-x-0 -top-3 flex justify-center">
		<img
			src="/images/divider-blue.svg"
			width="23px"
			height="23px"
			alt="divider"
			class="w-[20px] h-[20px] lg:w-[23px] lg:h-[23px]"
		/>
	</div>
	<div class="max-w-screen-lg mx-auto px-[30px] lg:px-0">
		<!-- Logo -->
		<div class="flex justify-center mb-12">
			<img
				src="/images/logo-braaay-desktop.svg"
				alt="BRAAAY Logo"
				class="h-10 lg:h-9 object-contain mt-14"
			/>
		</div>

		<!-- Features Grid -->
		<div class="bry-footer-features">
			<!-- Feature 1 -->
			<div>
				<h2 class="partial-border">Especialistas em 🇺🇾 e 🇧🇷</h2>
				<p>
					Viajamos, conhecemos, nos aventuramos e trazemos a melhor seleção de vinhos uruguaios e
					nacionais.
				</p>
			</div>

			<!-- Feature 2 -->
			<div>
				<h2 class="text-xl font-semibold mb-4">Pagamento em até 4x</h2>
				<p>
					Você pode pagar no cartão sem juros com parcela mínima de R$50, no boleto, PIX ou usar sua
					e-Wallet preferida.
				</p>
			</div>

			<!-- Feature 3 -->
			<div>
				<h2 class="text-xl font-semibold mb-4">Experiências além da taça</h2>
				<p>
					Venha explorar e conhecer o showroom, participe dos workshops ou faça parte do grupo de
					viagens e aventuras!
				</p>
			</div>
		</div>

		<hr class="border-b-1 border-grey-lighter my-10 w-full relative" />

		<!-- App Section and Footer Grid Container -->
		<div class="flex flex-col md:flex-row md:gap-8 justify-center items-center">
			<!-- App Section -->
			<div class="mb-8 md:mb-0 w-full md:w-1/3">
				<h3
					class="text-grey-medium text-center md:text-left font-medium italic font-prata text-[20px] mb-0"
				>
					Faça parte do clube!
				</h3>
				<h2 class="text-2xl font-bold mb-4 text-center md:text-left">APP DE CASHBACK</h2>
				<div class="flex gap-4 justify-center md:justify-start">
					<a href="/">
						<img src="/images/store-appstore.png" alt="apple-store" width="130" height="27" />
					</a>
					<a href="/">
						<img src="/images/store-googleplay.png" alt="apple-store" width="130" height="27" />
					</a>
				</div>
			</div>

			<!-- Footer Grid -->
			<div
				class="bry-footer-grid grid flex-shrink-0 grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 md:flex-1 mx-auto justify-center items-center"
			>
				<div class="text-center">
					<h3>SUPORTE</h3>
					<ul>
						<li>
							<a
								href="https://wa.me/5511947530340"
								rel="nofollow noreferrer"
								target="_blank"
								class="!text-black font-bold"
							>
								+55 11 94753-0340
							</a>
						</li>
						<li>
							<a class="!text-black font-bold" href="mailto:contato@braaay.com">
								contato@braaay.com
							</a>
						</li>
						<li><a href="/">POLÍTICA DE FRETES</a></li>
						<li><a href="/">TROCAS E DEVOLUÇÕES</a></li>
					</ul>
				</div>
				<!-- Company Links -->
				<div class="md:block text-center">
					<h3>BRAAAY</h3>
					<ul>
						<li><a href="/">SOBRE NÓS</a></li>
						<li><a href="/">AFILIADOS</a></li>
						<li><a href="/">BLOG</a></li>
						<li><a href="/">SHOWROOM</a></li>
					</ul>
				</div>
				<!-- Social Media -->
				<div class="hidden md:block text-center">
					<h3>REDES SOCIAIS</h3>
					<ul>
						<li><a href="/">INSTAGRAM</a></li>
						<li><a href="/">YOUTUBE</a></li>
						<li><a href="/">TIKTOK</a></li>
						<li><a href="/">FACEBOOK</a></li>
					</ul>
				</div>
			</div>
		</div>

		<hr class="border-b-1 border-grey-lighter mt-10 mb-5 w-full relative" />

		<div
			class="mx-auto px-[30px] text-center text-[14px] leading-5 font-roboto text-grey-medium mb-5"
		>
			<p>
				A venda de bebidas alcoólicas é proibida para menores de 18 anos © 2024 Braaay – CNPJ:
				50.260.091/0001-72. • CEP: 05411-000. Todos os direitos reservados. Conheça nossas:
				<a href="/" class="text-black font-medium">Trocas e devoluções</a>
				|
				<a href="/" class="text-black font-medium">*Frete Grátis: Confira as regras</a>
			</p>
		</div>
	</div>
</footer>

<style>
</style>
