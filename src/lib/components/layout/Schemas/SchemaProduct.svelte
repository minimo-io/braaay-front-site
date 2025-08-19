<script lang="ts">
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
	import type { Product, ProductAttributes, ProductCategory, YoastSeoData } from '$lib/types';
	import { addYearsAndFormat, mapLocale, serializeSchema, stripHtml } from '$lib/utils';

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
	// let pageImageAlt = $derived(product?.image.altText);
	// let pageImageWidth = 674;
	// let pageImageHeight = 1024;

	// Breadcrumb
	// let breadcrumbName = $derived(categories ? categories[0].name : '');
	// let breadcrumbUrl = $derived(categories ? `${page.url.origin + categories[0].uri}` : '');

	// Product
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
	let productProducerName = $derived(productAttributes?.producer.name);
	let productProducerUrl = $derived(`${basePath.slice(0, -1)}${productAttributes?.producer.uri}`);
	let productProducerImage = $derived(productAttributes?.producer.image.url);

	// --- Date Transformation ---
	let productValidThrough = $derived.by(() => {
		// We can directly use our helper function here
		return addYearsAndFormat(product?.date, 2);
	});

	// let brand = $derived.by(() => {
	// 	let finalBrand: any = {
	// 		'@type': 'Thing',
	// 		name: productProducerName,
	// 		mainEntityOfPage: productProducerUrl
	// 	};

	// 	if (productProducerImage?.trim()) {
	// 		finalBrand.image = productProducerImage;
	// 	}
	// 	return finalBrand;
	// });
</script>

<svelte:head>
	{@html serializeSchema({
		'@context': 'http://schema.org',
		'@type': 'Product',
		url: pageUrl,
		name: product?.title,
		sku: product?.sku,
		image: pageImage,
		description: stripHtml(product?.shortDescription || seo?.metaDesc || '').replaceAll('\n', ''),
		...(productProducerName && {
			brand: {
				'@type': 'Brand',
				name: productProducerName,
				url: productProducerUrl
			}
		}),
		offers: [
			{
				'@type': 'Offer',
				priceSpecification: {
					'@type': 'UnitPriceSpecification',
					price: productSchemaPrice,
					priceCurrency: productSchemaPriceCurrency,
					valueAddedTaxIncluded: false,
					validThrough: productValidThrough // Consider if this "validThrough" date is always applicable or should be dynamic
				},
				priceValidUntil: productValidThrough, // Duplicated from priceSpecification validThrough, but good to have
				availability: 'https://schema.org/InStock', // Use the full URL for clarity
				url: pageUrl,
				seller: { '@type': 'Organization', name: m.seoBase(), url: basePath },

				...(getLocale() == 'pt' && {
					shippingDetails: [
						{
							// Rule 1: Specific rule for Same-Day in São Paulo
							'@type': 'OfferShippingDetails',
							shippingDestination: {
								'@type': 'DefinedRegion',
								addressCountry: 'BR',
								addressRegion: 'BR-SP' // ISO 3166-2 code for the state of São Paulo
							},
							deliveryTime: {
								'@type': 'ShippingDeliveryTime',
								cutoffTime: '15:00:00-03:00', // The new cutoff time property (3 PM in São Paulo)
								handlingTime: {
									'@type': 'QuantitativeValue',
									minValue: 0,
									maxValue: 1,
									unitCode: 'DAY'
								},
								transitTime: {
									'@type': 'QuantitativeValue',
									minValue: 0,
									maxValue: 1,
									unitCode: 'DAY'
								}
							},
							shippingRate: {
								'@type': 'MonetaryAmount',
								currency: 'BRL',
								value: '30.00'
							}
						}
					]
				}),
				...(getLocale() == 'uy' && {
					shippingDetails: [
						{
							// Rule 1: Specific rule for Montevideo
							'@type': 'OfferShippingDetails',
							shippingDestination: {
								'@type': 'DefinedRegion',
								addressCountry: 'UY',
								addressRegion: 'UY-MO' // ISO 3166-2 code for Montevideo Department
							},
							deliveryTime: {
								'@type': 'ShippingDeliveryTime',
								cutoffTime: '15:00:00-03:00', // The new cutoff time property (3 PM in Montevideo)
								handlingTime: {
									'@type': 'QuantitativeValue',
									minValue: 0,
									maxValue: 1,
									unitCode: 'DAY'
								},
								transitTime: {
									'@type': 'QuantitativeValue',
									minValue: 0,
									maxValue: 2,
									unitCode: 'DAY'
								}
							},
							shippingRate: {
								'@type': 'MonetaryAmount',
								currency: 'UYU', // ISO 4217 code for Uruguayan Peso
								value: '200.00'
							}
						}
					]
				}),

				...(getLocale() == 'pt' && {
					hasMerchantReturnPolicy: {
						'@type': 'MerchantReturnPolicy',
						applicableCountry: 'BR',
						returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
						merchantReturnDays: 7,
						returnMethod: 'https://schema.org/ReturnByMail',
						returnFees: 'https://schema.org/FreeReturn'
					}
				}),
				...(getLocale() == 'uy' && {
					hasMerchantReturnPolicy: {
						'@type': 'MerchantReturnPolicy',
						applicableCountry: 'UY',
						returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
						merchantReturnDays: 5,
						returnMethod: 'https://schema.org/ReturnByMail',
						returnFees: 'https://schema.org/ReturnShippingFees',
						returnShippingFeesAmount: {
							'@type': 'MonetaryAmount',
							value: 100.0,
							currency: 'UYU'
						}
					}
				})
			}
		]
	})}
</svelte:head>
