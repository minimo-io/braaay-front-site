import { gql } from '@urql/core';

export const CART_ADD_ITEMS_MUTATION = gql`
	mutation AddCartItems($items: [CartItemInput!]!) {
		addCartItems(input: { items: $items }) {
			cart {
				availableShippingMethods {
					rates {
						id
						methodId
						label
						cost
					}
				}
			}
		}
	}
`;
