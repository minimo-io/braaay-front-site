// src/lib/data/partners.data.ts
import { type Partner, type RawPartner, type MappedPartnersByLang } from '$lib/types';
import rawPartnerData from './jsons/home-partners.json';

/**
 * Maps the input data to an array of Partner objects.
 * @param data The input data object.
 * @returns An array of Partner objects.
 */
/**
 * Maps the input data to an object where each key (e.g., language code)
 * corresponds to an array of Partner objects.
 * @param data The input data object.
 * @returns An object with language keys mapping to arrays of Partner objects.
 */

function mapToPartners(data: RawPartner): MappedPartnersByLang {
	const mappedResult: MappedPartnersByLang = {};

	for (const langKey in data) {
		if (Object.prototype.hasOwnProperty.call(data, langKey)) {
			const rawItems = data[langKey];
			const partnersForLang: Partner[] = [];

			rawItems.forEach((item) => {
				// Assuming 'winery' based on the provided 'pt' data's URL structure.
				// You might need more sophisticated logic if 'type' can vary
				// based on the langKey or item properties.
				const partnerType: 'winery' | 'brewery' = 'winery';

				// Example: if you had a key indicating breweries
				// if (langKey.includes('breweries') || item.url.includes('/breweries/')) {
				//     partnerType = 'brewery';
				// }

				partnersForLang.push({
					type: partnerType,
					name: item.name,
					logo: item.logo,
					url: item.url,
					count: item.count
				});
			});
			mappedResult[langKey] = partnersForLang;
		}
	}
	return mappedResult;
}

export const mappedPartners: MappedPartnersByLang = mapToPartners(rawPartnerData);
