import { graphql } from "gatsby"
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../layouts"
import Container from "../components/container"

const PageTemplate = ({ data }) => {
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
}

export default PageTemplate

export const query = graphql`
  query ($id: String!) {
    page: drupalNodePage(id: { eq: $id }) {
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
  }
`
