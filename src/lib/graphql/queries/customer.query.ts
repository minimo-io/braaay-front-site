import { gql } from '@urql/core';
import type { Customer, CustomerGraphQLResponse } from '$lib/types';

export const CUSTOMER_QUERY = gql`
	query GetCustomerData {
		customer {
			databaseId
			email
			cpf
			telephone
			birthDate

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

	// If there is no data in woocommerce shipping entry, then use the billing entry.
	let activeCustomerShipping = customer.shipping;
	if (!customer.shipping.firstName && customer.billing.firstName) {
		activeCustomerShipping = customer.billing;
	}

	return {
		databaseId: customer.databaseId,

		email: customer.email,
		telephone: customer.telephone,

		firstName: customer.firstName,
		lastName: customer.lastName,

		cpf: customer.cpf,
		birthDate: customer.birthDate,

		// sessionToken: customer.sessionToken,

		addresses: {
			// billing: customer.billing,
			shipping: activeCustomerShipping
		}
		// vatExempt: customer.isVatExempt,
		// orderHistory: customer.orders.nodes
	};
}
