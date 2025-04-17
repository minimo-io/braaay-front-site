// src/lib/graphql/mutations/cart-empty.mutation.ts
import { gql } from '@urql/core';

export const EMPTY_CART_MUTATION = gql`
	mutation {
		removeCoupons(input: { codes: ["primeira10"] }) {
			cart {
				appliedCoupons {
					code
				}
			}
		}

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
