<script lang="ts">
	import { CircleAlert } from '@lucide/svelte';

	// let { text }: { text: string } = $props();

	let { children } = $props();
</script>

<div
	class=" rounded-lg border-grey-lighter bg-[#F0FAFF] text-[#00bafe] text-xs flex items-center p-3 px-2"
>
	<CircleAlert class="h-5 ml-3" />
	<span class="ml-2">
		{@render children()}
	</span>
</div>
