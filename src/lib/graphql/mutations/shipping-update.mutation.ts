import { gql } from '@urql/core';

export const UPDATE_GUEST_SHIPPING_ADDRESS = gql`
	mutation UpdateGuestShippingAddress($input: UpdateCustomerInput!) {
		updateCustomer(input: $input) {
			customer {
				sessionToken
				shipping {
					postcode
					country
				}
			}
		}
	}
`;
