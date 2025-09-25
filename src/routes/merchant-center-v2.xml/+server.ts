// src/routes/merchant-center.xml/+server.ts
import type { RequestHandler } from '@sveltejs/kit';
import { gql } from '@urql/core';
import { getUrqlClient } from '$stores/urqlClient.state.svelte';
import { removeWPBakeryShortcodes } from '$lib/utils';

const ALL_PRODUCTS_QUERY = gql`
	query AllProductsForMerchantCenter($first: Int!) {
		products(first: $first, where: { status: "publish", orderby: { field: DATE, order: DESC } }) {
			edges {
				node {
					... on SimpleProduct {
						databaseId
						slug
						name
						price
						regularPrice
						stockStatus
						stockQuantity
						sku
						content
						shortDescription
						featuredImage {
							node {
								altText
								mediaItemUrl
							}
						}
						allPaProdutoresDeVinho {
							nodes {
								name
							}
						}
					}
				}
			}
		}
	}
`;

const STORE_CONFIG = {
	title: 'Braaay Store',
	link: 'https://braaay.com',
	description: 'Produtos da Braaay',
	currency: 'BRL',
	country: 'BR'
};

function sanitizeXML(text: string): string {
	if (!text) return '';
	return (
		text
			// Remove tags HTML
			.replace(/<[^>]*>/g, ' ')
			// Remove entidades HTML numéricas e nomeadas
			.replace(/&[#\w]+;/g, ' ')
			// Escapa caracteres XML
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#39;')
			// Limpa espaços
			.replace(/\s+/g, ' ')
			.trim()
	);
}

function mapAvailability(stockStatus: string): string {
	return stockStatus === 'IN_STOCK' ? 'in_stock' : 'out_of_stock';
}

function formatPrice(price: string): string {
	if (!price) return '';
	const numPrice = parseFloat(price.replace(/[^\d.,]/g, '').replace(',', '.'));
	return `${numPrice.toFixed(2)} ${STORE_CONFIG.currency}`;
}

function generateProductXML(product: any): string {
	const id = product.sku || product.databaseId;
	const title = sanitizeXML(product.name);
	const description = sanitizeXML(product.content || product.shortDescription || '').substring(
		0,
		1000
	);
	const link = `${STORE_CONFIG.link}/produto/${product.slug}`;
	const imageLink = product.featuredImage?.node?.mediaItemUrl || '';
	const proxyImageLink = `${STORE_CONFIG.link}/api/imgs-proxy/${imageLink}/`;
	const availability = mapAvailability(product.stockStatus);
	const price = formatPrice(product.price);
	const brand = product.allPaProdutoresDeVinho?.nodes?.[0]?.name || 'Braaay';

	return `
		<item>
			<g:id>${id}</g:id>
			<g:title>${title}</g:title>
			<g:description>${removeWPBakeryShortcodes(description)}</g:description>
			<g:link>${link}</g:link>
			<g:image_link>${proxyImageLink}</g:image_link>
			<g:condition>new</g:condition>
			<g:availability>${availability}</g:availability>
			<g:price>${price}</g:price>
			<g:brand>${sanitizeXML(brand)}</g:brand>
		</item>`;
}

export const GET: RequestHandler = async ({ locals }) => {
	try {
		const result = await getUrqlClient(locals.authToken)
			.client.query(ALL_PRODUCTS_QUERY, { first: 1000 })
			.toPromise();

		if (result.error) {
			throw new Error(result.error.message);
		}

		const products = result.data?.products?.edges?.map((edge: any) => edge.node) || [];

		let xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
	<channel>
		<title>${STORE_CONFIG.title}</title>
		<link>${STORE_CONFIG.link}</link>
		<description>${STORE_CONFIG.description}</description>`;

		products.forEach((product: any) => {
			xml += generateProductXML(product);
		});

		xml += `
	</channel>
</rss>`;

		return new Response(xml, {
			headers: {
				'Content-Type': 'application/xml; charset=utf-8'
			}
		});
	} catch (error) {
		console.error('Erro ao gerar XML:', error);
		return new Response('Erro interno do servidor', { status: 500 });
	}
};

// // src/routes/merchant-center.xml/+server.ts
// import type { RequestHandler } from '@sveltejs/kit';
// import { gql } from '@urql/core';
// import { getUrqlClient } from '$stores/urqlClient.state.svelte';

// const ALL_PRODUCTS_QUERY = gql`
// 	query AllProductsForMerchantCenter($first: Int!) {
// 		products(first: $first, where: { status: "publish", orderby: { field: DATE, order: DESC } }) {
// 			edges {
// 				node {
// 					... on SimpleProduct {
// 						databaseId
// 						slug
// 						name
// 						price
// 						regularPrice
// 						stockStatus
// 						stockQuantity
// 						sku
// 						content
// 						shortDescription
// 						featuredImage {
// 							node {
// 								altText
// 								mediaItemUrl
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// `;

// const STORE_CONFIG = {
// 	title: 'Braaay Store',
// 	link: 'https://braaay.com',
// 	description: 'Produtos da Braaay',
// 	currency: 'BRL',
// 	country: 'BR'
// };

// function sanitizeXML(text: string): string {
// 	if (!text) return '';
// 	return (
// 		text
// 			// Remove tags HTML
// 			.replace(/<[^>]*>/g, ' ')
// 			// Remove entidades HTML numéricas e nomeadas
// 			.replace(/&[#\w]+;/g, ' ')
// 			// Escapa caracteres XML
// 			.replace(/&/g, '&amp;')
// 			.replace(/</g, '&lt;')
// 			.replace(/>/g, '&gt;')
// 			.replace(/"/g, '&quot;')
// 			.replace(/'/g, '&#39;')
// 			// Limpa espaços
// 			.replace(/\s+/g, ' ')
// 			.trim()
// 	);
// }

// function mapAvailability(stockStatus: string): string {
// 	return stockStatus === 'IN_STOCK' ? 'in_stock' : 'out_of_stock';
// }

// function formatPrice(price: string): string {
// 	if (!price) return '';
// 	const numPrice = parseFloat(price.replace(/[^\d.,]/g, '').replace(',', '.'));
// 	return `${numPrice.toFixed(2)} ${STORE_CONFIG.currency}`;
// }

// function generateProductXML(product: any): string {
// 	const id = product.sku || product.databaseId;
// 	const title = sanitizeXML(product.name);
// 	const description = sanitizeXML(product.content || product.shortDescription || '').substring(
// 		0,
// 		1000
// 	);
// 	const link = `${STORE_CONFIG.link}/produto/${product.slug}`;
// 	const imageLink = product.featuredImage?.node?.mediaItemUrl || '';
// 	const availability = mapAvailability(product.stockStatus);
// 	const price = formatPrice(product.price);

// 	return `
// 		<item>
// 			<g:id>${id}</g:id>
// 			<g:title>${title}</g:title>
// 			<g:description>${description}</g:description>
// 			<g:link>${link}</g:link>
// 			<g:image_link>${imageLink}</g:image_link>
// 			<g:condition>new</g:condition>
// 			<g:availability>${availability}</g:availability>
// 			<g:price>${price}</g:price>
// 			<g:brand>Braaay</g:brand>
// 		</item>`;
// }

// export const GET: RequestHandler = async ({ locals }) => {
// 	try {
// 		const result = await getUrqlClient(locals.authToken)
// 			.client.query(ALL_PRODUCTS_QUERY, { first: 1000 })
// 			.toPromise();

// 		if (result.error) {
// 			throw new Error(result.error.message);
// 		}

// 		const products = result.data?.products?.edges?.map((edge: any) => edge.node) || [];

// 		let xml = `<?xml version="1.0" encoding="UTF-8"?>
// <rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
// 	<channel>
// 		<title>${STORE_CONFIG.title}</title>
// 		<link>${STORE_CONFIG.link}</link>
// 		<description>${STORE_CONFIG.description}</description>`;

// 		products.forEach((product: any) => {
// 			xml += generateProductXML(product);
// 		});

// 		xml += `
// 	</channel>
// </rss>`;

// 		return new Response(xml, {
// 			headers: {
// 				'Content-Type': 'application/xml; charset=utf-8'
// 			}
// 		});
// 	} catch (error) {
// 		console.error('Erro ao gerar XML:', error);
// 		return new Response('Erro interno do servidor', { status: 500 });
// 	}
// };
