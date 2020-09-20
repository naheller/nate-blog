import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/Bio"
import Layout from "../components/Layout"
import SEO from "../components/BlogPostSEO"
import { addUrlOptimization } from "../utils/cloudinary"
import { getFormattedDate } from "../utils/date"

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
      <article className="prose lg:prose-xl">
        <header>
          <img src={addUrlOptimization(post.frontmatter.headerImage)} alt="" />
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{getFormattedDate(post.frontmatter.datePublished)}</p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <footer>
          <Bio />
        </footer>
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
      }
    }
  }
`
