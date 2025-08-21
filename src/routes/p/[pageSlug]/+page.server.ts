import type { PageServerLoad } from './$types';
import { getUrqlClient } from '$stores/urqlClient.state.svelte';
import { PAGE_QUERY } from '$lib/graphql/queries/index';

import { mapPage, type GraphQLSinglePage } from '$lib/types/index';

import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const result = await getUrqlClient()
		.client.query<GraphQLSinglePage>(PAGE_QUERY, {
			slug: params.pageSlug
		})
		.toPromise();

	if (result.error || !result.data) {
		console.error(`Failed to fetch the products: ${result.error}`);
		throw error(404, `Failed to fetch the products: ${result.error}`);
	}

	try {
		// Get products para of the query
		const page = mapPage(result.data);
		const seo = {
			title: page.seo?.title || page.title,
			description: page.seo?.metaDesc || page.excerpt,
			canonical: page.seo?.canonical,
			ogTitle: page.seo?.opengraphTitle || page.title,
			ogDescription: page.seo?.opengraphDescription || page.excerpt,
			ogImage: page.seo?.opengraphImage?.sourceUrl || page.image?.url,
			noindex: page.seo?.metaRobotsNoindex,
			nofollow: page.seo?.metaRobotsNofollow
		};

		return {
			page,
			seo
		};
	} catch (err) {
		throw error(404, `Failed to fetch the category: ${err}`);
	}
};
