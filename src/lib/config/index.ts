export const AppConfig = Object.freeze({
	debug: true,
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
	receiveEmailsEnabled: false,

	// Founding date
	foundingDate: 2023,

	// Address
	address: {
		pt: {
			street: 'R. Cristiano Viana',
			number: '62',
			complement: 'cj 35',
			neighborhood: 'Cerqueira César',
			city: 'São Paulo',
			state: 'SP',
			zipCode: '05411-000',
			countryCode: 'BR'
		},
		uy: {
			street: 'Eduardo Acevedo',
			number: '1376',
			complement: '901',
			neighborhood: 'Cordón',
			city: 'Montevideo',
			state: 'MVD',
			zipCode: '11200',
			countryCode: 'UY'
		}
	},

	// Legal name
	legal: {
		pt: { name: '50.260.091 NICOLAS ERRAMUSPE ARMANDO', code: '50.260.091/0001-72' },
		uy: { name: 'BRAAAY', code: '50.260.091/0001-72' }
	},

	// Telephone
	tel: {
		pt: '+55 11 94753-0340',
		uy: '+55 11 94753-0340'
	},

	// Socials
	socials: {
		pt: {
			instagram: 'https://www.instagram.com/braaay_com'
		},
		uy: {
			instagram: 'https://www.instagram.com/hops_uy'
		}
	}
});
