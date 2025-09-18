// src/lib/utils/prices.util.ts
export function correctPrice(price: number): string {
	return price.toFixed(2).replace('.', ',');
}

// We use this function to chage a price from string format to a floating number
// export function toFloatPrice(price: string): number {
// 	// console.log('📱 toFloatPrice input:', price);
// 	if (!price) return 0;
// 	const unsignedPrice = price
// 		.replaceAll('R$', '')
// 		.replaceAll('$', '')
// 		.replaceAll(' ', '')
// 		.replaceAll('.', '') // Remove thousands separator FIRST
// 		.replaceAll(',', '.');
// 	// console.log('📱 toFloatPrice processed:', unsignedPrice);
// 	const result = parseFloat(unsignedPrice);
// 	// console.log('📱 toFloatPrice output:', result);
// 	return result;
// }

export function toFloatPrice(price: string): number {
	if (!price) return 0;

	// Check if it's Brazilian format by looking for R$
	const isBrazilianFormat = price.includes('R$');

	if (isBrazilianFormat) {
		// Brazilian format: R$285,00
		const unsignedPrice = price
			.replaceAll('R$', '')
			.replaceAll('$', '')
			.replaceAll(' ', '')
			.replaceAll('.', '') // Remove thousands separator
			.replaceAll(',', '.'); // Replace decimal comma with dot
		return parseFloat(unsignedPrice);
	} else {
		// Uruguayan format: $186.00
		const unsignedPrice = price
			.replaceAll('R$', '')
			.replaceAll('$', '')
			.replaceAll(' ', '')
			.replaceAll(',', ''); // Remove any commas (shouldn't be there in UY format)
		return parseFloat(unsignedPrice);
	}
}

export function isNumber(value) {
	return !isNaN(value) && !isNaN(parseFloat(value));
}

export function calculateDiscountPercentage(originalPrice, discountedPrice) {
	if (originalPrice <= 0) return 0; // Avoid division by zero or invalid inputs
	const discount = originalPrice - discountedPrice;
	const percentage = (discount / originalPrice) * 100;
	// toFixed returns a string, so parse it back to a number
	return parseFloat(percentage.toFixed(2));
}

/**
 * Subtracts a given percentage from an amount
 * @param amount The original amount
 * @param percentage The percentage to subtract (e.g., 20 for 20%)
 * @returns The amount after subtracting the percentage
 */
export function subtractPercentage(amount: number, percentage: number): number {
	if (amount <= 0 || percentage <= 0) return amount; // Return original amount for invalid inputs
	const subtraction = amount * (percentage / 100);
	return parseFloat((amount - subtraction).toFixed(3));
}

// Calculate price differences when we have a product in promotion
export function calculatePercentageDifference(
	originalPriceStr: string,
	discountedPriceStr: string,
	currencySymbol: string = 'R$', // Defaults to "R$"
	decimalSeparator: string = ',', // Defaults to "," (for both input parsing and output formatting)
	outputDecimalPlaces: number = 1 // Defaults to 1 decimal place for output
): string | null {
	// Helper function to convert a currency string to a number
	const parseCurrency = (currencyStr: string, symbol: string, separator: string): number => {
		let cleanedStr = currencyStr.replace(symbol, '').trim();

		// Determine how to clean based on the specified decimal separator
		if (separator === ',') {
			// Brazilian/European format: dot for thousands, comma for decimal
			cleanedStr = cleanedStr.replace(/\./g, ''); // Remove all thousands dots
			cleanedStr = cleanedStr.replace(',', '.'); // Replace decimal comma with a dot for parseFloat
		} else if (separator === '.') {
			// US/English format: comma for thousands, dot for decimal
			cleanedStr = cleanedStr.replace(/,/g, ''); // Remove all thousands commas
			// Decimal is already a dot, no replacement needed for parseFloat
		} else {
			// Fallback for unexpected separators - try to parse directly
			// This case might need more robust error handling or stricter input validation
			console.warn(`Unexpected decimal separator '${separator}'. Attempting direct parseFloat.`);
		}

		return parseFloat(cleanedStr);
	};

	const originalPrice = parseCurrency(originalPriceStr, currencySymbol, decimalSeparator);
	const discountedPrice = parseCurrency(discountedPriceStr, currencySymbol, decimalSeparator);

	// Input validation
	if (isNaN(originalPrice) || isNaN(discountedPrice)) {
		console.error('Invalid input: One or both price strings could not be converted to numbers.');
		return null;
	}

	// Handle division by zero
	if (originalPrice === 0) {
		console.warn('Original price is zero, cannot calculate percentage difference.');
		return null;
	}

	const difference = originalPrice - discountedPrice;
	const percentageDifference = (difference / originalPrice) * 100;

	// Format the output number to the specified decimal places using toFixed()
	let formattedResult = percentageDifference.toFixed(outputDecimalPlaces);

	// Replace dot with the specified decimalSeparator for the final output string.
	// This makes the output decimal separator match the input's assumed decimal separator.
	if (decimalSeparator === ',') {
		formattedResult = formattedResult.replace('.', ',');
	}

	return formattedResult;
}

/**
 * Calculates the cashback amount based on a value and cashback percentage
 * @param value The original value/amount
 * @param cashbackPercentage The cashback percentage (e.g., 5 for 5%)
 * @returns The cashback amount to receive
 */
export function calculateCashback(value: number, cashbackPercentage: number): number {
	if (value <= 0 || cashbackPercentage <= 0) return 0; // Return 0 for invalid inputs
	const cashbackAmount = value * (cashbackPercentage / 100);
	return parseFloat(cashbackAmount.toFixed(2));
}

export function getCurrencyFromPrice(priceString?: string): string {
	if (!priceString) return 'USD';

	if (priceString.includes('R$')) {
		return 'BRL'; // Brazilian Real
	} else if (priceString.includes('$')) {
		return 'UYU'; // Uruguayan Peso
	}

	// Default to USD if no specific currency symbol is found
	return 'USD';
}
