import { gql } from '@urql/core';

// export const COUPON_QUERY = gql`
// 	query GetCoupon($slug: ID!) {
// 		coupon(id: $slug, idType: CODE) {
// 			description
// 			amount
// 			discountType
// 		}
// 	}
// `;

export const COUPON_QUERY = gql`
	mutation ApplyCoupon($couponCode: String!) {
		applyCoupon(input: { code: $couponCode }) {
			applied {
				code
			}
			cart {
				appliedCoupons {
					code
				}
			}
		}
	}
`;
