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
	count?: number;
}

export interface Category {
	name: string;
	description: string;
	count: number;
	header: {
		title: string;
		image?: ImageGeneral;
		icon?: ImageGeneral;
		firstParagraph?: string;
		firstTitle?: string;
	};
}

export interface GraphQLCategory {
	name: string;
	description: string;
	count: number;
	header: {
		firstParagraph: string;
		firstSubtitle: string;
	};
	categoryHeader: {
		customCatalogTitle: string;
		customCatalogImage: {
			node: {
				mediaItemUrl: string;
				altText: string;
			};
		};
		customCatalogIcon: {
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
		description: category.description,
		count: category.count || 0,

		header: {
			title: category.categoryHeader?.customCatalogTitle || '',
			image: {
				url: category.categoryHeader?.customCatalogImage?.node?.mediaItemUrl,
				altText: category.categoryHeader?.customCatalogImage?.node?.altText
			},
			icon: {
				url: category.categoryHeader?.customCatalogIcon?.node?.mediaItemUrl,
				altText: category.categoryHeader?.customCatalogIcon?.node?.altText
			},
			firstParagraph: category.header.firstParagraph,
			firstTitle: category.header.firstSubtitle
		}
	};
}
