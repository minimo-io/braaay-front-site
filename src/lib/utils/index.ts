import { localizeHref } from '$lib/paraglide/runtime';

export * from './smoothScroll.util';
export * from './stripHtml.util';
export * from './removeWPBakery.util';
export * from './correctPrice.util';
export * from './loadMoreProducts.util';
export * from './launchToast.util';
export * from './cpfs.util';
export * from './emails.util';
export * from './phones.util';

export function isBlogPost(path: string) {
	return /^\/(uy\/)?blog\/[^/]+$/.test(path);
}

export function redirectLocale(newLocale: string) {
	window.location.href = localizeHref('/', { locale: newLocale });
}

export function redirectHref(href: string) {
	window.location.href = href;
}

export function alphaOnly(node: HTMLInputElement) {
	const strip = () => {
		node.value = node.value.replace(/[^A-Za-zÀ-ÿ\s]/g, '');
	};
	node.addEventListener('input', strip);
	return {
		destroy() {
			node.removeEventListener('input', strip);
		}
	};
}
// use:numbersOnly
export function numbersOnly(node: HTMLInputElement) {
	const strip = () => {
		node.value = node.value.replace(/\D/g, ''); // \D matches any non-digit
	};
	node.addEventListener('input', strip);

	return {
		destroy() {
			node.removeEventListener('input', strip);
		}
	};
}
