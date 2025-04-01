// src/lib/graphql/queries/post-get.query.ts
import { gql } from '@urql/core';
import { POST_QUERY_FRAGMENT } from './fragments/posts.query.fragment';

export const POST_QUERY = gql`
	query GetPost($slug: ID!) {
		post(id: $slug, idType: SLUG) {
			
			${POST_QUERY_FRAGMENT}

			slug
			status
			date
			content

			header {
				firstSubtitle
				firstParagraph
			}
			categories {
				nodes {
					name
					slug
				}
			}
			tags {
				nodes {
					name
					slug
				}
			}
		}
	}
`;
