<script lang="ts">
	import { getUrqlClient } from '$stores/urqlClient.state.svelte';

	import Button from '../buttons/Button.svelte';
	import { Lock } from '@lucide/svelte';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';
	import { launchToast } from '$lib/utils';
	import { Sparkle } from '@lucide/svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
	import CheckoutProductOffers from './CheckoutProductOffers.svelte';

	import { DeliveryUIType } from '$lib/types';
	import { onMount } from 'svelte';
	interface Props {
		deliveryType: DeliveryUIType | null;
		sessionToken: string;
	}

	let { deliveryType, sessionToken }: Props = $props();

	let loading = $state(false);
	let error = $state('');

	onMount(async () => {
		toggleLoader();
		loading = true;
		error = '';
		try {
			launchToast(`Obtendo parceiros...`, 'info', 2000);

			// const updateResult = await getUrqlClient()
			// 	.client.mutation(UPDATE_GUEST_SHIPPING_ADDRESS, {
			// 		input: {}
			// 	})
			// 	.toPromise();
		} catch (err) {
			console.error(`${err}`);
			// alert(sessionToken);
		}
	});
</script>

<div class="mx-auto p-6 bg-white border border-grey-lighter rounded-lg shadow-sm">
	<div class="flex justify-between items-center mb-4">
		<h2 class="text-lg font-medium flex items-center">
			<span
				class="inline-flex items-center justify-center w-5 h-5 bg-sun text-grey-background rounded-full mr-2 text-xs"
				>{deliveryType == 'DELIVERY' ? 4 : 3}</span
			>
			Pagamento
		</h2>
	</div>

	<form class="">
		<div class="bg-grey-background border-grey-light border px-3 py-2 rounded-lg font-roboto mb-2">
			<label class="flex justify-between text-sm cursor-pointer">
				<div class="self-center flex">
					<input type="radio" tabindex="0" name="radio1" />
					<span class="ml-2 text-grey-blueish">PIX</span>
				</div>
				<div class="font-bold font-roboto">R$&nbsp;60,04</div>
			</label>
		</div>

		<div
			class="bg-grey-background border-grey-light mt-0 border px-3 py-2 rounded-lg font-roboto mb-2"
		>
			<label class="flex justify-between text-sm cursor-pointer" for="radio1">
				<div class="self-center flex">
					<input type="radio" id="radio1" name="radio1" tabindex="0" />
					<span class="ml-2 text-grey-blueish">Boleto bancário</span>
				</div>
				<div class="font-bold font-roboto">R$&nbsp;60,04</div>
			</label>
		</div>

		<div
			class="bg-grey-background border-grey-light mt-0 border px-3 py-2 rounded-lg font-roboto mb-2"
		>
			<label class="flex justify-between text-sm cursor-pointer">
				<div class="self-center flex">
					<input type="radio" name="radio1" tabindex="0" />
					<span class="ml-2 text-grey-blueish">Cartão de crédito</span>
				</div>
				<div class="font-bold font-roboto">R$&nbsp;60,04</div>
			</label>
		</div>

		<!-- Promocoes -->
		<div class="flex items-center text-sm my-5 px-3">
			<input type="checkbox" name="radio-promos" class="mr-2" checked />
			<label for="radio-promos">Quero receber novidades e promoções</label>
		</div>

		<!-- Offers controls -->
		<CheckoutProductOffers />

		<!-- Botão de continuar -->
		<!-- <button
            type="submit"
            class="w-full mt-2 text-sm px-4 py-3 bg-sun text-white font-medium rounded-lg border-grey-light focus:ring-2 focus:ring-sun focus:outline-none"
        >
            FINALIZAR COMPRA
        </button> -->
		<div class="py-3">
			<Button
				type="sun"
				url="#"
				action={() => {
					alert('Submit');
				}}
				title="FINALIZAR COMPRA"
				size="xl"
				rounded="lg"
				font="md"
			>
				{#snippet icon()}
					<Lock class="h-4" />
				{/snippet}
			</Button>
		</div>
	</form>

	<!-- Promo -->
	<div
		class="border bg-white rounded-md border-sun shadow-md p-6 max-w-sm md:mx-auto mt-4 md:hidden"
	>
		<div class="text-center">
			<h2 class="text-xl tracking-widest text-sun font-prata flex justify-center scale-90">
				<Sparkle class="pr-1" />
				<span>SEJA PASSPORT!</span>
				<Sparkle class="pl-1" />
			</h2>
			<p class="text-lg font-semibold mt-2 leading-[23px]">
				Ganhe 10% em cashback, fretes grátis + 3 vinhos todo mês!
			</p>
			<p class="text-xs text-grey-dark mt-3 leading-2">
				Junte-se ao APP do Clube e
				<strong>Economize, Ganhe, Diverta-se com vinho!</strong>
				Com cashbacks entre 5 e 10% em toda compra, 3 vinhos top todo mês + fretes grátis! Além de experiências
				com outros Passport e compras coletivas!
			</p>
			<div class="mx-10 py-2">
				<Button
					title="Adicionar ao carrinho"
					type="sun"
					url={localizeHref('/cart/')}
					tracking="normal"
				/>
			</div>
			<p class="text-xs text-gray-500 mt-2">
				<a href={localizeHref('/club/')} class="text-blue-500 underline">Saiba mais</a>
			</p>
		</div>
	</div>
</div>
