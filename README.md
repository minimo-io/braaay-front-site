# Braaay Front Site

👨‍💻 Development version [here](https://braaay-front-site.vercel.app/).
<br />
✅ Production site [here](https://braaay.com).

![Braaay Screenshot](https://raw.githubusercontent.com/minimo-io/braaay-front-site/main/static/images/snapshot.png)

Everything you need to build the Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Running the project

```bash
# run the project
npm run dev -- --open
```

## Other mutations

```
mutation AddToCart{
  addToCart(input: {productId: 131868, quantity: 10}) {
    cart {
      availableShippingMethods {
        rates {
          cost
          id
          label
        }
      }
      contents {
        nodes {
          product {
            node {
              title
            }
          }
        }
      }
    }
  }
}

mutation UpdateGuestShippingAddress {

  addToCart(input: {productId: 131868, quantity: 10}) {
    cart {
      availableShippingMethods {
        rates {
          cost
          id
          label
        }
      }
      contents {
        nodes {
          product {
            node {
              title
            }
          }
        }
      }
    }
  }

  updateCustomer(
    input: {shipping: {postcode: "---", country: BR, overwrite: true}}
  ) {
    customer {
      sessionToken
      shipping {
        firstName
        address1
        city
        state
        postcode
        country
      }
    }
  }
}

query GetCartShippingEstimates {
  cart {
    availableShippingMethods {
      rates {
        label
        cost
        id
      }
    }
    shippingTotal
  }
}
```
