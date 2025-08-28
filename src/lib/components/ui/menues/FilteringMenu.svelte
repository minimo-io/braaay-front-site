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
		X,
		Search,
		ChefHat
	} from '@lucide/svelte';
	import {
		filterState,
		updateFilter,
		resetFilters,
		appliedFiltersCount
	} from '$stores/filters.store.svelte';
	import { AppConfig } from '$config';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import { afterNavigate, goto } from '$app/navigation';
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
	import { grapes } from '$data/grapes.data';
	import { bottleSizes } from '$data/bottle-sizes.data';
	import { tasteOptions } from '$data/taste-options.data';
	import { pairingOptions } from '$data/pairing-options.data';
	import { filterDrawerState } from '$stores/filterDrawer.state.svelte';
	import MobileFilteringDrawer from './MobileFilteringDrawer.svelte';

	let grapesForLanguage = $state(grapes[getLocale()]);
	let grapeSearchQuery = $state('');

	// Get bottle sizes
	let bottleSizesForLanguage = $state(bottleSizes[getLocale()]);

	let currentFilters = $state($filterState);

	// Call updateURL when filters change, but be careful about loops
	let lastFilterState = $state(JSON.stringify($filterState));

	let tasteOptionsForLanguage = $state(tasteOptions[getLocale()]);
	let pairingOptionsForLanguage = $state(pairingOptions[getLocale()]);

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
		searchParams.delete('pairings');
		searchParams.delete('bottleSize');
		searchParams.delete('grape'); // Add grape to cleanup

		// Add filters to search params
		if (currentFilters.variety.length > 0) {
			searchParams.set('variety', currentFilters.variety.join(','));
		}
		if (currentFilters.country.length > 0) {
			searchParams.set('country', currentFilters.country.join(','));
		}
		if (
			currentFilters.priceRange.min >
				AppConfig.catalog_filter[getLocale()].catalog_filter_min_price ||
			currentFilters.priceRange.max < AppConfig.catalog_filter[getLocale()].catalog_filter_max_price
		) {
			searchParams.set('price_min', currentFilters.priceRange.min.toString());
			searchParams.set('price_max', currentFilters.priceRange.max.toString());
		}
		if (currentFilters.taste.length > 0) {
			searchParams.set('taste', currentFilters.taste.join(','));
		}
		if (currentFilters.shipping) {
			searchParams.set('shipping', currentFilters.shipping);
		}
		if (currentFilters.bottleSize.length > 0) {
			searchParams.set('bottleSize', currentFilters.bottleSize.join(','));
		}
		if (currentFilters.pairings.length > 0) {
			searchParams.set('pairings', currentFilters.pairings.join(','));
		}
		if (currentFilters.grape.length > 0) {
			searchParams.set('grape', currentFilters.grape.join(','));
		}

		const newURL = searchParams.toString() ? `${basePath}?${searchParams}` : basePath;
		goto(newURL, { replaceState: true });
	}

	// Add this to your script
	let priceDebounceTimer = $state<NodeJS.Timeout | null>(null);
	let minPriceDebounceTimer = $state<NodeJS.Timeout | null>(null);

	function handleMinPriceChange(event: Event) {
		const target = event.target as HTMLInputElement;
		let value = parseInt(target.value);

		// Prevent min from exceeding max
		if (value >= currentFilters.priceRange.max) {
			value = currentFilters.priceRange.max - 10;
			target.value = value.toString();
		}

		// Clear existing timer
		if (minPriceDebounceTimer) {
			clearTimeout(minPriceDebounceTimer);
		}

		// Set new timer
		minPriceDebounceTimer = setTimeout(() => {
			updateFilter('priceRange', { ...currentFilters.priceRange, min: value });
		}, 300); // 300ms delay
	}
	function handleMinPriceInput(event: Event) {
		const target = event.target as HTMLInputElement;
		let value = parseInt(target.value);

		if (value >= currentFilters.priceRange.max) {
			value = currentFilters.priceRange.max - 10;
			updateFilter('priceRange', { ...currentFilters.priceRange, min: value });
		}
	}

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

		// Clear search field for clarity after selection
		grapeSearchQuery = '';
	}

	// Handle bottle size selection
	function handleBottleSizeToggle(bottleSize: string) {
		const currentBottleSizes = [...currentFilters.bottleSize];
		const index = currentBottleSizes.indexOf(bottleSize);
		if (index > -1) {
			// Remove grape if already selected
			currentBottleSizes.splice(index, 1);
		} else {
			// Add grape if not selected
			currentBottleSizes.push(bottleSize);
		}

		updateFilter('bottleSize', currentBottleSizes);
	}
	// Check if grape is selected
	function isBottleSizeSelected(bottleSize: string): boolean {
		return currentFilters.bottleSize.includes(bottleSize);
	}

	// Check if grape is selected
	function isGrapeSelected(grapeUrl: string): boolean {
		const grapeSlug = getGrapeSlug(grapeUrl);
		// console.log('SELECTED_GRAPE', currentFilters.grape.includes(grapeSlug));
		return currentFilters.grape.includes(grapeSlug);
	}

	// Filter and sort grapes: selected first, then by original order (wine count)
	function getFilteredAndSortedGrapes() {
		// First filter by search query
		let filtered = grapesForLanguage.filter((grape) =>
			grape.name.toLowerCase().includes(grapeSearchQuery.toLowerCase())
		);

		// Then sort: selected grapes first, maintaining original order within each group
		const selected = filtered.filter((grape) => isGrapeSelected(grape.url));
		const unselected = filtered.filter((grape) => !isGrapeSelected(grape.url));

		// Combine selected first, then unselected (both maintain original order from grapesForLanguage)
		return [...selected, ...unselected];
	}

	function handleMaxPriceInput(event: Event) {
		const target = event.target as HTMLInputElement;
		let value = parseInt(target.value);

		if (value <= currentFilters.priceRange.min) {
			value = currentFilters.priceRange.min + 10;
			updateFilter('priceRange', { ...currentFilters.priceRange, max: value });
		}
	}

	// Convert array of objects to a flat structure for easier handling
	function getTasteEntries() {
		return tasteOptionsForLanguage.flatMap((item) =>
			Object.entries(item).map(([key, value]) => ({ key, value }))
		);
	}

	// Convert array of objects to a flat structure for easier handling
	function getPairingEntries() {
		return pairingOptionsForLanguage.map((item) => ({
			key: item.slug,
			value: item.name
		}));
	}

	// Handle taste selection - use the key (GraphQL value) for the filter
	function handleTasteToggle(tasteKey: string) {
		const currentTastes = [...currentFilters.taste];
		const index = currentTastes.indexOf(tasteKey);

		if (index > -1) {
			// Remove taste if already selected
			currentTastes.splice(index, 1);
		} else {
			// Add taste if not selected
			currentTastes.push(tasteKey);
		}

		updateFilter('taste', currentTastes);
	}

	// Handle taste selection - use the key (GraphQL value) for the filter
	function handlePairingToggle(pairingKey: string) {
		const currentPairings = [...currentFilters.pairings];
		const index = currentPairings.indexOf(pairingKey);

		if (index > -1) {
			// Remove taste if already selected
			currentPairings.splice(index, 1);
		} else {
			// Add taste if not selected
			currentPairings.push(pairingKey);
		}

		updateFilter('pairings', currentPairings);
	}

	// Check if taste is selected - check against the key
	function isTasteSelected(tasteKey: string): boolean {
		return currentFilters.taste.includes(tasteKey);
	}

	// Check if taste is selected - check against the key
	function isPairingSelected(pairingKey: string): boolean {
		return currentFilters.pairings.includes(pairingKey);
	}

	onMount(() => {
		if (browser) {
			updateURL();
		}
	});
</script>

<!-- Mobile Filtering Drawer -->
<MobileFilteringDrawer />

<!-- Filtering menu -->
{#if AppConfig.showProductFilters}
	<div class="pb-0 md:pb-8 border-b border-b-grey-lighter">
		<div class="bry-filtering-inline relative">
			<!-- All Filters Button -->
			<button
				class="!bg-sun !shadow-none active:shadow-none !text-white !border-none shine-effect filtering-button-primary"
				onclick={() => {
					// toggleFilterDrawer();
					filterDrawerState.isOpen = true;
				}}
			>
				<div class="flex items-center relative -left-2 md:left-0">
					<SlidersHorizontal class="lucide-button w-5 h-5 mr-2" />
					{m.allFilters()}
					{#if $appliedFiltersCount > 0}
						<span class="ml-2 bg-white text-sun rounded-full px-2 py-0.5 text-xs font-bold">
							{$appliedFiltersCount}
						</span>
					{/if}
				</div>
			</button>

			<!-- Price -->
			<div class="relative group filtering-button">
				<button class="shine-effect">
					<DollarSign class="lucide-button w-5 h-5 mr-2" />
					{m.price()}
					{#if currentFilters.priceRange.min > AppConfig.catalog_filter[getLocale()].catalog_filter_min_price || currentFilters.priceRange.max < AppConfig.catalog_filter[getLocale()].catalog_filter_max_price}
						<span class="bg-sun text-white text-xs px-2 py-1 rounded-full ml-1">
							{m.currencySymbol()}{currentFilters.priceRange.min}-{currentFilters.priceRange.max}
						</span>
					{/if}
					<ChevronDown class="lucide-button w-5 h-5 mr-2" />
				</button>

				<div class="absolute left-0 w-full h-4 bg-transparent" role="presentation"></div>
				<div
					class="absolute z-10 bg-white border border-grey-lighter shadow-lg mt-2 rounded-2xl md:w-[300px] w-48 origin-top overflow-y-auto px-10 py-5 hidden group-hover:block"
					style="max-height: calc(55vh - 170px)"
					role="menu"
				>
					<div class="relative mb-6">
						<label for="min-range-input" class="sr-only">Preço mínimo</label>
						<input
							id="min-range-input"
							type="range"
							bind:value={currentFilters.priceRange.min}
							min={AppConfig.catalog_filter[getLocale()].catalog_filter_min_price}
							max={AppConfig.catalog_filter[getLocale()].catalog_filter_max_price -
								AppConfig.catalog_filter[getLocale()].catalog_filter_step}
							step={AppConfig.catalog_filter[getLocale()].catalog_filter_step}
							class="w-full fill-black h-2 bg-grey-light rounded-lg appearance-none cursor-pointer mb-4"
							onchange={handleMinPriceChange}
							oninput={handleMinPriceInput}
						/>
						<span class="text-xs text-grey-medium mb-4 block"
							>Mínimo: {m.currencySymbol()}{currentFilters.priceRange.min}</span
						>

						<label for="max-range-input" class="sr-only">Preço máximo</label>
						<input
							id="max-range-input"
							type="range"
							bind:value={currentFilters.priceRange.max}
							min={AppConfig.catalog_filter[getLocale()].catalog_filter_step}
							max={AppConfig.catalog_filter[getLocale()].catalog_filter_max_price}
							step={AppConfig.catalog_filter[getLocale()].catalog_filter_step}
							class="w-full fill-black h-2 bg-grey-light rounded-lg appearance-none cursor-pointer"
							onchange={handlePriceChange}
							oninput={handleMaxPriceInput}
						/>
						<span class="text-xs text-grey-medium absolute start-0 -bottom-6"
							>{m.currencySymbol()}{AppConfig.catalog_filter[getLocale()]
								.catalog_filter_min_price}</span
						>
						<span class="text-xs text-grey-medium absolute end-0 -bottom-6"
							>{m.currencySymbol()}{AppConfig.catalog_filter[getLocale()]
								.catalog_filter_max_price}</span
						>
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

					<div class="absolute left-0 w-full h-4 bg-transparent" role="presentation"></div>
					<div
						class="absolute z-10 bg-white border border-grey-lighter shadow-lg mt-2 rounded-2xl md:w-[300px] w-48 origin-top overflow-hidden hidden group-hover:block"
						style="max-height: calc(55vh - 170px)"
						role="menu"
					>
						<!-- Search Box -->
						<div class="sticky top-0 bg-white border-b border-grey-lighter p-3">
							<div class="relative">
								<Search
									class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-grey-medium"
								/>
								<input
									type="text"
									bind:value={grapeSearchQuery}
									placeholder="Buscar uvas..."
									class="w-full pl-10 pr-4 py-2 text-sm border border-grey-light rounded-lg focus:outline-none focus:ring-2 focus:ring-sun focus:border-transparent"
								/>
							</div>
						</div>

						<!-- Grapes List -->
						<div class="overflow-y-auto" style="max-height: calc(55vh - 220px)">
							<div class="text-xs px-3 flex flex-col">
								{#each getFilteredAndSortedGrapes() as grape}
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

								<!-- No results message -->
								{#if getFilteredAndSortedGrapes().length === 0}
									<div class="py-6 text-center text-grey-medium text-sm">
										Nenhuma uva encontrada
									</div>
								{/if}
							</div>
						</div>
					</div>
				</div>
			{/if}

			<!-- BottleSize Filter -->
			{#if bottleSizesForLanguage.length > 0}
				<div class="relative group filtering-button">
					<button class="shine-effect">
						<Ruler class="lucide-button w-5 h-5 mr-2" />
						{m.size()}
						{#if currentFilters.bottleSize.length > 0}
							<span class="bg-sun text-white text-xs px-2 py-1 rounded-full ml-1">
								{currentFilters.bottleSize.length}
							</span>
						{/if}
						<ChevronDown class="lucide-button w-5 h-5 mr-2" />
					</button>

					<div class="absolute left-0 w-full h-4 bg-transparent" role="presentation"></div>
					<div
						class="absolute z-10 bg-white border border-grey-lighter shadow-lg mt-2 rounded-2xl md:w-[300px] w-48 origin-top overflow-hidden hidden group-hover:block"
						style="max-height: calc(55vh - 170px)"
						role="menu"
					>
						<!-- Search Box -->
						<!-- <div class="sticky top-0 bg-white border-b border-grey-lighter p-3">
							<div class="relative">
								<Search
									class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-grey-medium"
								/>
								<input
									type="text"
									bind:value={grapeSearchQuery}
									placeholder="Buscar uvas..."
									class="w-full pl-10 pr-4 py-2 text-sm border border-grey-light rounded-lg focus:outline-none focus:ring-2 focus:ring-sun focus:border-transparent"
								/>
							</div>
						</div> -->

						<!-- Sizes List -->
						<div class="overflow-y-auto" style="max-height: calc(55vh - 220px)">
							<div class="text-xs px-3 flex flex-col">
								{#each bottleSizesForLanguage as bottle}
									<button
										type="button"
										onclick={() => handleBottleSizeToggle(bottle)}
										class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px] hover:bg-grey-lighter transition-colors
									{isBottleSizeSelected(bottle) ? 'bg-sun-light' : ''}"
									>
										<div class="text-left self-center flex items-center">
											<!-- Checkbox visual indicator -->
											<div
												class="w-4 h-4 mr-3 border-2 border-grey-dark rounded-sm flex items-center justify-center
											{isBottleSizeSelected(bottle) ? 'bg-sun border-sun' : ''}"
											>
												{#if isBottleSizeSelected(bottle)}
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
												class="self-center {isBottleSizeSelected(bottle)
													? 'font-semibold text-sun'
													: ''}"
											>
												{bottle}
											</span>
										</div>
									</button>
								{/each}
							</div>
						</div>
					</div>
				</div>
			{/if}

			<!-- Paladar típico -->
			{#if getLocale() == 'pt' && getTasteEntries().length > 0}
				<div class="relative group filtering-button">
					<button class="shine-effect">
						<Smile class="lucide-button w-5 h-5 mr-2" />
						{m.typicalTaste()}
						{#if currentFilters.taste.length > 0}
							<span class="bg-sun text-white text-xs px-2 py-1 rounded-full ml-1">
								{currentFilters.taste.length}
							</span>
						{/if}
						<ChevronDown class="lucide-button w-5 h-5 mr-2" />
					</button>

					<div class="absolute left-0 w-full h-4 bg-transparent" role="presentation"></div>
					<div
						class="absolute z-10 bg-white border border-grey-lighter shadow-lg mt-2 rounded-2xl md:w-[300px] w-48 origin-top overflow-hidden hidden group-hover:block"
						style="max-height: calc(55vh - 170px)"
						role="menu"
					>
						<!-- Tastes List -->
						<div class="overflow-y-auto" style="max-height: calc(55vh - 170px)">
							<div class="text-xs px-3 flex flex-col">
								{#each getTasteEntries() as { key, value }}
									<button
										type="button"
										onclick={() => handleTasteToggle(key)}
										class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px] hover:bg-grey-lighter transition-colors
						{isTasteSelected(key) ? 'bg-sun-light' : ''}"
									>
										<div class="text-left self-center flex items-center">
											<!-- Checkbox visual indicator -->
											<div
												class="w-4 h-4 mr-3 border-2 border-grey-dark rounded-sm flex items-center justify-center
								{isTasteSelected(key) ? 'bg-sun border-sun' : ''}"
											>
												{#if isTasteSelected(key)}
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
												class="self-center {isTasteSelected(key) ? 'font-semibold text-sun' : ''}"
											>
												{value}
											</span>
										</div>
									</button>
								{/each}
							</div>
						</div>
					</div>
				</div>
			{/if}

			<!-- Pairing -->
			{#if getLocale() == 'pt' && getPairingEntries().length > 0}
				<div class="relative group filtering-button">
					<button class="shine-effect">
						<ChefHat class="lucide-button w-5 h-5 mr-2" />
						{m.pairings()}
						{#if currentFilters.pairings.length > 0}
							<span class="bg-sun text-white text-xs px-2 py-1 rounded-full ml-1">
								{currentFilters.pairings.length}
							</span>
						{/if}
						<ChevronDown class="lucide-button w-5 h-5 mr-2" />
					</button>

					<div class="absolute left-0 w-full h-4 bg-transparent" role="presentation"></div>
					<div
						class="absolute z-10 bg-white border border-grey-lighter shadow-lg mt-2 rounded-2xl md:w-[300px] w-48 origin-top overflow-hidden hidden group-hover:block"
						style="max-height: calc(55vh - 170px)"
						role="menu"
					>
						<!-- Pairings List -->
						<div class="overflow-y-auto" style="max-height: calc(55vh - 170px)">
							<div class="text-xs px-3 flex flex-col">
								{#each getPairingEntries() as { key, value }}
									<button
										type="button"
										onclick={() => handlePairingToggle(key)}
										class="py-3 border-b border-grey-lighter text-left text-sm font-roboto text-grey-dark flex justify-between align-middle shine-effect px-[30px] hover:bg-grey-lighter transition-colors
						{isPairingSelected(key) ? 'bg-sun-light' : ''}"
									>
										<div class="text-left self-center flex items-center">
											<!-- Checkbox visual indicator -->
											<div
												class="w-4 h-4 mr-3 border-2 border-grey-dark rounded-sm flex items-center justify-center
								{isPairingSelected(key) ? 'bg-sun border-sun' : ''}"
											>
												{#if isPairingSelected(key)}
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
												class="self-center {isPairingSelected(key) ? 'font-semibold text-sun' : ''}"
											>
												{value}
											</span>
										</div>
									</button>
								{/each}
							</div>
						</div>
					</div>
				</div>
			{/if}

			<!-- Reset Filters Button -->
			{#if Object.values(currentFilters).some((filter) => {
				if (Array.isArray(filter)) return filter.length > 0;
				if (typeof filter === 'object' && filter !== null && 'min' in filter && 'max' in filter) return filter.min > AppConfig.catalog_filter[getLocale()].catalog_filter_min_price || filter.max < AppConfig.catalog_filter[getLocale()].catalog_filter_max_price;
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
