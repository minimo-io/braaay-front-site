<!-- CreditCardForm.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import type { CreditCardFormData } from '$lib/types';
	import IMask from 'imask';

	// Runes for reactive state
	let cardNumber = $state('');
	let cardholderName = $state('');
	let expiryDate = $state('');
	let securityCode = $state('');

	// Element references
	let cardNumberInput: HTMLInputElement;
	let expiryInput: HTMLInputElement;
	let securityCodeInput: HTMLInputElement;

	// IMask instances
	let cardNumberMask: any;
	let expiryMask: any;
	let securityCodeMask: any;

	interface Props {
		onCreditCardChange: (creditCardData: CreditCardFormData) => void;
	}

	let { onCreditCardChange }: Props = $props();

	// Derived state for form validation
	const isValid = $derived(
		cardNumber.length === 16 &&
			cardholderName.trim().length > 0 &&
			expiryDate.length === 5 &&
			securityCode.length === 3
	);

	// Derived state for form data
	const formData = $derived({
		cardNumber,
		cardholderName,
		expiryDate,
		securityCode,
		isValid
	});

	// Effect to call parent function whenever form data changes
	$effect(() => {
		onCreditCardChange(formData);
	});

	onMount(() => {
		// Card number mask (16 digits with spaces)
		cardNumberMask = IMask(cardNumberInput, {
			mask: '0000 0000 0000 0000',
			lazy: false
		});

		cardNumberMask.on('accept', () => {
			cardNumber = cardNumberMask.unmaskedValue;
		});

		// Expiry date mask (MM/YY)
		expiryMask = IMask(expiryInput, {
			mask: 'MM/YY',
			blocks: {
				MM: {
					mask: IMask.MaskedRange,
					from: 1,
					to: 12
				},
				YY: {
					mask: '00'
				}
			},
			lazy: false
		});

		expiryMask.on('accept', () => {
			expiryDate = expiryMask.value;
		});

		// Security code mask (3 digits)
		securityCodeMask = IMask(securityCodeInput, {
			mask: '000',
			lazy: false
		});

		securityCodeMask.on('accept', () => {
			securityCode = securityCodeMask.unmaskedValue;
		});

		return () => {
			// Cleanup masks on component destroy
			cardNumberMask?.destroy();
			expiryMask?.destroy();
			securityCodeMask?.destroy();
		};
	});

	// Handle cardholder name changes (since it's not masked)
	function handleCardholderNameChange(event: Event) {
		const target = event.target as HTMLInputElement;
		cardholderName = target.value;
	}
</script>

<div class="w-full mx-auto rounded-lg p-6 bg-grey-background border-grey-light border">
	<h2 class="!text-base font-medium mb-6">🔐 Preencha os dados do seu cartão</h2>

	<form class="flex flex-col gap-6">
		<!-- Card Number -->
		<div class="flex flex-col gap-2">
			<label for="cardNumber" class="text-sm font-medium text-gray-700">
				Número do cartão <span class="text-red-500">*</span>
			</label>
			<input
				bind:this={cardNumberInput}
				id="cardNumber"
				type="text"
				placeholder="0000 0000 0000 0000"
				class="px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
				required
			/>
		</div>

		<!-- Cardholder Name -->
		<div class="flex flex-col gap-2">
			<label for="cardholderName" class="text-sm font-medium text-gray-700">
				Nome do titular como aparece no cartão <span class="text-red-500">*</span>
			</label>
			<input
				bind:value={cardholderName}
				oninput={handleCardholderNameChange}
				id="cardholderName"
				type="text"
				placeholder="Ex.: Maria López"
				class="px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
				required
			/>
		</div>

		<!-- Expiry Date and Security Code -->
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
			<div class="flex flex-col gap-2">
				<label for="expiryDate" class="text-sm font-medium text-gray-700">
					Vencimento <span class="text-red-500">*</span>
				</label>
				<input
					bind:this={expiryInput}
					id="expiryDate"
					type="text"
					placeholder="mm/aa"
					class="px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
					required
				/>
			</div>

			<div class="flex flex-col gap-2">
				<label for="securityCode" class="text-sm font-medium text-gray-700">
					Código de segurança <span class="text-red-500">*</span>
				</label>
				<input
					bind:this={securityCodeInput}
					id="securityCode"
					type="text"
					placeholder="123"
					class="px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
					required
				/>
			</div>
		</div>
	</form>
</div>
