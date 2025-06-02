import { gql } from '@urql/core';

export const CHECKOUT_UPDATE_CUSTOMER_EMAIL = gql`
	mutation UpdateGuestCustomerEmail($email: String!) {
		updateCustomer(input: { billing: { email: $email } }) {
			customer {
				email
			}
		}
	}
`;
