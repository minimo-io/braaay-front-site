export enum DeliveryUIType {
	DELIVERY = 'DELIVERY',
	PICKUP = 'PICKUP'
}

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

export interface ShippingOption {
	id: string;
	label: string;
	cost: string;
}
