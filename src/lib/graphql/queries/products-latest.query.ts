import { gql } from '@urql/core';

export const LATEST_PRODUCTS_QUERY = gql`
	query LatestProducts($first: Int!, $categoryId: Int!) {
		products(
			first: $first
			where: { categoryId: $categoryId, orderby: { field: DATE, order: DESC } }
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
