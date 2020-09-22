import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/Bio"
import Layout from "../components/Layout"
import SEO from "../components/BlogPostSEO"
import { addUrlOptimization } from "../utils/cloudinary"
import { getFormattedDate } from "../utils/date"
import CalendarIcon from "../components/icons/Calendar"

const BlogPostTemplate = ({ data, /* pageContext, */ location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  // const { previous, next } = pageContext

  const updatedHtml = addUrlOptimization(post.html)
  post.html = updatedHtml

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        datePublished={post.frontmatter.datePublished}
        dateModified={post.frontmatter.dateModified}
        description={post.frontmatter.description || post.excerpt}
        headerImage={post.frontmatter.headerImage}
        slug={post.frontmatter.slug}
      />
      <div
        style={{
          backgroundImage: `url("${addUrlOptimization(
            post.frontmatter.headerImage
          )}")`,
          backgroundSize: "100%",
        }}
        className="h-64 bg-fixed bg-no-repeat"
        alt=""
      />
      <div className="flex flex-col justify-between lg:flex-row max-w-6xl mx-auto p-8">
        <article className="prose lg:prose-xl mr-8">
          <div>
            <header>
              <h1 itemProp="headline">{post.frontmatter.title}</h1>
              <time
                className="max-content flex items-center bg-gray-100 border rounded-full px-3 py-1"
                datetime={post.frontmatter.datePublished}
              >
                <CalendarIcon className="w-4 h-4 mr-2" />
                <span className="text-sm text-gray-700">
                  {getFormattedDate(post.frontmatter.datePublished)}
                </span>
              </time>
            </header>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr />
          </div>
        </article>
        <aside className="w-64 sticky">
          <Bio />
        </aside>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        datePublished
        dateModified
        headerImage
        description
        slug
      }
    }
  }
`
