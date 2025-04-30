import type { AddressData } from '$lib/types';

/**
 * Fetches address information from ViaCEP API
 * @param cep - Brazilian postal code (CEP)
 * @returns Address data or null if not found
 */
export async function fetchFromViaCep(cep: string): Promise<AddressData | null> {
	try {
		const cleanCep = cep.replace(/\D/g, '');
		const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
		const data = await response.json();

		// ViaCEP returns "erro": true when CEP is not found
		if (data.erro) {
			return null;
		}

		return {
			cep: data.cep,
			street: data.logradouro,
			neighborhood: data.bairro,
			city: data.localidade,
			state: data.uf
		};
	} catch (error) {
		console.error('Error fetching from ViaCEP:', error);
		return null;
	}
}

/**
 * Fetches address information from Brasil API (alternative source)
 * @param cep - Brazilian postal code (CEP)
 * @returns Address data or null if not found
 */
export async function fetchFromBrasilApi(cep: string): Promise<AddressData | null> {
	try {
		const cleanCep = cep.replace(/\D/g, '');
		const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${cleanCep}`);

		// Check if the request was successful
		if (!response.ok) {
			return null;
		}

		const data = await response.json();

		return {
			cep: data.cep,
			street: data.street,
			neighborhood: data.neighborhood,
			city: data.city,
			state: data.state
		};
	} catch (error) {
		console.error('Error fetching from Brasil API:', error);
		return null;
	}
}

/**
 * Fetch address using multiple APIs with fallback support
 * @param cep - Brazilian postal code (CEP)
 * @returns Address data or null if not found in any service
 * @throws Error if CEP format is invalid
 */
export async function getAddressFromCep(cep: string): Promise<AddressData | null> {
	// Validate CEP format
	const cleanCep = cep.replace(/\D/g, '');
	if (cleanCep.length !== 8) {
		throw new Error('CEP inválido. O CEP deve conter 8 dígitos.');
	}

	// Try ViaCEP first (most reliable)
	const viaCepResult = await fetchFromViaCep(cleanCep);
	// console.log('VIA CEP RESULT', viaCepResult);
	if (viaCepResult) {
		return viaCepResult;
	}

	// // Fallback to Brasil API if ViaCEP fails
	// const brasilApiResult = await fetchFromBrasilApi(cleanCep);
	// // console.log('BRASIL API RESULT', viaCepResult);
	// if (brasilApiResult) {
	// 	return brasilApiResult;
	// }

	return null;
}
