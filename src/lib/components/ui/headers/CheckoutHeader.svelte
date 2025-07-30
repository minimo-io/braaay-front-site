<script>
	import { AlignJustify, CircleUser, Headset, X } from '@lucide/svelte';
	import { Button } from '$components/ui/buttons/index';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { isAuthenticated } from '$lib/graphql/auth';
	import { AppConfig } from '$config';
	import { page } from '$app/state';
	import { drawerState, toggleDrawer } from '$stores/drawerState.state.svelte';
	import { m } from '$lib/paraglide/messages';
	import SearchBar from '../search/SearchBar.svelte';

	let originRoute = $derived(page.url.href);
	// let currentPage = $derived(page.route.id);
</script>

<header class="bg-white border-b border-b-grey-lighter">
	<!-- Cart nav -->
	<nav
		class="mx-[30px] lg:mx-auto flex max-w-screen-lg items-center justify-between h-[63px] lg:h-[90px]"
		aria-label="Global"
	>
		<!-- logo -->
		<!-- <div class="flex lg:flex-none pr-8">
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
		</div> -->
		<div class="flex">
			<button
				class="flex md:hidden justify-start mr-6"
				onclick={() => {
					toggleDrawer();
					// drawerOpen.set(true);
				}}
			>
				{#if drawerState.active}
					<!-- When active, display the cross icon -->
					<X class="h-[22px] !mr-0 text-blue" />
				{:else}
					<!-- When inactive, display the hamburger icon -->
					<AlignJustify class="h-[22px] !mr-0 text-blue" />
				{/if}
			</button>
			<div class="flex lg:flex-none pr-0 md:pr-8 justify-start">
				<a href={localizeHref('/')} class="">
					<span class="sr-only">{m.seoBase()}</span>
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
						title="Conectar"
						url={localizeHref(`/login/${originRoute ? `?returnUrl=${originRoute}` : ''}`)}
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
					url={AppConfig.whatsappLink}
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

	<!-- Mobile search -->
	<div class="lg:hidden h-[50px]">
		{#if drawerState.active}
			<SearchBar mobile={true} />
		{:else}
			<div class="relative w-full border-t border-b border-grey-lighter" style="z-index: 10">
				<!-- Atendimento -->
				<Button
					title="Atendimento"
					type="light"
					size="md"
					url={AppConfig.whatsappLink}
					newTab={true}
					customPx="rounded-none !mt-0 h-[50px] border-0"
				>
					{#snippet icon()}
						<Headset class="lucide-button" />
					{/snippet}
				</Button>
			</div>
		{/if}
	</div>
</header>
