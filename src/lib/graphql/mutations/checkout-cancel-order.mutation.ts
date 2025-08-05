import { gql } from '@urql/core';

export const UPDATE_ORDER_TO_CANCELLED_MUTATION = gql`
	mutation UpdateOrderToCompleted($orderId: ID!) {
		updateOrder(input: { id: $orderId, status: CANCELLED }) {
			order {
				id
				status
			}
		}
	}
`;

// export const UPDATE_ORDER_TO_COMPLETED_MUTATION = gql`
// 	mutation UpdateOrderToCompleted($orderId: ID!) {
// 		updateOrder(input: { id: $orderId, status: COMPLETED }) {
// 			order {
// 				id
// 				status
// 			}
// 		}
// 	}
// `;
