import { gql } from '@urql/core';

export const FAVORITES_REMOVE_MUTATION = gql`
	mutation RemoveProductFromFavorites($productId: Int!) {
		removeFavoriteProduct(input: { productId: $productId }) {
			success
			message
		}
	}
`;
