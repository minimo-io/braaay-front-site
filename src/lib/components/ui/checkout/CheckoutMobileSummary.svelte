<script lang="ts">
	import { CircleChevronDown, ShoppingBag } from '@lucide/svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';
	import { correctPrice } from '$lib/utils';
	import { onMount } from 'svelte';
	import type { PaymentMethod } from '$lib/types';

	interface Props {
		cartTotal: number;
		paymentMethodSelected: PaymentMethod | undefined;
	}

	let { cartTotal, paymentMethodSelected }: Props = $props();

	// State to track if the component should be fixed
	let isFixed = $state(false);
	// Reference to the component element
	let componentElement: HTMLDivElement;
	// Store the original position of the element
	let originalOffsetTop = $state(0);
	// Store dimensions for fixed positioning
	let componentWidth = $state(0);
	let componentHeight = $state(0);

	// Function to handle scroll events
	function handleScroll() {
		// Use window.scrollY to determine scroll position
		if (window.scrollY > originalOffsetTop) {
			isFixed = true;
		} else {
			isFixed = false;
		}
	}

	onMount(() => {
		if (componentElement) {
			// Get initial position and dimensions
			originalOffsetTop = componentElement.offsetTop;
			componentWidth = componentElement.offsetWidth;
			componentHeight = componentElement.offsetHeight;

			// Add scroll event listener
			window.addEventListener('scroll', handleScroll);

			// Clean up the event listener when component is destroyed
			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		}
	});
</script>

<!-- Add a placeholder div that takes up space when the summary is fixed -->
{#if isFixed}
	<div class="block md:hidden" style="height: {componentHeight}px;"></div>
{/if}

<!-- Resumo mobile -->
<div
	bind:this={componentElement}
	class="block md:hidden bg-white py-2 mb-4 px-5 border border-grey-lighter rounded-lg mx-3 transition-all duration-200"
	class:fixed={isFixed}
	class:top-0={isFixed}
	class:left-0={isFixed}
	class:right-0={isFixed}
	class:z-50={isFixed}
	class:mx-0={isFixed}
	class:rounded-none={isFixed}
	class:shadow-md={isFixed}
	style={isFixed ? `width: calc(100%);` : ''}
>
	<a class="flex justify-between cursor-pointer" href={localizeHref('/cart/')}>
		<p class="font-light text-[15px] self-center justify-center flex">
			<ShoppingBag class="pr-1 h-4 aspect-1 self-center text-sun" />
			<span class="font-bold font-roboto h-5 self-center">{m.cartSummary()}</span>
		</p>
		<p class="font-roboto self-center flex">
			<span class="text-sm self-center font-bold"
				>{m.currencySymbol()} {correctPrice(cartTotal)}</span
			>
			<CircleChevronDown class="pl-2 self-center text-sun" />
		</p>
	</a>
</div>
