<script lang="ts">
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
	import type { Product, ProductAttributes, ProductCategory, YoastSeoData } from '$lib/types';
	import { addYearsAndFormat, mapLocale, stripHtml } from '$lib/utils';

	interface Props {
		product?: Product;
		productAttributes?: ProductAttributes;
		seo?: YoastSeoData;
		categories?: ProductCategory[];
	}
	let { product, productAttributes, seo, categories }: Props = $props();

	// Page
	let basePath = `${page.url.origin}/`;
	let pageUrl = $derived(page.url);
	let pageDescription = $derived(seo?.metaDesc ?? product!.shortDescription);
	let pageLanguage = mapLocale(getLocale());
	let pageDatePublished = $derived(product?.date);

	// Image
	let pageImage = $derived(product?.image.url);
	let pageImageAlt = $derived(product?.image.altText);
	let pageImageWidth = 674;
	let pageImageHeight = 1024;

	// Breadcrumb
	let breadcrumbName = $derived(categories ? categories[0].name : '');
	let breadcrumbUrl = $derived(categories ? `${page.url.origin + categories[0].uri}` : '');

	// Product
	// --- Price Transformation ---
	// let productSchemaPrice = $derived.by(() => {
	// 	if (!product?.price) {
	// 		return undefined; // Or null, or 0, depending on how you want to handle missing prices
	// 	}
	// 	// Remove "R$" and thousands separator (the dot)
	// 	const cleanedPrice = product.price.replaceAll('R$', '').replaceAll('.', '');
	// 	// Replace decimal comma with a decimal point and convert to a number
	// 	return parseFloat(cleanedPrice.replaceAll(',', '.'));
	// });
	// --- Price Transformation ---
	let productSchemaPrice = $derived.by(() => {
		const price = product?.price;
		if (!price) {
			return undefined;
		}

		let numericPrice;

		// Remove currency symbols (R$, $) and whitespace
		const cleanedString = price.replace(/[R$\s]/g, '');

		// Check if the format uses a comma for the decimal (e.g., 1.199,00)
		if (cleanedString.lastIndexOf(',') > cleanedString.lastIndexOf('.')) {
			const parsableString = cleanedString.replaceAll('.', '').replace(',', '.');
			numericPrice = parseFloat(parsableString);
		} else {
			// Assumes a dot is the decimal (e.g., 200.00)
			const parsableString = cleanedString.replaceAll(',', '');
			numericPrice = parseFloat(parsableString);
		}

		// If parsing was successful, format the number to a string with 2 decimals.
		// Otherwise, return undefined.
		return !isNaN(numericPrice) ? numericPrice.toFixed(2) : undefined;
	});

	// --- Currency Definition ---
	let productSchemaPriceCurrency = $derived.by(() => {
		if (product?.price?.includes('R$')) {
			return 'BRL'; // Brazilian Real
		} else if (product?.price?.includes('$')) {
			return 'UYU'; // Uruguayan Peso (based on your assumption for "$" only)
		}
		// Default to USD if no specific currency symbol is found
		return 'USD';
	});
	let productWineryName = $derived(productAttributes?.producer.name);

	// --- Date Transformation ---
	let productValidThrough = $derived.by(() => {
		// We can directly use our helper function here
		return addYearsAndFormat(product?.date, 2);
	});
</script>

<svelte:head>
	<script type="application/ld+json">
		{
			"@context": "http://schema.org",
			"@type": "Product",
			"url": "${pageUrl}",
			"name": "${product?.title}",
			"sku": "${product?.sku}",
			"image": "${pageImage}",
			"description": "${stripHtml(product?.shortDescription || seo?.metaDesc || '').replaceAll('\n', '')}",
			"brand": {
				"@type": "Thing",
				"name": "${productWineryName}"
			},
			"offers": [
				{
					"@type": "Offer",
					"priceSpecification": {
						"@type": "UnitPriceSpecification",
						"price": "${productSchemaPrice}",
						"priceCurrency": "${productSchemaPriceCurrency}",
						"valueAddedTaxIncluded": false,
						"validThrough": "${productValidThrough}" // Consider if this "validThrough" date is always applicable or should be dynamic
					},
					"priceValidUntil": "${productValidThrough}", // Duplicated from priceSpecification validThrough, but good to have
					"availability": "https://schema.org/InStock", // Use the full URL for clarity
					"url": "${pageUrl}",
					"seller": { "@type": "Organization", "name": "${m.seoBase()}", "url": "${basePath}" }
				}
			]
		}
	</script>
</svelte:head>
