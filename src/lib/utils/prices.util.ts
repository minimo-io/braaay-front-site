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
