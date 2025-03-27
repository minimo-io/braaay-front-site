import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',

			strategy: ['url', 'cookie', 'baseLocale'],
			urlPatterns: [
				{
					pattern: '/blog',
					localized: [
						['pt', '/blog'],
						['uy', '/uy/blog']
					]
				},
				{
					pattern: '/blog',
					localized: [
						['pt', '/blog'],
						['uy', '/uy/blog']
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
				// Wildcard pattern for untranslated routes
				// This allows you to incrementally translate routes as needed
				{
					pattern: '/',
					localized: [
						['pt', '/'],
						['uy', '/uy/']
					]
				}
			]
		}),
		sveltekit()
	],
	build: {
		cssCodeSplit: true
	},
	server: {
		port: 4000
	}
});
