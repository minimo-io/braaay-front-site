<!-- src/lib/components/Analytics.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { browser } from '$app/environment';
	import { getLocale } from '$lib/paraglide/runtime';

	// Seu ID de Métrica do Google Analytics 4
	let measurement_id = $state('G-JFT0HP0T17');
	if (getLocale() == 'uy') {
		measurement_id = 'G-2LQPN26WNJ';
	}

	onMount(() => {
		// Apenas executamos no browser
		if (browser) {
			const script = document.createElement('script');
			script.src = `https://www.googletagmanager.com/gtag/js?id=${measurement_id}`;
			script.async = true;
			document.head.appendChild(script);

			// Inicializa o dataLayer e a função gtag
			window.dataLayer = window.dataLayer || [];
			window.gtag = function () {
				window.dataLayer.push(arguments);
			};
			window.gtag('js', new Date());
			window.gtag('config', measurement_id);
		}
	});

	// Usamos afterNavigate para rastrear mudanças de página no SvelteKit
	afterNavigate((navigation) => {
		// Apenas no browser e se o gtag estiver disponível
		if (browser && typeof window.gtag === 'function') {
			// if (!navigation.cancelled) {
			window.gtag('config', measurement_id, {
				page_path: location.pathname,
				page_location: location.href
			});
			// }
		}
	});
</script>
