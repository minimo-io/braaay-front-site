import { gql } from '@urql/core';

export const CHECKOUT_CREATE_ORDER_MUTATION = gql`
	mutation CHECKOUT_CREATE_ORDER_MUTATION(
		$couponCodes: [String!]
		$paymentMethod: String!
		$customerBilling: CustomerAddressInput!
		$lineItems: [LineItemInput]
		$cpf: String!
		$shippingLines: [ShippingLineInput]
	) {
		createOrder(
			input: {
				cpf: $cpf
				currency: BRL
				coupons: $couponCodes
				isPaid: false
				paymentMethod: $paymentMethod
				billing: $customerBilling
				shipping: $customerBilling
				lineItems: $lineItems
				shippingLines: $shippingLines
			}
		) {
			orderId
			order {
				orderKey
				status
				billing {
					firstName
					lastName
				}
			}
		}
	}
`;
// currency: BRL
// paymentMethodTitle: "PIX"
// [{ productId: 131610, quantity: 1 }]

//   $paymentMethod: String!,
//   $billing: CustomerAddressInput!,
//   $shipping: CustomerAddressInput, # Optional, if different from billing
//   $lineItems: [LineItemInput!],    # Usually from your cart
//   $customerId: Int,                # Optional, if the user is logged in
