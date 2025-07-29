// src/lib/graphql/mutations/fragments/coupon-remove.mutation.fragment.ts
// This is incomplete

// export const MUTATION_FRAGMENT_REMOVE_COUPONS = `
// 		removeCoupons(input: { codes: ["primeira10", "minhaprimeira15"] }) {
// 			cart {
// 				appliedCoupons {
// 					code
// 				}
// 			}
// 		}
// `;

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
