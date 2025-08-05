import { PUBLIC_APP_PASSWORD_EMAIL, PUBLIC_APP_PASSWORD_KEY } from '$env/static/public';
import { UPDATE_ORDER_TO_COMPLETED_MUTATION } from '$lib/graphql/mutations';
import { updateOrderWithMPData } from '$lib/server/payments';
import { generateBasicAuthorization } from '$lib/utils';
import { getUrqlClient } from '$stores/urqlClient.state.svelte';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, url }) => {
	// Get the provider from URL search params and orderId from route params
	const provider = url.searchParams.get('provider');
	const orderId = params.orderId;

	let completionResult: {
		success: boolean;
		error?: string;
		orderId?: string;
		status?: string;
	} | null = null;
	let mpDataUpdateResult: any = null;

	// Only process if provider is "mp" and orderId exists
	if (provider === 'mp' && orderId && orderId.trim() !== '') {
		try {
			// Get MercadoPago data from URL params
			const collectionId = url.searchParams.get('collection_id');
			const paymentId = url.searchParams.get('payment_id');
			// const merchantOrderId = url.searchParams.get('merchant_order_id');

			// Use merchant_order_id if available, otherwise use collection_id as fallback
			const mpOrderId = collectionId;

			// Update WooCommerce order with MercadoPago data if we have the required data
			if (mpOrderId && mpOrderId !== 'null' && paymentId && paymentId !== 'null') {
				mpDataUpdateResult = await updateOrderWithMPData(orderId, mpOrderId, paymentId);
			}

			// Call your function to mark the WooCommerce order as completed
			completionResult = await completeWooCommerceOrder(orderId);
			console.log(`Order ${orderId} marked as completed`);
		} catch (error: unknown) {
			console.error(`Failed to complete WooCommerce order ${orderId}:`, error);
			completionResult = {
				success: false,
				error: error instanceof Error ? error.message : String(error)
			};
		}
	}

	// Return minimal data to the page component
	return {
		completionResult,
		mpDataUpdateResult
	};
};

async function completeWooCommerceOrder(orderId: string): Promise<any> {
	const result = await getUrqlClient('', true)
		.client.mutation(
			UPDATE_ORDER_TO_COMPLETED_MUTATION,
			{
				orderId: orderId
			},
			{
				fetchOptions: {
					headers: {
						authorization: `Basic ${generateBasicAuthorization(PUBLIC_APP_PASSWORD_EMAIL, PUBLIC_APP_PASSWORD_KEY)}`
					}
				}
			}
		)
		.toPromise();

	if (result.error) {
		console.error('GraphQL Error updating order:', result.error.message);
		return { success: false, error: result.error.message };
	} else if (result.data?.updateOrder?.order?.status) {
		console.log(
			`Order ${result.data.updateOrder.order.id} status updated to: ${result.data.updateOrder.order.status}`
		);
		return {
			success: true,
			orderId: result.data.updateOrder.order.id,
			status: result.data.updateOrder.order.status
		};
	} else {
		console.warn('Order status update mutation returned no data or unexpected format.');
		return { success: false, error: 'Unexpected mutation response format' };
	}
}
