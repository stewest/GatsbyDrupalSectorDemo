import { graphql } from "gatsby"
import React from "react"
// import Img from 'gatsby-image';

import Layout from "../layouts"
import Container from "../components/container"

const PageTemplate = ({ data }) => (
  <Layout>
    <div>
      <Container>
        <h1>{data.page.title}</h1>
        {data.page.body ? (
          <div
            dangerouslySetInnerHTML={{
              __html: data.page.body.processed,
            }}
          />
        ) : null}
      </Container>
    </div>
  </Layout>
)

export default PageTemplate

export const query = graphql`
  query ($id: String!) {
    page: drupalNodePage(id: { eq: $id }) {
      title
      body {
        processed
      }
    }
  }
`
