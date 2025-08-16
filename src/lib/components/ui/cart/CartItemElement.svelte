<!-- src/lib/components/ui/cart/CartItemElement.svelte -->
<script lang="ts">
	import { Minus, Plus } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages';
	import { slide } from 'svelte/transition';
	import type { CartItem } from '$lib/types/cart.types';
	import { removeFromCart, adjustQuantity } from '$stores/cart.store.svelte';
	import { correctPrice } from '$lib/utils';
	import { shippingDetails, setShippingDetails } from '$stores/shippingDetails.state.svelte';
	import { AppConfig } from '$config';

	interface Props {
		cartItem: CartItem;
		onQuantityChange?: (event: { itemId: number; newQuantity: number }) => void;
		onItemRemoved?: (itemId: number) => void;
	}
	let { cartItem, onQuantityChange, onItemRemoved }: Props = $props();

	let currentPrice = $derived(cartItem.price * cartItem.quantity);
	let hasPriceDiscount = cartItem.regularPrice != cartItem.priceString;

	// handle manual quantity
	const handleQuantityChange = (cartItemId: number, e: Event) => {
		const target = e.target as HTMLInputElement;
		// Get the input value and parse it as an integer
		if (shippingDetails.details) {
			setShippingDetails([]);
		}
		const value = target.value;
		const parsedValue = parseInt(value);

		// Handle cases where the input is empty or not a valid number
		if (isNaN(parsedValue) || parsedValue <= 0) {
			// For empty input or invalid numbers, don't update the cart yet
			// This allows users to clear the field while typing
			if (value === '') {
				// Let the field remain empty while user is typing
				return;
			} else {
				// For other invalid inputs like negative numbers, non-numbers, etc.
				// Set to 1 and update the cart
				target.value = '1';
				adjustQuantity(cartItemId, 0, 1);
				onQuantityChange?.({ itemId: cartItemId, newQuantity: 1 });
			}
		} else {
			// For valid numbers > 0, update normally
			adjustQuantity(cartItemId, 0, parsedValue);
			onQuantityChange?.({ itemId: cartItemId, newQuantity: parsedValue });
		}
	};

	// Handle when user leaves the input field
	const handleBlur = (cartItemId: number, e: Event) => {
		const target = e.target as HTMLInputElement;
		const value = target.value;
		const parsedValue = parseInt(value);

		// If the field is empty or has an invalid value when user leaves the field,
		// set it to 1
		if (value === '' || isNaN(parsedValue) || parsedValue <= 0) {
			target.value = '1';
			adjustQuantity(cartItemId, 0, 1);
			onQuantityChange?.({ itemId: cartItemId, newQuantity: 1 });
		}
	};

	// Handle plus/minus button clicks
	const handleQuantityAdjust = (cartItemId: number, delta: number) => {
		const newQuantity = Math.max(1, cartItem.quantity + delta);
		adjustQuantity(cartItemId, delta);
		onQuantityChange?.({ itemId: cartItemId, newQuantity });
		if (shippingDetails.details) {
			setShippingDetails([]);
		}
	};

	// Handle item removal
	const handleRemoveItem = (itemId: number) => {
		removeFromCart(itemId);
		onItemRemoved?.(itemId);
		if (shippingDetails.details) {
			setShippingDetails([]);
		}
	};

	// Prevent non-numeric key presses (optional extra layer of protection)
	const handleKeyPress = (e: KeyboardEvent) => {
		// Allow only numbers, backspace, delete, tab, arrows, home, end
		const allowedKeys = [
			'0',
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			'Backspace',
			'Delete',
			'Tab',
			'ArrowLeft',
			'ArrowRight',
			'Home',
			'End'
		];

		if (!allowedKeys.includes(e.key)) {
			e.preventDefault();
		}
	};
</script>

<div class="flex flex-col md:flex-row justify-between align-middle">
	<div class="flex w-full md:w-[50%] md:pr-10">
		<!-- Image -->
		<a href={cartItem.uri} class="mr-2">
			<img src={cartItem.image.url} alt={cartItem.image.altText} class="w-16 mr-4 rounded-lg" />
		</a>

		<!-- Data -->
		<div class="self-center">
			<p class="font-medium font-roboto leading-5"><a href={cartItem.uri}>{cartItem.name}</a></p>
			<p class="text-xs text-grey-medium mt-1">{cartItem.sku}</p>
			{#if AppConfig.forPresentEnabled}
				<div class="flex mt-1 font-light text-xs items-center">
					<label class="flex items-center font-roboto">
						<input class="mr-1 !accent-black" type="checkbox" />
						Para presente
					</label>
				</div>
			{/if}
		</div>
	</div>

	<div class="bry-cart-item-quantity">
		<!-- Minus Button -->
		<button
			onclick={() => handleQuantityAdjust(cartItem.id, -1)}
			class="flex items-center justify-center w-7 h-7 rounded-full bg-sun text-white font-bold"
		>
			<Minus class="h-4 pl-1" />
		</button>

		<!-- Quantity Input -->
		<input
			type="tel"
			onchange={(e) => handleQuantityChange(cartItem.id, e)}
			oninput={(e) => handleQuantityChange(cartItem.id, e)}
			onblur={(e) => handleBlur(cartItem.id, e)}
			onkeydown={(e) => handleKeyPress(e as KeyboardEvent)}
			value={cartItem.quantity}
			class="w-20 border p-4 border-grey-lighter rounded-full h-7 text-center text-lg font-semibold bg-transparent focus:outline-none"
			min="1"
		/>

		<!-- Plus Button -->
		<button
			onclick={() => handleQuantityAdjust(cartItem.id, 1)}
			class="flex items-center justify-center w-7 h-7 rounded-full bg-sun text-white font-bold"
			aria-label="Add"
		>
			<Plus class="h-4 pl-1" />
		</button>
	</div>
	<div class="flex w-[120px] flex-col self-center justify-center pr-0 md:pr-3">
		<div class="relative Xh-[25px] overflow-hidden">
			<!-- Regular price -->
			{#if hasPriceDiscount}
				<div
					class="line-through text-gray-500 text-right font-normal text-sm mr-2 text-grey-darkest font-roboto"
				>
					{cartItem.regularPrice}
				</div>
			{/if}

			{#key currentPrice}
				<p
					class="font-semibold text-center md:text-right text-lg md:text-base flex flex-col"
					transition:slide={{ duration: 150, axis: 'y' }}
				>
					<span>
						{m.currencySymbol()}
						{correctPrice(currentPrice)}
					</span>

					<span class="text-green-dark text-xs">
						{m.currencySymbol()}
						{correctPrice(currentPrice * 0.95)}
						<!-- {m.currencySymbol()}{correctPrice(product.floatPrice * 0.95)} -->
						{m.in()}
						{m.cash()}
					</span>
				</p>
			{/key}
		</div>
		<button
			onclick={() => handleRemoveItem(cartItem.id)}
			class="text-grey-medium font-normal text-xs text-center md:text-right mt-4 md:mt-[2px]"
		>
			{m.remove()}
		</button>
	</div>
</div>
