<script lang="ts">
	import { page } from '$app/state';

	import WhatsappButton from '$components/ui/buttons/WhatsappButton.svelte';
	import { slide } from 'svelte/transition';
	import { login } from '$lib/graphql/auth';
	import { redirectHref } from '$lib/utils';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';

	let showReset = $state(false);

	let email = $state('');
	let password = $state('');
	let processing = $state(false);
	let returnUrl = $derived(page.url.href);
	let error = $state('');

	// Derived state with runes

	function toggleForms(e) {
		e.preventDefault();
		showReset = !showReset;
	}

	// Handle the login form submission
	async function handleSubmit(event) {
		event.preventDefault();
		processing = true;
		toggleLoader();
		try {
			let loginResult = await login(email, password);
			if (loginResult && loginResult.success) {
				error = '';
				redirectHref(returnUrl);
			} else {
				error = loginResult.message;
				processing = false;
				toggleLoader();
			}
		} catch (error) {
			processing = false;

			toggleLoader();
		}
	}
</script>

{#if showReset}
	<form
		id="frm-reset-password"
		action=""
		class="px-[30px] my-5 border-b pb-8 border-grey-lighter"
		in:slide={{ duration: 200 }}
	>
		<fieldset>
			<label for="username" class="text-sm font-bold">REDEFINIR SENHA</label>
			<input
				id="username"
				type="email"
				class="w-full px-3 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mt-2 text-sm"
				placeholder="contato@braaay.com"
			/>
		</fieldset>
		<div class="flex justify-start gap-3 mt-3">
			<button type="submit" class="btn form-btn !text-xs mt-0">Redefinir</button>
			<button class="text-xs font-bold self-center pr-5 underline" onclick={toggleForms}
				>Voltar</button
			>
		</div>
	</form>
{:else}
	<div class="border-b pb-8 border-grey-lighter">
		<form
			id="frm-login"
			method="POST"
			onsubmit={handleSubmit}
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
					class="w-full px-3 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mt-2 text-sm"
					placeholder="contato@braaay.com"
				/>
			</fieldset>
			<fieldset class="mt-3">
				<label for="password" class="text-sm font-bold">Senha</label>
				<input
					id="password"
					name="password"
					type="password"
					bind:value={password}
					disabled={processing}
					class="w-full px-3 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mt-2 text-sm"
					placeholder="123456789!"
				/>
			</fieldset>
			<div class="flex justify-start gap-3 mt-3">
				<button type="submit" class="btn form-btn !text-xs mt-0">Entrar</button>
				<button class="text-xs font-bold self-center pr-5 underline" onclick={toggleForms}
					>Esqueceu sua senha?</button
				>
			</div>
			{#if error}
				<div class="text-center text-red-medium text-sm pt-4">{error}</div>
			{/if}
		</form>
	</div>
{/if}
<div class="px-[35px] flex flex-col text-xs mt-7 border-b border-grey-lighter pb-6">
	<strong class="uppercase">Precisar de ajuda?</strong>
	<span class="text-grey-medium-dark my-2"
		>Entre em contato com nossa equipe através do botão abaixo e nós o ajudaremos.</span
	>
	<div class="relative w-fit"><WhatsappButton /></div>
</div>
