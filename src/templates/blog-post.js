import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/BlogPostSEO"
import Bio from "../components/Bio"

import { addUrlOptimization } from "../utils/cloudinary"
import { getFormattedDate } from "../utils/date"

const BlogPostTemplate = ({ data, /* pageContext, */ location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  // const { previous, next } = pageContext

  const {
    html,
    frontmatter: {
      title,
      datePublished,
      dateModified,
      description,
      slug,
      headerImage,
      // tags,
    },
  } = post

  const updatedHtml = addUrlOptimization(html)

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={title}
        datePublished={datePublished}
        dateModified={dateModified}
        description={description || post.excerpt}
        headerImage={headerImage || ""}
        slug={slug}
      />
      <article className="prose lg:prose-xl">
        <section>
          <h1>{title}</h1>
          <time className="italic text-gray-500" datetime={datePublished}>
            {getFormattedDate(datePublished)}
          </time>
        </section>
        <section dangerouslySetInnerHTML={{ __html: updatedHtml }} />
        <hr />
        <aside>
          <Bio />
        </aside>
        <hr />
      </article>
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
        tags
      }
    }
  }
`
