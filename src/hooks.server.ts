/**
 * @description init function runs once, when the server is created or the app starts in the browser, and is a useful place to do asynchronous work such as initializing a database connection.
 */

import type { Handle } from '@sveltejs/kit';
import { paraglideMiddleware } from '$lib/paraglide/server';

// creating a handle to use the paraglide middleware
const paraglideHandle: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request: localizedRequest, locale }) => {
		// Remap locales to match your real-life settings
		let mappedLocale: string = locale;
		if (locale === 'uy') {
			mappedLocale = 'es-UY';
		} else if (locale === 'pt') {
			mappedLocale = 'pt-BR';
		}
		event.request = localizedRequest;
		return resolve(event, {
			transformPageChunk: ({ html }) => {
				return html.replace('%lang%', mappedLocale);
			}
		});
	});

export const handle: Handle = paraglideHandle;
