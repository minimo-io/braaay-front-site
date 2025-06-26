<script lang="ts">
	import { onMount } from 'svelte';
	import { m } from '$lib/paraglide/messages';
	import { slide } from 'svelte/transition';
	import { getUrqlClient } from '$stores/urqlClient.state.svelte';
	import { CUSTOMER_SEND_RESET_PASSWORD_EMAIL_MUTATION } from '$lib/graphql/mutations';
	import { CUSTOMER_RESET_PASSWORD_MUTATION } from '$lib/graphql/mutations/customer-reset-password.mutation';
	import { launchToast } from '$lib/utils';
	import { Check, CircleCheck, Eye, EyeOff } from '@lucide/svelte'; // Import Lucide icons
	import { goto } from '$app/navigation';
	import { localizeHref } from '$lib/paraglide/runtime';

	// Define the props the component accepts
	interface Props {
		toggleForms: (event: MouseEvent) => void;
	}
	// Receive the toggleForms function from the parent
	let { toggleForms }: Props = $props();

	// State for the "Request Reset Email" form
	let email = $state('');
	let loading = $state(false); // Reverted to original name
	let success = $state(false); // Reverted to original name
	let error = $state(''); // Reverted to original name

	// State for the "Set New Password" form parameters
	let hasResetParams = $state(false); // Controls which form is shown
	let resetKey = $state('');
	let resetLogin = $state('');

	// State for the sample "Set New Password" input fields
	let newPassword = $state('');
	let confirmNewPassword = $state('');

	// States for password visibility in the new password form
	let showNewPassword = $state(false);
	let showConfirmPassword = $state(false);

	// Loading and error states for the new password form
	let resetLoading = $state(false);
	let resetError = $state('');
	let resetSuccess = $state(false);

	// Toggle function for new password visibility
	function toggleNewPasswordVisibility() {
		showNewPassword = !showNewPassword;
	}

	// Toggle function for confirm password visibility
	function toggleConfirmPasswordVisibility() {
		showConfirmPassword = !showConfirmPassword;
	}

	// On component mount, check for 'key' and 'login' URL parameters
	onMount(() => {
		if (typeof window !== 'undefined') {
			const url = new URL(window.location.href);
			const keyParam = url.searchParams.get('key');
			const loginParam = url.searchParams.get('login');

			if (keyParam && loginParam) {
				hasResetParams = true;
				resetKey = keyParam;
				resetLogin = loginParam;
				// Removed the lines that delete parameters from the URL
			}
		}
	});

	// Handle submission for "Request Reset Email" form (existing logic)
	async function handleResetPasswordSendEmailSubmit(event: Event) {
		// Reverted to original name
		event.preventDefault();

		if (!email) {
			error = 'Por favor, insira seu email.';
			return;
		}

		loading = true;
		error = '';
		success = false;

		try {
			const result = await getUrqlClient()
				.client.mutation(CUSTOMER_SEND_RESET_PASSWORD_EMAIL_MUTATION, {
					username: email
				})
				.toPromise();

			if (result.error) {
				throw new Error(result.error.message);
			}

			if (result.data?.sendPasswordResetEmail?.success) {
				success = true;
				launchToast(
					'Email de redefinição enviado! Verifique sua caixa de entrada.',
					'success',
					2000
				);
			} else {
				const errorMessage =
					result.data?.sendPasswordResetEmail?.message || 'Falha ao enviar email de redefinição.';
				throw new Error(errorMessage);
			}
		} catch (err) {
			error = err instanceof Error ? err.message : 'Erro ao enviar email de redefinição.';
			launchToast(error, 'error');
		} finally {
			loading = false;
		}
	}

	// Function to validate password requirements
	function validatePassword(password: string): string | null {
		if (password.length < 8) {
			return 'A senha deve ter pelo menos 8 caracteres.';
		}
		// Add more validation rules as needed
		// if (!/(?=.*[a-z])/.test(password)) {
		// 	return 'A senha deve conter pelo menos uma letra minúscula.';
		// }
		// if (!/(?=.*[A-Z])/.test(password)) {
		// 	return 'A senha deve conter pelo menos uma letra maiúscula.';
		// }
		// if (!/(?=.*\d)/.test(password)) {
		// 	return 'A senha deve conter pelo menos um número.';
		// }
		return null;
	}

	// Handle submission for "Set New Password" form
	async function handleResetPasswordByKeySubmit(event: Event) {
		event.preventDefault();

		// Reset states
		resetError = '';
		resetSuccess = false;

		// Validate inputs
		if (!newPassword || !confirmNewPassword) {
			resetError = 'Por favor, preencha todos os campos.';
			// return;
		}

		if (newPassword !== confirmNewPassword) {
			resetError = 'As senhas não coincidem.';
			// return;
		}

		// Validate password strength
		const passwordValidation = validatePassword(newPassword);
		if (passwordValidation) {
			resetError = passwordValidation;
			// return;
		}

		if (resetError) {
			launchToast(resetError, 'error', 3000);
			return;
		}

		resetLoading = true;

		try {
			const result = await getUrqlClient()
				.client.mutation(CUSTOMER_RESET_PASSWORD_MUTATION, {
					key: resetKey,
					login: resetLogin,
					password: newPassword
				})
				.toPromise();

			if (result.error) {
				throw new Error(result.error.message);
			}

			if (result.data?.resetUserPassword?.user) {
				resetSuccess = true;
				launchToast('Senha redefinida com sucesso! Você já pode fazer login.', 'success', 3000);

				// Clear the form
				newPassword = '';
				confirmNewPassword = '';

				// Optionally redirect to login page after a delay
				setTimeout(() => {
					// You might want to redirect to login page here
					goto(localizeHref('/login/'));
					// window.location.href = '/login';
					// Or call a parent function to switch to login form
				}, 2000);
			} else {
				throw new Error('Falha ao redefinir a senha. Tente novamente.');
			}
		} catch (err) {
			resetError = err instanceof Error ? err.message : 'Erro ao redefinir a senha.';
			launchToast(resetError, 'error', 3000);
		} finally {
			resetLoading = false;
		}
	}
</script>

{#if hasResetParams}
	<!-- Form to set a new password -->
	<form
		id="frm-set-new-password"
		class="px-[30px] my-5 border-b pb-8 border-grey-lighter"
		in:slide={{ duration: 200 }}
		onsubmit={handleResetPasswordByKeySubmit}
	>
		<fieldset>
			<label for="new-password" class="text-sm font-bold">NOVA SENHA</label>
			<div class="relative mt-1">
				<input
					id="new-password"
					type={showNewPassword ? 'text' : 'password'}
					bind:value={newPassword}
					disabled={resetLoading || resetSuccess}
					class="w-full px-3 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm disabled:opacity-50"
					placeholder="Sua nova senha"
					required
				/>
				<button
					type="button"
					class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
					onclick={toggleNewPasswordVisibility}
				>
					{#if showNewPassword}
						<EyeOff class="h-5" />
					{:else}
						<Eye class="h-5" />
					{/if}
				</button>
			</div>
		</fieldset>

		<fieldset class="mt-3">
			<label for="confirm-password" class="text-sm font-bold">CONFIRMAR NOVA SENHA</label>
			<div class="relative mt-1">
				<input
					id="confirm-password"
					type={showConfirmPassword ? 'text' : 'password'}
					bind:value={confirmNewPassword}
					disabled={resetLoading || resetSuccess}
					class="w-full px-3 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm disabled:opacity-50"
					placeholder="Confirme sua nova senha"
					required
				/>
				<button
					type="button"
					class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
					onclick={toggleConfirmPasswordVisibility}
				>
					{#if showConfirmPassword}
						<EyeOff class="h-5" />
					{:else}
						<Eye class="h-5" />
					{/if}
				</button>
			</div>
		</fieldset>

		{#if resetError}
			<div class="mt-3 p-2 bg-red-100 border border-red-300 rounded text-red-700 text-sm">
				{resetError}
			</div>
		{/if}

		{#if resetSuccess}
			<div
				class="flex gap-1 mt-3 p-2 border-green-dark bg-green-light rounded-lg shadow-sm border text-green-medium text-sm"
			>
				<CircleCheck class="h-5" />
				<div>
					<strong>Senha redefinida com sucesso!</strong> Você já pode fazer login.
				</div>
			</div>
		{/if}

		<div class="flex justify-start gap-3 mt-3">
			<button
				type="submit"
				disabled={resetLoading || resetSuccess}
				class="btn form-btn !text-xs mt-0 disabled:opacity-50"
			>
				{resetLoading ? 'Definindo...' : 'Definir Nova Senha'}
			</button>
			<button
				type="button"
				class="text-xs md:text-sm font-bold self-center pr-5 underline"
				onclick={toggleForms}>{m.back()}</button
			>
		</div>
	</form>
{:else}
	<!-- Form to request a password reset email (existing logic remains) -->
	<form
		id="frm-request-reset-password"
		class="px-[30px] my-5 border-b pb-8 border-grey-lighter"
		in:slide={{ duration: 200 }}
		onsubmit={handleResetPasswordSendEmailSubmit}
	>
		<fieldset>
			<label for="username" class="text-sm font-bold">REDEFINIR SENHA</label>

			<input
				id="username"
				type="email"
				bind:value={email}
				disabled={loading || success}
				class="w-full px-3 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mt-2 text-sm disabled:opacity-50"
				placeholder="contato@braaay.com"
				required
			/>
		</fieldset>

		{#if error}
			<div class="mt-3 p-2 bg-red-100 border border-red-300 rounded text-red-700 text-sm">
				{error}
			</div>
		{/if}

		{#if success}
			<div
				class="flex gap-1 mt-3 p-2 border-green-dark bg-green-light rounded-lg shadow-sm border text-green-medium text-sm"
			>
				<CircleCheck class="h-5" />
				<div>
					<strong>Email de redefinição enviado!</strong> Verifique sua caixa de entrada.
				</div>
			</div>
		{/if}

		<div class="flex justify-start gap-3 mt-3">
			<button
				type="submit"
				disabled={loading || success}
				class="btn form-btn !text-xs mt-0 disabled:opacity-50"
			>
				{loading ? 'Enviando...' : 'Redefinir'}
			</button>
			<!-- This now correctly calls the function passed from the parent -->
			<button
				type="button"
				class="text-xs md:text-sm font-bold self-center pr-5 underline"
				onclick={toggleForms}>{m.back()}</button
			>
		</div>
	</form>
{/if}
