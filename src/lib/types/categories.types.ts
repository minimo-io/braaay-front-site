import { type Icon as IconType } from '@lucide/svelte';

export interface Category {
	id: number;
	name: string;
	url: string;
	icon: typeof IconType; // Type of the icon component
	subcategories?: Category[]; // Optional subcategories
	external?: boolean; // Optional external link flag
	color?: 'green' | 'red';
}
