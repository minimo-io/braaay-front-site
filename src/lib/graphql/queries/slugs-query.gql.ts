import { gql } from '@urql/core';

// Fetch all posts, this will have to change in the future
export const SLUGS_QUERY = gql`
	query GetAllPostSlugs {
		posts(where: { status: PUBLISH }, first: 1500) {
			edges {
				node {
					slug
				}
			}
		}
	}
`;
