// src/lib/components/analytics.ts
import { browser } from '$app/environment';

interface GtagEventParams {
	[key: string]: string | number | undefined | any[];
}

/**
 * Dispara um evento customizado do Google Analytics (GA4).
 * @param action - O nome do evento (ex: 'click', 'scroll', 'form_submit').
 * @param params - Um objeto com parâmetros adicionais para o evento.
 */
export function trackEvent(action: string, params?: GtagEventParams) {
	if (browser && typeof window.gtag === 'function') {
		window.gtag('event', action, params);
	} else {
		console.log(`GA Event (ignored on SSR): ${action}`, params);
	}
}

// <!-- Track an event -->

// <!-- <script lang="ts">
//   import { trackEvent } from '$lib/analytics';

//   function handleClick() {
//     trackEvent('button_click', {
//       event_category: 'navigation',
//       event_label: 'Header CTA'
//     });
//   }
// </script>

// <button on:click={handleClick}>Call to Action</button> -->
