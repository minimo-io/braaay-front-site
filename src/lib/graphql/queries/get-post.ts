import { gql } from '@urql/core';

export const LATEST_PRODUCTS_QUERY = gql`
    query GetPost($postId: ID!) {
      post(by: { id: $postId }) {
        id
        date: dateStr(format: "Y-m-d\\TH:i:s")
        modified: modifiedDateStr(format: "Y-m-d\\TH:i:s")
        slug
        status
        link: url
        title: self {
          rendered: title
        }
        content: self {
          rendered: content
        },
        excerpt: self {
          rendered: excerpt
        }
        author
        featured_media: featuredImage
        sticky: isSticky
        categories
        tags
      }
    }
`;
