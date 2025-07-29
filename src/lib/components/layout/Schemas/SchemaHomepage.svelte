<script>
	import { page } from '$app/state';
	import { AppConfig } from '$config';
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
	import { serializeSchema } from '$lib/utils';

	let addressLocale = AppConfig.address[getLocale()];
	let legalLocale = AppConfig.legal[getLocale()];
	let telephoneLocale = AppConfig.tel[getLocale()];
	let socialsLocale = AppConfig.socials[getLocale()];
</script>

<svelte:head>
	{@html serializeSchema({
		'@context': 'http://schema.org',
		'@type': 'Organization',
		name: m.seoBase(),
		legalName: legalLocale.name,
		url: page.url.origin,
		logo: `${page.url.origin}/images/favicon.png`,
		foundingDate: AppConfig.foundingDate,
		address: {
			'@type': 'PostalAddress',
			streetAddress: `${addressLocale.street} ${addressLocale.number}`,
			addressLocality: addressLocale.city,
			addressRegion: addressLocale.state,
			postalCode: addressLocale.zipCode,
			addressCountry: addressLocale.countryCode
		},
		contactPoint: [
			{
				'@type': 'ContactPoint',
				telephone: telephoneLocale,
				contactType: 'customer service',
				areaServed: addressLocale.countryCode
			}
		],
		sameAs: [socialsLocale.instagram]
	})}
</svelte:head>
