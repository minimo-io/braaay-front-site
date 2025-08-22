<script lang="ts">
	import { page } from '$app/state';
	import { transformLinks } from '$lib/utils';

	interface Props {
		title?: string;
		content?: string;
	}

	let { title, content }: Props = $props();
</script>

{#if title}
	<h2
		class="text-[1.2rem] md:text-[1.3rem] leading-[1.75] uppercase text-center font-prata tracking-wider font-thin mb-6"
	>
		{title}
	</h2>
{/if}
{#if content}
	<p class="bry-article-main-p">
		{@html transformLinks(content, page.url.origin, page.url.pathname)}
	</p>
{/if}
