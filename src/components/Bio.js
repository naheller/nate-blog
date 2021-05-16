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
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const {
    author,
    social: { twitter },
  } = data.site.siteMetadata

  return (
    <div className="flex flex-col sm:flex-row items-center">
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        className="flex-shrink-0 rounded-full sm:mr-8 border avatar"
        alt={author.name}
      />
      <p className="italic text-gray-500 text-center sm:text-left">
        I'm Nathan Heller, a software engineer based in New York City. This blog
        explores topics in web development and tech culture. Follow me{" "}
        {
          <a
            href={`https://twitter.com/${twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            @{twitter}
          </a>
        }{" "}
        for a limitless supply of way less useful information.
      </p>
    </div>
  )
}

export default Bio
