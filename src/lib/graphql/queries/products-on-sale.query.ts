// Country list products query

import { gql } from '@urql/core';
import { PRODUCT_LIST_FRAGMENT, PAGINATION_INFO_FRAGMENT } from './fragments/index';

export const ONSALE_PRODUCTS = gql`
    query OnSaleProducts($first: Int!, $after: String) {

        products(
            first: $first
            after: $after	
            where:{ onSale:true, orderby: { field: DATE, order: DESC } }
            
        ){
                ${PAGINATION_INFO_FRAGMENT}
                edges {
                    node{
                        ... on SimpleProduct {
                            ${PRODUCT_LIST_FRAGMENT}
                        }
                    }				
                }
        }

    }
`;
