import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { createClient, cacheExchange, fetchExchange, gql } from '@urql/core';
const POPULAR_PRODUCTS_QUERY = gql `
	query MostSoldWines {
		products(
			first: 10
			where: { orderby: { field: POPULARITY, order: DESC }, category: "vinhos" }
		) {
			nodes {
				databaseId
				name
				uri
				image {
					mediaItemUrl
					altText
				}
				... on SimpleProduct {
					price
					regularPrice
					totalSales
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
    fetchOptions: () => ({})
});
const uyClient = createClient({
    url: UY_GRAPHQL_URL,
    exchanges: [cacheExchange, fetchExchange],
    requestPolicy: 'network-only',
    fetchOptions: () => ({})
});
function transformData(data) {
    if (!data || !data.products || !data.products.nodes) {
        return [];
    }
    return data.products.nodes.map((node) => ({
        id: node.databaseId,
        title: node.name,
        url: node.uri,
        price: node.price,
        regularPrice: node.regularPrice,
        image: {
            alt: node.image.altText,
            src: node.image.mediaItemUrl
        }
    }));
}
async function fetchPtData() {
    console.log('Fetching popular products from Portuguese endpoint...');
    try {
        const result = await ptClient.query(POPULAR_PRODUCTS_QUERY, {}).toPromise();
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
        const result = await uyClient.query(POPULAR_PRODUCTS_QUERY, {}).toPromise();
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
    console.log('⭐️ Fetching most popular products...');
    try {
        const [ptData, uyData] = await Promise.all([fetchPtData(), fetchUyData()]);
        const combinedData = {
            pt: ptData,
            uy: uyData
        };
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }
        const outputPath = path.join(outputDir, 'popular-products.json');
        fs.writeFileSync(outputPath, JSON.stringify(combinedData, null, 2), 'utf8');
        console.log(`Popular products data saved to ${outputPath}`);
    }
    catch (error) {
        console.error('Failed to fetch popular products:', error);
        process.exit(1);
    }
}
fetchAllData();
