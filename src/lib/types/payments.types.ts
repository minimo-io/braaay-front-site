export interface PaymentFeeDetail {
	label: string;
	amount: number;
}

export interface PaymentMethod {
	id: string;
	title: string;
	description: string;
	cost: number; // discount
	feeDetails: PaymentFeeDetail[];
}

export interface CreditCardFormData {
	cardNumber: string;
	cardholderName: string;
	expiryDate: string;
	securityCode: string;
}

export interface OrderData {
	total: string;
	email: string;
	status: string;
	currency: string;

	lineItems: {
		productName: string;
		quantity: number;
		subtotal: string;
		total: string;
	}[];

	feeLines: {
		name: string;
		amount: string;
		total: string;
	}[];

	couponLines: {
		code: string;
		discount: string;
	}[];

	billingFirstName: string;
	billingLastName: string;
	billingAddress1: string;
	billingAddress2: string;
	billingCity: string;
	billingState: string;
	billingPostcode: string;
	billingCountry: string;
	billingPhone: string;
	billingCompany: string;

	paymentMethod: string;
	paymentMethodTitle: string;
	needsPayment: boolean;
}
