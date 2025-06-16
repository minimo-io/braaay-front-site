// src/lib/graphql/mutations/checkout-complete-order.mutation.ts
import { gql } from '@urql/core';

export const UPDATE_ORDER_TO_COMPLETED_MUTATION = gql`
	mutation UpdateOrderToCompleted($orderId: ID!) {
		updateOrder(input: { id: $orderId, status: COMPLETED }) {
			order {
				id
				status
			}
		}
	}
`;
