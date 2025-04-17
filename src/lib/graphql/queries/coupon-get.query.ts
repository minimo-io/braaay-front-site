import { gql } from '@urql/core';

export const COUPON_QUERY = gql`
	query GetCoupon($slug: ID!) {
		coupon(id: $slug, idType: CODE) {
			description
			amount
			discountType
		}
	}
`;

// mutation{
//     applyCoupon(input:{code:"primeira10"}){

//         applied {
//         code
//       }

//     cart {
//       appliedCoupons{
//         code
//       }

//     }

//     clientMutationId  }

//   }
