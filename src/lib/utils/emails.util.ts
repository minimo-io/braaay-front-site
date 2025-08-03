// /**
//  * Checks whether the provided value is a valid email address.
//  * Uses a simple, reliable regex to cover most common cases.
//  *
//  * @param value - The value to test for email validity
//  * @returns True if the string is a valid email format, false otherwise
//  */
// export function isValidEmail(value: unknown): boolean {
// 	if (typeof value !== 'string') {
// 		return false;
// 	}

// 	// Simplified RFC 5322 regex for general use
// 	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// 	return emailRegex.test(value);
// }

/**
 * Checks whether the provided value is a valid email address.
 * Uses a robust, practical regex that prevents common invalid formats like trailing dots.
 *
 * @param value - The value to test for email validity
 * @returns True if the string is a valid email format, false otherwise
 */
export function isValidEmail(value: unknown): boolean {
	if (typeof value !== 'string') {
		return false;
	}

	// Trim whitespace from the start and end of the email
	const trimmedEmail = value.trim();

	// This regex ensures the domain part ends with a TLD of at least two letters,
	// which effectively prevents a trailing dot.
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	// For an even more comprehensive RFC-compliant (but more complex) regex, you can use:
	// const emailRegex = new RegExp(
	//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	// );

	return emailRegex.test(trimmedEmail);
}
