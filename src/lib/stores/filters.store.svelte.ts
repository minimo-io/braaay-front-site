// src/lib/stores/filters.store.svelte.ts
import { AppConfig } from '$config';
import { getLocale } from '$lib/paraglide/runtime';
import { writable } from 'svelte/store';

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
