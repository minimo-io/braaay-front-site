// Country list products query

import { gql } from '@urql/core';
import {
	CATEGORY_HEADER_FRAGMENT,
	PRODUCT_LIST_FRAGMENT,
	PAGINATION_INFO_FRAGMENT
} from './fragments/index';

export const COUNTRY_PRODUCTS = gql`
	query LatestProducts($first: Int!, $countrySlug: String!) {
		allPaPais(where: { slug: [$countrySlug] }) {
			nodes {
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
			${PAGINATION_INFO_FRAGMENT}
			edges {
				node{
					... on SimpleProduct {
						${PRODUCT_LIST_FRAGMENT}
					}
				}				
			}
		}
	}
`;
