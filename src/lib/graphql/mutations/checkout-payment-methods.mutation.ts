// src/lib/graphql/mutations/cart-empty.mutation.ts
import { gql } from '@urql/core';

export const CHECKOUT_PAYMENT_METHODS_MUTATION = gql`
	mutation GetPaymentMethods($countryCode: String!, $postCode: String!) {
		getAvailablePaymentMethods(
			input: { shippingAddress: { country: $countryCode, postcode: $postCode } }
		) {
			shippingPaymentMethods {
				cartSubtotal
				cartTotal
				discounts {
					label
					amount
				}
				paymentMethods {
					id
					title
					description
					cost
					feeDetails {
						label
						amount
					}
				}
			}
		}
	}
`;

//   mutation{
//     checkout(input:{}){
//       result
//       redirect
//       order{
//         couponLines{
//           nodes{
//             code
//           }
//         }
//         paymentMethod
//         paymentMethodTitle
//       }
//       customer{
//         sessionToken
//         availablePaymentMethods{
//           id
//           gateway{
//             title
//             id
//             description
//           }
//         }
//       }
//     }
//   }
