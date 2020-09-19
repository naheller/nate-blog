/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import addUrlOptimization from "../utils/addUrlOptimization"

const AUTHOR_IMAGE_URL =
  "https://res.cloudinary.com/nate-blog/image/upload/v1600488872/nate_ckldzj.jpg"

const SEO = ({
  lang,
  meta,
  title,
  slug,
  datePublished,
  dateModified,
  description,
  headerImage,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author {
              name
            }
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: `https://natejs.com/${slug}`,
    headline: title,
    image: addUrlOptimization(headerImage),
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: site.siteMetadata.author.name,
      image: addUrlOptimization(AUTHOR_IMAGE_URL),
    },
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: site.siteMetadata.author.name,
        },
        {
          name: `viewport`,
          content: `width=device-width, initial-scale=1`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: addUrlOptimization(headerImage),
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: addUrlOptimization(headerImage),
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">{JSON.stringify(ldJson)}</script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  slug: ``,
  headerImage: ``,
  datePublished: ``,
  dateModified: ``,
}

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  slug: PropTypes.string,
  description: PropTypes.string,
  headerImage: PropTypes.string,
  datePublished: PropTypes.string,
  dateModified: PropTypes.string,
}

export default SEO
