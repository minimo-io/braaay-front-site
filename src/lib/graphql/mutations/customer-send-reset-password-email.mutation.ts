import { gql } from '@urql/core';

export const CUSTOMER_SEND_RESET_PASSWORD_EMAIL_MUTATION = gql`
	mutation SendPasswordResetEmail($username: String!) {
		sendPasswordResetEmail(input: { username: $username }) {
			success
			user {
				id
				email
			}
		}
	}
`;
