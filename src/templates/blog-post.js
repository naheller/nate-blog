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
        <section className="font-sans italic">
          <h1>{title}</h1>
          <p className="text-gray-500">
            <span>by</span>
            {` `}
            <a href="#">Nathan Heller</a>
            {` `}
            <span>on</span>
            {` `}
            <time datetime={dateModified}>
              {getFormattedDate(dateModified)}
            </time>
          </p>
        </section>
        <hr style={{ margin: "2rem 0" }} />
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
