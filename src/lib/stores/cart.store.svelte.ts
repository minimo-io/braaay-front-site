// src/lib/stores/cart.store.svelte.ts
import { browser } from '$app/environment';
import { writable, get } from 'svelte/store';
import type { CartItem, Cart } from '$lib/types/cart.types';
import { AppConfig } from '$config';
import { shippingDetails, setShippingDetails } from './shippingDetails.state.svelte';
import { getUrqlClient } from './urqlClient.state.svelte';
import { EMPTY_CART_MUTATION } from '$lib/graphql/mutations';
import { launchToast } from '$lib/utils';
import { m } from '$lib/paraglide/messages';

// Main cart
const initialCart: Cart = browser
	? JSON.parse(window.localStorage.getItem('cart') || 'null') || {
			items: [],
			coupons: [],
			zip: ''
		}
	: { items: [], coupons: [], zip: '' };

export const cart = writable<Cart>(initialCart);
// Mini cart toaster
export const miniCart = $state({ active: false, duration: AppConfig.miniCartDuration });

// Subscribe only on the client
if (browser) {
	cart.subscribe((value: Cart) => {
		window.localStorage.setItem('cart', JSON.stringify(value));
	});
}

// Add items from the cart
export const addToCart = (item: CartItem, callback?: (updatedCart: Cart) => void) => {
	cart.update((currentCart: Cart) => {
		const existingIndex = currentCart.items.findIndex((i) => i.id === item.id);
		if (existingIndex !== -1) {
			currentCart.items[existingIndex].quantity += 1;
		} else {
			// When adding a new item, ensure its initial quantity is 1.
			currentCart.items.push({ ...item, quantity: 1 });
		}

		// If a callback is provided, call it with the updated cart
		if (callback) {
			callback(currentCart);
		}

		return currentCart;
	});
};

export const activateMiniCart = () => {
	miniCart.active = true;

	if (browser) {
		setTimeout(() => {
			miniCart.active = false;
		}, miniCart.duration);
	}
};

// Remove cart items
export const removeFromCart = (itemId: number) => {
	cart.update((currentCart: Cart) => {
		shippingDetails.details = [];
		currentCart.items = currentCart.items.filter((i) => i.id !== itemId);
		return currentCart;
	});
};
// Increase item amount
export const adjustQuantity = (itemId: number, delta: number, specific?: number) => {
	cart.update((currentCart: Cart) => {
		if (shippingDetails.details) {
			setShippingDetails([]);
		}

		const existingIndex = currentCart.items.findIndex((i) => i.id === itemId);

		if (existingIndex !== -1) {
			let newQuantity = 0;
			if (specific) {
				newQuantity = specific;
			} else {
				newQuantity = currentCart.items[existingIndex].quantity + delta;

				// Prevent negative quantities
			}
			// Check if we have enough stock
			if (newQuantity > currentCart.items[existingIndex].maxQuantity) {
				launchToast(
					`${m.maxStockIs({ maxStock: currentCart.items[existingIndex].maxQuantity })}`,
					'info',
					3000
				);
			} else {
				currentCart.items[existingIndex].quantity = Math.max(1, newQuantity);
			}
		}

		return currentCart;
	});
};

// Clear the whole cart
// including the woocommerce remote cart
export const emptyCart = async () => {
	await emptyRemoteCart();
	cart.update(() => {
		shippingDetails.details = [];
		return { items: [], coupons: [], zip: '' };
	});
};
// To remove remote cart only
export const emptyRemoteCart = async () => {
	await getUrqlClient().client.mutation(EMPTY_CART_MUTATION, {}).toPromise();
};

// Set zip code for app wide use
export const updateZip = (zipCode: string) => {
	cart.update((currentCart: Cart) => {
		currentCart.zip = zipCode;
		return currentCart;
	});
};

// ---- Coupon related methods ----
export const addCoupon = (couponCode: string, couponDiscount: number | string) => {
	cart.update((currentCart: Cart) => {
		// Proper number conversion
		const discountValue =
			typeof couponDiscount === 'string' ? parseFloat(couponDiscount) : Number(couponDiscount);

		const couponExists = currentCart.coupons.some((coupon) => coupon.code === couponCode);
		if (!couponExists) {
			currentCart.coupons.push({ code: couponCode, discount: discountValue });
		}

		return currentCart;
	});
};
// Add a coupon to the cart
// export const addCoupon = (couponCode: string) => {
// 	cart.update((currentCart: Cart) => {
// 		// Check if the coupon already exists to avoid duplicates
// 		if (!currentCart.coupons.includes(couponCode)) {
// 			currentCart.coupons.push(couponCode);
// 		}
// 		return currentCart;
// 	});
// };

// Remove a specific coupon from the cart
export const removeCoupon = (couponCode: string) => {
	cart.update((currentCart: Cart) => {
		currentCart.coupons = currentCart.coupons.filter((coupon) => coupon.code !== couponCode);
		return currentCart;
	});
};
// export const removeCoupon = (couponCode: string) => {
// 	cart.update((currentCart: Cart) => {
// 		currentCart.coupons = currentCart.coupons.filter((code) => code !== couponCode);
// 		return currentCart;
// 	});
// };

// Clear all coupons from the cart
export const clearAllCoupons = () => {
	cart.update((currentCart: Cart) => {
		currentCart.coupons = [];
		return currentCart;
	});
};

// Check if a specific coupon exists in the cart
export const hasCoupon = (couponCode: string): boolean => {
	const currentCart = get(cart);
	return currentCart.coupons.some((coupon) => coupon.code === couponCode);
};
// export const hasCoupon = (couponCode: string): boolean => {
// 	const currentCart = get(cart);
// 	return currentCart.coupons.includes(couponCode);
// };

// Get the count of applied coupons
export const getCouponCount = (): number => {
	const currentCart = get(cart);
	return currentCart.coupons.length;
};

// Get all applied coupons
export const getAppliedCoupons = (): string[] => {
	const currentCart = get(cart);
	return currentCart.coupons.map((coupon) => coupon.code);
};
// export const getAppliedCoupons = (): string[] => {
// 	const currentCart = get(cart);
// 	return [...currentCart.coupons];
// };

// Calculate the total price of items in cart before any discounts
export const getCartSubtotal = (): number => {
	const currentCart = get(cart);
	return currentCart.items.reduce((total, item) => total + item.price * item.quantity, 0);
};

// Get coupon details from config
// export const getCouponDetails = (couponCode: string) => {
// 	return AppConfig.coupons[couponCode] || null;
// };

// Calculate the discount value based on applied coupons
// export const calculateDiscount = (couponCode: string): number => {
// 	const subtotal = getCartSubtotal();
// 	let totalDiscount = 0;

// 	const couponDetails = getCouponDetails(couponCode);

// 	if (couponDetails) {
// 		// Skip if coupon doesn't exist in config
// 		// if (!couponDetails) continue;

// 		let discountAmount = 0;

// 		// Calculate discount based on type
// 		if (couponDetails.discountType === 'PERCENT') {
// 			discountAmount = subtotal * (couponDetails.amount / 100);
// 		} else if (couponDetails.discountType === 'FIXED_CART') {
// 			discountAmount = Math.min(subtotal, couponDetails.amount);
// 		}

// 		// Add to total and record details
// 		totalDiscount += discountAmount;
// 	}

// 	return totalDiscount;
// };
