import { gql } from '@urql/core';
import { PRODUCT_LIST_FRAGMENT } from './fragments';

export const SEARCH_QUERY = gql`
	query ($searchTerm: String!, $first: Int = 10, $after: String) {

		products(
			where: { search: $searchTerm,  orderby: { order:DESC, field:PRICE} }, 
			first: $first, 
			after: $after
		) {
			edges{
				node {
					... on SimpleProduct {
						${PRODUCT_LIST_FRAGMENT}
					}
				}
			}				
			pageInfo {
				hasNextPage
				endCursor
			}
		}

		posts(where: { search: $searchTerm }, first: $first, after: $after) {
			nodes {
				id
				title
				uri
				date
				excerpt
				# Add any other fields you need for posts
			}
			pageInfo {
				hasNextPage
				endCursor
			}
		}

		uvas(where: { search: $searchTerm }, first: $first, after: $after) {
			nodes {
				name
				id
				description
			}
			pageInfo {
				hasNextPage
				endCursor
			}
		}

		allPaProdutoresDeVinho(where: { search: $searchTerm }, first: $first, after: $after) {
			nodes {
				id
				name
				description
			}
			pageInfo {
				hasNextPage
				endCursor
			}
		}
	}
`;
