import { gql } from '@urql/core';

export const COUPONS_QUERY = gql`
	query GetCoupons {
		coupons {
			nodes {
				description
				amount
				discountType
				code
				dateExpiry
				emailRestrictions
				excludeSaleItems
				excludedProductCategories {
					nodes {
						name
					}
				}
				excludedProducts {
					nodes {
						title
					}
				}
				freeShipping
				individualUse
				limitUsageToXItems
				maximumAmount
				minimumAmount
				productCategories {
					nodes {
						name
					}
				}
				products {
					nodes {
						title
					}
				}
				usageCount
				usageLimit
				usageLimitPerUser
				usedBy {
					nodes {
						id
						username
					}
				}
			}
		}
	}
`;
