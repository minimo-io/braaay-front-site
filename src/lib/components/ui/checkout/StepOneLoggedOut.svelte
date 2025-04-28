<script lang="ts">
	import Button from '../buttons/Button.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';
	import { CircleUserRound } from '@lucide/svelte';
</script>

<div class="mx-auto p-6 bg-white border border-grey-lighter rounded-lg shadow-sm">
	<div class="flex justify-between items-center mb-4">
		<h2 class="text-lg font-medium flex items-center">
			<span
				class="inline-flex items-center justify-center w-5 h-5 bg-sun text-grey-background rounded-full mr-2 text-xs"
				>1</span
			>
			Dados cadastrais
		</h2>
		<Button url={localizeHref('/login/')} type="light" title={m.login()} size="xs" minimalPx={true}>
			{#snippet icon()}
				<CircleUserRound class="lucide-button !px-0 !mx-0" />
			{/snippet}
		</Button>
	</div>

	<form class="space-y-4">
		<!-- Email -->
		<input
			type="email"
			placeholder="Digite o seu email"
			class="w-full px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
		/>

		<!-- Celular / WhatsApp -->
		<input
			type="text"
			placeholder="Celular / WhatsApp"
			class="w-full px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
		/>

		<!-- Nome e Sobrenome -->
		<div class="flex space-x-4">
			<input
				type="text"
				placeholder="Nome"
				class="w-1/2 px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
			/>
			<input
				type="text"
				placeholder="Sobrenome"
				class="w-1/2 px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
			/>
		</div>

		<!-- CPF -->
		<input
			type="text"
			placeholder="CPF"
			class="w-full px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
		/>

		<!-- Data de nascimento -->
		<input
			type="text"
			placeholder="Data de nascimento"
			class="w-full px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
		/>

		<!-- Botão de continuar -->
		<!-- <button
        type="submit"
        class="w-full text-sm px-4 py-2 bg-sun text-white font-medium rounded-lg border-grey-light focus:ring-2 focus:ring-sun focus:outline-none"
    >
        CONTINUAR →
    </button> -->
		<div class="py-1">
			<Button type="sun" url="#" title="CONTINUAR →" size="md" rounded="lg" font="md" />
		</div>
	</form>
</div>
