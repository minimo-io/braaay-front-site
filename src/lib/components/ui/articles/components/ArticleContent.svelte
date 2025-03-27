<script lang="ts">
	import { removeWPBakeryShortcodes } from '$lib/utils/index';
	interface Props {
		content: string;
	}
	let { content }: Props = $props();
</script>

<div class="w-full">
	{@html removeWPBakeryShortcodes(content)}
</div>
