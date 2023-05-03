import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import Layout from "../layouts"
import Container from "../components/container"

const Pages = ({ data }) => (
  <Layout>
    <Container>
      <h1>Pages</h1>
      <ul>
        {data.pages.edges.map(({ node }) => (
          <li key={node.path.alias}>
            <Link to={node.path.alias}>{node.title}</Link>
          </li>
        ))}
      </ul>
    </Container>
  </Layout>
)

export default Pages

export const query = graphql`
  query {
    pages: allDrupalNodePage(limit: 100) {
      edges {
        node {
          title
          path {
            alias
          }
        }
      }
    }
  }
`
