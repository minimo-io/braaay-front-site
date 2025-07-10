import { gql } from '@urql/core';

export const FAVORITES_ADD_MUTATION = gql`
	mutation AddProductToFavorites($productId: Int!) {
		addFavoriteProduct(input: { productId: $productId }) {
			success
			message
			favoriteProduct {
				id
				product {
					name
					... on SimpleProduct {
						databaseId
						price
					}
					image {
						sourceUrl
					}
				}
				user {
					databaseId
					username
				}
				addedDate
			}
		}
	}
`;
