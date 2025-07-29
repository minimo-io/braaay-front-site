import type { Reroute } from '@sveltejs/kit';
import { deLocalizeUrl } from '$lib/paraglide/runtime';

export const reroute: Reroute = (request) => {
	const delocalized = deLocalizeUrl(request.url).pathname;
	console.log('DELOCALIZED', delocalized);
	return delocalized;
	// return deLocalizeUrl(request.url).pathname;
};
