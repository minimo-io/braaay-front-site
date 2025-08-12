// src/lib/utils/filterBuilder.util.ts
import type { FilterState } from '$stores/filters.store.svelte';

export interface GraphQLFilters {
	minPrice?: number;
	maxPrice?: number;
	productTypes?: string[];
	shippingClasses?: string[];
	attributes?: Array<{
		taxonomy: string;
		terms: string[];
	}>;
}

export const buildGraphQLFilters = (filters: FilterState): GraphQLFilters => {
	const graphqlFilters: GraphQLFilters = {};

	// Price range
	if (filters.priceRange.min > 10) {
		graphqlFilters.minPrice = filters.priceRange.min;
	}
	if (filters.priceRange.max < 500) {
		graphqlFilters.maxPrice = filters.priceRange.max;
	}

	// Attributes for variety, country, taste, size
	const attributes: any = [];

	if (filters.variety.length > 0) {
		attributes.push({
			taxonomy: 'pa_variety',
			terms: filters.variety
		});
	}

	if (filters.country.length > 0) {
		attributes.push({
			taxonomy: 'pa_country',
			terms: filters.country
		});
	}

	if (filters.taste.length > 0) {
		attributes.push({
			taxonomy: 'pa_taste',
			terms: filters.taste
		});
	}

	if (filters.size.length > 0) {
		attributes.push({
			taxonomy: 'pa_size',
			terms: filters.size
		});
	}

	if (attributes.length > 0) {
		graphqlFilters.attributes = attributes;
	}

	// Shipping classes
	if (filters.shipping) {
		graphqlFilters.shippingClasses = [filters.shipping];
	}

	return graphqlFilters;
};
