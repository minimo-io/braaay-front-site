export const LATEST_PRODUCTS_QUERY = `
  query LatestPosts($first: Int!) {
    posts(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
      edges {
        node {
          id
          title
          date
        }
      }
    }
  }
`;
