import * as React from "react"
import { graphql } from "gatsby"

const Page = ({ data }) => (
  <pre>{JSON.stringify(data, null, 2)}</pre>
)

export const query = graphql`
  query {
    allContentfulPrinter {
      nodes {
        model
        printerType {
          printerType
        }
      }
    }
  }
`

export default Page