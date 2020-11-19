import React from "react"
import { Link, graphql } from "gatsby"

import CalendarIcon from "../components/icons/Calendar"
import Layout from "../components/Layout"
import { getFormattedDate } from "../utils/date"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle} className="blog-index">
      {/* <Bio /> */}
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.frontmatter.slug
        return (
          <article key={node.frontmatter.slug} className="prose lg:prose-lg">
            <header>
              <h2>
                <Link to={node.frontmatter.slug}>{title}</Link>
              </h2>
              {/* <time
                className="italic"
                datetime={node.frontmatter.datePublished}
              >
                {getFormattedDate(node.frontmatter.datePublished)}
              </time> */}
            </header>
            <section>
              <p>
                <span
                  dangerouslySetInnerHTML={{
                    __html: node.excerpt,
                  }}
                />
                <span>
                  {` `}
                  <Link to={node.frontmatter.slug}>Read more</Link>
                </span>
              </p>
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
