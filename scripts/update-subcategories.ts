// scripts/update-grapes.ts
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@urql/core';
import { cacheExchange, fetchExchange } from '@urql/core';
// import * as dotenv from 'dotenv';
// import dotenv from 'dotenv';

// Load environment variables
// dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, '../src/lib/data/jsons/wine-subcategories.json');

// GraphQL endpoint URLs from environment variables
const PT_GRAPHQL_URL = 'https://api.braaay.com/graphql'; // process.env.PUBLIC_GRAPHQL_SERVER_PT;
const UY_GRAPHQL_URL = 'https://api.braaay.com/uy/graphql'; // process.env.PUBLIC_GRAPHQL_SERVER_UY;

// Create urql clients for both endpoints
const ptClient = createClient({
	url: PT_GRAPHQL_URL!,
	exchanges: [cacheExchange, fetchExchange],
	requestPolicy: 'network-only',
	fetchOptions: () => ({})
});

const uyClient = createClient({
	url: UY_GRAPHQL_URL!,
	exchanges: [cacheExchange, fetchExchange],
	requestPolicy: 'network-only',
	fetchOptions: () => ({})
});

// GraphQL query to fetch grape varieties
const GRAPE_VARIETIES_QUERY_PT = `
	query{
		productCategories(first:10000, where:{orderby: COUNT, hideEmpty:true, parent:26 }){
			nodes{
				databaseId
				count
				name
				uri
			}
		}
	}
`;

function transformData(data) {
	if (!data || !data.productCategories || !data.productCategories.nodes) {
		return [];
	}

	return data.productCategories.nodes.map((node) => ({
		id: node.databaseId,
		name: node.name,
		url: node.uri,
		count: node.count || 0
	}));
}

// Fetch data from Portuguese endpoint
async function fetchPtData() {
	console.log('Fetching sub-categories from Portuguese endpoint...');
	try {
		const result = await ptClient.query(GRAPE_VARIETIES_QUERY_PT, {}).toPromise();

		if (result.error) {
			console.error('Error fetching PT data:', result.error);
			return [];
		}

		return transformData(result.data);
	} catch (error) {
		console.error('Failed to fetch PT data:', error);
		return [];
	}
}

// For Uruguay, since there's no "uvas" taxonomy yet, just return an empty array
async function fetchUyData() {
	console.log('No sub-categories in Uruguayan endpoint yet, returning empty array');

	// Reference the client to prevent unused variable warnings
	// but don't make an actual query yet
	if (!uyClient) {
		console.warn('Uruguay GraphQL client is not initialized');
	}

	// When ready to implement, uncomment the query code:
	/*
    try {
      const result = await uyClient.query(GRAPE_VARIETIES_QUERY, {}).toPromise();
      
      if (result.error) {
        console.error('Error fetching UY data:', result.error);
        return [];
      }
      
      return transformData(result.data);
    } catch (error) {
      console.error('Failed to fetch UY data:', error);
      return [];
    }
    */

	return [];
}

// Main function to fetch and combine data
async function fetchAllData() {
	try {
		const [ptData, uyData] = await Promise.all([fetchPtData(), fetchUyData()]);

		const combinedData = {
			pt: ptData,
			uy: uyData
		};

		// Create the directory if it doesn't exist
		const dir = path.dirname(outputPath);
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir, { recursive: true });
		}

		// Write the data to a JSON file
		fs.writeFileSync(outputPath, JSON.stringify(combinedData, null, 2), 'utf8');

		console.log(`Sub-categories data saved to ${outputPath}`);
	} catch (error) {
		console.error('Failed to fetch sub-categories:', error);
		process.exit(1);
	}
}

// Execute the main function
fetchAllData();
