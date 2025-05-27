// src/lib/types/partners.types.ts
export interface Partner {
	type: 'winery' | 'brewery';
	name: string;
	logo: string;
	url: string;
	count?: number;
}

// Our json structure
export interface RawPartner {
	[key: string]: Array<{
		name: string;
		logo: string;
		url: string;
		count: number;
	}>;
}

// Output data structure
export interface MappedPartnersByLang {
	[langKey: string]: Partner[];
}
