import { m } from '$lib/paraglide/messages';

export enum OrderStatusWoo {
	PENDING = 'PENDING',
	PROCESSING = 'PROCESSING',
	ON_HOLD = 'ON_HOLD',
	COMPLETED = 'COMPLETED',
	CANCELLED = 'CANCELLED',
	REFUNDED = 'REFUNDED',
	FAILED = 'FAILED',
	TRASH = 'TRASH' // Only if supported by your schema
}

export const OrderStatus: Record<OrderStatusWoo, string> = {
	[OrderStatusWoo.PENDING]: m.wooStatusPending(),
	[OrderStatusWoo.PROCESSING]: m.wooStatusProcessing(),
	[OrderStatusWoo.ON_HOLD]: m.wooStatusOnHold(),
	[OrderStatusWoo.COMPLETED]: m.wooStatusCompleted(),
	[OrderStatusWoo.CANCELLED]: m.wooStatusCancelled(),
	[OrderStatusWoo.REFUNDED]: m.wooStatusRefunded(),
	[OrderStatusWoo.FAILED]: m.wooStatusFailed(),
	[OrderStatusWoo.TRASH]: m.wooStatusTrash()
};

// Customer interface for WooCommerce
export interface CustomerAddress {
	firstName: string;
	lastName: string;
	company: string;
	address1: string;
	address2: string;
	city: string;
	postcode: string;
	country: string;
	state: string;
	email?: string; // Only present in billing
	phone?: string; // Only present in billing
}

// Meta data interface
// export interface MetaData {
// 	key: string;
// 	value: string;
// }

// Order interface
export interface Order {
	id: string;
	orderNumber: string;
	date: string;
	status: string;
	total: string;
}

// For the my-orders route -------------------------------------------------------------------------------------------
export interface GraphQLCustomerOrdersResponse {
	customer: {
		orders: {
			nodes: Array<GraphQLCustomerOrder>;
		};
	};
}
export interface GraphQLCustomerOrder {
	databaseId: number;
	status: string;
	date: string;
	customer: {
		firstName: string;
		lastName: string;
		displayName: string;
		username: string;
	};
	paymentMethodTitle: string;
	total: string;
	shippingTotal: string;
	discountTotal: string;
	feeLines: {
		nodes: Array<{
			name: string;
			amount: string;
		}>;
	};
	lineItems: {
		nodes: Array<{
			product: {
				node: {
					uri: string;
					image: {
						mediaItemUrl: string;
						altText: string;
					};
					name: string;
				};
			};
			total: string;
			quantity: number;
		}>;
	};
}
export interface CustomerOrder {
	databaseId: number;
	status: string;
	date: string;
	customer: {
		firstName: string;
		lastName: string;
		displayName: string;
		username: string;
	};
	paymentMethodTitle: string;
	total: string;
	shippingTotal: string;
	discountTotal: string;
	feeLines: {
		nodes: Array<{
			name: string;
			amount: string;
		}>;
	};
	products: Array<{
		product: {
			node: {
				uri: string;
				name: string;
				image: {
					mediaItemUrl: string;
					altText: string;
				};
			};
		};
		total: string;
		quantity: number;
	}>;
}
export function mapCustomerOrders(order: GraphQLCustomerOrder): CustomerOrder {
	return {
		databaseId: order.databaseId,
		status: order.status,
		date: order.date,
		customer: {
			firstName: order.customer.firstName,
			lastName: order.customer.lastName,
			displayName: order.customer.displayName,
			username: order.customer.username
		},
		paymentMethodTitle: order.paymentMethodTitle,
		total: order.total,
		shippingTotal: order.shippingTotal,
		discountTotal: order.discountTotal,
		// Some discounts in woocommece go as feelines
		feeLines: order.feeLines,
		products: order.lineItems.nodes
	};
}

// -------------------------------------------------------------------------------------------

// GraphQL response for customer data
export interface CustomerGraphQLResponse {
	customer: {
		databaseId: number;
		email: string;
		cpf: string;
		telephone: string;
		birthDate: string;

		firstName: string;
		lastName: string;

		sessionToken: string;

		billing: CustomerAddress;
		shipping: CustomerAddress;

		isVatExempt: boolean;

		hasCalculatedShipping: boolean;
		calculatedShipping: boolean;
		// metaData: MetaData[];
		orders: {
			nodes: Order[];
		};
	};
}

export interface Customer {
	databaseId: number | undefined;
	email: string;
	cpf: string;
	telephone: string;
	birthDate: string;

	firstName: string;
	lastName: string;

	// sessionToken: string;

	addresses?: {
		// billing: CustomerAddress;
		shipping?: CustomerAddress;
	};

	// vatExempt: boolean;

	// orderHistory: Order[];
	// metadata: Record<string, string>;
}
