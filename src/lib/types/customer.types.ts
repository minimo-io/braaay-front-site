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
