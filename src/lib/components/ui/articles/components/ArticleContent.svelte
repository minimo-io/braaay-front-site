<script lang="ts">
	import { page } from '$app/state';
	import { removeWPBakeryShortcodes, transformLinks } from '$lib/utils/index';
	interface Props {
		content: string;
	}
	let { content }: Props = $props();
</script>

<div class="w-full">
	{@html removeWPBakeryShortcodes(transformLinks(content, page.url.origin, page.url.pathname))}
</div>
