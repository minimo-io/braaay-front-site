import { gql } from '@urql/core';

export const CATEGORY_PRODUCTS = gql`
	query LatestProducts($first: Int!, $categorySlug: String!, $categoryId: ID!) {
		productCategory(id: $categoryId, idType: SLUG) {
			name
			categoryHeader {
				customCatalogTitle
				customCatalogImage {
					node {
						mediaItemUrl
						altText
					}
				}
			}
			description
			image {
				mediaItemUrl
				altText
			}
		}

		products(
			first: $first
			where: { category: $categorySlug, orderby: { field: DATE, order: DESC } }
		) {
			nodes {
				... on SimpleProduct {
					slug
					name
					price
					regularPrice
					stockStatus
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
					sku
					status
					title
					uri
					modified
					author {
						node {
							name
							avatar {
								url
							}
						}
					}
					averageRating
					date
					excerpt
					featuredImage {
						node {
							altText
							mediaItemUrl
						}
					}
					reviewCount
					content
					shortDescription
				}
			}
		}
	}
`;
