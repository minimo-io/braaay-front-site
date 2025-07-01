// Helper to strip HTML tags from a string.
export function stripHtml(html: string): string {
	return html.replace(/<[^>]+>/g, '');
}

/**
 * Create a text excerpt of up to `maxChars` characters.
 * Strips HTML, then truncates on the last space before max,
 * appending an ellipsis if it was cut.
 */
export function createExcerpt(input: string, maxChars: number): string {
	const text = stripHtml(input);
	if (text.length <= maxChars) {
		return text;
	}
	// find last space before maxChars
	const idx = text.lastIndexOf(' ', maxChars);
	if (idx > 0) {
		return text.slice(0, idx).trimEnd() + '…';
	}
	// no space found, hard cut
	return text.slice(0, maxChars).trimEnd() + '…';
}
