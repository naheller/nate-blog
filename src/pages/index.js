import React from "react"
import { Link, graphql } from "gatsby"

import CalendarIcon from "../components/icons/Calendar"
import Layout from "../components/Layout"
import { getFormattedDate } from "../utils/date"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      {/* <Bio /> */}
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.frontmatter.slug
        return (
          <article
            key={node.frontmatter.slug}
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <h2 className="text-2xl font-bold mb-3">
                <Link to={node.frontmatter.slug}>{title}</Link>
              </h2>
              <time
                className="flex max-content items-center bg-gray-200 border-l-4 border-teal-500 pl-2 pr-3 py-1 mr-4 mb-4 text-sm text-gray-700"
                datetime={node.frontmatter.datePublished}
              >
                <CalendarIcon width="1rem" height="1rem" className="mr-2" />
                <span className="text-sm">
                  {getFormattedDate(node.frontmatter.datePublished)}
                </span>
              </time>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
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
