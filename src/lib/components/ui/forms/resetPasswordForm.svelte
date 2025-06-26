<script lang="ts">
	import { onMount } from 'svelte';
	import { m } from '$lib/paraglide/messages';
	import { slide } from 'svelte/transition';
	import { getUrqlClient } from '$stores/urqlClient.state.svelte';
	import { CUSTOMER_SEND_RESET_PASSWORD_EMAIL_MUTATION } from '$lib/graphql/mutations';
	import { launchToast } from '$lib/utils';
	import { Check, CircleCheck, Eye, EyeOff } from '@lucide/svelte'; // Import Lucide icons

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
	async function handleSubmit(event: Event) {
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

	// Placeholder function for the new password form submission
	// (Actual logic for setting new password is not included as per request,
	// this is just a sample form structure.)
	function handleSampleSetNewPassword(event: Event) {
		event.preventDefault();
		// You would add your GraphQL mutation for setting the new password here
		// using resetKey, resetLogin, newPassword, and confirmNewPassword.
		console.log('Attempting to set new password:', {
			key: resetKey,
			login: resetLogin,
			newPassword: newPassword,
			confirmNewPassword: confirmNewPassword
		});
		// Add your actual password reset logic (GraphQL mutation) here later
		// For now, this is just a sample submit handler.
	}
</script>

{#if hasResetParams}
	<!-- Form to set a new password -->
	<form
		id="frm-set-new-password"
		class="px-[30px] my-5 border-b pb-8 border-grey-lighter"
		in:slide={{ duration: 200 }}
		onsubmit={handleSampleSetNewPassword}
	>
		<fieldset>
			<label for="new-password" class="text-sm font-bold">NOVA SENHA</label>
			<div class="relative mt-1">
				<input
					id="new-password"
					type={showNewPassword ? 'text' : 'password'}
					bind:value={newPassword}
					class="w-full px-3 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
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
					class="w-full px-3 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
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

		<div class="flex justify-start gap-3 mt-3">
			<button type="submit" class="btn form-btn !text-xs mt-0"> Definir Nova Senha </button>
			<button
				type="button"
				class="text-sm font-bold self-center pr-5 underline"
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
		onsubmit={handleSubmit}
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
				class="text-sm font-bold self-center pr-5 underline"
				onclick={toggleForms}>{m.back()}</button
			>
		</div>
	</form>
{/if}
