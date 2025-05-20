export const AppConfig = {
	debug: false,
	// the notification duration when adding a product to the cart
	miniCartDuration: 8000,
	mapLink: 'https://maps.app.goo.gl/C62e1n2KGZmtuMW39',
	whatsappLink: 'https://wa.me/5511947530340',
	// Toggle the filtering menu (mobile & desktop)
	showProductFilters: false,
	// Toggle the sorting buttons normally above the filtering menu (mobile & desktop)
	showSortingMenu: false,
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
