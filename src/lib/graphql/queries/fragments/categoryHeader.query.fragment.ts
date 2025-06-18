import { SEO_FRAGMENT } from './seo.fragment';

export const CATEGORY_HEADER_FRAGMENT = `
		name
		description
		count
		${SEO_FRAGMENT}

		header{
			firstParagraph
			firstSubtitle
		}		
		categoryHeader {
			customCatalogTitle
			customCatalogImage {
				node {
					mediaItemUrl
					altText
				}
			}
			customCatalogIcon {
				node {
					mediaItemUrl
					altText
				}
			}
		}
`;
