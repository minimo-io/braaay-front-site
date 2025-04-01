import { gql } from '@urql/core';
import { CATEGORY_HEADER_FRAGMENT, PRODUCT_LIST_FRAGMENT } from './fragments/index';

export const CATEGORY_PRODUCTS = gql`
	query LatestProducts($first: Int!, $categorySlug: String!, $categoryId: ID!) {
		productCategory(id: $categoryId, idType: SLUG) {
			${CATEGORY_HEADER_FRAGMENT}
		}

		products(
			first: $first
			where: { category: $categorySlug, orderby: { field: DATE, order: DESC } }
		) {
			nodes {
				... on SimpleProduct {
					${PRODUCT_LIST_FRAGMENT}
				}
			}
		}
	}
`;
