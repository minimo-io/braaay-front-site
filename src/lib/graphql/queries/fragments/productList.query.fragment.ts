// src/lib/graphql/queries/fragments/productList.query.fragment.ts
// Part of the product query used in product lists (categories, countries, etc)
export const PRODUCT_LIST_FRAGMENT = `
        databaseId
        slug
        name
        price
        regularPrice
        stockStatus
        stockQuantity
        outrosDadosDeProduto {
            bgGradientStart
            bgGradientEnd
            pageMainColor
            bgContentImage {
                node {
                    mediaItemUrl
                }
            }
        }
        sku
        status
        title
        uri
        modified
        author {
            node {
                name
                avatar {
                    url
                }
            }
        }
        averageRating
        date
        excerpt
        featuredImage {
            node {
                altText
                mediaItemUrl
            }
        }
        reviewCount
        content
        shortDescription
`;
