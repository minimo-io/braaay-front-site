// File: src/routes/api/imgs-proxy/[...imagePath]/+server.ts
import { error } from '@sveltejs/kit';

/**
 * Handles GET requests to proxy images from an external API.
 * The `params` object contains the full image path captured by the rest parameter.
 */
export async function GET({ params }) {
	// Check same origin request ----------------------------------------------------------------------------------------------
	// const origin = request.headers.get('origin') ?? '';
	// const { allowedOrigins } = AppConfig.payments;

	// // Is it included in our allowed origins?
	// if (!allowedOrigins.includes(origin)) {
	// 	console.error(`Image proxy: Request from different origin tried [${origin}]`);
	// 	throw error(403, 'Forbidden');
	// }
	// --------------------------------------------------------------------------------------------------------------------

	// The rest parameter captures the full path after /api/imgs-proxy/
	// const imagePath = params.imgPath;

	// Use the imagePath to construct the full URL for the external API.
	// Note: You would need to add the base URL of your external API here.

	const fullImageUrl = params.imgPath;

	if (!fullImageUrl) {
		throw error(404, 'Image URL not found');
	}

	try {
		//  Fetch the image from the external API
		const response = await fetch(fullImageUrl);

		//  Check if the external response was successful
		if (!response.ok) {
			throw error(response.status, `Failed to fetch image from external API: ${fullImageUrl}`);
		}

		// Create a new response with the fetched body and headers.
		// We add a Cache-Control header to enable browser and CDN caching.
		const proxyResponse = new Response(response.body, {
			status: response.status,
			headers: {
				...response.headers,
				'Cache-Control': 'public, max-age=31536000, immutable'
			}
		});

		//  Return the fetched response directly, which includes the correct headers (like Content-Type)
		// and the image stream.
		// return response;
		return proxyResponse;
	} catch (e) {
		console.error('Proxy error:', e);
		throw error(
			500,
			`Internal server error while proxying image: ${e instanceof Error ? e.message : 'An unknown error occurred.'}`
		);
	}
}
