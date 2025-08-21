// src/lib/graphql/queries/page-get.query.ts
import { gql } from '@urql/core';
import { SEO_FRAGMENT } from './fragments';

export const PAGE_QUERY = gql`
	query GetPage($slug: ID!) {
		page(id: $slug, idType: URI) {
			

			${SEO_FRAGMENT}

			slug
			status
			date
			modified
			content

            id
            title
            date
            modified
            excerpt

			header {
				firstSubtitle
				firstParagraph
			}            
        
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
`;
