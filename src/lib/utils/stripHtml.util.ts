// Helper to strip HTML tags from a string.
export function stripHtml(html: string): string {
	return html.replace(/<[^>]+>/g, '');
}
