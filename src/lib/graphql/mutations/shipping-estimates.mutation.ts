import { gql } from '@urql/core';

export const GET_SHIPPING_ESTIMATES = gql`
	query GetCartShippingEstimates {
		cart {
			availableShippingMethods {
				rates {
					id
					label
					cost
				}
			}
			shippingTotal
		}
	}
`;
