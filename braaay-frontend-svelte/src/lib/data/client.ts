// import { WORDPRESS_BASE_URL } from '$env/static/private';
import { createClient } from '$lib/data/generated';

const client = createClient({
	url: `https://braaay.com/graphql`
});

export { client };
