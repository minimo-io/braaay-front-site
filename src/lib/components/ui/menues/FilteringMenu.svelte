<!-- src/lib/components/ui/menues/FilteringMenu.svelte -->
<script lang="ts">
	import {
		SlidersHorizontal,
		Grape,
		ChevronDown,
		ChevronRight,
		Globe,
		DollarSign,
		Smile,
		Truck,
		Ruler,
		X
	} from '@lucide/svelte';
	import { filtersInitialState } from '$stores/filters.store.svelte';
	import { toggleDrawer } from '$stores/drawerState.state.svelte';
	import { filterState, updateFilter, resetFilters } from '$stores/filters.store.svelte';
	import { AppConfig } from '$config';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import { afterNavigate, goto } from '$app/navigation';
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
	import { grapes } from '$data/grapes.data';

	let grapesForLanguage = $state(grapes[getLocale()]);

	let currentFilters = $state($filterState);

	// Call updateURL when filters change, but be careful about loops
	let lastFilterState = $state(JSON.stringify($filterState));

	$effect(() => {
		const unsubscribe = filterState.subscribe((value) => {
			currentFilters = value;
		});
		return unsubscribe;
	});

	$effect(() => {
		const currentFilterState = JSON.stringify($filterState);
		if (currentFilterState !== lastFilterState) {
			lastFilterState = currentFilterState;
			updateURL();
		}
	});

	function updateURL() {
		const url = new URL(page.url);
		const searchParams = new URLSearchParams(url.searchParams); // Start with existing params

		// Add current category path
		const basePath = url.pathname;

		// Remove existing filter params first (to avoid duplicates)
		searchParams.delete('variety');
		searchParams.delete('country');
		searchParams.delete('price_min');
		searchParams.delete('price_max');
		searchParams.delete('taste');
		searchParams.delete('shipping');
		searchParams.delete('size');
		searchParams.delete('grape'); // Add grape to cleanup

		// Add filters to search params
		if (currentFilters.variety.length > 0) {
			searchParams.set('variety', currentFilters.variety.join(','));
		}
		if (currentFilters.country.length > 0) {
			searchParams.set('country', currentFilters.country.join(','));
		}
		if (currentFilters.priceRange.min > 10 || currentFilters.priceRange.max < 500) {
			searchParams.set('price_min', currentFilters.priceRange.min.toString());
			searchParams.set('price_max', currentFilters.priceRange.max.toString());
		}
		if (currentFilters.taste.length > 0) {
			searchParams.set('taste', currentFilters.taste.join(','));
		}
		if (currentFilters.shipping) {
			searchParams.set('shipping', currentFilters.shipping);
		}
		if (currentFilters.size.length > 0) {
			searchParams.set('size', currentFilters.size.join(','));
		}
		if (currentFilters.grape.length > 0) {
			searchParams.set('grape', currentFilters.grape.join(','));
		}

		const newURL = searchParams.toString() ? `${basePath}?${searchParams}` : basePath;
		goto(newURL, { replaceState: true });
	}

	// Add this to your script
	let priceDebounceTimer = $state<NodeJS.Timeout | null>(null);

	function handlePriceChange(event: Event) {
		const target = event.target as HTMLInputElement;
		const value = parseInt(target.value);

		// Clear existing timer
		if (priceDebounceTimer) {
			clearTimeout(priceDebounceTimer);
		}

		// Set new timer
		priceDebounceTimer = setTimeout(() => {
			updateFilter('priceRange', { ...currentFilters.priceRange, max: value });
		}, 300); // 300ms delay
	}

	// Extract slug from URL (assuming URL format like '/grape/cabernet-sauvignon')
	function getGrapeSlug(grapeUrl: string): string {
		return grapeUrl.split('/uva/').pop() || grapeUrl;
	}

	// Handle grape selection
	function handleGrapeToggle(grapeUrl: string) {
		const grapeSlug = getGrapeSlug(grapeUrl);
		const currentGrapes = [...currentFilters.grape];
		const index = currentGrapes.indexOf(grapeSlug);

		if (index > -1) {
			// Remove grape if already selected
			currentGrapes.splice(index, 1);
		} else {
			// Add grape if not selected
			currentGrapes.push(grapeSlug);
		}

		updateFilter('grape', currentGrapes);
	}

	// Check if grape is selected
	function isGrapeSelected(grapeUrl: string): boolean {
		const grapeSlug = getGrapeSlug(grapeUrl);
		console.log('SELECTED_GRAPE', currentFilters.grape.includes(grapeSlug));
		return currentFilters.grape.includes(grapeSlug);
	}

	onMount(() => {
		if (browser) {
			updateURL();
		}
	});
</script>

<!-- Filtering menu -->
{#if AppConfig.showProductFilters}
	<div class="pb-0 md:pb-8 border-b border-b-grey-lighter">
		<div class="bry-filtering-inline relative">
			<!-- Price -->
			<div class="relative group filtering-button">
				<button class="shine-effect">
					<DollarSign class="lucide-button w-5 h-5 mr-2" />
					{m.price()}
					{#if currentFilters.priceRange.min > 10 || currentFilters.priceRange.max < 500}
						<span class="bg-sun text-white text-xs px-2 py-1 rounded-full ml-1">
							{m.currencySymbol()}{currentFilters.priceRange.min}-{currentFilters.priceRange.max}
						</span>
					{/if}
					<ChevronDown class="lucide-button w-5 h-5 mr-2" />
				</button>

				<div class="absolute left-0 w-full h-4 bg-transparent"></div>
				<div
					class="absolute z-10 bg-white border border-grey-lighter shadow-lg mt-2 rounded-2xl md:w-[300px] w-48 origin-top overflow-y-auto px-10 py-5 hidden group-hover:block"
					style="max-height: calc(55vh - 170px)"
				>
					<div class="relative mb-6">
						<label for="labels-range-input" class="sr-only">Faixa de preço</label>
						<input
							id="labels-range-input"
							type="range"
							bind:value={currentFilters.priceRange.max}
							min="10"
							max="500"
							step="10"
							class="w-full fill-black h-2 bg-grey-light rounded-lg appearance-none cursor-pointer"
							onchange={handlePriceChange}
						/>
						<span class="text-xs text-grey-medium absolute start-0 -bottom-6">R$10</span>
						<span class="text-xs text-grey-medium absolute end-0 -bottom-6">R$500</span>
					</div>
					<div class="text-center text-sm text-grey-dark">
						R${currentFilters.priceRange.min} - R${currentFilters.priceRange.max}
					</div>
				</div>
			</div>

			<!-- Grape Filter -->
			{#if getLocale() == 'pt'}
				<div class="relative group filtering-button">
					<button class="shine-effect">
						<Grape class="lucide-button w-5 h-5 mr-2" />
						Uva
						{#if currentFilters.grape.length > 0}
							<span class="bg-sun text-white text-xs px-2 py-1 rounded-full ml-1">
								{currentFilters.grape.length}
							</span>
						{/if}
						<ChevronDown class="lucide-button w-5 h-5 mr-2" />
					</button>

					<div class="absolute left-0 w-full h-4 bg-transparent"></div>
					<div
						class="absolute z-10 bg-white border border-grey-lighter shadow-lg mt-2 rounded-2xl md:w-[300px] w-48 origin-top overflow-y-auto hidden group-hover:block"
						style="max-height: calc(55vh - 170px)"
					>
						<div class="text-xs px-3 flex flex-col">
							{#each grapesForLanguage as grape}
								<button
									type="button"
									onclick={() => handleGrapeToggle(grape.url)}
									class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px] hover:bg-grey-lighter transition-colors
								{isGrapeSelected(grape.url) ? 'bg-sun-light' : ''}"
								>
									<div class="text-left self-center flex items-center">
										<!-- Checkbox visual indicator -->
										<div
											class="w-4 h-4 mr-3 border-2 border-grey-dark rounded-sm flex items-center justify-center
										{isGrapeSelected(grape.url) ? 'bg-sun border-sun' : ''}"
										>
											{#if isGrapeSelected(grape.url)}
												<svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
													<path
														fill-rule="evenodd"
														d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
														clip-rule="evenodd"
													></path>
												</svg>
											{/if}
										</div>
										<span
											class="self-center {isGrapeSelected(grape.url)
												? 'font-semibold text-sun'
												: ''}"
										>
											{grape.name}
										</span>
									</div>
									<div class="text-grey-medium flex flex-row align-middle self-center">
										<span class="self-center mr-3 text-xs">{grape.count || 0}</span>
										<ChevronRight class="w-4 aspect-1 text-grey-dark" />
									</div>
								</button>
							{/each}
						</div>
					</div>
				</div>
			{/if}

			<!-- Reset Filters Button -->
			{#if Object.values(currentFilters).some((filter) => {
				if (Array.isArray(filter)) return filter.length > 0;
				if (typeof filter === 'object' && filter !== null && 'min' in filter && 'max' in filter) return filter.min > 10 || filter.max < 500;
				return !!filter;
			})}
				<div class="filtering-button">
					<button onclick={() => resetFilters()} class="shine-effect !text-white !bg-sun">
						<X class="lucide-button w-5 h-5 mr-2" />
						{m.resetFilter()}
					</button>
				</div>
			{/if}
		</div>
	</div>
{/if}
