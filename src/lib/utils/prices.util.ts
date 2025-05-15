// src/lib/utils/prices.util.ts
export function correctPrice(price: number): string {
	return price.toFixed(2).replace('.', ',');
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
	return parseFloat((amount - subtraction).toFixed(2));
}
