import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import pkg from './package.json';

export default defineConfig({
	define: {
		__APP_VERSION__: JSON.stringify(pkg.version)
	},
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

				// Login
				{
					pattern: '/login/',
					localized: [
						['pt', '/entrar/'],
						['uy', '/uy/entrar/']
					]
				},

				// Sign-up
				{
					pattern: '/sign-up/',
					localized: [
						['pt', '/cadastro/'],
						['uy', '/uy/registro/']
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
				// Account Favorites
				{
					pattern: '/account/my-favorites/',
					localized: [
						['pt', '/conta/adega/'],
						['uy', '/uy/cuenta/bodega/']
					]
				},
				// Account Cashback
				{
					pattern: '/account/my-cashback/',
					localized: [
						['pt', '/conta/cashback/'],
						['uy', '/uy/cuenta/cashback/']
					]
				},
				// Account Cashback
				{
					pattern: '/account/my-orders/',
					localized: [
						['pt', '/conta/pedidos/'],
						['uy', '/uy/cuenta/pedidos/']
					]
				},
				// Account My Info
				{
					pattern: '/account/my-info/',
					localized: [
						['pt', '/conta/meus-dados/'],
						['uy', '/uy/cuenta/mis-datos/']
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

				// Checkout : Payment
				{
					pattern: '/checkout/pagamento/:id/',
					localized: [
						['pt', '/checkout/pagamento/:id/'],
						['uy', '/uy/checkout/pago/:id/']
					]
				},
				// Checkout : Confirmation
				{
					pattern: '/checkout/confirmation/:id/',
					localized: [
						['pt', '/checkout/confirmacao/:id/'],
						['uy', '/uy/checkout/confirmacion/:id/']
					]
				},
				// Checkout : Error
				{
					pattern: '/checkout/error/:id/',
					localized: [
						['pt', '/checkout/error/:id/'],
						['uy', '/uy/checkout/error/:id/']
					]
				},
				// Checkout
				{
					pattern: '/checkout/',
					localized: [
						['pt', '/checkout/'],
						['uy', '/uy/checkout/']
					]
				},

				// On sale
				{
					pattern: '/onsale/',
					localized: [
						['pt', '/com-desconto/'],
						['uy', '/uy/en-oferta/']
					]
				},

				// Produtores de vinho
				{
					pattern: '/produtores-de-vinho/:id/',
					localized: [
						['pt', '/produtores-de-vinho/:id/'],
						['uy', '/uy/productores-de-vino/:id/']
					]
				},

				// Harmonizacoes
				{
					pattern: '/harmonizacoes/:id/',
					localized: [
						['pt', '/harmonizacoes/:id/'],
						['uy', '/uy/maridajes/:id/']
					]
				},

				// Uva
				{
					pattern: '/uva/:id',
					localized: [
						['pt', '/uva/:id/'],
						['uy', '/uy/uva/:id/']
					]
				},

				// Tag
				{
					pattern: '/tag/:id',
					localized: [
						['pt', '/tag/:id/'],
						['uy', '/uy/tag/:id/']
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
					// pattern: '/produto/:id',
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
		// host: true,
		port: 4000
	}
});
