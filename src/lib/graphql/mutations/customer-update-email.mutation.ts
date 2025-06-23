import { gql } from '@urql/core';

export const CUSTOMER_UPDATE_EMAIL = gql`
	mutation UpdateGuestCustomerEmail($email: String!) {
		updateCustomer(input: { billing: { email: $email } }) {
			customer {
				email
			}
		}
	}
`;
