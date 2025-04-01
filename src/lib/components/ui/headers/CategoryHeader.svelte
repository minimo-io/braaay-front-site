<script lang="ts">
	import { smoothScroll } from '$lib/utils/index';
	import MoreInfoButton from '../buttons/MoreInfoButton.svelte';
	import type { Category } from '$lib/types';

	interface Props {
		category: Category;
	}
	let { category }: Props = $props();

	let categoryImage = $derived(category.header.image?.url || '/images/placeholder-category.png');
	let categoryAltText = $derived(category.header.image?.altText || 'category-image');
	let categoryTitle = $derived(category.header.title || category.name);
</script>

<div class="bg-white border-b border-b-grey-lighter">
	<!-- Category Header -->
	<div class="max-w-screen-lg border-sky bg-gray-100 md:mx-auto">
		<div class="flex flex-col md:flex-row items-center md:min-h-40 relative">
			<div
				class="flex justify-between items-center text-right md:text-left md:items-start md:justify-normal flex-row md:flex-col w-full md:w-[55%] py-4 md:py-[20px] mx-[30px] px-[30px] md:pl-0"
			>
				<h1
					class="font-prata uppercase text-[25px] my-1 font-light text-grey-dark tracking-wider antialiased"
				>
					<div class="flex">
						{#if category.header.icon && category.header.icon.url}
							<img
								class="w-5 h-5 md:w-6 md:h-6 self-center mr-2"
								src={category.header.icon.url}
								alt={category.header.icon.altText || 'country-image'}
							/>
						{/if}
						<span
							class="self-center font-roboto font-extrabold align-bottom pt-1 text-left text-[18px] md:text-[22px] truncate"
							>{categoryTitle}</span
						>
					</div>
				</h1>
				<div
					class="flex flex-col gap-1 md:flex-row text-grey-medium-dark font-roboto text-[14px] antialiased"
				>
					<span>{category.count} produtos</span>
					<MoreInfoButton title="CONHEÇA&nbsp;MAIS" />
				</div>
			</div>
			<div class="block">
				<img
					src={categoryImage}
					alt={categoryAltText}
					class="md:min-h-40 md:max-h-40 max-h-40 h-40 md:full-width-r object-cover"
				/>
			</div>
		</div>
	</div>
</div>
