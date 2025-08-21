<script lang="ts">
	import { AppConfig } from '$config';
	import { getLocale } from '$lib/paraglide/runtime';

	let { noBorders = false }: { noBorders?: boolean } = $props();
</script>

<a href={AppConfig.whatsappLink} target="_blank" rel="nofollow noopener">
	<div
		class={[
			'font-roboto text-grey-medium-dark font-[11px] text-xs py-[3px] px-[7px] antialiased rounded-md shine-effect flex items-center scale-105',
			noBorders == false && 'border border-grey-lighter'
		]}
	>
		<img
			src="/images/whatsapp.png"
			alt="whatsapp"
			width="16"
			height="16"
			class="h-4 self-center mr-1"
		/>
		{AppConfig.tel[getLocale()].replaceAll('+55 ', '')}
	</div>
</a>
