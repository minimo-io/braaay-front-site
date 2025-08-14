// src/lib/stores/filters.store.svelte.ts
import { writable } from 'svelte/store';

export interface FilterState {
	variety: string[];
	country: string[];
	priceRange: { min: number; max: number };
	taste: string[];
	shipping: string;
	size: string[];
	grape: string[]; // Add grape filter
}

export const filtersInitialState: FilterState = {
	variety: [],
	country: [],
	priceRange: { min: 10, max: 500 },
	taste: [],
	shipping: '',
	size: [],
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
