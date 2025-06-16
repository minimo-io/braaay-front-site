// src/routes/api/webhooks/mercadopago/+server.js
import { json } from '@sveltejs/kit';
import { createHmac } from 'crypto';
import { MP_WEBHOOK_SECRET } from '$env/static/private';
import { getUrqlClient } from '$stores/urqlClient.state.svelte';
import { UPDATE_ORDER_TO_COMPLETED_MUTATION } from '$lib/graphql/mutations';
import { generateBasicAuthorization } from '$lib/utils';
import { PUBLIC_APP_PASSWORD_EMAIL, PUBLIC_APP_PASSWORD_KEY } from '$env/static/public';

function validateWebhookSignature(xSignature, xRequestId, dataId, secretKey) {
	// 1. Validar a presença de todos os dados de entrada
	if (!xSignature || !xRequestId || !dataId || !secretKey) {
		console.error(
			'Falha na validação: Faltam dados essenciais. Verifique os headers e a secretKey.'
		);
		console.error(
			`Recebido: x-signature: ${!!xSignature}, x-request-id: ${!!xRequestId}, data.id: ${!!dataId}, secretKey: ${!!secretKey}`
		);
		return false;
	}

	// 2. Limpar a chave secreta para remover espaços/quebras de linha (causa comum de erros)
	const cleanSecretKey = secretKey.trim();

	try {
		// 3. Extrair 'ts' (timestamp) e 'v1' (hash) do header x-signature
		const parts = xSignature.split(',');
		const signatureData = parts.reduce((acc, part) => {
			const [key, value] = part.split('=', 2);
			if (key && value) acc[key.trim()] = value.trim();
			return acc;
		}, {});

		const ts = signatureData.ts;
		const hash = signatureData.v1;

		if (!ts || !hash) {
			console.error(
				`Falha na validação: Não foi possível extrair 'ts' ou 'v1' do header x-signature: "${xSignature}"`
			);
			return false;
		}

		console.log('SecretKey');
		console.log(secretKey);

		console.log('ts');
		console.log(ts);

		console.log('hash');
		console.log(hash);

		console.log('xSignature');
		console.log(xSignature);

		console.log('xRequestId');
		console.log(xRequestId);

		console.log('dataId');
		console.log(dataId);

		// 4. Construir a string do manifesto exatamente como o Mercado Pago faz
		const manifest = `id:${dataId};request-id:${xRequestId};ts:${ts};`;

		// 5. Gerar o nosso próprio hash HMAC-SHA256
		const hmac = createHmac('sha256', cleanSecretKey);
		hmac.update(manifest);
		const calculatedHash = hmac.digest('hex');

		// 6. Comparar o hash calculado com o hash recebido
		const isValid = calculatedHash === hash;

		if (!isValid) {
			console.error('--- DIVERGÊNCIA DE ASSINATURA DETETADA ---');
			console.log(`   String do Manifesto usada: "${manifest}"`);
			console.log(`   Hash do MP (v1):    ${hash}`);
			console.log(`   Nosso Hash (calculado): ${calculatedHash}`);
			console.error(
				'   Causas prováveis: 1) A Secret Key ainda está incorreta. 2) O manifesto não corresponde (verifique os valores de id, request-id, ts).'
			);
		} else {
			console.log('Assinatura do webhook validada com sucesso!');
		}

		return isValid;
	} catch (error) {
		console.error('Ocorreu uma exceção ao validar a assinatura do webhook:', error);
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

		console.log('External Reference');
		console.log(dataExternalReference);

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

		// Only process webhook processed orders -----------------------------------------------------------------------
		if (type == 'order' && webhookData?.action == 'order.processed') {
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
				console.error('Invalid signature');
				// return json({ error: 'Invalid signature' }, { status: 401 });
			}

			// TODO: Process your webhook logic here
			console.log('Process order...');

			// --- Execute the mutation to update the status ---
			if (dataExternalReference) {
				const urqlClient = getUrqlClient('', true).client;
				try {
					const result = await urqlClient
						.mutation(
							UPDATE_ORDER_TO_COMPLETED_MUTATION,
							{
								orderId: dataExternalReference
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
					} else if (result.data?.updateOrder?.order?.status) {
						console.log(
							`Order ${result.data.updateOrder.order.id} status updated to: ${result.data.updateOrder.order.status}`
						);
					} else {
						console.warn('Order status update mutation returned no data or unexpected format.');
					}
				} catch (mutationError) {
					console.error('Exception during order status mutation:', mutationError);
				}
			} else {
				console.warn('dataExternalReference is missing. Cannot update order status.');
			}
			// --- End of mutation execution ---
		} else {
			console.log(`Not a processed order, skipping (${webhookData?.action}).`);
		}
		// -------------------------------------------------------------------------------------------------------------

		// Return success response (required by MercadoPago)
		return json({ success: true }, { status: 200 });
	} catch (error) {
		console.error('Error processing webhook:', error);
		return json({ error: 'Internal server error' }, { status: 500 });
	}
}
