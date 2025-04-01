// src/lib/types/products.types.ts
import type { ArticleCreator } from './article-creator.types';
import type { PageCustomColors } from './page-custom-header.types';
import type { ImageGeneral } from './image.types';
import type { GraphQLCategory } from './categories.types';
// import type { RelayData } from './relay-data.types';

export interface ProductsForCategoryQueryResult {
	productCategory: GraphQLCategory;
	products: { nodes: GraphQLProduct[] };
}

export interface ProductsForCountryQueryResult {
	allPaPais: {
		nodes: GraphQLCategory[];
	};
	products: { nodes: GraphQLProduct[] };
}

export interface Product {
	slug: string;
	title: string;
	floatPrice: number;
	price: string;
	regularPrice: string;
	stockStatus: string;
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
	header?: {
		title?: string;
		content?: string;
	};
}

export interface GraphQLSingleProduct {
	product: GraphQLProduct;
}

export interface GraphQLProduct {
	slug: string;
	title: string;
	sku: string;
	status: string;
	price: string;
	regularPrice: string;
	stockStatus: string;

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
	header?: {
		firstSubtitle?: string;
		firstParagraph?: string;
	};
}

export function mapProduct(node: GraphQLProduct): Product {
	let averageRating = '0.0';
	if (node.averageRating && node.averageRating !== 0) {
		averageRating = node.averageRating.toFixed(1);
	}

	return {
		slug: node.slug,
		floatPrice: parseFloat(node.price.replaceAll('R$', '').replaceAll('$', '').replaceAll(' ', '')),
		price: node.price,
		regularPrice: node.regularPrice,
		stockStatus: node.stockStatus,
		title: node.title,
		sku: node.sku,
		status: node.status,
		content: node.content,
		shortDescription: node.shortDescription,
		pageCustomColors: {
			gradientStart: node.outrosDadosDeProduto?.bgGradientStart || undefined,
			gradientEnd: node.outrosDadosDeProduto?.bgGradientEnd || undefined,
			color: node.outrosDadosDeProduto?.pageMainColor || undefined,
			bgImage: node.outrosDadosDeProduto?.bgContentImage?.node?.mediaItemUrl || undefined
		},
		uri: node.uri,
		date: node.date,
		modified: node.modified,
		author: {
			name: node.author.node.name,
			avatar: node.author.node.avatar
		},
		averageRating: averageRating,
		excerpt: node.excerpt,
		image: {
			url: node.featuredImage?.node.mediaItemUrl,
			altText: node.featuredImage?.node.altText
		},
		reviewCount: node.reviewCount,
		header: {
			title: node.header?.firstSubtitle,
			content: node.header?.firstParagraph
		}
	};
}
