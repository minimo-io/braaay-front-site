import { localizeHref } from '$lib/paraglide/runtime';

export * from './smoothScroll.util';
export * from './html.util';
export * from './removeWPBakery.util';
export * from './prices.util';
export * from './loadMoreProducts.util';
export * from './launchToast.util';
export * from './cpfs.util';
export * from './emails.util';
export * from './phones.util';
export * from './creditCards.util';
export * from './coupons.util';
export * from './dates.util';

export function mapLocale(locale: string) {
	if (locale === 'uy') {
		return 'es-UY';
	} else {
		return 'pt-BR';
	}
}

/**
 * Truncate a string to a maximum length and add ellipsis if needed.
 */
export function truncate(str, maxLength, ellipsis = '...') {
	if (typeof str !== 'string') throw new TypeError('First argument must be a string');
	if (typeof maxLength !== 'number' || maxLength < 0)
		throw new TypeError('Second argument must be a non-negative number');
	if (str.length <= maxLength) {
		return str;
	}
	return str.slice(0, maxLength) + ellipsis;
}
// Capitalize string
export function capitalize(str) {
	if (typeof str !== 'string' || str.length === 0) return str;
	return str.charAt(0).toUpperCase() + str.slice(1);
}

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

export function generateBasicAuthorization(username, appPassword) {
	const credentials = `${username}:${appPassword}`;
	const encodedCredentials = btoa(credentials); // btoa is a built-in browser function for Base64 encoding
	return encodedCredentials;
}
