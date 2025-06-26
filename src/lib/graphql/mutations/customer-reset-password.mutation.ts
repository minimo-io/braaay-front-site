import { gql } from '@urql/core';

export const RESET_PASSWORD_MUTATION = gql`
	mutation ResetPassword($key: String!, $login: String!, $password: String!) {
		resetUserPassword(input: { key: $key, login: $login, password: $password }) {
			user {
				id
				email
			}
		}
	}
`;
