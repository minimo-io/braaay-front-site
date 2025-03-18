import type { Post, GraphQLPost } from '$lib/types';

// Helper to strip HTML tags from a string.
function stripHtml(html: string): string {
	return html.replace(/<[^>]+>/g, '');
}

export function mapPost(node: GraphQLPost): Post {
	return {
		id: node.id,
		title: node.title,
		date: node.date,
		modified: node.modified,
		excerpt: node.excerpt,
		plainExcerpt: stripHtml(node.excerpt),
		uri: node.uri,
		author: {
			name: node.author.node.name,
			avatar: { url: node.author.node.avatar.url }
		},
		featuredImage: { mediaItemUrl: node.featuredImage.node.mediaItemUrl }
	};
}
