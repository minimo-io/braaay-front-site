// src/routes/+page.server.ts (or wherever your teaser component is used)
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

import {
	MAILCHIMP_API_KEY,
	MAILCHIMP_AUDIENCE_ID,
	MAILCHIMP_SERVER_PREFIX
} from '$env/static/private';

// const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
// const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
// const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX; // e.g., "us1", "us2"

async function subscribeToMailchimp(email: string) {
	// Validate environment variables
	if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID || !MAILCHIMP_SERVER_PREFIX) {
		console.error('Missing Mailchimp configuration');
		throw new Error('Server configuration error');
	}

	// Mailchimp API endpoint
	const url = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;

	// Subscribe to Mailchimp
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			Authorization: `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString('base64')}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email_address: email,
			status: 'subscribed', // Use 'pending' for double opt-in
			merge_fields: {
				// Add any additional fields here if needed
				// FNAME: firstName,
				// LNAME: lastName,
			},
			tags: ['new-site-teaser'] // Optional: add tags to track source
		})
	});

	const data = await response.json();

	if (!response.ok) {
		// Handle specific Mailchimp errors
		if (data.title === 'Member Exists') {
			throw new Error('Este email já está inscrito em nossa newsletter.');
		} else if (data.title === 'Invalid Resource') {
			throw new Error('Por favor, insira um endereço de email válido.');
		} else {
			console.error('Mailchimp API error:', data);
			throw new Error('Falha ao se inscrever na newsletter. Tente novamente mais tarde.');
		}
	}

	return data;
}

export const actions = {
	subscribe: async ({ request }) => {
		try {
			const data = await request.formData();
			const email = data.get('email');

			// Validate email
			if (!email || typeof email !== 'string') {
				return fail(400, {
					message: 'Email é obrigatório.',
					email
				});
			}

			// Basic email validation
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(email)) {
				return fail(400, {
					message: 'Por favor, insira um endereço de email válido.',
					email
				});
			}
			console.log('Subscribe to mailchimp');
			// Subscribe to Mailchimp
			await subscribeToMailchimp(email);

			// Success - no need to return anything for success case
			return {
				success: true
			};
		} catch (error) {
			console.error('Subscription error:', error);

			return fail(500, {
				message:
					error instanceof Error
						? error.message
						: 'Erro interno do servidor. Tente novamente mais tarde.'
			});
		}
	}
} satisfies Actions;
