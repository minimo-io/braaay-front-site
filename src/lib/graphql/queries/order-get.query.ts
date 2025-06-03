import { gql } from '@urql/core';

export const ORDER_QUERY = gql`
	query GetOrderWithAuth($orderId: Int!) {
		getOrder(orderId: $orderId) {
			total
			email
			status
			currency
			lineItems {
				productName
				quantity
				subtotal
				total
			}
			feeLines {
				# New field
				name
				amount
				total
			}
			couponLines {
				# New field
				code
				discount
			}
			billingFirstName
			billingLastName
			billingAddress1
			billingAddress2
			billingCity
			billingState
			billingPostcode
			billingCountry
			billingPhone
			billingCompany

			paymentMethod
			paymentMethodTitle
			needsPayment
		}
	}
`;

// export const ORDER_QUERY = gql`
// 	query GetOrderWithAuth($orderId: Int!) {
// 		getOrder(orderId: $orderId) {
// 			id
// 			status
// 			billing {
// 				email
// 				phone
// 				firstName
// 				address1
// 			}
// 		}
// 	}
// `;

// export const ORDER_QUERY = gql`
// 	query GetOrderById($id: ID!) {
// 		order(id: $id, idType: DATABASE_ID) {
// 			status
// 			createdVia
// 		}
// 	}
// `;

// query ($billingEmail: String) {
//   orders(where: { billingEmail: $billingEmail }) {
//     nodes {
// status
// createdVia
//     }
//   }
// }
