// src/lib/graphql/queries/products-category.query.ts
import { gql } from '@urql/core';
import {
	CATEGORY_HEADER_FRAGMENT,
	PAGINATION_INFO_FRAGMENT,
	PRODUCT_LIST_FRAGMENT
} from './fragments/index';

export const TAG_PRODUCTS = gql`
	query LatestProducts($first: Int!, $tagSlug: String!, $tagId: ID!, $after: String) {
		productTag(id: $tagId, idType: SLUG) {
			${CATEGORY_HEADER_FRAGMENT}
		}

		products(
			first: $first
			after: $after
			where: { 
             taxonomyFilter: { filters: { taxonomy: PRODUCT_TAG, terms: [$tagSlug] } } 
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
