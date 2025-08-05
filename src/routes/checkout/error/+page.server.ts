import { cancelWooCommerceOrder } from '$lib/server/payments';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	// Get the provider and merchant_order_id from URL search params
	const provider = url.searchParams.get('provider');
	const merchantOrderId = url.searchParams.get('merchant_order_id');

	let cancellationResult: {
		success: boolean;
		error?: string;
		orderId?: string;
		status?: string;
	} | null = null;

	// Only process if provider is "mp" and merchant_order_id exists
	if (
		provider === 'mp' &&
		merchantOrderId &&
		merchantOrderId !== 'null' &&
		merchantOrderId.trim() !== ''
	) {
		try {
			// Call your function to mark the WooCommerce order as cancelled
			cancellationResult = await cancelWooCommerceOrder(merchantOrderId);
			console.log(`Order ${merchantOrderId} marked as cancelled`);
		} catch (error: unknown) {
			console.error(`Failed to cancel WooCommerce order ${merchantOrderId}:`, error);
			cancellationResult = {
				success: false,
				error: error instanceof Error ? error.message : String(error)
			};
		}
	}

	// Return minimal data to the page component
	return {
		cancellationResult
	};
};
