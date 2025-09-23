import type { ArticleCreator } from './article-creator.types';
import { stripHtml, transformLinks } from '$lib/utils/index';
import type { YoastSeoData } from './seo.types';

export interface SqlitePost {
	id: string;
	title: string;
	uri: string;
	content?: string;
	excerpt: string;
	featured_image_url: string;
	featured_image_alt: string;
	author_id: string;
	author_name: string;
	author_avatar: string;
	date: string;
	modified: string;
	categories_json: string | null;
}

export interface SqlitePostSingle {
	id: number;
	title: string;
	uri: string;
	excerpt: string;
	content: string;
	featured_image_url: string | null;
	featured_image_alt: string | null;
	date: string;
	modified: string;
	author_id: number;
	author_name: string;
	author_avatar: string | null;
	categories_json: string;
	seo_title: string | null;
	seo_description: string | null;
	seo_canonical_url: string | null;
	seo_og_title: string | null;
	seo_og_description: string | null;
	seo_og_image: string | null;
	seo_twitter_title: string | null;
	seo_twitter_description: string | null;
	seo_twitter_image: string | null;
	seo_keywords: string | null;
	seo_noindex: string | null;
	seo_nofollow: string | null;
	header_first_subtitle: string | null;
	header_first_paragraph: string | null;
}

// For list of posts
export interface PostsQueryResult {
	posts: { edges: GraphQLPostFromList[] };
}

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
	categories: PostBaseCategory[];
	featuredImage: {
		mediaItemUrl: string;
		altText: string;
	};
	header?: {
		title?: string;
		content?: string;
	};
}

export interface BasePost {
	id: string;
	title: string;
	date: string;
	modified: string;
	excerpt: string;
	uri: string;
	content?: string;
	categories: GraphQLPostCategories;
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
	seo?: YoastSeoData;
}

export interface PostBaseCategory {
	name: string;
	uri: string;
}
interface GraphQLPostCategories {
	nodes: PostBaseCategory[];
}

// And the raw GraphQL node structure for posts:
// Too over complicated
export interface GraphQLPostFromList {
	node: BasePost;
}

export interface GraphQLPostSingle {
	post: BasePost;
}

export function mapPost(
	post: GraphQLPostFromList | GraphQLPostSingle,
	baseUrl?: string,
	urlPathname?: string
): Post {
	let postBase: BasePost;
	if ('node' in post) {
		// Handle GraphQLPostFromList
		postBase = post.node;
	} else {
		// Handle GraphQLPostSingle
		postBase = post.post;
	}

	return {
		id: postBase.id,
		title: postBase.title,
		date: postBase.date,
		modified: postBase.modified,
		excerpt: postBase.excerpt,
		content: transformLinks(postBase.content ?? '', baseUrl, urlPathname),
		plainExcerpt: stripHtml(postBase.excerpt),
		uri: postBase.uri,
		categories: postBase.categories?.nodes.map((graphQLCategory: PostBaseCategory) => {
			return {
				name: graphQLCategory.name,
				uri: graphQLCategory.uri
			};
		}),
		author: {
			name: postBase.author.node.name,
			avatar: { url: postBase.author.node.avatar.url }
		},
		featuredImage: {
			mediaItemUrl: postBase.featuredImage.node.mediaItemUrl,
			altText: postBase.featuredImage.node.altText
		},
		header: {
			title: postBase.header?.firstSubtitle,
			content: transformLinks(postBase.header?.firstParagraph ?? '', baseUrl, urlPathname)
		}
	};
}
