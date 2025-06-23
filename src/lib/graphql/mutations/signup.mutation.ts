/**
 * src/lib/graphql/mutations/customer-signup.mutation.ts
 *
 * This mutation creates a brand-new WooCommerce customer (and WP user)
 * with our custom fields: telephone, CPF and birthDate.
 * (Custom mutation)
 */

import { gql } from '@urql/core';

export const SIGNUP_MUTATION = gql`
	mutation RegisterNewCustomer(
		$username: String!
		$email: String!
		$password: String!
		$firstName: String
		$lastName: String
		$telephone: String
		$cpf: String
		$birthDate: String
	) {
		registerNewCustomer(
			input: {
				username: $username
				email: $email
				password: $password
				firstName: $firstName
				lastName: $lastName
				telephone: $telephone
				cpf: $cpf
				birthDate: $birthDate
			}
		) {
			customer {
				id
				databaseId
				username
				email
				firstName
				lastName
				telephone
				cpf
				birthDate
			}
			message
		}
	}
`;

// export const UPDATE_CUSTOMER_MUTATION = gql`
// 	mutation UpdateCustomer($id: ID!, $cpf: String) {
// 		updateCustomer(input: { id: $id, cpf: $cpf }) {
// 			customer {
// 				id
// 				email
// 				firstName
// 				lastName
// 				cpf
// 			}
// 		}
// 	}
// `;
