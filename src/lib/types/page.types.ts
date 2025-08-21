import type { ArticleCreator } from './article-creator.types';
import type { ImageGeneral } from './image.types';
import type { YoastSeoData } from './seo.types';

export interface Page {
	id: string;
	slug: string;
	title: string;
	status: string;
	date: string;
	modified: string;
	excerpt: string;
	content: string;
	author: ArticleCreator;
	image: ImageGeneral;
	seo?: YoastSeoData;
	header?: {
		title?: string;
		content?: string;
	};
}

export interface GraphQLSinglePage {
	page: GraphQLPage;
}

export interface GraphQLPage {
	id: string;
	slug: string;
	title: string;
	status: string;
	date: string;
	modified: string;
	excerpt: string;
	content: string;
	featuredImage: {
		node: {
			altText: string;
			mediaItemUrl: string;
		};
	};
	author: {
		node: {
			name: string;
			avatar: {
				url: string;
			};
		};
	};
	header?: {
		firstSubtitle?: string;
		firstParagraph?: string;
	};
	seo?: YoastSeoData;
}

export function mapPage(data: GraphQLSinglePage): Page {
	return {
		id: data.page.id,
		slug: data.page.slug,
		title: data.page.title,
		status: data.page.status,
		date: data.page.date,
		modified: data.page.modified,
		excerpt: data.page.excerpt,
		content: data.page.content,
		author: {
			name: data.page.author.node.name,
			avatar: data.page.author.node.avatar
		},
		image: {
			url: data.page.featuredImage?.node.mediaItemUrl,
			altText: data.page.featuredImage?.node.altText
		},
		seo: data.page?.seo,
		header: {
			content: data.page.header?.firstParagraph,
			title: data.page.header?.firstSubtitle
		}
	};
}
