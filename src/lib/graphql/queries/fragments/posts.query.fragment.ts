export const POST_QUERY_FRAGMENT = `
    id
    title
    date
    modified
    excerpt
    categories{
        nodes{
            name
            uri
        }
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
`;
