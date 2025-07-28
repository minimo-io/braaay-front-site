import { gql } from '@urql/core';

export const POPULAR_PRODUCTS_QUERY = gql`
	query MostSoldWines {
		products(
			first: 10
			where: { orderby: { field: POPULARITY, order: DESC }, category: "vinhos" }
		) {
			nodes {
				databaseId
				name
				uri
				... on SimpleProduct {
					price
					regularPrice
					totalSales
				}
			}
		}
	}
`;
