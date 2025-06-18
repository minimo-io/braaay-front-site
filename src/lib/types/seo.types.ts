interface SeoImage {
	sourceUrl: string;
	altText?: string;
}

export interface YoastSeoData {
	title?: string;
	metaDesc?: string;
	canonical?: string;
	focuskw?: string;
	metaRobotsNoindex?: 'noindex' | 'index' | string;
	metaRobotsNofollow?: 'nofollow' | 'follow' | string;
	opengraphImage?: SeoImage;
	opengraphTitle?: string;
	opengraphDescription?: string;
}
