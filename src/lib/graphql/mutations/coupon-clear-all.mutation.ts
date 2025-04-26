import { gql } from '@urql/core';
import { MUTATION_FRAGMENT_REMOVE_COUPONS } from './fragments';

export const COUPON_CLEAR_ALL = gql`
	mutation {
        ${MUTATION_FRAGMENT_REMOVE_COUPONS}
	}
`;
