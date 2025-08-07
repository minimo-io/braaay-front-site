<script lang="ts">
	import { CircleAlert } from '@lucide/svelte';

	// let { text }: { text: string } = $props();

	let { children } = $props();
</script>

<div
	class="border rounded-lg border-[#00bafe] bg-[#F0FAFF] text-[#00bafe] text-xs md:text-sm flex items-center p-3 px-2"
>
	<CircleAlert class="h-5 ml-3 hidden md:block" />
	<span class="ml-2">
		{@render children()}
	</span>
</div>
