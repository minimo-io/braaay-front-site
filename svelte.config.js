import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),

		// prerender: {
		// 	handleHttpError: 'ignore',
		// 	// Instead of failing when an element is missing for a fragment, warn and continue.
		// 	handleMissingId: 'warn'
		// 	// handleHttpError: ({ status, path }) => {
		// 	// 	if (status === 404) {
		// 	// 		console.warn(`Skipping prerender for missing page: ${path}`);
		// 	// 		return 'skip';
		// 	// 	}
		// 	// 	return 'fail';
		// 	// }
		// },

		// Prevent CSS inlining by setting the threshold to 0
		inlineStyleThreshold: 0,
		alias: {
			$components: path.resolve('src/lib/components'),
			$stores: path.resolve('src/lib/stores'),
			$data: path.resolve('src/lib/data')
			// $types: path.resolve('src/lib/types.ts')
		}
	},
	compilerOptions: {
		// Extract CSS into separate files
		css: 'external'
	}
};

export default config;
