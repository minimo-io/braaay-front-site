// Country list products query

import { gql } from '@urql/core';
import {
	CATEGORY_HEADER_FRAGMENT,
	PRODUCT_LIST_FRAGMENT,
	PAGINATION_INFO_FRAGMENT
} from './fragments/index';

export const PAIRING_PRODUCTS = gql`
    query LatestProducts($first: Int!, $pairingSlug: String!, $after: String) {
        allPaHarmonizacoes(where: { slug: [$pairingSlug] }) {
            nodes {
                ${CATEGORY_HEADER_FRAGMENT}
            }
        }

        products(
            first: $first
            after: $after			
            where: {
                taxonomyFilter: { filters: { taxonomy: PA_HARMONIZACOES, terms: [$pairingSlug] } }
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
