<script>
	import { CircleUserIcon, CircleUser, Headset } from '@lucide/svelte';
	import { Button } from '$components/ui/buttons/index';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { isAuthenticated } from '$lib/graphql/auth';
</script>

<header class="bg-white border-b border-b-grey-lighter">
	<!-- Cart nav -->
	<nav
		class="mx-[30px] lg:mx-auto flex max-w-screen-lg items-center justify-between h-[63px] lg:h-[90px]"
		aria-label="Global"
	>
		<!-- logo -->
		<div class="flex lg:flex-none pr-8">
			<a href={localizeHref('/')}>
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
		<div class="flex justify-end">
			<div class="hidden lg:flex lg:flex-none lg:justify-end pl-5">
				{#if isAuthenticated()}
					<!-- Account / SignUp -->
					<Button
						chevron={true}
						customPx="!pr-[12px] !pl-3 mr-3"
						title="Conta"
						url={localizeHref('/account/')}
						type="blue"
						size="xl"
					>
						{#snippet icon()}
							<CircleUser class="lucide-button h-[10px]" />
						{/snippet}
					</Button>
				{:else}
					<!--Enter -->
					<Button
						chevron={false}
						customPx="!pr-[12px] !pl-3 !pr-[20px] mr-3"
						title="Entrar"
						url="/login"
						type="blue"
						size="xl"
					>
						{#snippet icon()}
							<CircleUser class="lucide-button h-[10px]" />
						{/snippet}
					</Button>
				{/if}
				<!-- Atendimento -->
				<Button
					title="Atendimento"
					type="light"
					size="md"
					url="https://wa.me/5511947530340"
					newTab={true}
				>
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
