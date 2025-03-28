<script lang="ts">
	import type { PageCustomColors, ImageGeneral } from '$lib/types';

	interface Props {
		colors?: PageCustomColors;
		image: ImageGeneral;
	}
	let { colors, image }: Props = $props();
</script>

<div
	class="p-8 flex items-center"
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
	<img src={image.url} alt={image.altText} class="mx-auto max-w-[70%]" width="680" height="578" />
</div>
