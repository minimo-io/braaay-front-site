import { localizeHref } from '$lib/paraglide/runtime';

export * from './smoothScroll.util';
export * from './stripHtml.util';
export * from './removeWPBakery.util';
export * from './correctPrice.util';
export * from './loadMoreProducts.util';
export * from './launchToast.util';
export * from './cpfs.util';

export function isBlogPost(path: string) {
	return /^\/(uy\/)?blog\/[^/]+$/.test(path);
}

export function redirectLocale(newLocale: string) {
	window.location.href = localizeHref('/', { locale: newLocale });
}

export function redirectHref(href: string) {
	window.location.href = href;
}
