const getSiteCollectionsQuery = /* GraphQL */ `
  query getSiteCollections($first: Int!) {
    collections(first: $first) {
      edges {
        node {
          id
          title
          handle
          image {
            src
          }
        }
      }
    }
  }
`
export default getSiteCollectionsQuery
