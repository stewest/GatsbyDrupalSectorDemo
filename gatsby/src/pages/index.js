import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../layouts"
import Container from "../components/container"

const IndexPage = ({ data }) => {
  const image = getImage(
    data.page?.relationships?.field_banner?.relationships?.thumbnail?.localFile
  )
  return (
    <Layout>
      <div>
        <Container>
          <GatsbyImage
            image={image}
            alt={data?.page?.relationships?.field_banner?.field_media_image.alt}
          />
          <h1>{data.page.title}</h1>
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
    page: drupalNodePage(drupal_internal__nid: { eq: 10 }) {
      __typename
      title
      body {
        processed
      }
      relationships {
        field_banner {
          field_media_image {
            alt
          }
          relationships {
            thumbnail {
              filename
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 1920)
                  fluid {
                    srcSet
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
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
