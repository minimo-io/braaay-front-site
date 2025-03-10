<script lang="ts">
	import type { Snippet } from 'svelte';
	import { ChevronDown } from 'lucide-svelte';
	interface Props {
		title: string;
		icon?: Snippet;
		type: 'light' | 'sun' | 'blue' | 'grey';
		size?: 'sm' | 'sm-short' | 'md' | 'xl';
		url: string;
		chevron?: boolean;
		borderDark?: boolean;
		tracking?: 'normal' | 'expanded';
		font?: 'sm' | 'md' | 'xl';
		bold?: boolean;
		width130px?: boolean;
	}
	let {
		title,
		icon,
		type,
		size = 'sm',
		chevron = false,
		url,
		borderDark = false,
		tracking = 'expanded',
		font = 'sm',
		bold = false,
		width130px = false
	}: Props = $props();
</script>

<a
	href={url}
	class={[
		'btn uppercase flex items-center justify-center shine-effect',

		size == 'sm-short' && '!px-3',
		size == 'sm' && 'mt-1',
		size == 'md' && 'mt-3 lg:mt-0 lg:py-3',
		size == 'xl' && 'pr-3 pl-3 h-[45px]',

		type == 'light' && 'text-grey-blueish',
		type == 'sun' && 'bg-sun text-white !border-0',
		type == 'blue' && 'bg-blue text-white !border-0',
		type == 'grey' && 'bg-grey-background',

		borderDark && '!border-grey-light',

		tracking == 'normal' && '!tracking-normal',

		font == 'md' && 'text-[15px]',
		font == 'xl' && 'text-base',

		bold && 'font-bold',

		width130px && `!w-[130px]`
	]}
>
	{#if icon}
		{@render icon()}
	{/if}
	{title}
	{#if chevron}
		<ChevronDown class="lucide-button !mx-0 !px-0" />
	{/if}
</a>
