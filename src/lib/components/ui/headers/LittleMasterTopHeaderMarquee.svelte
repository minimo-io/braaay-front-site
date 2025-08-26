<!-- 
<div class="text-xs uppercase text-grey-medium-dark">Vinhos, Experiencias & Presentes</div> -->

<!-- src/lib/components/ui/headers/LittleMasterTopHeaderMarquee.svelte -->
<script>
	import { m } from '$lib/paraglide/messages';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	// Array of texts to cycle through
	const texts = [m.littleMasterSlide1(), m.littleMasterSlide2(), m.littleMasterSlide3()];

	let currentIndex = 0;
	let intervalId;

	// Function to go to next text
	function nextText() {
		currentIndex = (currentIndex + 1) % texts.length;
	}

	// Start the automatic cycling when component mounts
	onMount(() => {
		intervalId = setInterval(nextText, 5000);

		// Cleanup interval when component is destroyed
		return () => {
			if (intervalId) {
				clearInterval(intervalId);
			}
		};
	});
</script>

<div class="text-container">
	{#key currentIndex}
		<div class="text-xs uppercase text-grey-medium-dark" in:slide={{ duration: 300, delay: 150 }}>
			{texts[currentIndex]}
		</div>
	{/key}
</div>

<style>
	.text-container {
		height: 1.2em; /* Adjust based on your text size */
		overflow: hidden;
		display: flex;
		align-items: center;
	}
</style>
