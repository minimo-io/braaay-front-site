import { gql } from '@urql/core';

// No price....
export const LATEST_PRODUCFTS = gql`
	query LatestProducts($first: Int!) {
		products(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
			nodes {
				... on SimpleProduct {
					id
					name
					outrosDadosDeProduto {
						bgGradientStart
						bgGradientEnd
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
