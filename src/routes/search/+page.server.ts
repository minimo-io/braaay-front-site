import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = ({ url }) => {
	// Grab the 's' query parameter
	const term = url.searchParams.get('s');

	// If it's missing or empty, redirect to homepage
	if (!term) {
		// 307 keeps the method; 303 is often used for form GET-after-POST
		throw redirect(307, '/');
	}

	// Otherwise, return it to the page as `data.term`
	return { term };
};
