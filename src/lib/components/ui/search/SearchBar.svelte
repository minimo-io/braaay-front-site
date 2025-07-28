<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import popularProducts from '$data/jsons/popular-products.json';
	import { Search as SearchIcon } from '@lucide/svelte'; // Import Search icon

	// New prop: 'mobile' to toggle between desktop and mobile presentation
	let { mobile = false }: { mobile?: boolean } = $props();

	let searchInput: HTMLInputElement | null = null;
	let isMac = $state<boolean | null>(null);
	let isFocused = $state(false);
	let query = $state('');
	let selectedIndex = $state(-1);

	let POPULAR_SEARCHES = popularProducts; // these are fetched on pre-build
	let filteredResults = $state<Array<{ title: string; url: string }>>([]);

	onMount(() => {
		isMac = /Mac/i.test(navigator.userAgent);

		const handleKeydown = (e: KeyboardEvent) => {
			// Only allow shortcut if not in mobile mode
			if (!mobile && (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
				e.preventDefault();
				searchInput?.focus();
				searchInput?.select();
			}
		};

		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
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
					filteredResults = POPULAR_SEARCHES.filter((item) =>
						item.title.toLowerCase().includes(searchQuery)
					);
				} else {
					filteredResults = POPULAR_SEARCHES.slice(); // Create a copy
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

	function handleBlur() {
		setTimeout(() => {
			isFocused = false;
			selectedIndex = -1;
		}, 150);
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

	function navigateToItem(item: { title: string; url: string }) {
		const url = localizeHref(item.url);
		goto(url);
	}

	function handleResultClick(item: { title: string; url: string }) {
		navigateToItem(item);
	}

	function handleResultMouseOver(index: number) {
		selectedIndex = index;
	}

	function handleResultKeyDown(e: KeyboardEvent, item: { title: string; url: string }) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			navigateToItem(item);
		}
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
				type="search"
				minlength="3"
				class={[
					'w-full text-sm placeholder:tracking-wide placeholder:text-grey-medium font-roboto placeholder:font-light',
					mobile
						? 'h-[50px] focus:ring-0 focus-visible:outline-none border-t border-b border-grey-lighter pl-[60px] pr-[30px]'
						: 'rounded-3xl focus:ring-1 h-[45px] ring-sun border border-grey-lighter px-5 py-2.5 shadow-[inset_0_2px_1px_rgba(0,0,0,0.025)]'
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

			{#if !mobile && isMac !== null}
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
			class="absolute top-full left-0 right-0 mt-1 bg-white border border-grey-lighter rounded-lg shadow-lg max-h-60 overflow-auto text-sm z-50"
		>
			<h2 class="font-bold mt-5 mb-1 px-5">Popular results</h2>
			{#each filteredResults as item, i (item.url)}
				<li
					role="option"
					aria-selected={selectedIndex === i}
					tabindex={selectedIndex === i ? 0 : -1}
					class="search-result-item px-5 py-2 cursor-pointer hover:bg-sun hover:text-white truncate transition-colors duration-150
                        {selectedIndex === i
						? 'bg-sun text-white selected'
						: 'bg-white text-grey-darker'}"
					onclick={() => handleResultClick(item)}
					onkeydown={(e) => handleResultKeyDown(e, item)}
					onmouseover={() => handleResultMouseOver(i)}
					onfocus={() => handleResultMouseOver(i)}
				>
					{item.title}
				</li>
			{/each}
		</ul>
	{/if}
</div>
