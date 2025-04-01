export const CATEGORY_HEADER_FRAGMENT = `
		name
		description
		count

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
