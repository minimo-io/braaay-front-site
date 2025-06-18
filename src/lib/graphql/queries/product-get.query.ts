import { gql } from '@urql/core';
import { PRODUCT_LIST_FRAGMENT, SEO_FRAGMENT } from './fragments';
// Here we do not use the product fragment because it is not the same answer

export const PRODUCT_QUERY = gql`
	query GetProduct($slug: ID!) {
		product(id: $slug, idType: SLUG) {
			... on SimpleProduct {
			
				${SEO_FRAGMENT}

				productCategories {
					edges {
						node {
							name
						}
					}
				}
				header {
					firstSubtitle
					firstParagraph
				}

				${PRODUCT_LIST_FRAGMENT}
			}
		}
	}
`;
