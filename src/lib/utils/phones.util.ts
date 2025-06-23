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

/**
 * Validates a Brazilian mobile phone number in the format: (00) 0 0000-0000
 * Allows optional spaces and symbols due to masking.
 */
export function isValidCellphone(maskedPhone: string, lang: 'pt' | 'uy'): boolean {
	const rawPhone = maskedPhone.replace(/\D/g, '');

	if (lang === 'pt') {
		// Formato BR: 11 dígitos, DDD de 2 dígitos (não começando com 0) + 9 + 8 dígitos
		// Ex: (11) 9 9999-9999 → 11999999999
		return /^[1-9]{2}9\d{8}$/.test(rawPhone);
	}

	if (lang === 'uy') {
		// Formato UY: 9 dígitos no total, começando com 09 (móvel)
		// Ex: 099123456 → geralmente usado em forma: 099 123 456
		return /^09\d{7}$/.test(rawPhone);
	}

	// Default: inválido se país não suportado
	return false;
}
