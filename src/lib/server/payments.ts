// src/lib/server/payments.ts
import { PUBLIC_APP_PASSWORD_EMAIL, PUBLIC_APP_PASSWORD_KEY } from '$env/static/public';
import { UPDATE_ORDER_MP_DATA } from '$lib/graphql/mutations';
import { ORDER_QUERY } from '$lib/graphql/queries';
import { generateBasicAuthorization } from '$lib/utils';
import { getUrqlClient } from '$stores/urqlClient.state.svelte';

// Query Woocommerce order from orderId, in the future will also consider the session
// Currently it just uses an application password
export const queryOrderFromSession = async (orderId, session: string) => {
	const wooOrder = await getUrqlClient().client.query(
		ORDER_QUERY,
		{
			orderId: parseInt(orderId)
			// billingEmail: 'test@test.com'
		},
		{
			fetchOptions: {
				headers: {
					authorization: `Basic ${generateBasicAuthorization(PUBLIC_APP_PASSWORD_EMAIL, PUBLIC_APP_PASSWORD_KEY)}`
				}
			}
		}
	);
	console.log('session (not used)', session);
	return wooOrder;
};

// Function to update the woocommerce order with MercadoPago data for order id (the one from MP) & payment id
export const updateOrderWithMPData = async (
	orderId: string,
	mpOrderId: string,
	mpPaymentId: string
) => {
	// let processing = true;
	let error = '';

	try {
		const result = await getUrqlClient('', false)
			.client.mutation(UPDATE_ORDER_MP_DATA, {
				orderId: parseInt(orderId),
				mpOrderId: mpOrderId,
				mpPaymentId: mpPaymentId
			})
			.toPromise();

		// processing = false;

		if (result.error && result.error.message) {
			error = `Error: ${result.error.message.replaceAll('[GraphQL]', '').trim()}`;
			console.error('GraphQL Error:', error);
			return { success: false, error };
		} else if (result.data.updateOrderMPData) {
			const response = result.data.updateOrderMPData;

			if (response.success) {
				console.log('Order updated successfully:', response.message);
				// You might want to show a success toast here
				// launchToast('Order updated with payment data!', 'success');
				return { success: true, data: response };
			} else {
				error = response.message || 'Unknown error occurred';
				console.error('Update failed:', error);
				return { success: false, error };
			}
		} else {
			error = 'Unexpected response format';
			console.error('Unexpected response:', result);
			return { success: false, error };
		}
	} catch (err) {
		// processing = false;
		error = `Error updating order: ${err}`;
		console.error('Exception:', err);
		// launchToast(`Error updating order: ${err}`, 'error');
		return { success: false, error };
	}
};
