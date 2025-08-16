import { AppConfig } from '$config';
import { getLocale } from '$lib/paraglide/runtime';
import type { FilterState } from '$stores/filters.store.svelte';

export interface GraphQLFilters {
	minPrice?: number;
	maxPrice?: number;
	productTypes?: string[];
	shippingClasses?: string[];
	taxonomyFilter?: {
		filters: Array<{
			taxonomy: string;
			terms: string[];
		}>;
	};
	attributes?: Array<{
		taxonomy: string;
		terms: string[];
	}>;
}

export const buildGraphQLFilters = (filters: FilterState): GraphQLFilters => {
	const graphqlFilters: GraphQLFilters = {};

	// Safety check - ensure filters object exists
	if (!filters) {
		return graphqlFilters;
	}

	// Price range - with safety checks
	if (
		filters.priceRange?.min &&
		filters.priceRange.min > AppConfig.catalog_filter[getLocale()].catalog_filter_min_price
	) {
		graphqlFilters.minPrice = filters.priceRange.min;
	}
	if (
		filters.priceRange?.max &&
		filters.priceRange.max < AppConfig.catalog_filter[getLocale()].catalog_filter_max_price
	) {
		graphqlFilters.maxPrice = filters.priceRange.max;
	}

	// Build taxonomy filters for grape (UVA)
	const taxonomyFilters: Array<{ taxonomy: string; terms: string[] }> = [];

	if (filters.grape && Array.isArray(filters.grape) && filters.grape.length > 0) {
		taxonomyFilters.push({
			taxonomy: 'UVA',
			terms: filters.grape
		});
	}

	// Add taxonomy filter for bottleSize (PA_GARRAFA)
	if (filters.bottleSize && Array.isArray(filters.bottleSize) && filters.bottleSize.length > 0) {
		taxonomyFilters.push({
			taxonomy: 'PA_GARRAFA',
			terms: filters.bottleSize
		});
	}

	if (taxonomyFilters.length > 0) {
		graphqlFilters.taxonomyFilter = {
			filters: taxonomyFilters
		};
	}

	// Attributes for other filters (variety, country, taste, size)
	const attributes: any = [];

	if (filters.variety && Array.isArray(filters.variety) && filters.variety.length > 0) {
		attributes.push({
			taxonomy: 'pa_variety',
			terms: filters.variety
		});
	}

	if (filters.country && Array.isArray(filters.country) && filters.country.length > 0) {
		attributes.push({
			taxonomy: 'pa_country',
			terms: filters.country
		});
	}

	if (filters.taste && Array.isArray(filters.taste) && filters.taste.length > 0) {
		attributes.push({
			taxonomy: 'pa_taste',
			terms: filters.taste
		});
	}

	// if (filters.size && Array.isArray(filters.size) && filters.size.length > 0) {
	// 	attributes.push({
	// 		taxonomy: 'pa_size',
	// 		terms: filters.size
	// 	});
	// }

	if (attributes.length > 0) {
		graphqlFilters.attributes = attributes;
	}

	// Shipping classes - with safety check
	if (filters.shipping && typeof filters.shipping === 'string') {
		graphqlFilters.shippingClasses = [filters.shipping];
	}

	return graphqlFilters;
};
