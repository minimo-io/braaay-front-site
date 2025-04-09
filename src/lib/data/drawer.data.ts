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
	Hop
} from '@lucide/svelte';

// pre-fetched data

export const drawerData = {
	pt: [
		{
			id: 'wines',
			name: 'Vinhos',
			icon: Wine,
			subMenu: true
		},
		{
			id: 'countries',
			name: 'Paises',
			icon: Globe,
			subMenu: true
		},
		{
			id: 'grapes',
			name: 'Uvas',
			icon: Grape,
			subMenu: true
		},
		{
			id: 'gifts',
			name: 'Presentes & Kits',
			icon: Gift,
			url: '/kits/'
		},
		{
			id: 'beers',
			name: 'Cervejas',
			icon: Beer,
			url: '/cervejas/'
		},
		{
			id: 'experiences',
			name: 'Experiências',
			url: '/experiencias/',
			icon: CalendarDays
		}
	],
	uy: [
		{
			id: 'beers',
			name: 'Cervezas',
			icon: Beer,
			url: '/uy/cervezas/'
		},
		{
			id: 'beerstyles',
			name: 'Estilos',
			icon: Hop,
			subMenu: true
		},
		{
			id: 'wines',
			name: 'Vinos',
			icon: Wine,
			url: '/uy/vinos/'
		},
		{
			id: 'kits',
			name: 'Packs',
			icon: PackageOpen,
			url: ''
		},
		{
			id: 'draft',
			name: 'Choperas',
			icon: Droplets,
			url: ''
		},
		{
			id: 'breweries',
			name: 'Cervecerias',
			icon: Factory,
			url: ''
		},
		{
			id: 'bars',
			name: 'Bares',
			icon: Store,
			url: ''
		}
	]
};
