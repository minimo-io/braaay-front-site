import { gql } from '@urql/core';
import type { Customer, CustomerGraphQLResponse } from '$lib/types';

export const CUSTOMER_QUERY = gql`
	query GetCustomerData {
		customer {
			id
			databaseId
			email
			firstName
			lastName
			sessionToken
			billing {
				firstName
				lastName
				company
				address1
				address2
				city
				postcode
				country
				state
				email
				phone
			}
			shipping {
				firstName
				lastName
				company
				address1
				address2
				city
				postcode
				country
				state
			}
			isVatExempt
			hasCalculatedShipping
			calculatedShipping
			orders {
				nodes {
					id
					orderNumber
					date
					status
					total
				}
			}
		}
	}
`;

/**
 * Maps GraphQL customer response to User model
 * @param response - The GraphQL response containing customer data
 * @returns User object with transformed data
 */
export function mapCustomerToUser(response: CustomerGraphQLResponse): Customer {
	const customer = response.customer;

	// Transform metadata array to a key-value object
	// const metadata: Record<string, string> = {};
	// customer.metaData.forEach((item) => {
	// 	metadata[item.key] = item.value;
	// });

	return {
		id: customer.databaseId,
		email: customer.email,
		firstName: customer.firstName,
		lastName: customer.lastName,
		sessionToken: customer.sessionToken,
		addresses: {
			billing: customer.billing,
			shipping: customer.shipping
		},
		vatExempt: customer.isVatExempt,
		orderHistory: customer.orders.nodes
		// metadata
	};
}
