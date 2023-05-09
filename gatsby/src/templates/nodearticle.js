import { graphql } from "gatsby"
import React from "react"
import Watch from "../components/Watch"
import Container from "../components/container"

const ArticleTemplate = ({ data }) => {
  return (
    <Container className="mx-auto max-w-2xl py-10 px4">
      <Watch title={data.article.title} body={data.article.body.processed} />
    </Container>
  )
}

export default ArticleTemplate

export const query = graphql`
  query ($id: String!) {
    article: drupalNodeArticle(id: { eq: $id }) {
      __typename
      title
      drupal_internal__nid
      body {
        processed
      }
    }
  }
`
