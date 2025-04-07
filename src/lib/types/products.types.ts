// src/lib/types/products.types.ts
import type {
	GraphQLPagination,
	ArticleCreator,
	PageCustomColors,
	ImageGeneral,
	GraphQLCategory
} from './index';

export interface ProductsForCategoryQueryResult {
	productCategory: GraphQLCategory;
	products: { pageInfo: GraphQLPagination; edges: GraphQLProductNode[] };
}

export interface ProductsForCountryQueryResult {
	allPaPais: {
		nodes: GraphQLCategory[];
	};
	products: { pageInfo: GraphQLPagination; edges: GraphQLProductNode[] };
}
export interface ProductsForWineProducerQueryResult {
	allPaProdutoresDeVinho: {
		nodes: GraphQLCategory[];
	};
	products: { pageInfo: GraphQLPagination; edges: GraphQLProductNode[] };
}
export interface ProductsForPairingQueryResult {
	allPaHarmonizacoes: {
		nodes: GraphQLCategory[];
	};
	products: { pageInfo: GraphQLPagination; edges: GraphQLProductNode[] };
}
export interface ProductsForUvaQueryResult {
	uva: GraphQLCategory;
	products: { pageInfo: GraphQLPagination; edges: GraphQLProductNode[] };
}
export interface ProductsForTagQueryResult {
	productTag: GraphQLCategory;
	products: { pageInfo: GraphQLPagination; edges: GraphQLProductNode[] };
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

export interface GraphQLProductNode {
	node: GraphQLProduct;
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

export function mapProduct(data: GraphQLProductNode): Product {
	let averageRating = '0.0';
	if (data.node.averageRating && data.node.averageRating !== 0) {
		averageRating = data.node.averageRating.toFixed(1);
	}

	let floatPrice = data.node.price;
	if (floatPrice) {
		floatPrice = floatPrice.replaceAll('R$', '').replaceAll('$', '').replaceAll(' ', '');
	}

	return {
		slug: data.node.slug,
		floatPrice: parseFloat(floatPrice),
		price: data.node.price,
		regularPrice: data.node.regularPrice,
		stockStatus: data.node.stockStatus,
		title: data.node.title,
		sku: data.node.sku,
		status: data.node.status,
		content: data.node.content,
		shortDescription: data.node.shortDescription,
		pageCustomColors: {
			gradientStart: data.node.outrosDadosDeProduto?.bgGradientStart || undefined,
			gradientEnd: data.node.outrosDadosDeProduto?.bgGradientEnd || undefined,
			color: data.node.outrosDadosDeProduto?.pageMainColor || undefined,
			bgImage: data.node.outrosDadosDeProduto?.bgContentImage?.node?.mediaItemUrl || undefined
		},
		uri: data.node.uri,
		date: data.node.date,
		modified: data.node.modified,
		author: {
			name: data.node.author.node.name,
			avatar: data.node.author.node.avatar
		},
		averageRating: averageRating,
		excerpt: data.node.excerpt,
		image: {
			url: data.node.featuredImage?.node.mediaItemUrl,
			altText: data.node.featuredImage?.node.altText
		},
		reviewCount: data.node.reviewCount,
		header: {
			title: data.node.header?.firstSubtitle,
			content: data.node.header?.firstParagraph
		}
	};
}
