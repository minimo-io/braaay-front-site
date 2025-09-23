import he from 'he';

// Helper to strip HTML tags from a string.
export function stripHtml(html: string): string {
	return html.replace(/<[^>]+>/g, '');
}

export const stripHtmlEnhanced = (html: string): string => {
	if (!html) {
		return '';
	}

	// First, decode all HTML entities.
	const decodedHtml = he.decode(html);

	// Then, strip any remaining HTML tags
	const withoutTags = decodedHtml.replace(/<[^>]+>/g, '');

	// Finally, remove WordPress-style excerpt ellipsis `[&hellip;]` or `[...]`
	return withoutTags.replace(/\[(&hellip;|\.\.\.)\]/g, '…').trim();
};

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

/**
 * Transforms anchor tags in HTML content to handle internal vs external links
 * Internal links: removes target="_blank", adds data-sveltekit-reload, and cleans GA tracking parameters
 * Internal links are defined as:
 * - Links starting with / (relative paths)
 * - Links starting with https://braaay.com or http://braaay.com
 * @param content - HTML content to transform
 * @param baseUrl - Optional base URL to replace internal links with (e.g., 'http://localhost:5173')
 * @param currentRoute - Current route path to compare for data-sveltekit-reload (e.g., '/blog/my-post')
 */
export function transformLinks(content: string, baseUrl?: string, currentRoute?: string): string {
	if (!content) return content;

	const linkRegex = /<a\s+([^>]*?)>/gi;

	// Transform standalone YouTube URLs to iframes (simple approach)
	content = content.replace(
		/(https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+))([^\s\]<]*)/g,
		(fullMatch, urlPart, videoId, extraPart) => {
			// Skip if it's inside href attribute
			if (content.includes(`href="${urlPart}"`) || content.includes(`href='${urlPart}'`)) {
				return fullMatch;
			}

			const embedUrl = `https://www.youtube.com/embed/${videoId}`;
			return `<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%; margin: 1rem 0;">
			<iframe 
				src="${embedUrl}" 
				style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
				frameborder="0" 
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
				allowfullscreen>
			</iframe>
		</div>${extraPart}`;
		}
	);

	// Correct links
	return content.replace(linkRegex, (match) => {
		const hrefMatch = match.match(/href=["']([^"']+)["']/i);
		if (!hrefMatch) return match;

		let href = hrefMatch[1];

		const isInternal =
			href.startsWith('/') ||
			href.startsWith('https://braaay.com') ||
			href.startsWith('http://braaay.com');

		if (!isInternal) return match;

		let result = match;

		// Get the path part of the href for route comparison
		let linkPath = href;
		if (href.startsWith('https://braaay.com') || href.startsWith('http://braaay.com')) {
			linkPath = href.replace(/https?:\/\/braaay\.com/, '');
		}
		// Remove query parameters and hash for route comparison
		linkPath = linkPath.split('?')[0].split('#')[0];

		// Extract base route (e.g., '/blog/' from '/blog/some-post')
		const getBaseRoute = (path: string): string => {
			const segments = path.split('/').filter(Boolean);
			return segments.length > 0 ? `/${segments[0]}/` : '/';
		};

		const linkBaseRoute = getBaseRoute(linkPath);
		const currentBaseRoute = currentRoute ? getBaseRoute(currentRoute) : '';

		// Replace internal links with baseUrl if provided
		if (baseUrl) {
			let newHref = href;

			// Convert braaay.com links to relative paths first
			if (href.startsWith('https://braaay.com') || href.startsWith('http://braaay.com')) {
				newHref = href.replace(/https?:\/\/braaay\.com/, '');
			}

			// If it's a relative path, prepend baseUrl
			if (newHref.startsWith('/')) {
				newHref = baseUrl.replace(/\/$/, '') + newHref;
			}

			href = newHref;
			result = result.replace(/href=["']([^"']+)["']/i, `href="${href}"`);
		}

		// Clean GA parameters if present
		if (href.includes('?')) {
			const [baseUrlPart, queryString] = href.split('?');
			if (queryString) {
				const params = queryString.split('&').filter((param) => {
					const paramName = param.split('=')[0];
					return !paramName.startsWith('_gl') && !paramName.startsWith('_ga');
				});
				const cleanHref = params.length > 0 ? `${baseUrlPart}?${params.join('&')}` : baseUrlPart;
				result = result.replace(/href=["']([^"']+)["']/i, `href="${cleanHref}"`);
			}
		}

		// Remove target="_blank" from internal links
		result = result.replace(/\s*target=["']_blank["']/gi, '');

		// Add data-sveltekit-reload ONLY if the link base route matches current base route
		if (
			currentRoute &&
			linkBaseRoute === currentBaseRoute &&
			!result.includes('data-sveltekit-reload')
		) {
			result = result.slice(0, -1) + ' data-sveltekit-reload>';
		}

		return result;
	});
}
