import { gql } from '@urql/core';

export const LATEST_PRODUCTS_QUERY = gql`
	query LatestPosts($first: Int!) {
		posts(first: $first, where: { status: PUBLISH, orderby: { field: DATE, order: DESC } }) {
			edges {
				node {
					id
					title
					date
					modified
					excerpt
					uri
					featuredImage {
						node {
							mediaItemUrl
							altText
						}
					}
					author {
						node {
							name
							avatar {
								url
							}
						}
					}
				}
			}
		}
	}
`;
