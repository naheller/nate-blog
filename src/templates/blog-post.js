import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/Bio"
import Layout from "../components/Layout"
import SEO from "../components/BlogPostSEO"
import { addUrlOptimization } from "../utils/cloudinary"
import { getFormattedDate } from "../utils/date"
import CalendarIcon from "../components/icons/Calendar"
import HashtagIcon from "../components/icons/Hashtag"
import UserIcon from "../components/icons/User"

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
      tags,
    },
  } = post

  const updatedHtml = addUrlOptimization(html)

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={title}
        datePublished={datePublished}
        dateModified={dateModified}
        description={description || post.excerpt}
        headerImage={headerImage}
        slug={slug}
      />
      {/* <div
        style={{
          backgroundImage: `url("${addUrlOptimization(headerImage)}")`,
          backgroundSize: "100%",
        }}
        className="h-64 bg-fixed bg-no-repeat"
        alt=""
      /> */}
      <div className="flex flex-col justify-between lg:flex-row">
        <article className="prose lg:prose-xl mx-auto lg:mr-8 lg:ml-0">
          <div>
            {/* <img
              src={addUrlOptimization(headerImage)}
              className="w-full rounded-lg m-0"
            /> */}
            <header>
              <h1>{title}</h1>
              <div className="flex flex-wrap">
                <div className="lg:hidden flex max-content items-center bg-gray-200 border-l-4 border-teal-500 pl-2 pr-3 py-1 mr-4 mb-4 text-sm text-gray-700">
                  <UserIcon width="1rem" height="1rem" className="mr-1" />
                  <span className="text-sm">Nathan Heller</span>
                </div>
                <time
                  className="flex max-content items-center bg-gray-200 border-l-4 border-teal-500 pl-2 pr-3 py-1 mr-4 mb-4 text-sm text-gray-700"
                  datetime={datePublished}
                >
                  <CalendarIcon width="1rem" height="1rem" className="mr-2" />
                  <span className="text-sm">
                    {getFormattedDate(datePublished)}
                  </span>
                </time>
                {tags.map(tag => (
                  <div className="flex max-content items-center bg-gray-200 border-l-4 border-teal-500 pl-2 pr-3 py-1 mr-4 mb-4 text-sm text-gray-700">
                    <HashtagIcon width="1rem" height="1rem" />
                    <span className="text-sm">{tag}</span>
                  </div>
                ))}
              </div>
              {/* <div className="flex flex-wrap">
                {tags.map(tag => (
                  <div className="flex max-content items-center bg-gray-200 border-l-4 border-teal-500 pl-2 pr-3 py-1 mr-4 mb-2 text-sm text-gray-700">
                    <HashtagIcon width="1rem" height="1rem" />
                    <span className="text-sm">{tag}</span>
                  </div>
                ))}
              </div> */}
              {/* <div className="text-sm">
                <span>{`By Nathan Heller on `}</span>
                <time datetime={datePublished}>
                  {getFormattedDate(datePublished)}
                </time>
              </div> */}
            </header>
            <section dangerouslySetInnerHTML={{ __html: updatedHtml }} />
            <hr />
          </div>
        </article>
        <aside className="lg:w-64 flex-shrink-0 m-auto lg:m-0 max-w-3xl">
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
        tags
      }
    }
  }
`
