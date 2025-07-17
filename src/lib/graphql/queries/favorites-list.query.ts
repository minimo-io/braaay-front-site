import { gql } from '@urql/core';
import { PRODUCT_LIST_FRAGMENT } from './fragments';

export const FAVORITES_PRODUCTS_FOR_USER = gql`
	query {
		viewer {
			favoriteProducts {
				product {
					... on SimpleProduct {
						${PRODUCT_LIST_FRAGMENT}
					}
					image {
						sourceUrl
					}
					name
					databaseId
				}
				user {
					username
					databaseId
				}
				addedDate
			}
		}
	}
`;
