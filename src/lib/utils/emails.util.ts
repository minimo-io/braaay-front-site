/**
 * Checks whether the provided value is a valid email address.
 * Uses a simple, reliable regex to cover most common cases.
 *
 * @param value - The value to test for email validity
 * @returns True if the string is a valid email format, false otherwise
 */
export function isValidEmail(value: unknown): boolean {
	if (typeof value !== 'string') {
		return false;
	}

	// Simplified RFC 5322 regex for general use
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(value);
}
