import type { PageServerLoad } from './$types';
import { redirect, error } from '@sveltejs/kit';
import { localizeHref } from '$lib/paraglide/runtime';
import { MercadoPagoConfig, Order } from 'mercadopago';
import { MP_ACCESS_TOKEN } from '$env/static/private';

// const MOCK_WOO_PAYMENT_METHOD_ID = 'woo_mercadopago_custom_gateway'; // Hardcoded for this example

export const load: PageServerLoad = async ({ params }) => {
	const orderId = params.orderId;

	// To get from fetched order (from orderId) ------------------------------------------------------------------------
	const orderPaymentId = 'mercadopago';
	const orderFounded = true;
	const orderAmount = '120.0';
	// -----------------------------------------------------------------------------------------------------------------

	if (!orderFounded) {
		console.error(`Order ${orderId} not found.`);
		throw redirect(302, localizeHref(`/checkout/error/2313?message=order-not-found`)); // Redirect to a generic error page
	}

	if (orderPaymentId == 'mercadopago') {
		console.log(`Get data from Mercado Pago:${orderId}`);

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

// import Mercadopago from 'mercadopago';

// const MOCK_WOO_ORDERS: Record<
// 	string,
// 	{
// 		payment_method: string;
// 		payment_details: any; // Could be a QR string, image URL, bank details etc.
// 		// ... other order details
// 		total: string;
// 		currency: string;
// 		items: Array<{ name: string; quantity: number; price: string }>;
// 	}
// > = {
// 	'12345': {
// 		payment_method: 'mercadopago',
// 		payment_details: {
// 			qr_code_string: 'https://www.mercadopago.com.br/qr/your-qr-data-12345', // Example: MP provides a URL or string
// 			qr_base64_image: 'data:image/png;base64,iVBORw0KGgoAAAANSUh... (or actual base64)'
// 		},
// 		total: '125.00',
// 		currency: 'BRL',
// 		items: [{ name: 'Vinícola X - Vinho A', quantity: 2, price: '60.00' }]
// 	},
// 	'67890': {
// 		payment_method: 'bank_transfer',
// 		payment_details: {
// 			bank_name: 'Banco Exemplo S.A.',
// 			account_number: '1234567-8',
// 			agency: '0001',
// 			cnpj: '00.000.000/0001-00'
// 		},
// 		total: '75.50',
// 		currency: 'BRL',
// 		items: [{ name: 'Azeite Premium', quantity: 1, price: '75.50' }]
// 	}
// };
