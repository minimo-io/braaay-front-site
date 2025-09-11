import type { PageServerLoad } from './$types';
import { redirect, error } from '@sveltejs/kit';
import { localizeHref } from '$lib/paraglide/runtime';
import { MercadoPagoConfig, Order } from 'mercadopago';
import { MP_ACCESS_TOKEN } from '$env/static/private';
// import { UPDATE_ORDER_MP_DATA } from '$lib/graphql/mutations';
// import { getUrqlClient } from '$stores/urqlClient.state.svelte';
import { type OrderData } from '$lib/types';
import type { CreateOrderRequest } from 'mercadopago/dist/clients/order/create/types';
import { queryOrderFromSession, updateOrderWithMPData } from '$lib/server/payments';
import { getUrqlClient } from '$stores/urqlClient.state.svelte';
import { EMAIL_SEND_MUTATION } from '$lib/graphql/mutations';
import { generateBasicAuthorization } from '$lib/utils';
import { PUBLIC_APP_PASSWORD_EMAIL, PUBLIC_APP_PASSWORD_KEY } from '$env/static/public';

export const load: PageServerLoad = async ({ params, url }) => {
	const orderId = params.orderId;
	const session = url.searchParams.get('sess') || '';

	console.log('ORDER_KEY', params.orderId);

	// console.log(`Query order session for payment: ${session}`);

	// Query WooCommerce order get from fetched order (from orderId) ------------------------------------------------------------------------

	const order = await queryOrderFromSession(orderId, session);
	if (order.data.getOrder) {
		const orderData: OrderData = order.data.getOrder;
		// console.log('ORDER_DATA_OKK');
		// console.log(orderData);

		const orderPaymentId = orderData.paymentMethod;
		const orderAmount = orderData.total;
		// const orderAmount = 1;

		// Order not founded
		if (!orderData) {
			console.error(`Order ${orderId} not found.`);
			throw redirect(302, localizeHref(`/checkout/error/?code=order-not-fetched`));
		}

		if (orderData.status == 'pending') {
			if (orderPaymentId == 'woo-mercado-pago-pix') {
				console.log(`Create order at Mercado Pago:${orderId}`);

				try {
					// throw new Error('This is a test error to trigger the catch block.');

					// Initialize the Mercado Pago client
					const client = new MercadoPagoConfig({
						accessToken: MP_ACCESS_TOKEN,
						options: { timeout: 5000 }
					});

					// Initialize the API object
					const order = new Order(client);

					// Create the request object
					const body: CreateOrderRequest = {
						type: 'online',
						processing_mode: 'automatic',
						total_amount: `${orderAmount}`,
						external_reference: `${orderId}`,
						payer: {
							email: orderData.email,
							first_name: orderData.billingFirstName,
							last_name: orderData.billingLastName
							// identification: {
							// 	type: "CPF",
							// 	number: orderData.cpf
							// }
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

					if (!payment || payment == undefined) {
						console.error('Error: No Mercado Pago payment data found in response');
						throw new Error('NO_MP_PAYMENT_CREATED');
					}

					// if all ok with MP order creation, update order ----------------------------------------------------------------------------------------------------
					if (response.id && payment.id) {
						const updateOrderResult = await updateOrderWithMPData(orderId, response.id, payment.id);

						console.log('MP_ORDER_UPDATE_RESULT');
						console.log(updateOrderResult);

						if (updateOrderResult.success) {
							console.log('Order successfully updated with MercadoPago data');
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
							// Continue with your payment flow...
						} else {
							console.error('Failed to update order:', updateOrderResult.error);
							throw new Error('UPDATE_ORDER_FAILED');
						}
					} else {
						console.error('Error creating MP payment order');
						throw new Error('MP_PAYMENT_ORDER_CREATION_ERROR');
					}
					// -------------------------------------------------------------------------------------------------
				} catch (err: any) {
					console.error('MercadoPago Error!!:');
					console.error(err.errors);

					// Send error email
					await getUrqlClient()
						.client.mutation(
							EMAIL_SEND_MUTATION,
							{
								to: 'redes@braaay.com',
								subject: 'Erro no pagamento',
								message: `
									Pedido: ${orderId} \n<br />
									Método: ${orderData.paymentMethod} \n<br />
									Email: ${orderData.email} \n<br />
									first_name: ${orderData.billingFirstName} \n<br />
									last_name: ${orderData.billingLastName} \n<br />
								`
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

					if (err.message === 'UPDATE_ORDER_FAILED') {
						throw redirect(
							302,
							localizeHref(`/checkout/error/?code=order-mp-update-error&orderId=${orderId}`)
						);
					} else if (err.message === 'NO_MP_PAYMENT_CREATED') {
						throw redirect(
							302,
							localizeHref(`/checkout/error/?code=no-mp-payment-created&orderId=${orderId}`)
						);
					} else if (err.message === 'MP_PAYMENT_ORDER_CREATION_ERROR') {
						throw redirect(
							302,
							localizeHref(
								`/checkout/error/?code=mp-payment-order-creation-error&orderId=${orderId}`
							)
						);
					} else {
						throw redirect(
							302,
							localizeHref(
								`/checkout/error/?code=mp-payment-order-creation-error&orderId=${orderId}&details=${err.errors[0].details}`
							)
						);
					}

					// Check if this is already a redirect being re-thrown
					if (err.status === 302 && err.location) {
						throw err; // Re-throw the redirect
					}

					// Return error data to frontend for other errors
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
