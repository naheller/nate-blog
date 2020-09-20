import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/Bio"
import Layout from "../components/Layout"
import { getFormattedDate } from "../utils/date"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.frontmatter.slug
        return (
          <article
            key={node.frontmatter.slug}
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <h3>
                <Link to={node.frontmatter.slug} itemProp="url">
                  <span itemProp="headline">{title}</span>
                </Link>
              </h3>
              <small>{getFormattedDate(node.frontmatter.datePublished)}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
                itemProp="description"
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___datePublished], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            slug
            title
            datePublished
            description
          }
        }
      }
    }
  }
`
