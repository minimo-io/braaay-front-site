<script lang="ts">
	import Button from '../buttons/Button.svelte';
	import { Lock } from '@lucide/svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';
	import { CircleUserRound } from '@lucide/svelte';
	import IMask from 'imask';
	import type { Customer } from '$lib/types';
	import { onMount, onDestroy } from 'svelte';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';

	interface Props {
		customer: Customer | undefined;
		onUpdate: (customerData: Customer) => void;
	}
	let { customer, onUpdate }: Props = $props();

	// CPF Mask
	let cpfMask: any;
	let cpfInputElement: HTMLInputElement;
	let cpfValue = $state(customer?.cpf || '');
	const cpfPlaceholder = '000.000.000-00';

	// Email
	let emailValue = $state(customer?.email || '');

	// No longer using emailMask
	let firstName = $state(customer?.firstName || '');
	let lastName = $state(customer?.lastName || '');

	// Date Mask
	let birthDateValue = $state(customer?.birthDate || '');
	let birthDateInputElement: HTMLInputElement;
	let birthDateMask: any;
	const datePlaceholder = 'DD/MM/AAAA';

	// phone imask
	let phoneMask: any;
	let phoneInputElement: HTMLInputElement;
	let phoneValue = $state(customer?.telephone || '');
	// const phonePlaceholderLandline = '(00) 0000-0000';
	const phonePlaceholderMobile = '(00) 0 0000-0000';

	onMount(() => {
		// Phone Mask
		phoneMask = IMask(phoneInputElement, {
			mask: [
				// { mask: phonePlaceholderLandline }, // Landline (8 digits)
				phonePlaceholderMobile // Mobile (9 digits)
			]
			// dispatch: (appended, dynamicMasked) => {
			// 	const number = dynamicMasked.unmaskedValue.replace(/\D/g, '');
			// 	return number.length > 10 ? dynamicMasked.compiledMasks[1] : dynamicMasked.compiledMasks[0];
			// }
		});
		if (phoneValue) phoneMask.unmaskedValue = phoneValue;
		phoneMask.on('accept', () => (phoneValue = phoneMask.unmaskedValue));

		// CPF Mask
		cpfMask = IMask(cpfInputElement, {
			mask: cpfPlaceholder
		});

		if (cpfValue) cpfMask.unmaskedValue = cpfValue;
		cpfMask.on('accept', () => (cpfValue = cpfMask.unmaskedValue));

		// Date Mask
		birthDateMask = IMask(birthDateInputElement, {
			mask: Date,
			pattern: datePlaceholder,
			blocks: {
				DD: {
					mask: IMask.MaskedRange,
					from: 1,
					to: 31,
					maxLength: 2
				},
				MM: {
					mask: IMask.MaskedRange,
					from: 1,
					to: 12,
					maxLength: 2
				},
				AAAA: {
					mask: IMask.MaskedRange,
					from: 1900,
					to: new Date().getFullYear(),
					maxLength: 4
				}
			},
			format: function (date) {
				const day = String(date.getDate()).padStart(2, '0');
				const month = String(date.getMonth() + 1).padStart(2, '0');
				return `${day}/${month}/${date.getFullYear()}`;
			},
			parse: function (str) {
				const [day, month, year] = str.split('/');
				return new Date(Number(year), Number(month) - 1, Number(day));
			},
			overwrite: true,
			autofix: true
		});

		// Set initial value if available
		if (birthDateValue) {
			// Format date as DD/MM/YYYY if it's in raw format
			if (!birthDateValue.includes('/')) {
				const day = birthDateValue.substring(0, 2);
				const month = birthDateValue.substring(2, 4);
				const year = birthDateValue.substring(4);
				birthDateInputElement.value = `${day}/${month}/${year}`;
			} else {
				birthDateInputElement.value = birthDateValue;
			}
		}

		// Store formatted value on change
		birthDateMask.on('accept', () => {
			// const rawValue = birthDateMask.unmaskedValue;
			const formattedValue = birthDateInputElement.value;
			birthDateValue = formattedValue; // Store formatted value instead of raw
		});
	});

	onDestroy(() => {
		cpfMask?.destroy();
		birthDateMask?.destroy();
	});
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
		<div class="md:hidden">
			<Button
				url={localizeHref('/login/')}
				type="light"
				title={m.login()}
				size="xs"
				minimalPx={true}
			>
				{#snippet icon()}
					<CircleUserRound class="lucide-button !px-0 !mx-0" />
				{/snippet}
			</Button>
		</div>
	</div>

	<form class="space-y-4">
		<!-- Email -->
		<input
			bind:value={emailValue}
			type="email"
			placeholder="Digite o seu email"
			class="w-full px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
		/>

		<!-- Celular / WhatsApp -->
		<input
			bind:this={phoneInputElement}
			type="tel"
			placeholder="Celular / WhatsApp"
			class="w-full px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
		/>

		<!-- Nome e Sobrenome -->
		<div class="flex space-x-4">
			<input
				bind:value={firstName}
				type="text"
				placeholder="Nome"
				class="w-1/2 px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
			/>
			<input
				type="text"
				bind:value={lastName}
				placeholder="Sobrenome"
				class="w-1/2 px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
			/>
		</div>

		<div class="flex space-x-4">
			<!-- CPF -->
			<input
				bind:this={cpfInputElement}
				type="text"
				placeholder="CPF"
				class="w-full px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
			/>

			<!-- Data de nascimento -->
			<input
				bind:this={birthDateInputElement}
				type="text"
				placeholder={datePlaceholder}
				class="w-full px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
			/>
		</div>
		<!-- Next -->
		<div class="py-1">
			<Button
				action={() => {
					toggleLoader();
					setTimeout(() => {}, 1000);
					onUpdate({
						databaseId: undefined,
						email: emailValue,
						cpf: cpfValue,
						telephone: phoneValue,
						birthDate: birthDateValue,
						firstName: firstName,
						lastName: lastName
					});
					toggleLoader();
				}}
				type="sun"
				url="#"
				title="CONTINUAR →"
				size="md"
				rounded="lg"
				font="md"
			>
				{#snippet icon()}
					<Lock class="h-4" />
				{/snippet}
			</Button>
		</div>
	</form>
</div>
