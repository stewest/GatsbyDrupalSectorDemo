import { graphql } from "gatsby"
import React from "react"
import { getImage } from "gatsby-plugin-image"
import Header from "../components/Header"
import Layout from "../layouts"
import Container from "../components/container"
import HeroSection from "../components/HeroSection"

const PageTemplate = ({ data }) => {
  const image = getImage(
    data.page?.relationships?.field_banner?.relationships.thumbnail.localFile
  )

  const altText = data.page.relationships?.field_banner?.field_media_image?.alt

  return (
    <Layout>
      <Header />
      <HeroSection
        title={data.page.title}
        subtitle={data.page.subtitle}
        heroImg={image}
        alt={altText}
        heroSmall={true}
      />
      <Container className="mx-auto max-w-2xl py-10 px4">
        {data.page.body ? (
          <div
            dangerouslySetInnerHTML={{
              __html: data.page.body.processed,
            }}
          />
        ) : null}
      </Container>
    </Layout>
  )
}

export default PageTemplate

export const query = graphql`
  query ($id: String!) {
    page: drupalNodePage(id: { eq: $id }) {
      __typename
      title
      drupal_internal__nid
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
                  gatsbyImageData(
                    width: 1920
                    placeholder: BLURRED
                    layout: FULL_WIDTH
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`
