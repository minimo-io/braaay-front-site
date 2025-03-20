import type { ArticleCreator } from './article-creator.types';
import type { RelayData } from './relay-data.types';

// Define an interface for a Post.
export interface Post {
	id: string;
	title: string;
	date: string;
	modified: string;
	excerpt: string;
	content?: string;
	plainExcerpt: string;
	uri: string;
	author: ArticleCreator;
	featuredImage: {
		mediaItemUrl: string;
		altText: string;
	};
	header?: {
		title?: string;
		content?: string;
	};
}

// And the raw GraphQL node structure for posts:
// Too over complicated
export interface GraphQLPost {
	id: string;
	title: string;
	date: string;
	modified: string;
	excerpt: string;
	uri: string;
	content?: string;
	author: {
		node: {
			name: string;
			avatar: { url: string };
		};
	};
	featuredImage: {
		node: {
			mediaItemUrl: string;
			altText: string;
		};
	};
	header?: {
		firstSubtitle?: string;
		firstParagraph?: string;
	};
}
// For /blog posts query
export interface PostsQueryResult {
	posts: RelayData<GraphQLPost>;
}
// For single posts
export interface SinglePostsQueryResult {
	post: GraphQLPost;
}
