<script lang="ts">
	import type { PageCustomColors, ImageGeneral } from '$lib/types';
	import { Heart, Share2 } from '@lucide/svelte';

	interface Props {
		colors?: PageCustomColors;
		image: ImageGeneral;
	}
	let { colors, image }: Props = $props();

	function shareContent() {
		if (navigator.share) {
			navigator
				.share({
					title: 'Check this out!',
					text: 'This is some cool content I wanted to share with you.',
					url: window.location.href
				})
				.then(() => console.log('Successful share'))
				.catch((error) => console.log('Error sharing', error));
		} else {
			alert('Sharing not supported on this browser.');
		}
	}
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
	<div class="absolute top-[42px] md:top-[58px] left-[35px]">
		<div class="wine-stars text-[15px] md:text-[15px]">
			<span>★</span>
			4.5
		</div>
	</div>
	<!-- Tag -->
	{#if 1 == 1}
		<div
			class="absolute top-[15px] md:top-[30px] left-[30px] md:right-auto bg-red-dark text-white px-2 py-1 text-[11px] md:text-xs rounded-lg"
		>
			EM OFERTA
		</div>
	{/if}

	<div
		class="md:hidden absolute -bottom-[1px] right-[10px] bg-grey-background p-2 px-2 rounded-t-lg"
	>
		<div class="flex gap-0 items-center">
			<div class="pr-2 flex border-r border-grey-medium">
				<button onclick={shareContent}><Share2 class="h-[20px]" /></button>
			</div>

			<div class="pl-2 flex">
				<button onclick={() => alert('Soon')}><Heart class="h-[20px]" /></button>
			</div>
		</div>
	</div>
	<img
		src={image.url}
		alt={image.altText}
		class="mx-auto max-w-[50%] md:max-w-[70%]"
		width="680"
		height="578"
	/>
</div>
