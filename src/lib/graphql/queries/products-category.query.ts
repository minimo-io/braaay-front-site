// src/lib/graphql/queries/products-category.query.ts
import { gql } from '@urql/core';
import {
	CATEGORY_HEADER_FRAGMENT,
	PAGINATION_INFO_FRAGMENT,
	PRODUCT_LIST_FRAGMENT
} from './fragments/index';

export const CATEGORY_PRODUCTS = gql`
	query LatestProducts($first: Int!, $categorySlug: String!, $categoryId: ID!, $after: String) {
		productCategory(id: $categoryId, idType: SLUG) {
			${CATEGORY_HEADER_FRAGMENT}
		}

		products(
			first: $first
			after: $after
			where: { category: $categorySlug, orderby: { field: DATE, order: DESC } }
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
