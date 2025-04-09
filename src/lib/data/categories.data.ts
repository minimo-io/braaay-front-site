// src/lib/data/categories.ts
import {
	Gift,
	PackageOpen,
	CalendarDays,
	Leaf,
	Award,
	Wine,
	Beer,
	Droplets,
	Gem,
	Factory,
	Store
} from '@lucide/svelte';
import type { MenuCategory } from '$lib/types';
import WineSubcategories from '$data/jsons/wine-subcategories.json';

export function getSiteCategories(site: 'pt' | 'uy' = 'pt') {
	const categories: { [key: string]: MenuCategory[] } = {
		pt: [
			{
				id: 8,
				name: 'Vinhos',
				url: '/vinhos/',
				icon: Wine,
				subcategories: WineSubcategories['pt'] as MenuCategory[]
			},
			{ id: 101, name: 'Presentes & Kits', url: '/kits/', icon: Gift },
			{ id: 101, name: 'Cervejas', url: '/cervejas/', icon: Beer },
			// { id: 102, name: 'Kits', url: '/kits/', icon: PackageOpen },
			{
				id: 103,
				name: 'Experiências',
				url: '/experiencias/',
				icon: CalendarDays
			},
			{ id: 104, name: 'Orgânicos', url: '/tag/vinhos-organicos/', icon: Leaf, color: 'green' },
			{ id: 105, name: 'Premiados', url: '/tag/premiados/', icon: Award }
		],
		uy: [
			{
				id: 8,
				name: 'Cervezas',
				url: '/uy/cervezas/',
				icon: Beer
			},
			{
				id: 8,
				name: 'Vinos',
				url: '/uy/vinos/',
				icon: Wine
			},
			{
				id: 0,
				name: 'Packs',
				url: '/uy/packs/',
				icon: PackageOpen
			},
			{
				id: 0,
				name: 'Choperas',
				url: '/uy/choperas/',
				icon: Droplets
			},
			{
				id: 0,
				name: 'Cristalería',
				url: '/uy/cristaleria/',
				icon: Gem
			},
			{
				id: 0,
				name: 'Cervecerías',
				url: '/uy/cervecerias/',
				icon: Factory
			},
			{
				id: 0,
				name: 'Bares',
				url: '/uy/bares/',
				icon: Store
			}
		]
	};

	return categories[site] || [];
}

export function getBlogCategories(site = 'pt') {
	const categories = {
		pt: [
			{
				id: 0,
				name: 'Curiosidades e dicas',
				url: '',
				icon: '',
				external: false
			}
		]
	};
	return categories[site] || [];
}
