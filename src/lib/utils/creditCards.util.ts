// src/lib/utils/creditCards.util.ts
import type { CreditCardFormData } from '$lib/types';

// According to this: https://www.mercadopago.com.br/developers/pt/reference/orders/online-payments/create/post
type CreditCardBrand = 'visa' | 'master' | 'debelo' | 'debmaster' | 'debvisa' | 'unknown';

// Function to get card brand display info
export const getCardBrandInfo = (brand: string) => {
	switch (brand) {
		case 'visa':
			return { name: 'Visa', flag: '/images/card-icon-visa.png', color: 'text-blue-600' };
		case 'master':
			return {
				name: 'Mastercard',
				flag: '/images/card-icon-master.png',
				color: 'text-red-600'
			};
		case 'debelo':
			return { name: 'Elo', flag: '/images/card-icon-elo.png', color: 'text-yellow-600' };
		case 'debmaster':
			return {
				name: 'Mastercard Débito',
				flag: '/images/card-icon-master.png',
				color: 'text-red-600'
			};
		case 'debvisa':
			return { name: 'Visa Débito', flag: '/images/card-icon-visa.png', color: 'text-blue-600' };
		default:
			return null;
	}
};

export const validateCreditCard = (data: CreditCardFormData): boolean => {
	// Validate card number (16 digits)
	if (!data.cardNumber || data.cardNumber.length !== 16 || !/^\d{16}$/.test(data.cardNumber)) {
		return false;
	}

	// Validate cardholder name (not empty)
	if (!data.cardholderName || data.cardholderName.trim().length === 0) {
		return false;
	}

	// Validate expiry date (MM/YY format and not expired)
	if (!data.expiryDate || !/^\d{2}\/\d{2}$/.test(data.expiryDate)) {
		return false;
	}

	const [month, year] = data.expiryDate.split('/');
	const monthNum = parseInt(month, 10);
	const yearNum = parseInt(year, 10);

	if (monthNum < 1 || monthNum > 12) {
		return false;
	}

	// Check if expired
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear() % 100;
	const currentMonth = currentDate.getMonth() + 1;

	if (yearNum < currentYear || (yearNum === currentYear && monthNum < currentMonth)) {
		return false;
	}

	// Validate security code (3 digits)
	if (!data.securityCode || data.securityCode.length !== 3 || !/^\d{3}$/.test(data.securityCode)) {
		return false;
	}

	return true;
};

export const getCreditCardBrand = (cardNumber: string): CreditCardBrand => {
	// Remove espaços e traços
	const cleanedNumber = cardNumber.replace(/[\s-]/g, '');

	// Verificar se é um número válido
	if (!/^\d+$/.test(cleanedNumber)) {
		return 'unknown';
	}

	// Visa: começa com 4, comprimento 13, 16 ou 19
	if (/^4/.test(cleanedNumber) && [13, 16, 19].includes(cleanedNumber.length)) {
		return 'visa';
	}

	// Mastercard: começa com 5[1-5] ou 2[2-7], comprimento 16
	if (
		(/^5[1-5]/.test(cleanedNumber) || /^2[2-7]/.test(cleanedNumber)) &&
		cleanedNumber.length === 16
	) {
		return 'master';
	}

	// Elo: começa com 636368, 401178, 438935, 451416, 457631, 457632, 504175, 506699, 5067, 509, 627780, 636297, 650, 6516, 6550
	if (
		(/^636368/.test(cleanedNumber) ||
			/^401178/.test(cleanedNumber) ||
			/^438935/.test(cleanedNumber) ||
			/^451416/.test(cleanedNumber) ||
			/^457631/.test(cleanedNumber) ||
			/^457632/.test(cleanedNumber) ||
			/^504175/.test(cleanedNumber) ||
			/^506699/.test(cleanedNumber) ||
			/^5067/.test(cleanedNumber) ||
			/^509/.test(cleanedNumber) ||
			/^627780/.test(cleanedNumber) ||
			/^636297/.test(cleanedNumber) ||
			/^650/.test(cleanedNumber) ||
			/^6516/.test(cleanedNumber) ||
			/^6550/.test(cleanedNumber)) &&
		[16, 19].includes(cleanedNumber.length)
	) {
		return 'debelo';
	}

	// Para detectar débito, precisamos considerar que não temos uma forma confiável
	// de distinguir débito de crédito apenas pelo número do cartão
	// Esta é uma implementação básica - na prática, você precisaria de outras informações
	// Default to master for testing
	return 'master';
};

/**
 * Splits a card holder name into first name and last name
 * @param holderName - The full name from the card
 * @returns Object with firstName and lastName
 */
// Example usage:
// parseCardHolderName('Nicolas e Armando') -> { firstName: 'Nicolas', lastName: 'e Armando' }
// parseCardHolderName('Pepe Guerra') -> { firstName: 'Pepe', lastName: 'Guerra' }
// parseCardHolderName('João da Silva Santos') -> { firstName: 'João', lastName: 'da Silva Santos' }
// parseCardHolderName('Maria') -> { firstName: 'Maria', lastName: '' }
// parseCardHolderName('') -> { firstName: '', lastName: '' }
export function parseCardHolderName(holderName: string): { firstName: string; lastName: string } {
	if (!holderName || typeof holderName !== 'string') {
		return { firstName: '', lastName: '' };
	}

	// Trim and normalize spaces
	const normalizedName = holderName.trim().replace(/\s+/g, ' ');

	// Split by spaces
	const nameParts = normalizedName.split(' ');

	if (nameParts.length === 0) {
		return { firstName: '', lastName: '' };
	}

	if (nameParts.length === 1) {
		// Only one name provided
		return { firstName: nameParts[0], lastName: '' };
	}

	// First part is firstName, everything else is lastName
	const firstName = nameParts[0];
	const lastName = nameParts.slice(1).join(' ');

	return { firstName, lastName };
}
