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
					pattern: '/blog',
					localized: [
						['pt', '/blog/'],
						['uy', '/uy/blog/']
					]
				},

				{
					pattern: '/cart',
					localized: [
						['pt', '/carrinho/'],
						['uy', '/uy/carrito/']
					]
				},

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
