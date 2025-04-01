// src/lib/graphql/queries/posts-latest.query.ts
import { gql } from '@urql/core';
import { POST_QUERY_FRAGMENT } from './fragments/index';

export const LATEST_POSTS_QUERY = gql`
	query LatestPosts($first: Int!) {
		posts(first: $first, where: { status: PUBLISH, orderby: { field: DATE, order: DESC } }) {
			edges {
				node {
					uri
					${POST_QUERY_FRAGMENT}
				}
			}
		}
	}
`;
