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
		<div class="flex justify-end">
			<div class="hidden lg:flex lg:flex-none lg:justify-end pl-5">
				<Button title="Atendimento" type="light" size="sm" url="/">
					{#snippet icon()}
						<Headset class="lucide-button" />
					{/snippet}
				</Button>
			</div>
			<div>
				<img
					src="/images/safe-env.png"
					alt="ambiente-seguro"
					height="35"
					class="h-[30px] md:h-[35px] ml-8"
				/>
			</div>
		</div>
	</nav>
</header>
