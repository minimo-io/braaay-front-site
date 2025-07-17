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
