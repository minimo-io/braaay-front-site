<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		subTitle: string;
		description: string;
		buttonText: string;
		icon?: Snippet;
	}

	let { title, subTitle, description, buttonText, icon }: Props = $props();
</script>

<!-- Header section -->
<div
	class="max-w-screen-lg flex flex-col lg:flex-row justify-between items-center py-5 md:py-10 px-0 mx-[30px] lg:mx-auto mt-2 md:mt-5"
>
	<!-- Left section -->
	<div class="lg:w-[65%]">
		<h4
			class="text-[13px] lg:text-[15px] text-gray-500 font-light font-roboto tracking-wide uppercase border-b-2 inline-block border-bra"
		>
			{subTitle}
		</h4>
		<h2 class="text-[18px] lg:text-[26px] font-prata text-black mt-3 uppercase tracking-wide">
			{title}
		</h2>
		<p
			class="text-[13px] lg:text-[16px] tracking-[1px] text-grey-blueish mt-2 lg:mt-0 leading-tight"
		>
			<!-- eslint-disable -->
			{@html description}
		</p>
	</div>

	<!-- Right section -->
	<div class="self-start lg:self-auto">
		<a href="/" class="btn text-white bg-sun uppercase flex lg:items-right mt-3 lg:mt-0 lg:py-3">
			{#if icon}
				{@render icon()}
			{/if}

			{buttonText}
		</a>
	</div>
</div>
