// src/lib/graphql/mutations/update-order-mp-data.mutation.ts
import { gql } from '@urql/core';

export const UPDATE_ORDER_MP_DATA = gql`
	mutation UpdateOrderMPData($orderId: ID!, $mpOrderId: String, $mpPaymentId: String) {
		updateOrderMPData(
			input: { orderId: $orderId, mpOrderId: $mpOrderId, mpPaymentId: $mpPaymentId }
		) {
			success
			message
			order {
				id
				status
			}
		}
	}
`;
