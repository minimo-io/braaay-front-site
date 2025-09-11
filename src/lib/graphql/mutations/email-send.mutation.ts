import { gql } from '@urql/core';

export const EMAIL_SEND_MUTATION = gql`
	mutation SendEmail($to: String!, $subject: String!, $message: String!) {
		sendEmail(input: { to: $to, subject: $subject, message: $message }) {
			success
		}
	}
`;
