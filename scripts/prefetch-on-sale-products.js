import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { createClient, cacheExchange, fetchExchange, gql } from '@urql/core';
export function toFloatPrice(price) {
    // console.log('📱 toFloatPrice input:', price);
    if (!price)
        return 0;
    const unsignedPrice = price
        .replaceAll('R$', '')
        .replaceAll('$', '')
        .replaceAll(' ', '')
        .replaceAll('.', '') // Remove thousands separator FIRST
        .replaceAll(',', '.');
    // console.log('📱 toFloatPrice processed:', unsignedPrice);
    const result = parseFloat(unsignedPrice);
    // console.log('📱 toFloatPrice output:', result);
    return result;
}
const PUBLIC_APP_PASSWORD_EMAIL = process.env.PUBLIC_APP_PASSWORD_EMAIL ?? 'NOTHING_HERE';
const PUBLIC_APP_PASSWORD_KEY = process.env.PUBLIC_APP_PASSWORD_KEY ?? 'NOTHING_HERE';
export function generateBasicAuthorization(username, appPassword) {
    const credentials = `${username}:${appPassword}`;
    const encodedCredentials = btoa(credentials); // btoa is a built-in browser function for Base64 encoding
    return encodedCredentials;
}
const basicAuth = `Basic ${generateBasicAuthorization(PUBLIC_APP_PASSWORD_EMAIL, PUBLIC_APP_PASSWORD_KEY)}`;
const ONSALE_PRODUCTS = gql `
	query OnSaleProducts {
		products(
			first: 10
			where: { stockStatus: IN_STOCK, onSale: true, orderby: { field: REVIEW_COUNT, order: DESC } }
		) {
			nodes {
				databaseId
				sku
				name
				uri
				image {
					mediaItemUrl
					altText
				}
				... on SimpleProduct {
					stockQuantity
					stockStatus
					price
					regularPrice
				}
			}
		}
	}
`;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, '../src/lib/data/jsons/');
const PT_GRAPHQL_URL = 'https://braaay.com/graphql';
const UY_GRAPHQL_URL = 'https://braaay.com/uy/graphql';
const ptClient = createClient({
    url: PT_GRAPHQL_URL,
    exchanges: [cacheExchange, fetchExchange],
    requestPolicy: 'network-only',
    fetchOptions: () => ({
        headers: {
            authorization: basicAuth
        }
    })
});
const uyClient = createClient({
    url: UY_GRAPHQL_URL,
    exchanges: [cacheExchange, fetchExchange],
    requestPolicy: 'network-only',
    fetchOptions: () => ({
        headers: {
            authorization: basicAuth
        }
    })
});
function transformData(data) {
    if (!data || !data.products || !data.products.nodes) {
        return [];
    }
    return data.products.nodes.map((node) => ({
        id: node.databaseId,
        sku: node.sku,
        uri: node.uri,
        name: node.name,
        priceString: node.price,
        regularPrice: node.regularPrice,
        price: toFloatPrice(node.price),
        quantity: 1,
        maxQuantity: node.stockQuantity,
        image: {
            mediaItemUrl: node.image.mediaItemUrl,
            altText: node.image.altText
        }
    }));
}
async function fetchPtData() {
    console.log('Fetching popular products from Portuguese endpoint...');
    // console.log('BASIC_AUTH', basicAuth);
    try {
        const result = await ptClient.query(ONSALE_PRODUCTS, {}).toPromise();
        if (result.error) {
            console.error('Error fetching PT data:', result.error);
            return [];
        }
        return transformData(result.data);
    }
    catch (error) {
        console.error('Failed to fetch PT data:', error);
        return [];
    }
}
async function fetchUyData() {
    console.log('Fetching popular products from Uruguayan endpoint...');
    try {
        const result = await uyClient.query(ONSALE_PRODUCTS, {}).toPromise();
        if (result.error) {
            console.error('Error fetching UY data:', result.error);
            return [];
        }
        return transformData(result.data);
    }
    catch (error) {
        console.error('Failed to fetch UY data:', error);
        return [];
    }
}
async function fetchAllData() {
    console.log('⭐️ Fetching on sale products...');
    try {
        const [ptData, uyData] = await Promise.all([fetchPtData(), fetchUyData()]);
        const combinedData = {
            pt: ptData,
            uy: uyData
        };
        // if (!fs.existsSync(outputDir)) {
        // 	fs.mkdirSync(outputDir, { recursive: false });
        // }
        const outputPath = path.join(outputDir, 'on-sale-products.json');
        fs.writeFileSync(outputPath, JSON.stringify(combinedData, null, 2), 'utf8');
        console.log(`On sale products data saved to ${outputPath}`);
    }
    catch (error) {
        console.error('Failed to fetch popular products:', error);
        process.exit(1);
    }
}
fetchAllData();
