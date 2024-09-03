export const ssr = true;
import { getLatestsBlogPosts } from '$lib/data/queries/posts';
import { error } from '@sveltejs/kit';

export const load = async () => {
	// const { postSlug } = params;
	const posts = await getLatestsBlogPosts();
	if (!posts) {
		throw error(404, {
			message: 'Error obtendo os artigos.'
		});
	}
	return {
		posts
	};
};
