// src/lib/graphql/mutations/fragments/coupon-remove.mutation.fragment.ts

export const MUTATION_FRAGMENT_REMOVE_COUPONS = `

	removeAllCoupons(input:{}) {
		success
		message
		cart {
			appliedCoupons {
				code
				discountAmount
				description
			}
			total
			subtotal
			totalTax
			discountTotal
			isEmpty
			contents {
				itemCount
			}
		}
	}

`;
