import { gql } from '@urql/core';

export const PRODUCT_QUERY = gql`
	query GetProduct($slug: ID!) {
		product(id: $slug, idType: SLUG) {
			... on SimpleProduct {
				id
				price
				regularPrice
				stockStatus
				slug
				status
				date
				modified
				title
				shortDescription
				content
				excerpt

				author {
					node {
						name
						avatar {
							url
						}
					}
				}

				featuredImage {
					node {
						mediaItemUrl
						altText
					}
				}

				productCategories {
					edges {
						node {
							name
						}
					}
				}

				outrosDadosDeProduto {
					bgGradientStart
					bgGradientEnd
					pageMainColor
					bgContentImage {
						node {
							mediaItemUrl
						}
					}
				}

				header {
					firstSubtitle
					firstParagraph
				}
			}
		}
	}
`;
