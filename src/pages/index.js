import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} className="blog-index">
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.frontmatter.slug
        return (
          <article key={node.frontmatter.slug} className="prose lg:prose-lg">
            <header>
              <h2 className="font-title font-semibold italic">
                <Link to={node.frontmatter.slug}>{title}</Link>
              </h2>
            </header>
            <p>
              <span
                dangerouslySetInnerHTML={{
                  __html: node.excerpt,
                }}
              />
              <span>
                {` `}
                <Link to={node.frontmatter.slug}>read more</Link>
              </span>
            </p>
            <hr />
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
          excerpt(pruneLength: 230)
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
