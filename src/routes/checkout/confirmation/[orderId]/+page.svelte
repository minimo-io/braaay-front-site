<script lang="ts">
	import { page } from '$app/state';
	import Meta from '$components/layout/Meta.svelte';
	import { Button } from '$components/ui/buttons';
	import { m } from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { launchToast } from '$lib/utils';
	import { emptyCart } from '$stores/cart.store.svelte.js';
	import { Check } from '@lucide/svelte';
	import { onMount } from 'svelte';

	const orderId = $state(page.params.orderId);

	let { data } = $props();

	onMount(async () => {
		console.log('data', data);
		await emptyCart();
	});
</script>

<Meta
	title="{m.seoCheckoutConfirmationTitle()} {m.seoDivider()} {m.seoBase()}"
	description={m.seoCheckoutConfirmationDescription()}
	noindex={true}
/>

<!-- CONFIRMACON / SUCESSO: {orderId} -->
<div class="text-center max-w-screen-lg mx-auto my-20">
	<!-- Checkmark icon -->
	<div
		class="inline-flex justify-center items-center bg-green-medium rounded-full w-[72px] h-[72px] mb-6"
	>
		<Check class="text-white h-[36px] w-[36px] pt-[3px]" strokeWidth="4" />
	</div>

	<!-- Main Heading -->
	<h1 class="text-2xl md:text-2xl font-black mb-4 text-blue leading-none">
		Obrigado! Pagamento <br />realizado com sucesso
	</h1>

	<!-- Order Status Link -->
	<p class="text-gray-600 mb-6 text-base md:text-lg">
		Você pode acompanhar o status da entrega na
		<a
			href={localizeHref('/account/')}
			class="underline text-blue hover:opacity-50 transition-all font-semibold"
			>página de<br />acompanhamento de pedidos</a
		>.
	</p>

	<!-- Order ID Section -->
	<p class="text-blue opacity-80 font-medium mb-5 text-sm">ID DO PEDIDO:</p>
	<div
		class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
	>
		<input
			value={orderId}
			disabled
			type="text"
			placeholder="Nome"
			class="w-[200px] text-center mr-0 px-4 py-2 border font-bold border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
		/>

		<div class="w-[120px]">
			<Button
				type="sun"
				action={() => {
					navigator.clipboard
						.writeText(orderId)
						.then(() => {
							launchToast(m.copiedToClipboard(), 'success', 2000);
							// console.log('Copied to clipboard');
						})
						.catch((err) => {
							launchToast(`${m.copiedError()} ${err}`, 'error', 2000);
						});
				}}
				title={m.copy()}
				size="xl"
				tracking="normal"
				customPx="w-full"
				font="xl"
				bold={false}
			/>
		</div>
	</div>

	<!-- Footer message with YouTube link -->
	<p class="text-blue opacity-80 text-sm md:text-base leading-relaxed px-10 md:px-60">
		<span role="img" aria-label="wine-glass">🍷👩‍🍳</span> Vamos pensar em harmonizar o seu vinho? Dê
		uma olhada nas sugestões no nosso
		<a
			href="https://www.instagram.com/braaay_com"
			target="_blank"
			rel="nofollow noreferrer"
			class="font-bold underline text-blue-600 hover:text-blue-800 transition-colors">Instagram</a
		>
	</p>
</div>
