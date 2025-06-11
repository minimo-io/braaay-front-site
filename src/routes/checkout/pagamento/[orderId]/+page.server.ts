import type { PageServerLoad } from './$types';
import { redirect, error } from '@sveltejs/kit';
import { localizeHref } from '$lib/paraglide/runtime';
import { MercadoPagoConfig, Order } from 'mercadopago';
import { MP_ACCESS_TOKEN } from '$env/static/private';
import { PUBLIC_APP_PASSWORD_EMAIL, PUBLIC_APP_PASSWORD_KEY } from '$env/static/public';

import { getUrqlClient } from '$stores/urqlClient.state.svelte';
import { ORDER_QUERY } from '$lib/graphql/queries';
import { generateBasicAuthorization } from '$lib/utils';
import { type OrderData } from '$lib/types';

const queryOrderFromSession = async (orderId, session: string) => {
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

export const load: PageServerLoad = async ({ params, url }) => {
	const orderId = params.orderId;
	const session = url.searchParams.get('sess') || '';

	console.log('ORDER_KEY', params.orderId);

	console.log(`Query order session for payment: ${session}`);

	// Query WooCommerce order get from fetched order (from orderId) ------------------------------------------------------------------------

	const order = await queryOrderFromSession(orderId, session);
	if (order.data.getOrder) {
		const orderData: OrderData = order.data.getOrder;
		console.log('ORDER_DATA_OKK');
		console.log(orderData);

		const orderPaymentId = orderData.paymentMethod;
		const orderAmount = orderData.total;

		// Order not founded
		if (!orderData) {
			console.error(`Order ${orderId} not found.`);
			throw redirect(302, localizeHref(`/checkout/error/?code=order-not-fetched`)); // Redirect to a generic error page
		}

		if (orderData.status == 'pending') {
			if (orderPaymentId == 'woo-mercado-pago-pix') {
				console.log(`Create order at Mercado Pago:${orderId}`);

				try {
					// Initialize the Mercado Pago client
					const client = new MercadoPagoConfig({
						accessToken: MP_ACCESS_TOKEN,
						options: { timeout: 5000 }
					});

					// Initialize the API object
					const order = new Order(client);

					// Create the request object
					const body = {
						type: 'online',
						processing_mode: 'automatic',
						total_amount: `${orderAmount}`,
						external_reference: `${orderId}`,
						payer: {
							email: 'nicolas@futurewise.lat'
						},
						transactions: {
							payments: [
								{
									amount: `${orderAmount}`,
									payment_method: {
										id: 'pix',
										type: 'bank_transfer'
									}
								}
							]
						}
					};
					// Step 5: Create request options object - Optional

					const requestOptions = {
						idempotencyKey: `${orderId}`
					};

					//  Make the actual payment request
					// order.create({ body, requestOptions }).then(console.log).catch(console.error);

					// Make the actual payment request and await the result
					const response = await order.create({ body, requestOptions });

					console.log('MercadoPago Response:', response);

					const payment = response.transactions?.payments?.[0];

					if (!payment) {
						throw new Error('No payment data found in response');
					}
					const orderMpResponse = {
						success: true,
						payment: {
							order_id: response.id,
							payment_id: payment.id,
							status: response.status,
							status_detail: response.status_detail,
							payment_status: payment.status,
							payment_status_detail: payment.status_detail,
							qrcode: payment.payment_method?.qr_code || '',
							qrcode_base64: payment.payment_method?.qr_code_base64 || '',
							ticket_url: payment.payment_method?.ticket_url || '',
							external_reference: response.external_reference,
							total_amount: response.total_amount,
							amount: payment.amount,
							country_code: response.country_code
						}
					};

					console.log('ORDER_MP_RESPONSE');
					console.log(orderMpResponse);

					return orderMpResponse;
				} catch (err: any) {
					console.error('MercadoPago Error:', err);

					// Return error data to frontend instead of throwing
					return {
						success: false,
						errors: err.errors || [
							{
								code: 'UNKNOWN_ERROR',
								message: err.message || 'Payment processing failed'
							}
						]
					};
				}
			}
		} else if (orderData.status == 'failed') {
			console.error(`ORDER RETURN STATUS 'FAILED'`);
			throw redirect(302, localizeHref('/checkout/error/?code=checkout-order-status-failed'));
		}
	} else {
		console.error(`CHECKOUT ORDER QUERY FAILED_1: ${order.error!.message}`);
		throw redirect(302, localizeHref('/checkout/error/?code=checkout-order-query-failed-inside'));
	}
	// console.log('ORDER');
	// console.log(order);

	// -----------------------------------------------------------------------------------------------------------------

	// If payment method is not mercadopago
	throw error(400, 'Unknown payment method');
};
