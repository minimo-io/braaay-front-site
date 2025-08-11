// --- Helper Function to Add Years and Format ---
// This function now accepts 'yearsToAdd' as a parameter.
export function addYearsAndFormat(
	dateString: string | null | undefined,
	yearsToAdd: number
): string | undefined {
	if (!dateString) {
		return undefined;
	}
	const dateObj = new Date(dateString);
	// Use the 'yearsToAdd' parameter to dynamically add years
	dateObj.setFullYear(dateObj.getFullYear() + yearsToAdd);
	return dateObj.toISOString().slice(0, 10); // Format to YYYY-MM-DD
}

export function formatDate(dateString) {
	const date = new Date(dateString.replace(' ', 'T')); // Make it ISO-compliant
	const day = String(date.getDate()).padStart(2, '0');
	const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
	const year = date.getFullYear();
	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');

	return `${day}/${month}/${year} ${hours}:${minutes}`;
}

// Add this helper function at the top of your script, before the validation function:

export function isValidBirthDate(dateString: string): boolean {
	if (!dateString || dateString.trim() === '') return false;

	const dateParts = dateString.split('/');
	if (dateParts.length !== 3) return false;

	const day = parseInt(dateParts[0], 10);
	const month = parseInt(dateParts[1], 10);
	const year = parseInt(dateParts[2], 10);

	// Basic range checks
	if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1900) return false;

	// Create date object (month is 0-indexed in JavaScript)
	const parsedDate = new Date(year, month - 1, day);

	// Check if the date is valid by comparing the parsed values
	// This handles cases like February 30th, which would be auto-corrected
	const isValidDate =
		parsedDate.getFullYear() === year &&
		parsedDate.getMonth() === month - 1 &&
		parsedDate.getDate() === day;

	// Optional: Check if birthdate is not in the future
	const today = new Date();
	const isNotFuture = parsedDate <= today;

	return isValidDate && isNotFuture;
}
