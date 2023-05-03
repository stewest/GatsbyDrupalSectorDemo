import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../layouts"
import Container from "../components/container"

// class IndexPage extends React.Component {
//   render() {
// const data = this.props.data;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div>
        <Container>
          <h1>Welcome</h1>
        </Container>

        <div>
          <Container>
            <h2>Most recent pages</h2>

            <ul>
              {data.mostRecent.nodes.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.path.alias}>{item.title}</Link>
                  </li>
                )
              })}
            </ul>
          </Container>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    mostRecent: allDrupalNodePage(sort: { created: ASC }, limit: 5) {
      nodes {
        title
        drupal_internal__nid
        uid {
          drupal_internal__target_id
        }
        path {
          alias
        }
        relationships {
          field_banner {
            field_media_image {
              alt
              title
              width
              height
              __typename
            }
            relationships {
              field_media_image {
                localFile {
                  url
                }
              }
            }
          }
        }
      }
      totalCount
    }
  }
`
