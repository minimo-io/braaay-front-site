<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		subTitle?: string;
		description: string;
		verticalSpace?: boolean;
		button?: Snippet;
	}

	let { title, subTitle, description, verticalSpace = true, button }: Props = $props();
</script>

<!-- Header section -->
<div
	class={[
		'max-w-screen-lg flex flex-col lg:flex-row justify-between items-center lg:mx-auto px-0 mx-[30px]',
		verticalSpace && 'py-1 md:py-8 mt-2'
	]}
>
	<!-- Left section -->
	<div class="lg:w-[65%]">
		{#if subTitle}
			<h4
				class="text-[13px] lg:text-[15px] text-gray-500 font-light font-roboto tracking-wide uppercase border-b-2 inline-block border-bra"
			>
				{subTitle}
			</h4>
		{/if}

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
		{#if button}
			{@render button()}
		{/if}
	</div>
</div>
