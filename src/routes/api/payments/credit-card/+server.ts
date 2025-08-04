// src/routes/api/payments/credit-card/+server.ts
// Process credit card payment

import { AppConfig } from '$config';
import { MP_ACCESS_TOKEN } from '$env/static/private';
import { PUBLIC_APP_PASSWORD_EMAIL, PUBLIC_APP_PASSWORD_KEY } from '$env/static/public';
import { UPDATE_ORDER_TO_COMPLETED_MUTATION } from '$lib/graphql/mutations/checkout-complete-order.mutation.js';
// import { m } from '$lib/paraglide/messages.js';
// import { localizeHref } from '$lib/paraglide/runtime.js';
import { queryOrderFromSession, updateOrderWithMPData } from '$lib/server/payments.js';
import type { OrderData } from '$lib/types/payments.types';
import { generateBasicAuthorization, parseCardHolderName } from '$lib/utils/index.js';
import { getUrqlClient } from '$stores/urqlClient.state.svelte.js';
import { json } from '@sveltejs/kit';
import { MercadoPagoConfig, Order, CardToken } from 'mercadopago';

export async function POST({ request, url }) {
	console.log('Processing credit card payment...', request.formData);
	console.log('PARAMS', url.searchParams);

	// Check same origin ----------------------------------------------------------------------------------------------
	const origin = request.headers.get('origin');
	const { allowedOrigins } = AppConfig.payments;

	// Is origin header present?
	if (origin === null) {
		console.error(`Payments: Missing Origin header`);
		return new Response('Forbidden', { status: 403 });
	}
	// Is it included in our allowed origins?
	if (!allowedOrigins.includes(origin)) {
		console.error(`Payments: Card payment from different origin tried [${origin}]`);
		return new Response('Forbidden', { status: 403 });
	}
	//   ------------------------------------------------------------------------------------------------------------------

	// Check for special header ---------------------------------------------------------------------------------------
	const xBraaayInternal = request.headers.get('x-braaay-internal');
	if (xBraaayInternal != '819725491') {
		return json(
			{ status: 'rejected', status_detail: 'Invalid', message: 'Headers Invalidos' },
			{ status: 400 }
		);
	}
	// ----------------------------------------------------------------------------------------------------------------

	let paymentPayload;
	try {
		paymentPayload = await request.json();
		console.log('Card Payload', paymentPayload);

		const wooOrder = await queryOrderFromSession(paymentPayload.orderId, '');
		console.log('wooOrder', wooOrder);

		if (!wooOrder.data.getOrder) {
			console.error(`CHECKOUT ORDER QUERY FAILED_1: ${wooOrder.error!.message}`);
			// throw redirect(302, localizeHref('/checkout/error/?code=checkout-order-query-failed-inside'));
			return json(
				{
					status: 'rejected',
					status_detail: 'Invalid',
					message: 'Não foi possível encontrar o pedido. Tente novamente.'
				},
				{ status: 400 }
			);
		} else {
			const orderData: OrderData = wooOrder.data.getOrder;
			console.log('Order data', orderData);

			if (!orderData) {
				console.error(`Order ${paymentPayload.orderId} not founded.`);
				// throw redirect(302, localizeHref(`/checkout/error/?code=order-not-fetched`));
				return json(
					{
						status: 'rejected',
						status_detail: 'Invalid',
						message: 'Pedido não encontrado. Tente novamente.'
					},
					{ status: 400 }
				);
			}
			console.log('Order data passed... moving on...');
			if (orderData.status == 'pending' && orderData.paymentMethod == 'woo-mercado-pago-custom') {
				console.log('Initializing MP...');
				// try {
				// Initialize the Mercado Pago client
				const client = new MercadoPagoConfig({
					accessToken: MP_ACCESS_TOKEN,
					options: { timeout: 5000 }
				});

				console.log('MP initialized...');
				// // Crear card token
				const cardToken = new CardToken(client);
				const cardTokenPayload = {
					card_number: `${paymentPayload.card.number}`,
					security_code: `${paymentPayload.card.securityCode}`,
					expiration_month: `${paymentPayload.card.expirationMonth}`,
					expiration_year: `${paymentPayload.card.expirationYear}`
				};
				console.log('Lets create a card token...', cardToken);
				console.log('Card token payload', cardTokenPayload);

				try {
					const cardTokenResponse = await cardToken.create({
						body: cardTokenPayload
					});

					console.log('Card token response', cardTokenResponse);

					// // Initialize the API object
					try {
						const order = new Order(client);
						// const orderPriceValue = `${orderData.total}`;
						const orderPriceValue = `${'1.00'}`;
						const orderCardHolderName = parseCardHolderName(paymentPayload.card.holderName);
						// Create the request object
						const paymentDetails = [
							{
								amount: `${orderPriceValue}`,
								payment_method: {
									id: paymentPayload.card.brand,
									type: 'credit_card',
									token: cardTokenResponse.id,
									installments: 1
									// statement_descriptor: `${m.seoBase()}`
								}
							}
						];

						const body = {
							type: 'online',
							processing_mode: 'automatic',
							capture_mode: 'automatic_async',
							total_amount: `${orderPriceValue}`,
							external_reference: `${paymentPayload.orderId}`,
							description: 'Compra na Braaay',
							marketplace: 'NONE', // Add this
							payer: {
								entity_type: 'individual',
								email: `${orderData.email}`,
								first_name: orderCardHolderName.firstName,
								last_name: orderCardHolderName.lastName,
								identification: {
									type: 'CPF',
									// number: orderData.cpf
									number: `${paymentPayload.payer.identification.number ?? ''}`
								},
								address: {
									street_name: 'R. Major Sertório',
									street_number: '321',
									zip_code: '01222001',
									city: 'São Paulo',
									state: 'SP',
									neighborhood: 'Vila Buarque',
									complement: '165'
								}
							},
							transactions: {
								payments: paymentDetails
							}
						};

						//  Create request options object - Optional
						const requestOptions = {
							idempotencyKey: `${paymentPayload.orderId}`
						};

						// Create the actua order
						console.log('>>>>>>>>>MP Order Body');
						console.log(body);
						console.log('MP Order Payment Details (on body)');
						console.log(paymentDetails);

						// order.create({ body, requestOptions }).then(console.log).catch(console.error);
						console.log('MP trying to create order...');

						try {
							const response = await order.create({ body, requestOptions });
							console.log('MP Response:', response);
							const payment = response.transactions?.payments?.[0];

							if (response.id && payment && payment.id) {
								// Change status on woocommerce order
								const updateOrderResult = await updateOrderWithMPData(
									paymentPayload.orderId,
									response.id,
									payment.id
								);

								// Update to order completed
								const result = await getUrqlClient()
									.client.mutation(
										UPDATE_ORDER_TO_COMPLETED_MUTATION,
										{
											orderId: paymentPayload.orderId
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

								// This is a bad error, but the user actually paid... so redirect and check
								if (result.error) {
									console.error(
										`GraphQL Error updating order status (#${paymentPayload.orderId}):`,
										result.error.message
									);
								}

								// If we could not update the order then just register the problem
								// do not cancel because the user actually paid
								if (!updateOrderResult.success) {
									console.error(`Error updating WooCommerce order with MP payment data`);
								}

								return json({ status: 'approved' });
							} else {
								console.error(`Payments: Invalid ML response payload: ${response}`);
								return json(
									{
										status: 'rejected',
										status_detail: 'Invalid ML response payload',
										message:
											'Resposta do Mercado Pago inválida. Tente novamente ou entre em contato.'
									},
									{ status: 400 }
								);
							}
						} catch (err: any) {
							console.error('Payments: Error on order creation', err);
							console.error('Details');
							console.error(err.errors);
							return json(
								{
									status: 'rejected',
									status_detail: `Error while creating payment order`,
									message:
										'Erro em quanto tentamos criar a ordem de pagamento. Tente novamente ou entre em contato.'
								},
								{ status: 400 }
							);
						}

						// } catch (err: any) {
						// 	console.error('MercadoPago Error!:');
						// 	console.error(err.errors);
						// 	return json(
						// 		{ status: 'rejected', status_detail: 'Error creating payment order.' },
						// 		{ status: 400 }
						// 	);
						// }
					} catch (err: any) {
						console.error(`Payments: Error on payment order init`, err);
						console.error('Details');
						console.error(err.errors);
						return json(
							{
								status: 'rejected',
								status_detail: `Error while creating payment order`,
								message:
									'Erro em quanto tentamos criar a ordem de pagamento. Tente novamente ou entre em contato.'
							},
							{ status: 400 }
						);
					}
				} catch (err: any) {
					console.error('ERROR GENERATING THE CARD TOKEN', err);
					return json(
						{
							status: 'rejected',
							status_detail: 'Error generating the card token',
							message: 'Erro criando o card token.'
						},
						{ status: 400 }
					);
				}
			} else {
				return json(
					{
						status: 'rejected',
						status_detail: 'Order already payed or already cancelled',
						message: 'A orden ja foi paga ou foi cancelada. Entre em contato.'
					},
					{ status: 400 }
				);
			}

			// Verify order ids (the one from the payload must match the other)
			// paymentPayload.orderId
			// orderData.orderId

			// SAVE MERCAD PAGO ORDER ID AND PAAYMENT ID IN THE WOOCOMMERCE ORDER FOR TRACKING
			// Mercado Pago Order ID: Not set
			// Mercado Pago Payment ID: Not set
		}
	} catch {
		return json(
			{
				status: 'rejected',
				status_detail: 'Invalid JSON payload',
				message: 'Payload de pedido inválido. Entre em contato.'
			},
			{ status: 400 }
		);
	}
}
