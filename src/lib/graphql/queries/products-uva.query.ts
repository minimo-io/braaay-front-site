// src/lib/graphql/queries/products-uva.query.ts
import { gql } from '@urql/core';
import {
	CATEGORY_HEADER_FRAGMENT,
	PRODUCT_LIST_FRAGMENT,
	PAGINATION_INFO_FRAGMENT
} from './fragments/index';

export const UVA_PRODUCTS = gql`
    query LatestProducts($first: Int!, $uvaId: ID!, $uvaSlug: String!, $after: String) {
        uva(id:$uvaId, idType:SLUG){
            ${CATEGORY_HEADER_FRAGMENT}
        }

        products(
            first: $first
            after: $after
            where: {
                taxonomyFilter: { filters: { taxonomy: UVA, terms: [$uvaSlug] } }
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
