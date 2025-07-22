<!-- src/lib/components/Analytics.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { browser } from '$app/environment';

	// Seu ID de Métrica do Google Analytics 4
	const measurement_id = 'G-JFT0HP0T17';

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
