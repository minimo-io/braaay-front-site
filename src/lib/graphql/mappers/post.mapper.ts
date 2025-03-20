import type { Post, GraphQLPost } from '$lib/types';
import { stripHtml } from '$lib/utils/index';

export function mapPost(node: GraphQLPost): Post {
	return {
		id: node.id,
		title: node.title,
		date: node.date,
		modified: node.modified,
		excerpt: node.excerpt,
		content: node.content || undefined,
		plainExcerpt: stripHtml(node.excerpt),
		uri: node.uri,
		author: {
			name: node.author.node.name,
			avatar: { url: node.author.node.avatar.url }
		},
		featuredImage: {
			mediaItemUrl: node.featuredImage.node.mediaItemUrl,
			altText: node.featuredImage.node.altText
		}
	};
}
