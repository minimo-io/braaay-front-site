<!-- src/lib/components/ui/headers/CategoryHeader.svelte -->
<script lang="ts">
	import { fade } from 'svelte/transition';
	import MoreInfoButton from '../buttons/MoreInfoButton.svelte';
	import type { Category } from '$lib/types';
	import { LoaderCircle } from '@lucide/svelte';

	interface Props {
		title: string;
		count: number;
		showCount: boolean;
		loadingSearch?: boolean;
	}
	let { title, count, showCount, loadingSearch = false }: Props = $props();

	let headerImage = '/images/placeholder-category.png';
	let headerAltText = 'category-search';
	// let title = $derived(category.header.title || category.name);
</script>

<div class="bg-white border-b border-b-grey-lighter">
	<!-- Category Header -->
	<div class="max-w-screen-lg border-sky bg-gray-100 md:mx-auto">
		<div class="flex flex-col md:flex-row items-center md:min-h-40 relative">
			<div
				class="flex justify-between items-center text-right md:text-left md:items-start md:justify-normal flex-row md:flex-col w-full md:w-[55%] py-4 md:py-[20px] mx-[30px] px-[30px] md:pl-0 md:ml-[5px]"
			>
				<h1
					class="font-prata uppercase text-[25px] my-1 font-light text-grey-dark tracking-wider antialiased"
				>
					<div class="flex">
						<span
							class={[
								'flex items-center self-center font-roboto font-extrabold align-bottom pt-1 text-left text-[18px] md:text-[22px] text-wrap',
								title.split(' ').length > 1 && 'md:max-w-max max-w-[87%] leading-tight'
							]}
						>
							{#if loadingSearch}
								<LoaderCircle class="h-10 spinner mr-3" />
							{/if}
							<span>{title}</span>
						</span>
					</div>
				</h1>
				{#if showCount}
					<div
						class="flex flex-col gap-1 md:flex-row text-grey-medium-dark font-roboto text-[14px] antialiased"
					>
						<span>{count} resultados</span>
						<!-- <MoreInfoButton title="CONHEÇA&nbsp;MAIS" /> -->
					</div>
				{/if}
			</div>
			<div class="block">
				<img
					in:fade={{ duration: 500 }}
					src={headerImage}
					alt={headerAltText}
					class="md:min-h-40 md:max-h-40 max-h-32 h-32 md:full-width-r object-cover"
				/>
			</div>
		</div>
	</div>
</div>
