// This order service is new. Was created for its use on the my-orders page.
// There might be other orders related

import { CUSTOMER_ORDERS_QUERY } from '$lib/graphql/queries';
import {
	mapCustomerOrders,
	type CustomerOrder,
	type GraphQLCustomerOrder,
	type GraphQLCustomerOrdersResponse
} from '$lib/types';
import { getUrqlClient } from '$stores/urqlClient.state.svelte';

/**
 * Get logged in customer latest orders
 * @returns an object will orders
 *
 */
export async function customerOrdersGet(): Promise<{ products: CustomerOrder[] | undefined }> {
	try {
		const result = await getUrqlClient()
			.client.query<GraphQLCustomerOrdersResponse>(CUSTOMER_ORDERS_QUERY, {})
			.toPromise();

		if (result.error) {
			console.error('GraphQL Error:', result.error);
			return {
				products: undefined
			};
		}

		const responseData: CustomerOrder[] | undefined = result.data?.customer.orders.nodes.map(
			(order: GraphQLCustomerOrder) => mapCustomerOrders(order)
		);

		return {
			products: responseData
		};
	} catch (error) {
		console.error('An unexpected error occurred:', error);
		return {
			products: undefined
		};
	}
}
