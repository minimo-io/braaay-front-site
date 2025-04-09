<script lang="ts">
	import type { Country } from '$lib/types';
	interface Props {
		country: Country;
	}

	let { country }: Props = $props();
</script>

<a href={country.url} class={[' bg-white shine-effect rounded-lg p-5', country.isBold && '']}>
	<div class="flex flex-col text-center font-roboto text-blue items-center">
		<div class="">
			<img
				width="70"
				height="70"
				src={country.flag.url}
				alt={country.flag.altText}
				class="w-[50px] min-w-[50px] md:w-[70px] md:min-w-[70px] aspect-1"
			/>
		</div>

		<div class={['mt-2', country.isBold && 'font-bold']}>{country.name}</div>
	</div>
</a>
