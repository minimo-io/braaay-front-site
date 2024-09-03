import { client } from '$lib/data/client';

const getLatestsBlogPosts = async () => {
	const latestPosts = client.query({
		posts: {
			__args: {
				first: 10
			},
			nodes: {
				title: true,
				excerpt: true,
				uri: true
			}
		}
	});
	return latestPosts;
};

export { getLatestsBlogPosts };
