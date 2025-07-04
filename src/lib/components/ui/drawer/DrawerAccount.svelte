<!-- src/lib/components/ui/drawer/DrawerAccount.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '../buttons/Button.svelte';

	import WhatsappButton from '$components/ui/buttons/WhatsappButton.svelte';
	import { slide } from 'svelte/transition';
	import { login } from '$lib/graphql/auth';
	import { redirectHref } from '$lib/utils';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { Eye, EyeOff } from '@lucide/svelte';
	import SignupBenefits from '../SignupBenefits.svelte';
	import ResetPasswordForm from '../forms/resetPasswordForm.svelte';
	import { page } from '$app/state';

	// State for toggling between login and reset password forms
	let showReset = $state(false);

	let email = $state('');
	let password = $state('');
	let processing = $state(false);
	let error = $state('');
	let showPassword = $state(false);

	// Props for the component
	interface Props {
		showBottomBorder?: boolean;
		onResetToggle?: (isReset: boolean) => void; // New callback prop
	}
	let { showBottomBorder = true, onResetToggle }: Props = $props();

	// Watch showReset changes and notify parent
	$effect(() => {
		if (onResetToggle) {
			onResetToggle(showReset);
		}
	});

	// Detect param to show the reset password form
	$effect(() => {
		if (page.url.searchParams.has('reset-password')) {
			showReset = true; // Show the reset password form
		}
	});

	// Function to toggle password visibility
	function togglePasswordVisibility() {
		showPassword = !showPassword;
	}

	// Function to toggle between login and reset password forms
	function toggleForms(e: MouseEvent) {
		e.preventDefault();
		showReset = !showReset;
	}

	// Handle the login form submission
	async function handleLogin(event) {
		event.preventDefault();
		processing = true;
		toggleLoader();
		document.body.classList.toggle('no-scroll');
		try {
			let loginResult = await login(email, password);
			if (loginResult && loginResult.success) {
				error = '';
				const url = new URL(window.location.href);
				const returnUrl = url.searchParams.get('returnUrl');
				// if there is a return url then redirect there else to wines
				if (returnUrl) {
					redirectHref(localizeHref(returnUrl));
				} else {
					if (getLocale() == 'pt') {
						redirectHref(localizeHref('/vinhos/'));
					} else {
						redirectHref(localizeHref('/uy/cervezas/'));
					}
				}
			} else {
				error = loginResult.message;
				processing = false;
				toggleLoader();
				document.body.classList.toggle('no-scroll');
			}
		} catch (error) {
			processing = false;
			toggleLoader();
			document.body.classList.toggle('no-scroll');
		}
	}
</script>

{#if showReset}
	<ResetPasswordForm {toggleForms} />
{:else}
	<div class="border-b pb-8 border-grey-lighter">
		<form
			id="frm-login"
			method="POST"
			onsubmit={handleLogin}
			class="px-[30px] mt-5"
			in:slide={{ duration: 200 }}
		>
			<fieldset>
				<label for="username" class="text-sm font-bold">Email</label>
				<input
					id="username"
					name="username"
					type="email"
					bind:value={email}
					disabled={processing}
					required
					class="w-full px-3 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mt-2 text-sm"
					placeholder="contato@braaay.com"
				/>
			</fieldset>
			<fieldset class="mt-3">
				<label for="password" class="text-sm font-bold">Senha</label>
				<div class="relative mt-1">
					<input
						id="password"
						name="password"
						type={showPassword ? 'text' : 'password'}
						bind:value={password}
						disabled={processing}
						required
						class="w-full px-3 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
						placeholder="123456789!"
					/>
					<button
						type="button"
						class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
						onclick={togglePasswordVisibility}
					>
						{#if showPassword}
							<EyeOff class="h-5" />
						{:else}
							<Eye class="h-5" />
						{/if}
					</button>
				</div>
			</fieldset>
			<div class="flex justify-start gap-3 mt-3">
				<button type="submit" class="btn form-btn !text-xs mt-0" disabled={processing}
					>Entrar</button
				>
				<button
					class="text-xs md:text-sm font-bold self-center pr-5 underline"
					onclick={toggleForms}>Esqueceu sua senha?</button
				>
			</div>
			{#if error}
				<div class="font-bold text-red-medium text-sm pt-4 text-center md:text-left">{error}</div>
			{/if}
		</form>
	</div>
{/if}
<div
	class="px-[35px] border-b border-grey-lighter w-full md:flex-1 md:justify-center flex-row text-center md:h-full self-center py-10 pb-7 text-sm md:hidden"
>
	<div class="text-center flex flex-col p-0 md:p-10 font-bold">
		<span class="mb-2 block">Não tem uma conta?</span>
		<div class="animate__animated animate__pulse animate__infinite">
			<Button
				shineEffect={false}
				title="Cadastre-se grátis"
				type="sun"
				url={localizeHref('/sign-up/')}
			/>
		</div>
	</div>
	<div class="px-5">
		<SignupBenefits />
	</div>
</div>

<div
	class={[
		'px-[35px] flex flex-col text-xs mt-7  border-grey-lighter pb-6 border-b-0',
		showBottomBorder && '!border-b'
	]}
>
	<strong class="uppercase">Precisar de ajuda?</strong>
	<span class="text-grey-medium-dark my-2"
		>Entre em contato com nossa equipe através do botão abaixo e nós o ajudaremos.</span
	>
	<div class="relative w-fit"><WhatsappButton /></div>
</div>
