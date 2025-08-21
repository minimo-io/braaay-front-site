<!-- src/lib/components/ui/search/SearchBar.svelte -->
<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import popularProducts from '$data/jsons/popular-products.json';
	import partnersData from '$data/jsons/home-partners.json'; // Add this import
	import { Search as SearchIcon, X } from '@lucide/svelte';
	import { toggleLoader } from '$stores/loaderStore.state.svelte';

	let { mobile = false }: { mobile?: boolean } = $props();

	let searchInput: HTMLInputElement | null = null;
	let isMac = $state<boolean | null>(null);
	let isFocused = $state(false);
	let query = $state('');
	let selectedIndex = $state(-1);

	// Simple interface - just add 'type' to your existing structure
	interface SearchResult {
		title: string;
		url: string;
		type?: 'popular' | 'partner'; // Optional, defaults to 'popular'
		image?: string; // General image property for all types
	}

	let currentLocale = getLocale();

	// Map popular products to match our interface
	let POPULAR_SEARCHES: SearchResult[] = (popularProducts[currentLocale] || []).map((item) => ({
		title: item.title,
		url: item.url,
		type: 'popular' as const,
		image: item.image?.src // Extract src from image object
	}));

	let PARTNERS: SearchResult[] = (partnersData[currentLocale] || []).map((partner) => ({
		title: partner.name,
		url: partner.url,
		type: 'partner' as const,
		image: partner.logo // Map logo to image for consistency
	}));

	// Combine all search sources
	let ALL_SEARCH_ITEMS: SearchResult[] = [...POPULAR_SEARCHES, ...PARTNERS];

	let filteredResults = $state<SearchResult[]>([]);

	onMount(() => {
		isMac = /Mac/i.test(navigator.userAgent);

		const handleKeydown = (e: KeyboardEvent) => {
			if (!mobile && (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
				e.preventDefault();
				searchInput?.focus();
				searchInput?.select();
			}
		};

		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	});

	// Clear search on navigation
	beforeNavigate(() => {
		query = '';
		isFocused = false;
		selectedIndex = -1;
	});

	let previousFocused = $state(false);
	let previousQuery = $state('');

	$effect(() => {
		const focusChanged = isFocused !== previousFocused;
		const queryChanged = query !== previousQuery;

		if (focusChanged || queryChanged) {
			if (isFocused) {
				const searchQuery = query.trim().toLowerCase();
				if (searchQuery) {
					filteredResults = ALL_SEARCH_ITEMS.filter((item) =>
						item.title.toLowerCase().includes(searchQuery)
					).slice(0, 8); // Limit results
				} else {
					// Show mix when no query - 4 popular (ordered) + 4 random partners
					const randomPartners = [...PARTNERS].sort(() => Math.random() - 0.5).slice(0, 4);
					filteredResults = [...POPULAR_SEARCHES.slice(0, 4), ...randomPartners];
				}
			} else {
				filteredResults = [];
			}

			selectedIndex = -1;
			previousFocused = isFocused;
			previousQuery = query;
		}
	});

	$effect(() => {
		if (selectedIndex >= 0 && filteredResults.length > 0) {
			setTimeout(() => {
				const activeElement = document.querySelector('.search-result-item.selected');
				activeElement?.scrollIntoView?.({ block: 'nearest' });
			}, 0);
		}
	});

	function handleFocus() {
		isFocused = true;
	}

	let clearingSearch = $state(false);

	function handleBlur() {
		setTimeout(() => {
			if (!clearingSearch) {
				isFocused = false;
				selectedIndex = -1;
			}
		}, 200);
	}

	function handleKeyDown(e: KeyboardEvent) {
		switch (e.key) {
			case 'ArrowDown':
				if (filteredResults.length > 0) {
					e.preventDefault();
					selectedIndex = (selectedIndex + 1) % filteredResults.length;
				}
				break;
			case 'ArrowUp':
				if (filteredResults.length > 0) {
					e.preventDefault();
					selectedIndex = selectedIndex <= 0 ? filteredResults.length - 1 : selectedIndex - 1;
				}
				break;
			case 'Tab':
				if (filteredResults.length > 0) {
					e.preventDefault();
					if (e.shiftKey) {
						// Shift+Tab goes up
						selectedIndex = selectedIndex <= 0 ? filteredResults.length - 1 : selectedIndex - 1;
					} else {
						// Tab goes down
						selectedIndex = (selectedIndex + 1) % filteredResults.length;
					}
				}
				break;
			case 'Enter':
				if (selectedIndex >= 0 && selectedIndex < filteredResults.length) {
					e.preventDefault();
					const item = filteredResults[selectedIndex];
					navigateToItem(item);
				} else if (query.trim()) {
					e.preventDefault();
					handleSearchSubmit();
				}
				break;
			case 'Escape':
				e.preventDefault();
				searchInput?.blur();
				break;
		}
	}

	function handleSearchSubmit() {
		if (query.trim()) {
			const searchUrl = localizeHref(`/search/?s=${encodeURIComponent(query.trim())}`);
			goto(searchUrl);
		}
	}

	function handleFormSubmit(e: Event) {
		e.preventDefault();
		handleSearchSubmit();
	}

	async function navigateToItem(item: SearchResult) {
		isFocused = false;
		selectedIndex = -1;

		try {
			toggleLoader();
			window.location.href = item.url;
		} catch (error) {
			console.error('Navigation failed:', error);
			window.location.href = item.url;
		}
	}

	function handleResultClick(item: SearchResult) {
		if (searchInput) {
			searchInput.blur();
		}

		if (event) {
			event.preventDefault();
			event.stopPropagation();
			event.stopImmediatePropagation();
		}

		navigateToItem(item);
	}

	function handleResultMouseOver(index: number) {
		selectedIndex = index;
	}

	function handleResultKeyDown(e: KeyboardEvent, item: SearchResult) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			e.stopPropagation();
			navigateToItem(item);
		}
	}

	// Clear search function
	function clearSearch() {
		query = '';
		selectedIndex = -1;
		// Ensure suggestions show by keeping focus
		isFocused = true;
	}

	// Handle clear button mousedown (prevents blur)
	function handleClearMouseDown(e: MouseEvent) {
		e.preventDefault();
		e.stopPropagation();
		clearingSearch = true;
		clearSearch();

		// Reset flag and refocus after clearing
		setTimeout(() => {
			clearingSearch = false;
			if (searchInput) {
				searchInput.focus();
			}
		}, 10);
	}
</script>

<div class="relative w-full" style="z-index: 10">
	<form
		action={localizeHref('/search/')}
		method="get"
		class="w-full"
		role="search"
		onsubmit={handleFormSubmit}
	>
		<div
			class={[
				'relative',
				mobile ? 'h-[50px] px-0' : 'px-5 border-r border-r-1 border-r-grey-lighter h-[45px]'
			]}
		>
			{#if mobile}
				<SearchIcon
					class="h-[16px] absolute top-1/2 -translate-y-1/2 left-[30px] text-grey-medium"
				/>
			{/if}
			<input
				id="search"
				type="text"
				minlength="3"
				class={[
					'w-full text-sm placeholder:tracking-wide placeholder:text-grey-medium font-roboto placeholder:font-light',
					mobile
						? 'h-[50px] rounded-none focus:ring-0 focus-visible:outline-none bg-white border-t border-grey-lighter pl-[60px] pr-[60px]'
						: 'rounded-3xl focus:ring-1 h-[45px] ring-sun border border-grey-lighter pl-5 pr-12 py-2.5 shadow-[inset_0_2px_1px_rgba(0,0,0,0.025)]'
				]}
				placeholder={m.search()}
				bind:this={searchInput}
				bind:value={query}
				onfocus={handleFocus}
				onblur={handleBlur}
				onkeydown={handleKeyDown}
				name="s"
				autocomplete="off"
			/>

			<!-- Clear button (X) - only show when there's text -->
			{#if query.trim()}
				<button
					type="button"
					class={[
						'absolute top-1/2 -translate-y-1/2 p-1 text-grey-medium hover:text-grey-darker transition-colors duration-150 right-[30px]'
					]}
					onmousedown={handleClearMouseDown}
					aria-label="Clear search"
					tabindex="-1"
				>
					<X class="h-4 w-4" />
				</button>
			{:else if !mobile && isMac !== null}
				<!-- Keyboard shortcut indicator - only show when no text and not mobile -->
				{#if isMac}
					<kbd class="bry-search-kbd">
						<abbr title="Command" class="no-underline">⌘</abbr>
						K
					</kbd>
				{:else}
					<kbd class="bry-search-kbd">
						Ctrl<span class="px-1">+</span>K
					</kbd>
				{/if}
			{/if}
		</div>
	</form>

	{#if isFocused && filteredResults.length > 0}
		<ul
			role="listbox"
			aria-label="Search suggestions"
			class="absolute top-full left-0 right-0 md:mt-1 bg-white border border-grey-lighter md:rounded-lg shadow-lg max-h-60 overflow-auto text-sm z-50"
		>
			<h2 class="font-bold py-3 mb-2 px-5 border-b border-grey-lighter">{m.popularResults()}</h2>

			{#each filteredResults as item, i (item.url)}
				<li
					role="option"
					aria-selected={selectedIndex === i}
					tabindex={selectedIndex === i ? 0 : -1}
					class="search-result-item px-5 py-2 cursor-pointer hover:bg-sun hover:text-white transition-colors duration-150
                        {selectedIndex === i
						? 'bg-sun text-white selected'
						: 'bg-white text-grey-darker'}"
					onmousedown={(e) => {
						e.preventDefault();
						e.stopPropagation();
						handleResultClick(item);
					}}
					onkeydown={(e) => handleResultKeyDown(e, item)}
					onmouseover={() => handleResultMouseOver(i)}
					onfocus={() => handleResultMouseOver(i)}
				>
					<div class="flex items-center gap-3">
						<!-- Show image for partners, nothing for popular items (keeps it simple) -->
						{#if item.image}
							<img
								src={item.image}
								alt={item.title}
								class="w-6 h-6 rounded object-cover flex-shrink-0"
								loading="lazy"
							/>
						{/if}

						<span class="truncate flex-1">{item.title}</span>

						<!-- Optional: small type indicator -->
						{#if item.type === 'partner'}
							<span class="text-xs opacity-60 flex-shrink-0">Produtor</span>
						{/if}
					</div>
				</li>
			{/each}
		</ul>
	{/if}
</div>
