import { gql } from '@urql/core';

export const ORDER_QUERY_STATUS = gql`
	query GetOrderStatus($orderId: ID!) {
		order(id: $orderId, idType: DATABASE_ID) {
			status
		}
	}
`;
