<!-- src/routes/login/+page.svelte -->
<script lang="ts">
	import Button from '$components/ui/buttons/Button.svelte';
	import { CheckCheck, User } from '@lucide/svelte';
	import DrawerAccount from '$components/ui/drawer/DrawerAccount.svelte';
	import FunMessageSection from '$components/layout/FunMessageSection.svelte';
	import SignupBenefits from '$components/ui/SignupBenefits.svelte';
	import Meta from '$components/layout/Meta.svelte';
	import { m } from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { onMount } from 'svelte';

	// Reactive state using runes
	let showReset = $state(false);

	// Computed value for the title
	let pageTitle = $derived(showReset ? 'REDEFINIR SENHA' : m.login());

	// Handle reset toggle from child component
	function handleResetToggle(isReset: boolean) {
		showReset = isReset;
	}

	onMount(() => {
		// This runs only in the browser after component is mounted
		const url = new URL(window.location.href);
		// Check if the 'reset-password' search parameter exists
		if (url.searchParams.has('reset-password')) {
			showReset = true; // This will trigger reactivity
		}
	});
</script>

<Meta title={m.seoLoginTitle()} description={m.seoLoginDescription()} />

<main class="w-full mx-auto">
	<!-- Header menu -->
	<div class="bg-white border-b border-b-grey-lighter">
		<!-- Category Header -->
		<div class="max-w-screen-lg border-sky bg-gray-100 md:mx-auto">
			<div class="flex flex-col md:flex-row items-center md:min-h-40 relative">
				<div
					class="flex justify-between items-center text-right md:text-left md:items-start md:justify-normal flex-row md:flex-col w-full md:w-[55%] py-[0.5rem] md:py-[20px] mx-[30px] px-[30px] md:pl-0"
				>
					<h1
						class="font-prata uppercase text-[25px] my-1 font-light text-grey-dark tracking-wider antialiased"
					>
						<div class="flex">
							<span class="self-center align-top pt-2 pb-2 pr-2">
								<User />
							</span>
							<span
								class="self-center font-roboto font-extrabold align-bottom pt-1 text-left text-[18px] md:text-[22px] text-wrap"
							>
								{pageTitle}
							</span>
						</div>
					</h1>
				</div>
				<div class="block">
					<img
						src="/images/sign-up-3.jpeg"
						alt="minha-conta"
						class="md:min-h-40 md:max-h-40 max-h-32 h-32 md:full-width-r object-cover"
					/>
				</div>
			</div>
		</div>
	</div>

	<!-- Login -->
	<div class="flex flex-col md:flex-row max-w-screen-lg mx-auto">
		<div class=" my-2 mx-auto md:w-[60%] md:border-r md:border-grey-lighter">
			<DrawerAccount showBottomBorder={false} onResetToggle={handleResetToggle} />
		</div>
		<div
			class="hidden md:inline px-[35px] w-full md:flex-1 md:justify-center flex-row text-center h-full self-center py-10 text-sm"
		>
			<div class="text-center flex flex-col p-0 md:px-9 font-bold">
				<!-- <Info class="h-5 self-center" /> -->
				<span class="mb-2 block">Não tem uma conta?</span>
				<div class="animate__animated animate__pulse animate__infinite">
					<Button
						rounded="lg"
						shineEffect={false}
						title="Cadastre-se grátis"
						type="sun"
						url={localizeHref('/sign-up/')}
					/>
				</div>

				<SignupBenefits />
			</div>
		</div>
	</div>
</main>

<FunMessageSection />
