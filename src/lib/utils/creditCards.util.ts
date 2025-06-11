import type { CreditCardFormData } from '$lib/types';

export function validateCreditCard(data: CreditCardFormData): boolean {
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
}
