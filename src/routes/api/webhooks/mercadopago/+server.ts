// src/routes/api/webhooks/mercadopago/+server.js
import { json } from '@sveltejs/kit';
import { createHmac } from 'crypto';
import { MP_WEBHOOK_SECRET } from '$env/static/private';

/**
 * Validates the webhook signature from MercadoPago
 */
function validateWebhookSignature(xSignature, xRequestId, dataId, secretKey) {
	if (!xSignature || !secretKey) {
		return false;
	}

	try {
		// Parse x-signature header to extract ts and v1
		const parts = xSignature.split(',');
		let ts, hash;

		parts.forEach((part) => {
			const [key, value] = part.split('=');
			if (key && value) {
				const trimmedKey = key.trim();
				const trimmedValue = value.trim();
				if (trimmedKey === 'ts') {
					ts = trimmedValue;
				} else if (trimmedKey === 'v1') {
					hash = trimmedValue;
				}
			}
		});

		if (!ts || !hash) {
			return false;
		}

		// Generate the manifest string
		const manifest = `id:${dataId};request-id:${xRequestId};ts:${ts};`;

		// Create HMAC signature
		const hmac = createHmac('sha256', secretKey);
		hmac.update(manifest);
		const calculatedHash = hmac.digest('hex');

		// Compare signatures
		return calculatedHash === hash;
	} catch (error) {
		console.error('Error validating webhook signature:', error);
		return false;
	}
}

export async function POST({ request, url }) {
	try {
		// Get headers
		const xSignature = request.headers.get('x-signature');
		const xRequestId = request.headers.get('x-request-id');

		// Get query parameters
		const dataId = url.searchParams.get('data.id');
		const dataExternalReference = url.searchParams.get('data.external_reference');
		const type = url.searchParams.get('type');

		console.log('Search Params');
		console.log(url.searchParams);

		console.log('Starting webhook...');

		// Validate required parameters first
		if (!dataId || !type) {
			return json({ error: 'Missing required parameters' }, { status: 400 });
		}

		// Get secret key from environment variables
		const secretKey = MP_WEBHOOK_SECRET;

		if (!secretKey) {
			return json({ error: 'Webhook secret not configured' }, { status: 500 });
		}

		// Get webhook body - handle empty/invalid JSON
		let webhookData;
		try {
			webhookData = await request.json();
		} catch {
			return json({ error: 'Invalid JSON payload' }, { status: 400 });
		}

		console.log('Received webhook:', {
			dataId,
			type,
			action: webhookData?.action,
			liveMode: webhookData?.live_mode
		});
		// Result format
		// Received webhook: {
		// 	dataId: 'ORD01JXWWX9XYWSENGVC9K3B3P4BA',
		// 	type: 'order',
		// 	action: 'order.processed',
		// 	liveMode: true
		// }

		// Validate webhook signature
		const isValidSignature = validateWebhookSignature(xSignature, xRequestId, dataId, secretKey);

		if (!isValidSignature) {
			return json({ error: 'Invalid signature' }, { status: 401 });
		}

		console.log('EXTERNAL_DATA');
		console.log(webhookData);
		// TODO: Process your webhook logic here
		// You have access to:
		// - webhookData (the full webhook payload)
		// - dataId (the order/payment ID)
		// - type (order/payment)

		// Return success response (required by MercadoPago)
		return json({ success: true }, { status: 200 });
	} catch (error) {
		console.error('Error processing webhook:', error);
		return json({ error: 'Internal server error' }, { status: 500 });
	}
}
