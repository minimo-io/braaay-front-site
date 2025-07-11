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
