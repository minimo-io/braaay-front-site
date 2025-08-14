<script lang="ts">
	import type { PostBaseCategory } from '$lib/types';
	import { ChevronRight } from '@lucide/svelte';

	interface Props {
		categories: PostBaseCategory[];
	}
	let props: Props = $props();
</script>

<div class="px-4 md:px-8">
	<nav id="breadcrumb" aria-label="Breadcrumb">
		<ul itemscope itemtype="https://schema.org/BreadcrumbList">
			{#each props.categories as category, i (i)}
				<li
					class="inline-flex"
					itemprop="itemListElement"
					itemscope
					itemtype="https://schema.org/ListItem"
				>
					<div class="flex items-center">
						<!-- <div class="text-sun font-bold py-1 rounded" itemprop="name">
							{category.name}
						</div> -->
						<a itemprop="item" href={category.uri} class="text-sun font-bold py-1 rounded">
							<span itemprop="name">{category.name}</span>
						</a>
						<meta itemprop="position" content={(i + 1).toString()} />
						{#if i + 1 != props.categories.length}
							<span class="text-xs font-bold">
								<ChevronRight class="h-3" />
							</span>
						{/if}
					</div>
				</li>
			{/each}
		</ul>
	</nav>
</div>
