<script lang="ts">
	import {
		User,
		Wine,
		CalendarDays,
		Gift,
		Award,
		Leaf,
		PackageOpen,
		// Newspaper,
		Search,
		Coins
		// BadgePercent
	} from 'lucide-svelte';
</script>

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

		<!-- Search-->
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
			<!-- My account -->
			<a href="./account.html" class="btn h-[45px] uppercase flex items-center justify-center">
				<User class="lucide-button" />
				Conta
			</a>
			<!-- Cashback -->
			<a
				href="./cashback.html"
				class="btn h-[35px] lg:h-[45px] text-blue uppercase relative flex items-center justify-center ml-3 border"
			>
				<Coins class="h-[15px] text-sun" fill="#BD8836" />
				<span class="lg:mt-1">R$124</span>
				<span
					class="hidden md:flex pt-[2px] absolute md:-top-[10px] bg-white border border-grey-lighter hover:ring-grey-medium text-blue font-bold antialiased px-2 py-0 text-[8px] rounded-xl"
				>
					CASHBACK
				</span>
			</a>
		</div>

		<!-- Bag -->
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
			<Search class="mr-1 h-[16px] absolute top-1/2 -translate-y-1/2 left-[30px]" />
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
						<Wine class="lucide-menu" />
						Vinhos
					</a>
				</li>
				<li class="relative group transition-all duration-300">
					<a href="/kits/">
						<Gift class="lucide-menu" />
						Presentes
					</a>
				</li>
				<li class="relative group transition-all duration-300">
					<a href="/kits/">
						<PackageOpen class="lucide-menu" />
						Kits
					</a>
				</li>
				<li class="relative group transition-all duration-300">
					<a href="https://braaay.com/experiencias/">
						<CalendarDays class="lucide-menu" />
						Experiências
					</a>
				</li>
				<li class="self-center text-grey-medium antialiased">|</li>
				<li class="relative group transition-all duration-300">
					<a href="/tag/oportunidades/" class="font-bold">
						<span class="Xtext-green-dark flex Xfont-medium self-center">
							<Leaf class="lucide-menu self-center" />
							Orgânicos
						</span>
					</a>
				</li>
				<li class="relative group transition-all duration-300">
					<a href="/tag/premiados/">
						<Award class="lucide-menu" />
						Premiados
					</a>
				</li>

				<!-- <li class="relative group transition-all duration-300">
					<a href="/em-breve/">
						<GraduationCap class="lucide-menu badge-percent" />
						Cursos
					</a>
				</li> -->
				<!-- <li class="relative group transition-all duration-300">
					<a href="./blog.html">
						<Newspaper class="lucide-menu badge-percent" />
						Blog
					</a>
				</li> -->
				<li class="relative group transition-all duration-300">
					<a href="./blog.html" class="!py-0 !pr-5 h-full">
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
							<span class="text-sm font-bold text-left leading-5">R$30 ou menos</span>
						</div>
					</a>
				</li>
			</ul>
		</nav>
	</div>
</header>
