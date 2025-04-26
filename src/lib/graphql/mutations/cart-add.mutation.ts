import { gql } from '@urql/core';

export const CART_ADD_MUTATION = gql`
	mutation {
		addToCart(input: { productId: 131868, quantity: 10 }) {
			cart {
				contents {
					nodes {
						product {
							node {
								title
							}
						}
					}
				}
			}
		}
	}
`;
