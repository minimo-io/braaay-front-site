import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),

		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',

			strategy: ['url', 'cookie', 'baseLocale'],
			urlPatterns: [
				{
					pattern: '/',
					localized: [
						['pt', '/'],
						['uy', '/uy/']
					]
				},

				{
					pattern: '/blog/',
					localized: [
						['pt', '/blog/'],
						['uy', '/uy/blog/']
					]
				},

				// Search with query parameter
				{
					pattern: '/search/',
					localized: [
						['pt', '/pesquisa/'],
						['uy', '/uy/busqueda/']
					]
				},

				// Club
				{
					pattern: '/club/',
					localized: [
						['pt', '/clube/'],
						['uy', '/uy/club/']
					]
				},

				// Account
				{
					pattern: '/account/',
					localized: [
						['pt', '/conta/'],
						['uy', '/uy/cuenta/']
					]
				},

				// Carrinho
				{
					pattern: '/cart/',
					localized: [
						['pt', '/carrinho/'],
						['uy', '/uy/carrito/']
					]
				},

				// Produtores de vinho
				{
					pattern: '/produtores-de-vinho/:id',
					localized: [
						['pt', '/produtores-de-vinho/:id'],
						['uy', '/uy/productores-de-vino/:id']
					]
				},

				// Harmonizacoes
				{
					pattern: '/harmonizacoes/:id',
					localized: [
						['pt', '/harmonizacoes/:id'],
						['uy', '/uy/maridajes/:id']
					]
				},

				// Uva
				{
					pattern: '/uva/:id',
					localized: [
						['pt', '/uva/:id'],
						['uy', '/uy/uva/:id']
					]
				},

				// Tag
				{
					pattern: '/tag/:id',
					localized: [
						['pt', '/tag/:id'],
						['uy', '/uy/tag/:id']
					]
				},

				// Blog
				{
					pattern: '/blog/:id',
					localized: [
						['pt', '/blog/:id(.*)?'],
						['uy', '/uy/blog/:id(.*)?']
					]
				},

				{
					pattern: '/produto/:id',
					localized: [
						['pt', '/produto/:id(.*)?'],
						['uy', '/uy/producto/:id(.*)?']
					]
				},

				// Category & Subcategory route – intended to match exactly one segment (e.g. "/cervezas/")
				{
					pattern: '/:path/',
					localized: [
						['pt', '/:path/'],
						['uy', '/uy/:path/']
					]
				}
			]
		})
	],
	build: {
		cssCodeSplit: true
	},
	server: {
		port: 4000
	}
});
