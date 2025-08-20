// src/lib/types/search.types.ts

export interface SearchResult {
	title: string;
	url: string;
	type?: 'popular' | 'partner'; // Optional, defaults to 'popular'
	image?: string; // General image property for all types
}

// export interface UnifiedSearchResult {
// 	name: string;
// 	type: 'product' | 'winery' | 'brewery' | 'popular';
// 	image: string;
// 	shortDescription: string;
// 	url: string;
// }

// export interface SearchResultGroup {
// 	title: string;
// 	results: UnifiedSearchResult[];
// }

// export interface SearchDataSource {
// 	popular: UnifiedSearchResult[];
// 	partners: UnifiedSearchResult[];
// 	products: UnifiedSearchResult[];
// }

// // Existing types (keep these if they're used elsewhere)
// export interface Partner {
// 	type: 'winery' | 'brewery';
// 	name: string;
// 	logo: string;
// 	url: string;
// 	count: number;
// }

// export interface RawPartner {
// 	[langKey: string]: Array<{
// 		name: string;
// 		logo: string;
// 		url: string;
// 		count: number;
// 	}>;
// }

// export interface MappedPartnersByLang {
// 	[langKey: string]: Partner[];
// }
