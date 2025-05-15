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
