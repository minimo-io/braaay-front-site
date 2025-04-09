import {
	Wine,
	Globe,
	Grape,
	Gift,
	PackageOpen,
	Beer,
	Droplets,
	Store,
	Factory,
	CalendarDays,
	Hop,
	Leaf
} from '@lucide/svelte';
import type { DrawerData } from '$lib/types';
// pre-fetched data
export const drawerData = {
	pt: [
		{
			id: 'wines',
			name: 'Vinhos',
			icon: Wine,
			subMenu: true
		} as DrawerData,
		{
			id: 'countries',
			name: 'Paises',
			icon: Globe,
			subMenu: true
		} as DrawerData,
		{
			id: 'grapes',
			name: 'Uvas',
			icon: Grape,
			subMenu: true
		} as DrawerData,
		{
			id: 'organic',
			name: 'Orgânicos',
			icon: Leaf,
			url: '/tag/vinhos-organicos/',
			color: 'green'
		} as DrawerData,
		{
			id: 'gifts',
			name: 'Presentes & Kits',
			icon: Gift,
			url: '/kits/'
		} as DrawerData,
		{
			id: 'beers',
			name: 'Cervejas',
			icon: Beer,
			url: '/cervejas/'
		} as DrawerData,
		{
			id: 'experiences',
			name: 'Experiências',
			url: '/experiencias/',
			icon: CalendarDays
		} as DrawerData
	],
	uy: [
		{
			id: 'beers',
			name: 'Cervezas',
			icon: Beer,
			url: '/uy/cervezas/'
		} as DrawerData,
		{
			id: 'beerstyles',
			name: 'Estilos',
			icon: Hop,
			subMenu: true
		} as DrawerData,
		{
			id: 'wines',
			name: 'Vinos',
			icon: Wine,
			url: '/uy/vinos/'
		} as DrawerData,
		{
			id: 'kits',
			name: 'Packs',
			icon: PackageOpen,
			url: ''
		} as DrawerData,
		{
			id: 'draft',
			name: 'Choperas',
			icon: Droplets,
			url: ''
		} as DrawerData,
		{
			id: 'breweries',
			name: 'Cervecerias',
			icon: Factory,
			url: ''
		} as DrawerData,
		{
			id: 'bars',
			name: 'Bares',
			icon: Store,
			url: ''
		} as DrawerData
	]
};
