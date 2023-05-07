import React from "react"
import { Link, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Layout from "../layouts"
import Container from "../components/container"
import HeroSection from "../components/HeroSection"
import { handlePath } from "../utils/helperFunctions"

const IndexPage = ({ data }) => {
  const image = getImage(
    data.page?.relationships?.field_banner?.relationships?.thumbnail?.localFile
  )
  return (
    <Layout>
      <HeroSection
        title={data.page.title}
        subtitle={data.page.subtitle}
        description={data.page.body}
        heroImg={image}
        alt={data.page.relationships.field_banner.field_media_image.alt}
      />
      <Container className="mx-auto max-w-2xl py-10 px-6">
        <h2 className="text-4xl mb-5">Most recent pages</h2>

        <ul>
          {data.mostRecent.nodes.map((item, index) => {
            const getPath = handlePath(
              item.path.alias,
              item.drupal_internal__nid
            )

            return (
              <li key={index} className="pl-2 list-disc ml-4">
                <Link to={getPath}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
        <section className="pt-10">
          <Link to="/pages/">See All Pages List</Link>
        </section>
      </Container>
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
                  gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
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
