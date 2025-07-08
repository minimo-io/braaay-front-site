<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import type { Pagination } from '$lib/types';
	import Button from './Button.svelte';
	interface Props {
		isLoading: boolean;
		pagination: Pagination;
		handleLoadMore: () => void;
	}
	let { isLoading, pagination, handleLoadMore }: Props = $props();
</script>

<div class="max-w-screen-lg mx-[30px] lg:mx-auto my-10">
	{#if pagination.hasNextPage}
		<Button
			action={handleLoadMore}
			disabled={isLoading}
			bold
			type="sun"
			size="xl"
			shineEffect={false}
			title={isLoading ? m.loading() : m.moreResults()}
		/>
	{/if}
</div>
