// src/lib/types/products.types.ts
import type { ArticleCreator } from './article-creator.types';
import type { PageCustomColors } from './page-custom-header.types';
import type { ImageGeneral } from './image.types';
// import type { RelayData } from './relay-data.types';

export interface Product {
	slug: string;
	title: string;
	price: string;
	sku: string;
	status: string;
	pageCustomColors: PageCustomColors;
	uri: string;
	date: string;
	modified: string;
	author: ArticleCreator;
	averageRating: string;
	excerpt: string;
	image: ImageGeneral;
	reviewCount: number;
	content?: string;
	shortDescription: string;
}

export interface GraphQLProduct {
	slug: string;
	title: string;
	sku: string;
	status: string;
	price: string;

	outrosDadosDeProduto: {
		bgGradientStart?: string;
		bgGradientEnd?: string;
		pageMainColor?: string;

		bgContentImage: {
			node: {
				mediaItemUrl: string;
			};
		};
	};

	uri: string;
	date: string;
	modified: string;
	author: {
		node: {
			name: string;
			avatar: {
				url: string;
			};
		};
	};
	averageRating: number;
	excerpt: string;
	featuredImage: {
		node: {
			altText: string;
			mediaItemUrl: string;
		};
	};
	reviewCount: number;
	content?: string;
	shortDescription: string;
}

export function mapProduct(node: GraphQLProduct): Product {
	return {
		slug: node.slug,
		price: node.price,
		title: node.title,
		sku: node.sku,
		status: node.status,
		pageCustomColors: {
			gradientStart: node.outrosDadosDeProduto.bgGradientStart || undefined,
			gradientEnd: node.outrosDadosDeProduto.bgGradientEnd || undefined,
			color: node.outrosDadosDeProduto.pageMainColor || undefined,
			bgImage: node.outrosDadosDeProduto.bgContentImage?.node?.mediaItemUrl || undefined
		},
		uri: node.uri,
		date: node.date,
		modified: node.modified,
		author: {
			name: node.author.node.name,
			avatar: node.author.node.avatar
		},
		averageRating: node.averageRating === 0 ? '0.0' : node.averageRating.toFixed(1),
		excerpt: node.excerpt,
		image: {
			url: node.featuredImage?.node.mediaItemUrl,
			altText: node.featuredImage?.node.altText
		},
		reviewCount: node.reviewCount,
		shortDescription: node.shortDescription
	};
}
