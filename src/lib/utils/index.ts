export * from './smoothScroll.util';
export * from './stripHtml.util';
export * from './removeWPBakery.util';

export function isBlogPost(path: string) {
	return /^\/(uy\/)?blog\/[^/]+$/.test(path);
}
