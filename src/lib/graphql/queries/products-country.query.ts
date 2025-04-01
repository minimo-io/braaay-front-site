// Country list products query

import { gql } from '@urql/core';
import { CATEGORY_HEADER_FRAGMENT } from './fragments/cagegoryHeader.query.fragment';

export const COUNTRY_PRODUCTS = gql`
	query LatestProducts($first: Int!, $countrySlug: String!) {
		allPaPais(where: { slug: [$countrySlug] }) {
			nodes {
				name
				${CATEGORY_HEADER_FRAGMENT}
			}
		}

		products(
			first: $first
			where: {
				taxonomyFilter: { filters: { taxonomy: PA_PAIS, terms: [$countrySlug] } }
				orderby: { field: DATE, order: DESC }
			}
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
