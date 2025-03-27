import { gql } from '@urql/core';

export const POST_QUERY = gql`
	query GetPost($slug: ID!) {
		post(id: $slug, idType: SLUG) {
			id
			slug
			status
			date
			modified
			title
			content
			excerpt
			author {
				node {
					name
					avatar {
						url
					}
				}
			}
			featuredImage {
				node {
					mediaItemUrl
					altText
				}
			}
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
