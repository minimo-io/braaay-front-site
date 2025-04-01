export const POST_QUERY_FRAGMENT = `
    id
    title
    modified
    excerpt
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
`;
