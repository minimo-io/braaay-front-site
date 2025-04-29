// lib/utils/cpfFormatter.js

/**
 * Attempts to format a raw CPF string into XXX.XXX.XXX-XX format
 * If input can't be formatted properly, returns original value
 * @param {string|number} rawCpf - CPF value to format
 * @returns {string} Formatted CPF or original input if formatting fails
 */
export function formatCpf(rawCpf) {
	try {
		if (rawCpf === null || rawCpf === undefined) return rawCpf;

		const cpfString = String(rawCpf).replace(/\D/g, '');

		// Only format if we have exactly 11 digits
		if (cpfString.length === 11) {
			return cpfString.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
		}

		// Return original if we can't format
		return rawCpf;
	} catch {
		// Return original if any error occurs
		return rawCpf;
	}
}
