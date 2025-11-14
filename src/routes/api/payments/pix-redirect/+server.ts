import { AppConfig } from '$config';
import { MP_ACCESS_TOKEN } from '$env/static/private';
import { localizeHref } from '$lib/paraglide/runtime.js';
import { json } from '@sveltejs/kit';
import { MercadoPagoConfig, Preference } from 'mercadopago';

export async function POST({ request, url }) {
	// Check same origin ----------------------------------------------------------------------------------------------
	const origin = request.headers.get('origin') ?? '';
	const { allowedOrigins } = AppConfig.payments;

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

	try {
		// Send the mercado pago payload
		const paymentPayload = await request.json();
		console.log('PIX Payload', paymentPayload);

		// Get the order
		const orderId = paymentPayload.orderData.orderId;

		const client = new MercadoPagoConfig({
			accessToken: MP_ACCESS_TOKEN,
			options: { timeout: 5000 }
		});

		// Create the preference
		const preference = new Preference(client);

		const baseUrl = url.origin == 'http://localhost:4000' ? AppConfig.testUrl : url.origin;
		const prefereceResult = await preference.create({
			body: {
				items: paymentPayload.items,
				statement_descriptor: 'Braaay',
				payment_methods: {
					default_payment_method_id: 'Pix'
					// excluded_payment_methods: [
					// 	{
					// 		id: 'master'
					// 	}
					// ],
					// excluded_payment_types: [
					// {
					// 	id: 'ticket'
					// },
					// {
					// 	id: 'bank_transfer'
					// },
					// { id: 'debit_card' },
					// { id: 'credit_card' }
					// ]
					// installments: 4
				},
				back_urls: {
					success: localizeHref(`${baseUrl}/checkout/confirmation/${orderId}/?provider=mp`),
					failure: localizeHref(`${baseUrl}/checkout/error/?provider=mp&orderId=${orderId}`),
					pending: localizeHref(`${baseUrl}/checkout/error/?provider=mp&orderId=${orderId}`)
				},
				auto_return: 'approved'
			}
		});

		if (prefereceResult.id && prefereceResult.init_point) {
			console.log('Preferece result', prefereceResult);
			console.log('preference', preference);
			// Redirect to mercado pago
			return json({
				status: 'approved',
				init_point: prefereceResult.init_point
			});
		} else {
			console.error(`Payment Redirect Error: MP did not returned a preference id or init_point`);
			return json(
				{
					status: 'rejected',
					status_detail: 'Invalid',
					message: 'Mercado Pago não retornou um ID de preferência.'
				},
				{ status: 400 }
			);
		}
	} catch (err: any) {
		console.error(`Payment Redirect Error:`, err);
		return json(
			{ status: 'rejected', status_detail: 'Invalid', message: err.message },
			{ status: 400 }
		);
	}
}
