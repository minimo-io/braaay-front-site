<script lang="ts">
	import { page } from '$app/state';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { loaderActivated, toggleLoader } from '$stores/loaderStore.state.svelte';
	import { onMount } from 'svelte';

	import { Button } from '$components/ui/buttons';
	import { m } from '$lib/paraglide/messages';
	import { launchToast } from '$lib/utils';
	import { Check, X } from '@lucide/svelte';
	import { AppConfig } from '$config';

	const routeId = page.route.id;
	const orderId = $derived(page.url.searchParams.get('orderId'));
	const errorCode = $derived(page.url.searchParams.get('code'));
	const details = $derived(page.url.searchParams.get('details'));

	onMount(() => {
		loaderActivated.active = false;
	});

	// const orderId = $state(page.params.orderId);
</script>

<!-- CONFIRMACON / SUCESSO: {orderId} -->
<div class="text-center max-w-screen-lg mx-auto my-20">
	<!-- Checkmark icon -->
	<div
		class="inline-flex justify-center items-center bg-red-medium rounded-full w-[72px] h-[72px] mb-6"
	>
		<X class="text-white h-[36px] w-[36px] pt-[3px] !mr-0" strokeWidth="4" />
	</div>

	<!-- Main Heading -->
	<h1 class="text-2xl md:text-2xl font-black mb-4 text-blue leading-tight">
		Ups! Ocorreu um erro na solicitação <br />do pagamento
	</h1>

	<!-- Order Status Link -->
	<p class="text-gray-600 mb-6 text-base md:text-lg px-10 md:px-[20%]">
		Tente novamente ou entre em contato com nosso
		<a
			target="_blank"
			href={AppConfig.whatsappLink}
			class="underline text-blue hover:opacity-50 transition-all font-semibold"
			>time de atendimento via Whatsapp</a
		>.
	</p>

	<!-- Order ID Section -->
	<div
		class="border border-grey-lighter bg-white w-fit text-left mx-auto mb-5 md:rounded-lg px-10 py-5 flex flex-col gap-5"
	>
		{#if orderId}
			<p class="text-blue opacity-80 font-medium text-sm">
				ID DO PEDIDO:
				<span class="font-bold">#{orderId}</span>
			</p>
		{/if}

		<!-- Error code -->
		{#if orderId}
			<p class="text-blue opacity-80 font-medium text-sm">
				CÓDIGO DO ERRO:

				<span class="font-bold">{errorCode}</span>
			</p>
		{/if}

		<!-- Order ID Section -->
		{#if details}
			<p class="text-blue opacity-80 font-medium text-sm">
				MOTIVO DO ERRO:
				<span class="font-bold mt-1 block">{details}</span>
			</p>
		{/if}
	</div>

	<div class="w-[200px] mx-auto">
		<Button
			type="light"
			url={AppConfig.whatsappLink}
			newTab
			title={'Entrar em contato'}
			size="xl"
			tracking="normal"
			customPx="w-full"
			font="md"
			bold
		/>
		<div class="mt-3">
			<a class="text-sm text-grey-medium-dark" href={localizeHref('/checkout/')}
				>Voltar ao checkout</a
			>
		</div>
	</div>

	<!-- Footer message with YouTube link
	<p class="text-blue opacity-80 text-sm md:text-base leading-relaxed px-10 md:px-60">
		<span role="img" aria-label="wine-glass">🍷👩‍🍳</span> Vamos pensar em harmonizar o seu vinho? Dê
		uma olhada nas sugestões no nosso
		<a
			href="https://www.instagram.com/braaay_com"
			target="_blank"
			rel="nofollow noreferrer"
			class="font-bold underline text-blue-600 hover:text-blue-800 transition-colors">Instagram</a
		>
	</p> -->
</div>
