export function removeWPBakeryShortcodes(content) {
	return content.replace(/\[.*?\]/g, '').trim();
}
