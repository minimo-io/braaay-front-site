<!-- src/lib/components/ui/menues/MobileFilterDrawer.svelte -->
<script lang="ts">
	import {
		X,
		DollarSign,
		Grape,
		Ruler,
		Smile,
		ChefHat,
		Search,
		ChevronRight
	} from '@lucide/svelte';
	import { filterDrawerState, closeDrawer } from '$stores/filterDrawer.state.svelte';
	import { filterState, updateFilter, resetFilters } from '$stores/filters.store.svelte';
	import { AppConfig } from '$config';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
	import { grapes } from '$data/grapes.data';
	import { bottleSizes } from '$data/bottle-sizes.data';
	import { tasteOptions } from '$data/taste-options.data';
	import { pairingOptions } from '$data/pairing-options.data';
	import { fly, slide } from 'svelte/transition';

	let grapesForLanguage = $state(grapes[getLocale()]);
	let grapeSearchQuery = $state('');
	let bottleSizesForLanguage = $state(bottleSizes[getLocale()]);
	let currentFilters = $state($filterState);
	let tasteOptionsForLanguage = $state(tasteOptions[getLocale()]);
	let pairingOptionsForLanguage = $state(pairingOptions[getLocale()]);

	// Price debounce timers
	let priceDebounceTimer = $state<NodeJS.Timeout | null>(null);
	let minPriceDebounceTimer = $state<NodeJS.Timeout | null>(null);

	$effect(() => {
		const unsubscribe = filterState.subscribe((value) => {
			currentFilters = value;
		});
		return unsubscribe;
	});

	function updateURL() {
		const url = new URL(page.url);
		const searchParams = new URLSearchParams(url.searchParams);
		const basePath = url.pathname;

		// Remove existing filter params first
		searchParams.delete('variety');
		searchParams.delete('country');
		searchParams.delete('price_min');
		searchParams.delete('price_max');
		searchParams.delete('taste');
		searchParams.delete('shipping');
		searchParams.delete('pairings');
		searchParams.delete('bottleSize');
		searchParams.delete('grape');

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

	// Price handlers
	function handleMinPriceChange(event: Event) {
		const target = event.target as HTMLInputElement;
		let value = parseInt(target.value);

		if (value >= currentFilters.priceRange.max) {
			value = currentFilters.priceRange.max - 10;
			target.value = value.toString();
		}

		if (minPriceDebounceTimer) {
			clearTimeout(minPriceDebounceTimer);
		}

		minPriceDebounceTimer = setTimeout(() => {
			updateFilter('priceRange', { ...currentFilters.priceRange, min: value });
			updateURL();
		}, 300);
	}

	function handlePriceChange(event: Event) {
		const target = event.target as HTMLInputElement;
		const value = parseInt(target.value);

		if (priceDebounceTimer) {
			clearTimeout(priceDebounceTimer);
		}

		priceDebounceTimer = setTimeout(() => {
			updateFilter('priceRange', { ...currentFilters.priceRange, max: value });
			updateURL();
		}, 300);
	}

	function handleMinPriceInput(event: Event) {
		const target = event.target as HTMLInputElement;
		let value = parseInt(target.value);

		if (value >= currentFilters.priceRange.max) {
			value = currentFilters.priceRange.max - 10;
			updateFilter('priceRange', { ...currentFilters.priceRange, min: value });
		}
	}

	function handleMaxPriceInput(event: Event) {
		const target = event.target as HTMLInputElement;
		let value = parseInt(target.value);

		if (value <= currentFilters.priceRange.min) {
			value = currentFilters.priceRange.min + 10;
			updateFilter('priceRange', { ...currentFilters.priceRange, max: value });
		}
	}

	// Grape handlers
	function getGrapeSlug(grapeUrl: string): string {
		return grapeUrl.split('/uva/').pop() || grapeUrl;
	}

	function handleGrapeToggle(grapeUrl: string) {
		const grapeSlug = getGrapeSlug(grapeUrl);
		const currentGrapes = [...currentFilters.grape];
		const index = currentGrapes.indexOf(grapeSlug);

		if (index > -1) {
			currentGrapes.splice(index, 1);
		} else {
			currentGrapes.push(grapeSlug);
		}

		updateFilter('grape', currentGrapes);
		updateURL();
		grapeSearchQuery = '';
	}

	function isGrapeSelected(grapeUrl: string): boolean {
		const grapeSlug = getGrapeSlug(grapeUrl);
		return currentFilters.grape.includes(grapeSlug);
	}

	function getFilteredAndSortedGrapes() {
		let filtered = grapesForLanguage.filter((grape) =>
			grape.name.toLowerCase().includes(grapeSearchQuery.toLowerCase())
		);

		const selected = filtered.filter((grape) => isGrapeSelected(grape.url));
		const unselected = filtered.filter((grape) => !isGrapeSelected(grape.url));

		return [...selected, ...unselected];
	}

	// Bottle size handlers
	function handleBottleSizeToggle(bottleSize: string) {
		const currentBottleSizes = [...currentFilters.bottleSize];
		const index = currentBottleSizes.indexOf(bottleSize);

		if (index > -1) {
			currentBottleSizes.splice(index, 1);
		} else {
			currentBottleSizes.push(bottleSize);
		}

		updateFilter('bottleSize', currentBottleSizes);
		updateURL();
	}

	function isBottleSizeSelected(bottleSize: string): boolean {
		return currentFilters.bottleSize.includes(bottleSize);
	}

	// Taste handlers
	function getTasteEntries() {
		return tasteOptionsForLanguage.flatMap((item) =>
			Object.entries(item).map(([key, value]) => ({ key, value }))
		);
	}

	function handleTasteToggle(tasteKey: string) {
		const currentTastes = [...currentFilters.taste];
		const index = currentTastes.indexOf(tasteKey);

		if (index > -1) {
			currentTastes.splice(index, 1);
		} else {
			currentTastes.push(tasteKey);
		}

		updateFilter('taste', currentTastes);
		updateURL();
	}

	function isTasteSelected(tasteKey: string): boolean {
		return currentFilters.taste.includes(tasteKey);
	}

	// Pairing handlers
	function getPairingEntries() {
		return pairingOptionsForLanguage.map((item) => ({
			key: item.slug,
			value: item.name
		}));
	}

	function handlePairingToggle(pairingKey: string) {
		const currentPairings = [...currentFilters.pairings];
		const index = currentPairings.indexOf(pairingKey);

		if (index > -1) {
			currentPairings.splice(index, 1);
		} else {
			currentPairings.push(pairingKey);
		}

		updateFilter('pairings', currentPairings);
		updateURL();
	}

	function isPairingSelected(pairingKey: string): boolean {
		return currentFilters.pairings.includes(pairingKey);
	}

	// Close drawer when clicking outside
	function handleOverlayClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			closeDrawer();
		}
	}

	// Prevent body scroll when drawer is open
	$effect(() => {
		if (browser) {
			if (filterDrawerState.isOpen) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
			}
		}
	});

	function applyFiltersAndClose() {
		updateURL();
		closeDrawer();
	}

	function resetFiltersAndClose() {
		resetFilters();
		updateURL();
		closeDrawer();
	}
</script>

{#if filterDrawerState.isOpen}
	<!-- Overlay -->
	<div
		class="fixed inset-0 bg-[rgba(33,38,128,0.3)] bg-opacity-50 z-40 transition-opacity duration-300"
		onclick={handleOverlayClick}
		onkeydown={(event) => {
			if (event.key === 'Enter' || event.key === ' ') {
				closeDrawer();
			}
		}}
		role="button"
		tabindex="0"
	></div>

	<!-- Drawer -->
	<div
		in:slide={{ duration: 150, axis: 'x' }}
		class="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out"
	>
		<!-- Header -->
		<div
			class="flex items-center justify-between p-4 border-b border-grey-lighter bg-white sticky top-0"
		>
			<h2 class="text-lg font-semibold text-grey-dark">Filtros</h2>
			<button onclick={closeDrawer} class="p-2 hover:bg-grey-lighter rounded-lg transition-colors">
				<X class="w-5 h-5" />
			</button>
		</div>

		<!-- Content -->
		<div class="h-full overflow-y-auto pb-20">
			<!-- Price Filter -->
			<div class="p-4 border-b border-grey-lighter">
				<div class="flex items-center mb-4">
					<DollarSign class="w-5 h-5 mr-2 text-grey-medium" />
					<span class="font-medium text-grey-dark">{m.price()}</span>
					{#if currentFilters.priceRange.min > AppConfig.catalog_filter[getLocale()].catalog_filter_min_price || currentFilters.priceRange.max < AppConfig.catalog_filter[getLocale()].catalog_filter_max_price}
						<span class="bg-sun text-white text-xs px-2 py-1 rounded-full ml-2">
							{m.currencySymbol()}{currentFilters.priceRange.min}-{currentFilters.priceRange.max}
						</span>
					{/if}
				</div>

				<div class="space-y-4">
					<div>
						<label for="mobile-min-range" class="block text-sm text-grey-medium mb-2">
							Mínimo: {m.currencySymbol()}{currentFilters.priceRange.min}
						</label>
						<input
							id="mobile-min-range"
							type="range"
							bind:value={currentFilters.priceRange.min}
							min={AppConfig.catalog_filter[getLocale()].catalog_filter_min_price}
							max={AppConfig.catalog_filter[getLocale()].catalog_filter_max_price -
								AppConfig.catalog_filter[getLocale()].catalog_filter_step}
							step={AppConfig.catalog_filter[getLocale()].catalog_filter_step}
							class="w-full h-2 bg-grey-light rounded-lg appearance-none cursor-pointer"
							onchange={handleMinPriceChange}
							oninput={handleMinPriceInput}
						/>
					</div>

					<div>
						<label for="mobile-max-range" class="block text-sm text-grey-medium mb-2">
							Máximo: {m.currencySymbol()}{currentFilters.priceRange.max}
						</label>
						<input
							id="mobile-max-range"
							type="range"
							bind:value={currentFilters.priceRange.max}
							min={AppConfig.catalog_filter[getLocale()].catalog_filter_step}
							max={AppConfig.catalog_filter[getLocale()].catalog_filter_max_price}
							step={AppConfig.catalog_filter[getLocale()].catalog_filter_step}
							class="w-full h-2 bg-grey-light rounded-lg appearance-none cursor-pointer"
							onchange={handlePriceChange}
							oninput={handleMaxPriceInput}
						/>
					</div>
				</div>
			</div>

			<!-- Grape Filter -->
			{#if getLocale() == 'pt'}
				<div class="p-4 border-b border-grey-lighter">
					<div class="flex items-center mb-4">
						<Grape class="w-5 h-5 mr-2 text-grey-medium" />
						<span class="font-medium text-grey-dark">Uva</span>
						{#if currentFilters.grape.length > 0}
							<span class="bg-sun text-white text-xs px-2 py-1 rounded-full ml-2">
								{currentFilters.grape.length}
							</span>
						{/if}
					</div>

					<!-- Search Box -->
					<div class="relative mb-4">
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

					<!-- Grapes List -->
					<div class="max-h-48 overflow-y-auto">
						{#each getFilteredAndSortedGrapes() as grape}
							<button
								type="button"
								onclick={() => handleGrapeToggle(grape.url)}
								class="w-full py-2 px-3 text-left text-sm flex items-center justify-between hover:bg-grey-lighter transition-colors rounded-lg mb-1
								{isGrapeSelected(grape.url) ? 'bg-sun-light' : ''}"
							>
								<div class="flex items-center">
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
									<span class={isGrapeSelected(grape.url) ? 'font-semibold text-sun' : ''}>
										{grape.name}
									</span>
								</div>
								<div class="flex items-center text-grey-medium">
									<span class="text-xs mr-2">{grape.count || 0}</span>
									<ChevronRight class="w-4 h-4" />
								</div>
							</button>
						{/each}

						{#if getFilteredAndSortedGrapes().length === 0}
							<div class="py-6 text-center text-grey-medium text-sm">Nenhuma uva encontrada</div>
						{/if}
					</div>
				</div>
			{/if}

			<!-- Bottle Size Filter -->
			{#if bottleSizesForLanguage.length > 0}
				<div class="p-4 border-b border-grey-lighter">
					<div class="flex items-center mb-4">
						<Ruler class="w-5 h-5 mr-2 text-grey-medium" />
						<span class="font-medium text-grey-dark">{m.size()}</span>
						{#if currentFilters.bottleSize.length > 0}
							<span class="bg-sun text-white text-xs px-2 py-1 rounded-full ml-2">
								{currentFilters.bottleSize.length}
							</span>
						{/if}
					</div>

					<div class="space-y-2">
						{#each bottleSizesForLanguage as bottle}
							<button
								type="button"
								onclick={() => handleBottleSizeToggle(bottle)}
								class="w-full py-2 px-3 text-left text-sm flex items-center hover:bg-grey-lighter transition-colors rounded-lg
								{isBottleSizeSelected(bottle) ? 'bg-sun-light' : ''}"
							>
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
								<span class={isBottleSizeSelected(bottle) ? 'font-semibold text-sun' : ''}>
									{bottle}
								</span>
							</button>
						{/each}
					</div>
				</div>
			{/if}

			<!-- Taste Filter -->
			{#if getLocale() == 'pt' && getTasteEntries().length > 0}
				<div class="p-4 border-b border-grey-lighter">
					<div class="flex items-center mb-4">
						<Smile class="w-5 h-5 mr-2 text-grey-medium" />
						<span class="font-medium text-grey-dark">{m.typicalTaste()}</span>
						{#if currentFilters.taste.length > 0}
							<span class="bg-sun text-white text-xs px-2 py-1 rounded-full ml-2">
								{currentFilters.taste.length}
							</span>
						{/if}
					</div>

					<div class="space-y-2 max-h-48 overflow-y-auto">
						{#each getTasteEntries() as { key, value }}
							<button
								type="button"
								onclick={() => handleTasteToggle(key)}
								class="w-full py-2 px-3 text-left text-sm flex items-center hover:bg-grey-lighter transition-colors rounded-lg
								{isTasteSelected(key) ? 'bg-sun-light' : ''}"
							>
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
								<span class={isTasteSelected(key) ? 'font-semibold text-sun' : ''}>
									{value}
								</span>
							</button>
						{/each}
					</div>
				</div>
			{/if}

			<!-- Pairing Filter -->
			{#if getLocale() == 'pt' && getPairingEntries().length > 0}
				<div class="p-4 border-b border-grey-lighter">
					<div class="flex items-center mb-4">
						<ChefHat class="w-5 h-5 mr-2 text-grey-medium" />
						<span class="font-medium text-grey-dark">{m.pairings()}</span>
						{#if currentFilters.pairings.length > 0}
							<span class="bg-sun text-white text-xs px-2 py-1 rounded-full ml-2">
								{currentFilters.pairings.length}
							</span>
						{/if}
					</div>

					<div class="space-y-2 max-h-48 overflow-y-auto">
						{#each getPairingEntries() as { key, value }}
							<button
								type="button"
								onclick={() => handlePairingToggle(key)}
								class="w-full py-2 px-3 text-left text-sm flex items-center hover:bg-grey-lighter transition-colors rounded-lg
								{isPairingSelected(key) ? 'bg-sun-light' : ''}"
							>
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
								<span class={isPairingSelected(key) ? 'font-semibold text-sun' : ''}>
									{value}
								</span>
							</button>
						{/each}
					</div>
				</div>
			{/if}
		</div>

		<!-- Footer with action buttons -->
		<div class="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-grey-lighter">
			<div class="flex gap-2">
				<button
					onclick={resetFiltersAndClose}
					class="flex-1 px-4 py-2 border border-grey-light text-grey-dark rounded-lg hover:bg-grey-lighter transition-colors"
				>
					{m.resetFilter()}
				</button>
				<button
					onclick={applyFiltersAndClose}
					class="flex-1 px-4 py-2 bg-sun text-white rounded-lg hover:bg-sun-dark transition-colors"
				>
					Aplicar Filtros
				</button>
			</div>
		</div>
	</div>
{/if}
