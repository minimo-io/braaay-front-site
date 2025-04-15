<script lang="ts">
	import type { PageCustomColors, ImageGeneral } from '$lib/types';

	interface Props {
		colors?: PageCustomColors;
		image: ImageGeneral;
	}
	let { colors, image }: Props = $props();
</script>

<div
	class="p-8 flex items-center relative"
	style:--bry-current-gradient-start={colors?.gradientStart}
	style:--bry-current-gradient-end={colors?.gradientEnd}
	style="
                background: linear-gradient(
                    to bottom,
                    var(--bry-current-gradient-start),
                    var(--bry-current-gradient-end)
                );
            "
>
	<div class="absolute top-4 right-[35px] md:left-[20px]">
		<div class="wine-stars">
			<span>★</span>
			4.5
		</div>
	</div>
	<!-- Tag -->
	{#if 1 == 1}
		<div
			class="absolute top-11 right-[20px] md:right-auto md:left-[20px] bg-red-dark text-white px-2 py-1 text-xs rounded-lg"
		>
			EM OFERTA
		</div>
	{/if}
	<img
		src={image.url}
		alt={image.altText}
		class="mx-auto max-w-[50%] md:max-w-[70%]"
		width="680"
		height="578"
	/>
</div>
