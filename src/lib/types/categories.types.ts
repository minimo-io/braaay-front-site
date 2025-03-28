import { type Icon as IconType } from '@lucide/svelte';
import type { ImageGeneral } from './image.types';

// Custom for menu
export interface MenuCategory {
	id: number;
	name: string;
	url: string;
	icon: typeof IconType; // Type of the icon component
	subcategories?: MenuCategory[]; // Optional subcategories
	external?: boolean; // Optional external link flag
	color?: 'green' | 'red';
}

export interface Category {
	name: string;
	header: {
		title: string;
		image?: ImageGeneral;
	};
	flagImage?: ImageGeneral;
}

export interface GraphQLCategory {
	name: string;
	categoryHeader: {
		customCatalogTitle: string;
		customCatalogImage: {
			node: {
				mediaItemUrl: string;
				altText: string;
			};
		};
	};
}

export function mapCategory(category: GraphQLCategory): Category {
	return {
		name: category.name,
		header: {
			title: category.categoryHeader?.customCatalogTitle || '',
			image: {
				url: category.categoryHeader?.customCatalogImage?.node?.mediaItemUrl,
				altText: category.categoryHeader?.customCatalogImage?.node?.altText
			}
		}
	};
}
