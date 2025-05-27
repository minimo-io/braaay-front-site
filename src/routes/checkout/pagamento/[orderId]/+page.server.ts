import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { localizeHref } from '$lib/paraglide/runtime';

// const MOCK_MP_ACCESS_TOKEN = 'YOUR_MERCADOPAGO_SERVER_SIDE_ACCESS_TOKEN';
// const MOCK_WOO_PAYMENT_METHOD_ID = 'woo_mercadopago_custom_gateway'; // Hardcoded for this example

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

export const load: PageServerLoad = async ({ params }) => {
	const orderId = params.orderId;

	// To get from fetched order (from orderId) ------------------------------------------------------------------------
	const orderPaymentId = 'mercadopago';
	const orderFounded = true;
	// -----------------------------------------------------------------------------------------------------------------

	if (!orderFounded) {
		console.error(`Order ${orderId} not found.`);
		throw redirect(302, localizeHref(`/checkout/error/2313?message=order-not-found`)); // Redirect to a generic error page
	}

	if (orderPaymentId == 'mercadopago') {
		console.log('Get data from Mercado Pago:');
		console.log(orderId);
	}
};
