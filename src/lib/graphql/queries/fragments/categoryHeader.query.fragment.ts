export const CATEGORY_HEADER_FRAGMENT = `
		name
		description
		count
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
