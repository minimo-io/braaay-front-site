import { localizeHref } from '$lib/paraglide/runtime';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	redirect(302, localizeHref(`/account/my-favorites/`));
};
