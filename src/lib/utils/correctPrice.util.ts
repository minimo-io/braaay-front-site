export function correctPrice(price: number): string {
	return price.toFixed(2).replace('.', ',');
}
