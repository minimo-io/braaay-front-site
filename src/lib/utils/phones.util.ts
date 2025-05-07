// Format telephone
function formatBrazilPhone(value: string): string {
	// Remove all non-digit characters
	const digits = value.replace(/\D/g, '');

	// Match pattern: DDD + 9-digit mobile number
	const match = digits.match(/^(\d{2})(\d{1})(\d{4})(\d{4})$/);

	if (!match) return value; // Return original if it doesn't match

	const [, ddd, firstDigit, part1, part2] = match;
	return `(${ddd}) ${firstDigit} ${part1}-${part2}`;
}
function formatUruguayPhone(value: string): string {
	// Remove non-digits
	const digits = value.replace(/\D/g, '');

	// If number includes leading 0 (e.g., 099123456)
	const matchWithZero = digits.match(/^0?(\d{2})(\d{3})(\d{3})$/);
	if (matchWithZero) {
		const [, prefix, mid, end] = matchWithZero;
		return `0${prefix} ${mid} ${end}`;
	}

	return value; // Return unchanged if it doesn't match
}
// Export format phone
export function formatPhone(lang: 'pt' | 'uy', phone: string) {
	if (lang == 'pt') {
		return formatBrazilPhone(phone);
	} else if (lang == 'uy') {
		return formatUruguayPhone(phone);
	}
}
