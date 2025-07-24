<script lang="ts">
	import Button from '../buttons/Button.svelte';
	import { Lock } from '@lucide/svelte';
	import IMask from 'imask';
	import type { Customer } from '$lib/types';
	import { onMount, onDestroy } from 'svelte';
	import { getAddressFromCep } from '$lib/services/index';
	import type { CustomerAddress } from '$lib/types';
	import { getLocale } from '$lib/paraglide/runtime';
	import { launchToast, numbersOnly } from '$lib/utils';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';
	import ZipQueryButton from '../buttons/ZipQueryButton.svelte';

	interface Props {
		customer: Customer | undefined;
		onActionClick: (shippingData: CustomerAddress) => void;
	}

	let { customer, onActionClick }: Props = $props();

	// --- State Management ---
	// CRITICAL: zipValue is the source of truth for the ZIP code, initialized from customer prop.
	let zipValue = $state(customer?.addresses?.shipping?.postcode || '');
	let street = $state(customer?.addresses?.shipping?.address1 || '');
	let number = $state(''); // Number input by user
	let complement = $state(customer?.addresses?.shipping?.address2 || ''); // Complement input by user
	let neighborhood = $state(''); // Fetched or input by user
	let city = $state(customer?.addresses?.shipping?.city || '');
	let stateCode = $state(customer?.addresses?.shipping?.state || '');

	let isLoading = $state(false);
	let errorMessage = $state('');
	// CRITICAL: Initialize visibility based on initial data to allow editing/errors.
	let addressFieldsVisible = $state(!!customer?.addresses?.shipping?.postcode);

	// --- Initialization Logic ---
	// CRITICAL: Track if we've performed the one-time initialization for the current customer data load.
	// Using a simple variable instead of $state for this flag as it's internal control logic.
	let hasInitialized = false;

	// CRITICAL: Dedicated function to initialize the component based on customer data.
	// This replaces the problematic $effect.
	function initializeFromCustomer() {
		// Guard clause: only run initialization once per customer data load.
		if (hasInitialized) return;

		if (customer?.addresses?.shipping) {
			const shippingAddress = customer.addresses.shipping;

			// Update form fields from customer data ONE TIME.
			// zipValue is already initialized, but we can ensure it's set here too if needed.
			// However, let's trust the initial $state assignment for zipValue for consistency.
			// zipValue = shippingAddress.postcode || '';
			street = shippingAddress.address1 || '';
			// number, complement, neighborhood are user inputs, don't prefill from existing address1/address2
			// They are already initialized as empty strings.
			// number = '';
			// complement = shippingAddress.address2 || '';
			// neighborhood = '';
			city = shippingAddress.city || '';
			stateCode = shippingAddress.state || '';

			// Ensure address fields are visible for editing or showing initial lookup results/errors.
			addressFieldsVisible = true;

			// CRITICAL: Trigger the initial lookup for the customer's postcode if it's valid.
			if (shippingAddress.postcode && shippingAddress.postcode.length === 8) {
				// Decouple the API call slightly from the initialization cycle.
				setTimeout(() => {
					fetchAddressFromCep(shippingAddress.postcode!);
				}, 0);
			}
		}
		// Mark initialization as complete to prevent it from running again.
		hasInitialized = true;
	}

	// --- IMask Logic ---
	let zipMask: any;
	let zipInputElement: HTMLInputElement;
	const zipPlaceholder = '00000-000';

	onMount(() => {
		// Initialize the mask
		zipMask = IMask(zipInputElement, {
			mask: zipPlaceholder
		});

		// CRITICAL: Set the initial mask value from zipValue (which came from customer prop).
		// This happens only once on mount.
		if (zipValue) {
			zipMask.unmaskedValue = zipValue;
		}

		// CRITICAL: Update state when input changes - This is the PRIMARY source of zipValue updates.
		zipMask.on('accept', () => {
			// This ensures that whenever the user types, zipValue reflects the mask's current unmasked value.
			zipValue = zipMask.unmaskedValue;
			// Reset error when user modifies input
			if (errorMessage) {
				errorMessage = '';
			}
		});

		// Trigger address lookup when CEP is complete
		zipMask.on('complete', () => {
			fetchAddressFromCep(zipMask.unmaskedValue);
		});

		// CRITICAL: Run the initialization logic after the mask is set up.
		initializeFromCustomer();
	});

	onDestroy(() => {
		if (zipMask) {
			zipMask.destroy();
		}
	});

	// --- Event Handlers ---
	// Handle input changes (fallback or specific logic)
	function handleZipChange(event: Event) {
		// Main update is via IMask 'accept' event.
		// This handler ensures zipValue syncs if needed.
		if (zipMask) {
			// Ensure zipValue reflects the mask state.
			// This might be slightly redundant with 'accept' but ensures consistency.
			zipValue = zipMask.unmaskedValue;
		} else {
			// Fallback if mask isn't ready (unlikely after onMount).
			const target = event.target as HTMLInputElement;
			zipValue = target.value.replace(/\D/g, '');
		}
		if (errorMessage) {
			errorMessage = '';
		}
	}

	// Handle blur event to trigger address lookup
	function handleZipBlur() {
		if (zipMask && zipMask.unmaskedValue?.length === 8) {
			fetchAddressFromCep(zipMask.unmaskedValue);
		} else if (zipMask && zipMask.unmaskedValue?.length > 0 && zipMask.unmaskedValue?.length < 8) {
			errorMessage = 'CEP incompleto';
		}
		// Clear error if field becomes empty? Optional.
		// else if (zipMask && !zipMask.unmaskedValue) {
		//     errorMessage = '';
		// }
	}

	// --- API Call ---
	// Function to fetch address data from CEP
	async function fetchAddressFromCep(cep: string) {
		// Only proceed if we have a complete CEP (8 digits)
		if (cep.length !== 8) return;

		// Reset any previous error and show loading state
		errorMessage = '';
		isLoading = true;

		try {
			const addressData = await getAddressFromCep(cep);

			if (!addressData) {
				errorMessage = 'CEP não encontrado';
				// Clear address fields fetched from API on "not found"
				street = '';
				neighborhood = '';
				city = '';
				stateCode = '';
				// CRITICAL: Still show the fields so user knows the ZIP was processed and failed.
				// addressFieldsVisible should already be true, but ensure it.
				// addressFieldsVisible = true;
				return; // Exit early on not found
			}

			// Update address fields with fetched data
			street = addressData.street || '';
			neighborhood = addressData.neighborhood || '';
			city = addressData.city || '';
			stateCode = addressData.state || '';

			// CRITICAL: Make address fields visible AFTER populating data.
			// If user typed a new ZIP, fields might not be visible yet, so ensure they are.
			// addressFieldsVisible is likely already true from initialization, but ensure it.
			addressFieldsVisible = true;
		} catch (err) {
			console.error('Error fetching CEP ', err);
			if (err instanceof Error) {
				errorMessage = err.message;
			} else {
				errorMessage = 'Erro ao buscar o CEP. Tente novamente.';
			}

			// On any error, also show fields and clear fetched data
			street = '';
			neighborhood = '';
			city = '';
			stateCode = '';
			// Ensure fields are visible to show error context
			addressFieldsVisible = true;
		} finally {
			isLoading = false;
		}
	}

	// --- Validation ---
	/**
	 * Validates the checkout step two form (shipping address)
	 * @param {CustomerAddress} address - The shipping address data to validate
	 * @returns {Object} - Validation result with valid flag and any error messages
	 */
	function validateCheckoutStepTwo(address: CustomerAddress) {
		const result = {
			valid: true,
			errors: {} as Record<string, string>
		};

		const requiredFields = [
			{ field: 'address1', message: 'Endereço é obrigatório' },
			{ field: 'city', message: 'Cidade é obrigatória' },
			{ field: 'postcode', message: 'CEP é obrigatório' },
			{ field: 'state', message: 'Estado é obrigatório' }
		];

		for (const { field, message } of requiredFields) {
			if (
				!address[field as keyof CustomerAddress] ||
				String(address[field as keyof CustomerAddress]).trim() === ''
			) {
				result.valid = false;
				result.errors[field] = message;
			}
		}

		// Validate separate number field
		if (!number.trim()) {
			result.valid = false;
			result.errors.address1 = 'Número é obrigatório';
		}
		// Validate separate neighborhood field (address2)
		if (!neighborhood.trim()) {
			result.valid = false;
			result.errors.address2 = 'Bairro é obrigatório';
		}

		// CEP validation for Brazil
		if (address.country === 'BR' && address.postcode.trim()) {
			const cleanPostcode = address.postcode.replace(/\D/g, '');
			if (cleanPostcode.length !== 8) {
				result.valid = false;
				result.errors.postcode = 'CEP deve conter 8 dígitos';
			}
		}

		// State validation for Brazil
		if (address.country === 'BR' && address.state) {
			const stateRegex = /^[A-Z]{2}$/i;
			if (!stateRegex.test(address.state)) {
				result.valid = false;
				result.errors.state = 'Estado deve conter 2 letras';
			}
		}

		// Address line validation (combined street + number)
		const fullStreet = `${street} ${number}`.trim();
		if (fullStreet.length < 5) {
			result.valid = false;
			result.errors.address1 = 'Endereço muito curto';
		}

		// City validation
		if (address.city) {
			if (address.city.length < 2) {
				result.valid = false;
				result.errors.city = 'Nome da cidade muito curto';
			}
			if (/\d/.test(address.city)) {
				result.valid = false;
				result.errors.city = 'Nome da cidade não deve conter números';
			}
		}

		// Note: Complement validation was inconsistent. Removed as it's often optional.
		// If required, add a check for `complement.trim()`.

		return result;
	}
</script>

<div class="mx-auto p-6 bg-white border border-grey-lighter rounded-lg shadow-sm">
	<div class="flex justify-between items-center mb-4">
		<h2 class="text-lg font-medium flex items-center">
			<span
				class="inline-flex items-center justify-center w-5 h-5 bg-sun text-grey-background rounded-full mr-2 text-xs"
				>2</span
			>
			Endereço de entrega
		</h2>
	</div>
	<form class="space-y-4">
		<!-- CEP / ZIP Code -->
		<div class="relative">
			<label for="cep" class="block text-sm font-medium text-grey-darker mb-1">CEP</label>
			<div class="relative">
				<input
					id="cep"
					bind:this={zipInputElement}
					oninput={handleZipChange}
					onblur={handleZipBlur}
					type="tel"
					placeholder={zipPlaceholder}
					class="w-full px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
					aria-describedby={errorMessage ? 'cep-error' : undefined}
				/>
				{#if isLoading}
					<div class="absolute right-3 top-1/2 transform -translate-y-1/2">
						<div
							class="animate-spin h-5 w-5 border-2 border-blue-500 rounded-full border-t-transparent"
						></div>
					</div>
				{/if}
			</div>
			<div class="mt-3 mr-2">
				<ZipQueryButton />
			</div>
			{#if errorMessage}
				<p id="cep-error" class="mt-2 ml-1 text-xs text-red-500 text-red-dark font-bold">
					{errorMessage}
				</p>
			{/if}
		</div>

		<!-- Address Fields -->
		{#if addressFieldsVisible}
			<!-- Street -->
			<div>
				<label for="street" class="block text-sm font-medium text-grey-darker mb-1"
					>Logradouro</label
				>
				<input
					id="street"
					bind:value={street}
					maxlength="100"
					type="text"
					placeholder="Exemplo: Avenida Paulista"
					class="w-full px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
				/>
			</div>

			<!-- Number and Complement in same row -->
			<div class="grid grid-cols-2 gap-4">
				<div>
					<label for="number" class="block text-sm font-medium text-grey-darker mb-1">Número</label>
					<input
						id="number"
						bind:value={number}
						use:numbersOnly
						type="tel"
						inputmode="numeric"
						pattern="[0-9]*"
						maxlength="5"
						placeholder="123"
						class="w-full px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
					/>
				</div>
				<div>
					<label for="complement" class="block text-sm font-medium text-grey-darker mb-1">
						Complemento
					</label>
					<input
						id="complement"
						bind:value={complement}
						maxlength="20"
						type="text"
						placeholder="Apto, Bloco, etc."
						class="w-full px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
					/>
				</div>
			</div>

			<!-- Neighborhood -->
			<div>
				<label for="neighborhood" class="block text-sm font-medium text-grey-darker mb-1"
					>Bairro</label
				>
				<input
					id="neighborhood"
					bind:value={neighborhood}
					placeholder="Exemplo: Pinheiros"
					type="text"
					class="w-full px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
				/>
			</div>

			<!-- City and State in same row -->
			<div class="grid grid-cols-3 gap-4">
				<div class="col-span-2">
					<label for="city" class="block text-sm font-medium text-grey-darker mb-1">Cidade</label>
					<input
						id="city"
						placeholder="Exemplo: São Paulo"
						bind:value={city}
						type="text"
						class="w-full px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
					/>
				</div>
				<div>
					<label for="state" class="block text-sm font-medium text-grey-darker mb-1">Estado</label>
					<input
						id="state"
						bind:value={stateCode}
						placeholder="Exemplo: SP"
						pattern="[A-Za-z]{2}"
						maxlength="2"
						type="text"
						class="w-full px-4 py-2 border border-grey-light rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
					/>
				</div>
			</div>
		{/if}

		<div class="py-1">
			{#if zipValue && addressFieldsVisible}
				<Button
					action={() => {
						toggleLoader();
						const frmValues = {
							firstName: customer?.firstName || '',
							lastName: customer?.lastName || '',
							company: '',
							// Combine street, number, and complement into address1
							address1: `${street} ${number}${complement ? ' / ' + complement : ''}`.trim(),
							// Use neighborhood variable for address2
							address2: neighborhood,
							city: city,
							postcode: zipValue,
							country: getLocale() == 'pt' ? 'BR' : 'UY',
							state: stateCode
						};
						const validation = validateCheckoutStepTwo(frmValues);
						if (validation.valid) {
							onActionClick(frmValues);
						} else {
							Object.values(validation.errors).forEach((msg) => launchToast(msg, 'error'));
						}
						toggleLoader();
					}}
					type="sun"
					title="CONTINUAR →"
					size="md"
					rounded="lg"
					font="md"
				>
					{#snippet icon()}
						<Lock class="h-4" />
					{/snippet}
				</Button>
			{/if}
		</div>
	</form>
</div>
