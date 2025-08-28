// src/lib/stores/filters.store.svelte.ts
import { AppConfig } from '$config';
import { getLocale } from '$lib/paraglide/runtime';
import { derived, writable } from 'svelte/store';

export interface FilterState {
	variety: string[];
	country: string[];
	priceRange: { min: number; max: number };
	taste: string[];
	shipping: string;
	bottleSize: string[];
	pairings: string[];
	grape: string[]; // Add grape filter
}

export const filtersInitialState: FilterState = {
	variety: [],
	country: [],
	priceRange: {
		min: AppConfig.catalog_filter[getLocale()].catalog_filter_min_price,
		max: AppConfig.catalog_filter[getLocale()].catalog_filter_max_price
	},
	taste: [],
	shipping: '',
	bottleSize: [],
	pairings: [],
	grape: [] // Initialize grape as empty array
};

export const filterState = writable<FilterState>(filtersInitialState);

export const updateFilter = (key: keyof FilterState, value: any) => {
	filterState.update((state) => ({
		...state,
		[key]: value
	}));
};

export const resetFilters = () => {
	filterState.set(filtersInitialState);
};

// 👇 ADD THIS DERIVED STORE
export const appliedFiltersCount = derived(filterState, ($filters) => {
	let count = 0;

	// Count filters that are arrays and are not empty
	if ($filters.variety.length > 0) count++;
	if ($filters.country.length > 0) count++;
	if ($filters.taste.length > 0) count++;
	if ($filters.bottleSize.length > 0) count++;
	if ($filters.pairings.length > 0) count++;
	if ($filters.grape.length > 0) count++;

	// Count string-based filters that are not their default empty value
	if ($filters.shipping !== filtersInitialState.shipping) count++;

	// Count the price range if it has been changed from the initial state
	const initialPrice = filtersInitialState.priceRange;
	if (
		$filters.priceRange.min !== initialPrice.min ||
		$filters.priceRange.max !== initialPrice.max
	) {
		count++;
	}

	return count;
});
