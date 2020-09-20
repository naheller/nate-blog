import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata

  return (
    <div>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        className="rounded-full"
        alt={author.name}
      />
      <p>
        Written by{" "}
        <strong>
          <a
            href={`https://twitter.com/${social.twitter}`}
            target="_blank"
            rel="noreferrer"
          >
            {author.name}
          </a>
        </strong>
      </p>
    </div>
  )
}

export default Bio
