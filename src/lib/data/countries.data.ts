// src/lib/data/countries.data.ts
import type { AllCountries, Country, ImageGeneral, WineCountriesData } from '$lib/types';
import rawWineCountriesData from '$data/jsons/wine-countries.json';

const wineCountriesData = rawWineCountriesData as WineCountriesData;

// Function to check if a country should be bold based on flag
function shouldBeBold(flagPath: string): boolean {
	return flagPath.includes('brasil-flag.png') || flagPath.includes('uruguai-flag.png');
}

// Function to transform the data
function transformWineCountries(): AllCountries {
	const transformedData: AllCountries = {
		pt: [],
		uy: []
	};

	// Transform PT countries
	transformedData.pt = wineCountriesData.pt.map(
		(country) =>
			({
				name: country.name,
				url: country.url,
				isBold: shouldBeBold(country.flag),
				count: country.count,
				flag: {
					url: country.flag,
					altText: country.name
				} as ImageGeneral
			}) as Country
	);

	// Transform UY countries (empty in your example)
	// This is now safely typed
	transformedData.uy = wineCountriesData.uy.map(
		(country) =>
			({
				name: country.name,
				url: country.url,
				isBold: shouldBeBold(country.flag),
				count: country.count,
				flag: {
					url: country.flag,
					altText: country.name
				} as ImageGeneral
			}) as Country
	);

	return transformedData;
}

// Export the transformed data for direct import
export const allCountries: AllCountries = transformWineCountries();
