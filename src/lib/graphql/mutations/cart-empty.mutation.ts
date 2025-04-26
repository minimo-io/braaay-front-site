// src/lib/graphql/mutations/cart-empty.mutation.ts
import { gql } from '@urql/core';
import { MUTATION_FRAGMENT_REMOVE_COUPONS } from './fragments';

export const EMPTY_CART_MUTATION = gql`
	mutation {
	
		${MUTATION_FRAGMENT_REMOVE_COUPONS}

		emptyCart(input: { clearPersistentCart: true }) {
			deletedCart {
				contents {
					nodes {
						product {
							node {
								name
								slug
							}
						}
					}
				}
			}
		}
	}
`;
