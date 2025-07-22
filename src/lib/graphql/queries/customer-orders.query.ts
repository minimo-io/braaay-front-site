import { gql } from '@urql/core';

export const CUSTOMER_ORDERS_QUERY = gql`
	query {
		customer {
			orders {
				nodes {
					databaseId
					status
					date
					customer {
						firstName
						lastName
						displayName
						username
					}
					paymentMethodTitle
					total
					shippingTotal
					discountTotal
					feeLines {
						nodes {
							name
							amount
						}
					}
					lineItems {
						nodes {
							product {
								node {
									uri
									name
									image {
										mediaItemUrl
										altText
									}
								}
							}
							total
							quantity
						}
					}
				}
			}
		}
	}
`;

// get customer orders from billing email
// export const CUSTOMER_ORDERS_QUERY = gql`
// 	query {
// 		orders(where: { billingEmail: "nicolas@minimo.io" }) {
// 			nodes {
// 				customer {
// 					username
// 				}
// 				paymentMethodTitle
// 				total
// 				shippingTotal
// 				discountTotal
// 				lineItems {
// 					nodes {
// 						product {
// 							node {
// 								name
// 							}
// 						}
// 						total
// 						quantity
// 					}
// 				}
// 			}
// 		}
// 	}
// `;
