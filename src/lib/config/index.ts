export const AppConfig = Object.freeze({
	debug: false,
	// the notification duration when adding a product to the cart
	miniCartDuration: 8000,
	// Frequency to check the order status, for pix
	statusCheckDuration: 1500,
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
	},
	payments: {
		timeout: 30
	},

	// for those categories whose product page  image is full width
	kitsImageCategories: ['kits', 'experiencias'],

	// Number of products to get fromt the catalog on page load
	catalogs_initial_query_limit: 15,

	// Enable/Disable cashback site wide
	cashbackEnabled: true,
	// Cashback value
	cashbackPercentage: 5,

	// Enable/Disable for present
	forPresentEnabled: false,

	// Enable/Disable email suscriptions on checkout
	receiveEmailsEnabled: false
});
