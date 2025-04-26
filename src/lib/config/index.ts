export const AppConfig = {
	miniCartDuration: 8000, // from wine.com
	// list all coupons, this will be fetched from a pre-fetched json
	coupons: {
		primeira10: {
			discountType: 'PERCENT',
			amount: 10,
			description: '10% de desconto na sua primeira compra no site, sem mínimo.',
			usageLimitPerUser: 1
		}
	}
};
