// src/lib/types/products.types.ts
import { createExcerpt, stripHtml } from '$lib/utils';
import type {
	GraphQLPagination,
	ArticleCreator,
	PageCustomColors,
	ImageGeneral,
	GraphQLCategory,
	YoastSeoData
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
	id: number;
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
	seo?: YoastSeoData;
}
export interface ProductCategory {
	name: string;
	slug: string;
	uri: string;
}
export interface ProductAttributes {
	maturation: string;
	agingPotential: string;
	bottle: string;
	country: {
		name: string;
		uri: string;
	};
	region: string;
	typicalPalate: string;
	producer: {
		name: string;
		uri: string;
		shortDescription: string;
	};
	vintage: string; // safra
	servingTemperature: string;
	abv: string;
	grapes: {
		name: string;
		uri: string;
	}[];
}

export interface GraphQLSingleProduct {
	product: GraphQLProduct;
}

export interface GraphQLProductNode {
	node: GraphQLProduct;
}

interface GraphQLProductExtraAttributes {
	extraAttributes: {
		amadurecimento: string;
		potencialDeGuarda: string;
	};
	allPaGarrafa: {
		nodes: {
			name: string;
		};
	};
	allPaPais: {
		nodes: {
			name: string;
			uri: string;
		};
	};
	allPaRegiao: {
		nodes: {
			name: string;
		};
	};
	allPaPaladarTipico: {
		nodes: {
			name: string;
		};
	};
	allPaProdutoresDeVinho: {
		nodes: {
			name: string;
			uri: string;
			description: string;
			dadosExtraProdutores: {
				textoDestaque: string;
			};
		};
	};
	allPaSafra: {
		nodes: {
			name: string;
		};
	};
	allPaTemperaturaDeServico: {
		nodes: {
			name: string;
		};
	};
	allPaTeorAlcoolico: {
		nodes: {
			name: string;
		};
	};

	uvas: {
		nodes: {
			name: string;
		}[];
	};
}

export interface GraphQLProduct {
	databaseId: number;
	slug: string;
	title: string;
	sku: string;
	status: string;
	price: string;
	regularPrice: string;
	stockStatus: string;

	productCategories?: any;
	extraAttributes?: GraphQLProductExtraAttributes;

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

	seo?: YoastSeoData;
}

export function mapProduct(data: GraphQLProductNode): Product {
	let averageRating = '0.0';
	if (data.node.averageRating && data.node.averageRating !== 0) {
		averageRating = data.node.averageRating.toFixed(1);
	}

	let floatPrice = data.node.price;
	if (floatPrice) {
		floatPrice = floatPrice
			.replaceAll('R$', '')
			.replaceAll('$', '')
			.replaceAll(' ', '')
			.replaceAll(',', '.');
	}

	return {
		id: data.node.databaseId,
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
		},
		seo: data.node.seo
	};
}

export function mapProductCategory(data: any): ProductCategory {
	return {
		name: data.node.name,
		slug: data.node.slug,
		uri: data.node.uri
	};
}
export function mapProductExtraAttributes(data): ProductAttributes {
	// dadosExtraProdutores: {
	// textoDestaque: string;
	const attributes = {
		maturation: data?.extraAttributes?.amadurecimento ?? '',
		agingPotential: data?.extraAttributes.potencialDeGuarda ?? '',
		bottle: data?.allPaGarrafa.nodes.map((n) => n.name).join(', ') ?? '',

		country: {
			name: data?.allPaPais.nodes[0]?.name ?? '',
			uri: data?.allPaPais.nodes[0]?.uri ?? ''
		},

		region: data?.allPaRegiao.nodes.map((n) => n.name).join(', ') ?? '',
		typicalPalate: data?.allPaPaladarTipico.nodes.map((n) => n.name).join(', ') ?? '',

		producer: {
			name: data?.allPaProdutoresDeVinho.nodes[0]?.name ?? '',
			uri: data?.allPaProdutoresDeVinho.nodes[0]?.uri ?? '',
			shortDescription:
				data?.allPaProdutoresDeVinho.nodes[0]?.dadosExtraProdutores.textoDestaque ??
				createExcerpt(stripHtml(data?.allPaProdutoresDeVinho.nodes[0]?.description || ''), 150)
		},

		vintage: data?.allPaSafra.nodes.map((n) => n.name).join(', ') ?? '',
		servingTemperature: data?.allPaTemperaturaDeServico.nodes.map((n) => n.name).join(', ') ?? '',
		abv: data?.allPaTeorAlcoolico.nodes.map((n) => n.name).join(', ') ?? '',
		grapes:
			data?.uvas.nodes.map((g) => ({
				name: g.name,
				uri: g.uri
			})) ?? []
	};
	return attributes;
}
