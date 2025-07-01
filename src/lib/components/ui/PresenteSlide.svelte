<!-- src/lib/components/ui/PresenteSlide.svelte -->
<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	interface Props {
		slides?: string[];
		flipSpeed?: number; // ms between slides during animation
		pauseDuration?: number; // ms to pause on first slide
		transitionDuration?:
			| 'duration-75'
			| 'duration-100'
			| 'duration-150'
			| 'duration-200'
			| 'duration-300';
		autoStart?: boolean;
		loop?: boolean;
		rounds?: number; // how many times to cycle through all slides before pausing
		className?: string;
	}

	let {
		slides = [
			'/images/presente-1.png',
			'/images/presente-2.png',
			'/images/presente-3.png',
			'/images/presente-4.png'
		],
		flipSpeed = 250,
		pauseDuration = 2000,
		transitionDuration = 'duration-100',
		autoStart = true,
		loop = true,
		rounds = 2,
		className = ''
	}: Props = $props();

	let currentSlide = $state(0);
	let isAnimating = $state(false);
	let currentRound = $state(0);
	let animationTimeout: NodeJS.Timeout | null = null;
	let flipInterval: NodeJS.Timeout | null = null;

	onMount(() => {
		if (autoStart) {
			startAnimation();
		}
	});

	onDestroy(() => {
		cleanup();
	});

	function cleanup() {
		if (flipInterval) clearInterval(flipInterval);
		if (animationTimeout) clearTimeout(animationTimeout);
	}

	function startAnimation() {
		cleanup();
		isAnimating = true;
		currentRound = 0;

		// Start the flip cycle
		flipCycle();
	}

	function flipCycle() {
		// Quick succession of slides (comic book flip effect)
		flipInterval = setInterval(() => {
			currentSlide = (currentSlide + 1) % slides.length;

			// Check if we completed a full cycle
			if (currentSlide === 0) {
				currentRound++;

				// If we've completed all rounds, stop and pause
				if (currentRound >= rounds) {
					if (flipInterval) clearInterval(flipInterval);
					isAnimating = false;

					// Pause on first slide, then restart if loop is enabled
					if (loop) {
						animationTimeout = setTimeout(() => {
							startAnimation();
						}, pauseDuration);
					}
				}
			}
		}, flipSpeed);
	}

	function stopAnimation() {
		cleanup();
		isAnimating = false;
		currentSlide = 0;
		currentRound = 0;
	}

	function restartAnimation() {
		stopAnimation();
		startAnimation();
	}

	// Expose methods for external control
	export { startAnimation, stopAnimation, restartAnimation };
</script>

<div class="relative w-full h-auto overflow-hidden {className}">
	{#each slides as slide, i (i)}
		<img
			src={slide}
			alt="slide-{i}"
			class="rounded-lg w-full h-auto transition-opacity {transitionDuration} absolute top-0 left-0"
			class:opacity-100={currentSlide === i}
			class:opacity-0={currentSlide !== i}
		/>
	{/each}

	<!-- Badge -->
	<div class="absolute -top-[9px] md:-top-[6px] left-1/2 -translate-x-1/2 scale-75 md:scale-[0.95]">
		<img src="/images/presente-badge-5.svg" alt="presente-pill" />
	</div>
</div>
