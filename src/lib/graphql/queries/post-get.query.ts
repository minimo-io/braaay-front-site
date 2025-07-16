// src/lib/graphql/queries/post-get.query.ts
import { gql } from '@urql/core';
import { SEO_FRAGMENT, POST_QUERY_FRAGMENT } from './fragments';

export const POST_QUERY = gql`
	query GetPost($slug: ID!) {
		post(id: $slug, idType: SLUG) {
			
			${POST_QUERY_FRAGMENT}
			${SEO_FRAGMENT}

			slug
			status
			date
			modified
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
