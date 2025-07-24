// src/lib/graphql/mutations/coupon-apply.mutation.ts
import { gql } from '@urql/core';

export const COUPON_APPLY = gql`
	mutation ApplyCoupon($couponCode: String!) {
		applyCoupon(input: { code: $couponCode }) {
			applied {
				code
				discountAmount
				discountTax
			}
		}
	}
`;
