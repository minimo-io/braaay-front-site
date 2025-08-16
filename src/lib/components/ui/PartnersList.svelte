<script lang="ts">
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { mappedPartners } from '$data/partners.data';

	const getMappedPartnersForPT = mappedPartners[getLocale()];
	// let pageCountries = $state(allCountries[getLocale()]);
</script>

<section class="bry-partners-list">
	{#each getMappedPartnersForPT as partner}
		<div>
			<a href={localizeHref(partner.url)} title={partner.name}>
				<img
					src={partner.logo}
					alt={partner.name}
					loading="lazy"
					class="w-full h-full object-contain"
				/>
			</a>
		</div>
	{/each}
</section>
