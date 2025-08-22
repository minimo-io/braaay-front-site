<script>
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { Instagram, Youtube } from '@lucide/svelte';
	import WhatsappButton from '../buttons/WhatsappButton.svelte';
	import { m } from '$lib/paraglide/messages';
	import { AppConfig } from '$config';
	import { trackEvent } from '$components/analytics';

	function handleInstagramClick() {
		trackEvent('button_click', {
			event_category: 'navigation',
			event_label: 'IG FROM SITE'
		});
	}
</script>

<header class="bg-white relative border-b border-grey-lighter hidden md:block">
	<nav
		class="mx-[30px] lg:mx-auto flex justify-end max-w-screen-lg items-center h-[30px]"
		aria-label="Cabecalho global"
	>
		<ul class="text-xs text-right flex gap-3 items-center">
			{#if getLocale() == 'pt'}
				<li class="flex items-center">
					<WhatsappButton noBorders={true} />
				</li>
				<li class="text-grey-light">/</li>
			{/if}
			<li><a href={localizeHref('/blog/')}>BLOG</a></li>
			<li class="text-grey-light">/</li>

			<li><a href={localizeHref(AppConfig.pages[getLocale()].aboutUs)}>{m.sobreNos()}</a></li>
			<li class="text-grey-light">/</li>
			<li>
				<a
					onclick={handleInstagramClick}
					href={AppConfig.socials[getLocale()].instagram}
					rel="nofollow noopener noreferrer"
					target="_blank"
				>
					<Instagram class="h-4" strokeWidth="1" />
				</a>
			</li>
			<!-- <li class="text-grey-light">/</li>
			<li><Youtube class="h-5" strokeWidth="1" /></li> -->
		</ul>
	</nav>
</header>
