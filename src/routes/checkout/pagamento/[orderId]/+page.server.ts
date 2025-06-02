import type { PageServerLoad } from './$types';
import { redirect, error } from '@sveltejs/kit';
import { localizeHref } from '$lib/paraglide/runtime';
import { MercadoPagoConfig, Order } from 'mercadopago';
import { MP_ACCESS_TOKEN } from '$env/static/private';
import { getUrqlClient } from '$stores/urqlClient.state.svelte';
import { ORDER_QUERY } from '$lib/graphql/queries';
import { generateBasicAuthorization } from '$lib/utils';

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
					authorization: `Basic ${generateBasicAuthorization('nicolas@minimo.io', 'Kk0R V7Vs EvJs v4VJ n0NU ZJWl')}`
				}
			}
		}
	);
	// console.log('WOO_ORDER');
	// console.log(wooOrder);
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
		const orderData = order.data.getOrder;
		console.log('ORDER_DATA_OKK');
		console.log(orderData);
		throw redirect(302, localizeHref(`/checkout/error/?code=order-data-showed`));
	} else {
		console.error(`CHECKOUT ORDER QUERY FAILED_1: ${order.error!.message}`);
		throw redirect(302, localizeHref('/error/?code=checkout-order-query-failed-inside'));
	}
	// console.log('ORDER');
	// console.log(order);

	const orderPaymentId = 'mercadopago';
	const orderFounded = false;
	const orderAmount = '120.0';

	// -----------------------------------------------------------------------------------------------------------------

	if (!orderFounded) {
		console.error(`Order ${orderId} not found.`);
		throw redirect(302, localizeHref(`/checkout/error/?code=order-not-processed`)); // Redirect to a generic error page
	}

	if (orderPaymentId == 'mercadopago') {
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
			return {
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
	// If payment method is not mercadopago
	throw error(400, 'Unknown payment method');
};
