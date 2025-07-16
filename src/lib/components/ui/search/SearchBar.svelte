<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { localizeHref, localizeUrl } from '$lib/paraglide/runtime';
	import { onMount } from 'svelte';

	let searchInput: HTMLInputElement | null = null;
	let isMac = $state<boolean | null>(null);

	function handleKeydown(event: KeyboardEvent): void {
		if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
			event.preventDefault();
			if (searchInput) {
				searchInput.focus();
				searchInput.select();
			}
		}
	}
	// Trigger an action when the search input is focused
	// function onFocus(): void {
	// 	// console.log('Search input focused');
	// 	// Later, trigger the floating default results here.
	// }
	// // Triggered when the search input loses focus
	// function onBlur(): void {
	// 	// console.log('Search input lost focus');
	// 	// Later: hide the floating default results
	// }

	onMount(() => {
		isMac = /Mac/i.test(navigator.userAgent);
		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	});
</script>

<!-- Search Form -->
<form action={localizeHref('/search/')} method="get" class="w-full">
	<div class="relative px-5 border-r border-r-1 border-r-grey-lighter h-[45px]">
		<input
			id="search"
			type="search"
			minlength="3"
			class="rounded-3xl focus:ring-1 ring-sun w-full text-sm h-[45px] placeholder:tracking-wide placeholder:text-grey-medium border border-grey-lighter px-5 py-2.5 font-roboto placeholder:font-light shadow-[inset_0_2px_1px_rgba(0,0,0,0.025)]"
			placeholder={m.search()}
			bind:this={searchInput}
			name="s"
		/>
		<!-- KBD -->
		{#if isMac !== null}
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
