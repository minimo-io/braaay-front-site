<script lang="ts">
	import { getLocale } from '$lib/paraglide/runtime';
	import { mappedPartners } from '$data/partners.data';

	console.log(mappedPartners);

	const getMappedPartnersForPT = mappedPartners[getLocale()];
	// let pageCountries = $state(allCountries[getLocale()]);
</script>

<section class="bry-partners-list">
	{#each getMappedPartnersForPT as partner}
		<div>
			<a href={partner.url} title={partner.name}>
				<img src={partner.logo} alt={partner.name} class="w-full h-full object-contain" />
			</a>
		</div>
	{/each}
</section>
