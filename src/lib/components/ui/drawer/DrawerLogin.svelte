<script lang="ts">
	import WhatsappButton from '$components/ui/buttons/WhatsappButton.svelte';
	import { slide } from 'svelte/transition';

	let showReset = $state(false);

	function toggleForms(e) {
		e.preventDefault();
		showReset = !showReset;
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
		<form id="frm-login" action="" class="px-[30px] mt-5" in:slide={{ duration: 200 }}>
			<fieldset>
				<label for="username" class="text-sm font-bold">Email</label>
				<input
					id="username"
					type="email"
					class="w-full px-3 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mt-2 text-sm"
					placeholder="contato@braaay.com"
				/>
			</fieldset>
			<fieldset class="mt-3">
				<label for="password" class="text-sm font-bold">Senha</label>
				<input
					id="password"
					type="password"
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
