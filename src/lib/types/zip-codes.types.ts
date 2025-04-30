/**
 * Service for handling Brazilian CEP (postal code) lookups with fallback options
 */

export interface AddressData {
	street: string;
	neighborhood: string;
	city: string;
	state: string;
	cep: string;
}
