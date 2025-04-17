// src/lib/graphql/mutations/login.mutation.ts
import { gql } from '@urql/core';

export const LOGIN_MUTATION = gql`
	mutation Login($username: String!, $password: String!) {
		login(input: { username: $username, password: $password }) {
			authToken
			refreshToken
			sessionToken
			user {
				id
				name
				email
				avatar {
					url
				}
			}
		}
	}
`;
