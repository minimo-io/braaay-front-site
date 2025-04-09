import { type Icon as IconType } from '@lucide/svelte';

export interface DrawerData {
	id: string;
	name: string;
	icon: typeof IconType;
	subMenu: boolean;
	url?: string;
	color?: 'green' | 'red';
}

export interface Grapes {
	name: string;
	url: string;
	count: number;
}

// Define the type for the source data
export interface WineCountrySource {
	name: string;
	url: string;
	flag: string;
	count: number;
}

export interface WineCountriesData {
	pt: WineCountrySource[];
	uy: WineCountrySource[];
}
