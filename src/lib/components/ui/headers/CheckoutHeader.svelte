<script>
	import { Headset } from 'lucide-svelte';
	import { Button } from '$components/ui/buttons/index';
</script>

<header class="bg-white border-b border-b-grey-lighter">
	<!-- Cart nav -->
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
					src="./images/logo-braaay-desktop.svg"
					alt="braaay-logo-desktop"
				/>
				<img
					class="h-[21px] w-auto lg:hidden"
					src="./images/logo-braaay-mobile.svg"
					alt="braaay-logo-mobile"
				/>
			</a>
		</div>

		<!-- Desktop & Mobile menu -->
		<div class="hidden lg:flex flex-1 lg:gap-x-12 invisible">
			<!-- Search form -->
			<form action="https://braaay.com/" method="get" class="w-full">
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
					<kbd class="bry-search-kbd"><abbr title="Command" class="no-underline">⌘</abbr> K</kbd>
				</div>
			</form>
		</div>
		<div class="hidden lg:flex lg:flex-none lg:justify-end pl-5">
			<Button title="Atendimento" type="light" size="sm" url="/">
				{#snippet icon()}
					<Headset class="lucide-button" />
				{/snippet}
			</Button>
		</div>
		<img
			src="/images/safe-env.png"
			alt="ambiente-seguro"
			height="35"
			class="h-[30px] md:h-[35px] ml-8"
		/>
	</nav>
</header>
