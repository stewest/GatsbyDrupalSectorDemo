import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../layouts"
import Container from "../components/container"
import Header from "../components/Header"

const Pages = ({ data }) => (
  <Layout>
    <Header />
    <Container className="mx-auto max-w-2xl py-10 mt-20 px-6">
      <section className="flex-row flex-wrap">
        <div>
          <h2 className="text-5xl mb-10">Pages</h2>
          <ul>
            {data.pages.edges.map(({ node }) => (
              <li key={node.path.alias} className="pl-2 list-disc ml-4 mb-1">
                <Link to={node.path.alias}>{node.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {data.articles.edges.map(({ node }) => (
              <li key={node.path.alias} className="pl-2 list-disc ml-4 mb-1">
                <Link to={node.path.alias}>{node.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
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
    articles: allDrupalNodeArticle(limit: 100) {
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
