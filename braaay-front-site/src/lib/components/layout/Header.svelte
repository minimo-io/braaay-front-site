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
