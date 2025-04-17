<script lang="ts">
	import type { Snippet } from 'svelte';
	import { ChevronDown } from '@lucide/svelte';
	interface Props {
		title?: string;
		icon?: Snippet;
		type: 'light' | 'sun' | 'blue' | 'grey';

		size?: 'xs' | 'sm' | 'sm-short' | 'md' | 'xl';

		url?: string;
		chevron?: boolean;
		disabled?: boolean;
		borderDark?: boolean;
		tracking?: 'normal' | 'expanded';
		font?: 'sm' | 'md' | 'xl';
		bold?: boolean;

		action?: () => void;

		rounded?: 'full' | 'lg';

		minimalPx?: boolean;
		customPx?: string;

		width?: 'full' | 'fit' | '130px';

		shineEffect?: boolean;

		newTab?: boolean;

		isSubmit?: boolean;
	}
	let {
		title,
		icon,
		type,
		size = 'sm',
		chevron = false,
		disabled = false,
		url,
		borderDark = false,
		tracking = 'expanded',
		font = 'sm',
		bold = false,
		action = undefined,
		rounded = 'full',
		minimalPx = false,
		width = 'full',
		customPx = '',
		shineEffect = true,
		newTab = false,
		isSubmit = false
	}: Props = $props();
</script>

{#if url || !action}
	<a
		role="button"
		href={url}
		target={newTab ? '_blank' : null}
		class={[
			'btn uppercase flex items-center justify-center disabled:opacity-50 disabled:bg-grey-medium',

			size == 'xs' && 'py-1 !px-3 lg:mt-0 self-center',
			size == 'sm-short' && '!px-3',
			size == 'sm' && 'mt-1',
			size == 'md' && 'mt-3 lg:mt-0 lg:py-3',
			size == 'xl' && '!px-3 h-[45px]',

			type == 'light' && 'text-grey-blueish',
			type == 'sun' && 'bg-sun text-white !border-0',
			type == 'blue' && 'bg-blue text-white !border-0',
			type == 'grey' && 'bg-grey-background',

			borderDark && '!border-grey-light',

			tracking == 'normal' && '!tracking-normal',

			font == 'md' && 'text-[15px]',
			font == 'xl' && 'text-base',

			bold && 'font-bold',

			icon && '!pr-5',

			rounded == 'lg' && '!rounded-lg',

			minimalPx && '!px-[.5rem] !pr-[.9rem]',

			width == 'full' && '',
			width == '130px' && '!w-[130px]',
			width == 'fit' && '!w-fit',

			shineEffect && 'shine-effect',

			customPx
		]}
		onclick={(event) => {
			if (typeof action == 'function') {
				action();
				event.preventDefault();
			}
		}}
	>
		{#if icon}
			{@render icon()}
		{/if}

		{#if title}
			{title}
		{/if}

		{#if chevron}
			<ChevronDown class="lucide-button !mx-0 !px-0" />
		{/if}
	</a>
{:else}
	<button
		{disabled}
		type={isSubmit ? 'submit' : 'button'}
		class={[
			'btn uppercase flex items-center justify-center disabled:opacity-50 disabled:bg-grey-medium',

			size == 'xs' && 'py-1 !px-3 lg:mt-0 self-center',
			size == 'sm-short' && '!px-3',
			size == 'sm' && 'mt-1',
			size == 'md' && 'mt-3 lg:mt-0 lg:py-3',
			size == 'xl' && '!px-3 h-[45px]',

			type == 'light' && 'text-grey-blueish',
			type == 'sun' && 'bg-sun text-white !border-0',
			type == 'blue' && 'bg-blue text-white !border-0',
			type == 'grey' && 'bg-grey-background',

			borderDark && '!border-grey-light',

			tracking == 'normal' && '!tracking-normal',

			font == 'md' && 'text-[15px]',
			font == 'xl' && 'text-base',

			bold && 'font-bold',

			icon && '!pr-5',

			rounded == 'lg' && '!rounded-lg',

			minimalPx && '!px-[.5rem] !pr-[.9rem]',

			width == 'full' && 'w-full',
			width == '130px' && '!w-[130px]',
			width == 'fit' && '!w-fit',

			shineEffect && 'shine-effect',

			customPx
		]}
		onclick={(event) => {
			if (typeof action == 'function') {
				action();
				event.preventDefault();
			}
		}}
	>
		{#if icon}
			{@render icon()}
		{/if}

		{#if title}
			{title}
		{/if}

		{#if chevron}
			<ChevronDown class="lucide-button !mx-0 !px-0" />
		{/if}
	</button>
{/if}
