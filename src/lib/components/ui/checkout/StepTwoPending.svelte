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

	// let realCustomer: Customer | undefined = $state();

	// Form state with $state for reactivity
	let zipValue = $state(customer?.addresses?.shipping?.postcode || '');
	let street = $state(customer?.addresses?.shipping?.address1 || '');
	let number = $state('');
	let complement = $state(customer?.addresses?.shipping?.address2 || '');
	let neighborhood = $state('');
	let city = $state(customer?.addresses?.shipping?.city || '');
	let stateCode = $state(customer?.addresses?.shipping?.state || '');

	// Status flags
	let isLoading = $state(false);
	let errorMessage = $state('');
	let addressFieldsVisible = $state(false);

	// Update form fields whenever customer changes
	$effect(() => {
		if (customer?.addresses?.shipping?.postcode) {
			// Update all our form fields from customer data
			zipValue = customer.addresses.shipping.postcode || '';
			// street = customer.addresses.shipping.address1 || '';
			// number = '';
			// complement = customer.addresses.shipping.address2 || '';
			// neighborhood = '';
			// city = customer.addresses.shipping.city || '';
			// stateCode = customer.addresses.shipping.state || '';

			// Show address fields if we have address data
			addressFieldsVisible = !!(street || city || stateCode);

			// If mask is already initialized, update its value too
			if (zipMask && customer.addresses.shipping.postcode) {
				zipMask.unmaskedValue = customer.addresses.shipping.postcode;
			}
		}
	});

	// Input masking logic
	let zipMask: any;
	let zipInputElement: HTMLInputElement;
	const zipPlaceholder = '00000-000';

	onMount(() => {
		// Initialize the mask
		zipMask = IMask(zipInputElement, {
			mask: zipPlaceholder
		});
		console.log('CUSTOMER', customer);
		// Set initial value if available
		if (zipValue) {
			zipMask.unmaskedValue = zipValue;
		}

		// Update state when input changes
		zipMask.on('accept', () => {
			// Force a reactive update when the zip value changes
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
	});

	onDestroy(() => {
		if (zipMask) {
			zipMask.destroy();
		}
	});

	// Function to handle input changes manually if needed
	function handleZipChange(event: Event) {
		const target = event.target as HTMLInputElement;
		zipValue = zipMask ? zipMask.unmaskedValue : target.value;
	}

	// Handle blur event to trigger address lookup when focus leaves the field
	function handleZipBlur() {
		// Use the raw unmasked value instead of zipValue.length
		if (zipMask && zipMask.unmaskedValue.length === 8) {
			fetchAddressFromCep(zipMask.unmaskedValue);
		}
	}

	// Function to fetch address data from CEP using our service
	async function fetchAddressFromCep(cep: string) {
		// Only proceed if we have a complete CEP
		if (cep.length !== 8) return;

		// Reset any previous error and show loading state
		errorMessage = '';
		isLoading = true;

		try {
			const addressData = await getAddressFromCep(cep);

			if (!addressData) {
				errorMessage = 'CEP não encontrado';
				street = '';
				neighborhood = '';
				city = '';
				addressFieldsVisible = true;
				return;
			}

			// Update address fields with fetched data - force reactivity with explicit assignments
			street = addressData.street || '';

			neighborhood = addressData.neighborhood || '';
			city = addressData.city || '';
			stateCode = addressData.state || '';

			// Make address fields visible - this must be set AFTER the data is populated
			addressFieldsVisible = true;
		} catch (err) {
			console.error('Error fetching CEP data:', err);
			if (err instanceof Error) {
				errorMessage = err.message;
			} else {
				errorMessage = 'Erro ao buscar o CEP. Tente novamente.';
			}
		} finally {
			isLoading = false;
		}
	}

	/**
	 * Validates the checkout step two form (shipping address)
	 * @param {CustomerAddress} address - The shipping address data to validate
	 * @returns {Object} - Validation result with valid flag and any error messages
	 */
	/**
	 * Validates the checkout step two form (shipping address)
	 * @param {CustomerAddress} address - The shipping address data to validate
	 * @returns {Object} - Validation result with valid flag and any error messages
	 */
	function validateCheckoutStepTwo(address: CustomerAddress) {
		// Initialize validation result
		const result = {
			valid: true,
			errors: {} as Record<string, string>
		};

		// Extract street number from address1 if not provided separately
		// The address1 format is expected to be: "Street name 123 / Complement"
		const addressParts = address.address1.split(' ');

		// Required fields validation
		const requiredFields = [
			{ field: 'address1', message: 'Endereço é obrigatório' },
			{ field: 'city', message: 'Cidade é obrigatória' },
			{ field: 'postcode', message: 'CEP é obrigatório' },
			{ field: 'state', message: 'Estado é obrigatório' }
		];

		// Check each required field
		for (const { field, message } of requiredFields) {
			if (
				!address[field as keyof CustomerAddress] ||
				String(address[field as keyof CustomerAddress]).trim() === ''
			) {
				result.valid = false;
				result.errors[field] = message;
			}
		}

		// Validate number in address1
		if (!number.trim()) {
			result.valid = false;
			result.errors.address1 = 'Número é obrigatório';
		}

		if (!complement.trim()) {
			result.valid = false;
			result.errors.address1 = 'Complemento é obligatório';
		}

		// CEP/Postcode validation - should be 8 digits for Brazil
		if (address.country === 'BR' && address.postcode.trim()) {
			// Remove any non-digit characters for validation
			const cleanPostcode = address.postcode.replace(/\D/g, '');
			if (cleanPostcode.length !== 8) {
				result.valid = false;
				result.errors.postcode = 'CEP deve conter 8 dígitos';
			}
		}

		// State validation - should be 2 letters for Brazil
		if (address.country === 'BR' && address.state) {
			const stateRegex = /^[A-Z]{2}$/i;
			if (!stateRegex.test(address.state)) {
				result.valid = false;
				result.errors.state = 'Estado deve conter 2 letras';
			}
		}

		// Address line validation - check for reasonable length
		if (address.address1 && address.address1.length < 5) {
			result.valid = false;
			result.errors.address1 = 'Endereço muito curto';
		}

		// City validation - check for reasonable length and no digits
		if (address.city) {
			if (address.city.length < 2) {
				result.valid = false;
				result.errors.city = 'Nome da cidade muito curto';
			}
			// Optional: Check for digits in city name
			if (/\d/.test(address.city)) {
				result.valid = false;
				result.errors.city = 'Nome da cidade não deve conter números';
			}
		}

		// Neighborhood validation (address2)
		if (!address.address2 || address.address2.trim() === '') {
			result.valid = false;
			result.errors.address2 = 'Bairro é obrigatório';
		}

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

		<!-- Debug values - can be removed in production -->
		<!-- {#if AppConfig.debug}
			<div class="p-2 bg-gray-100 text-xs">
				<strong>Debug:</strong> CEP: {zipValue} | Street: {street} | City: {city} | State: {stateCode}
				| Neighborhood: {neighborhood} | Visible: {addressFieldsVisible ? 'Yes' : 'No'}
			</div>
		{/if} -->

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
							address1: `${street} ${number}${complement ? ' / ' + complement : ''}`,
							address2: `${neighborhood}`,
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
