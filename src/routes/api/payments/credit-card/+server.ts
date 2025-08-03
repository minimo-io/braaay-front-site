// src/routes/api/payments/credit-card/+server.ts
// Process credit card payment

import { json } from '@sveltejs/kit';

export async function POST({ request, url }) {
	console.log('Processing credit card payment...', request.formData);
	console.log('PARAMS', url.searchParams);

	let paymentPayload;
	try {
		paymentPayload = await request.json();
	} catch {
		return json({ status: 'rejected', status_detail: 'Invalid JSON payload' }, { status: 400 });
	}

	console.log('Payment load', paymentPayload);

	// Re-obtener order id... para verificar que sea la misma

	// SAVE MERCAD PAGO ORDER ID AND PAAYMENT ID IN THE WOOCOMMERCE ORDER FOR TRACKING
	// Mercado Pago Order ID: Not set
	// Mercado Pago Payment ID: Not set

	return json({ status: 'approved' });
}
