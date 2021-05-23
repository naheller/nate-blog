import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
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
      <StaticImage
        src="../../content/assets/profile-pic.jpg"
        className="flex-shrink-0 rounded-full sm:mr-8 border avatar"
        alt={author.name}
        width={150}
        height={150}
      />
      <p className="italic font-sans leading-normal text-gray-500 text-center sm:text-left">
        I'm <a href="#">Nathan Heller</a>, a software engineer based in New York
        City. This blog explores topics in web development and tech culture.
        Follow me{" "}
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
