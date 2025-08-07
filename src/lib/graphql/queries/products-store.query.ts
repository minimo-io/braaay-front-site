// Country list products query

import { gql } from '@urql/core';
import {
	CATEGORY_HEADER_FRAGMENT,
	PRODUCT_LIST_FRAGMENT,
	PAGINATION_INFO_FRAGMENT
} from './fragments/index';

export const STORE_PRODUCTS = gql`
	query LatestProducts($first: Int!, $producerSlug: String!, $after: String) {
		allPaTiendas(where: { slug: [$producerSlug] }) {
			nodes {
				${CATEGORY_HEADER_FRAGMENT}
			}
		}

		products(
			first: $first
			after: $after			
			where: {
				taxonomyFilter: { filters: { taxonomy: PA_TIENDAS, terms: [$producerSlug] } }
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
