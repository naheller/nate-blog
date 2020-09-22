import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 175, height: 175) {
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
    <div className="py-4 px-5 border border-2 rounded-lg text-gray-700 bg-gray-100">
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        className="rounded-full mx-auto mb-4"
        style={{ display: "block" }}
        alt={author.name}
      />
      <div>
        <p className="mb-2">
          I'm Nate, a software engineer based in New York City. This blog
          explores topics in web development (and coffee).
        </p>
        <p>I hope you find something that interests you!</p>
      </div>
    </div>
  )

  // return (
  //   <div>
  //     <Image
  //       fixed={data.avatar.childImageSharp.fixed}
  //       className="rounded-full"
  //       alt={author.name}
  //     />
  //     <p>
  //       Written by{" "}
  //       <strong>
  //         <a
  //           href={`https://twitter.com/${social.twitter}`}
  //           target="_blank"
  //           rel="noreferrer"
  //         >
  //           {author.name}
  //         </a>
  //       </strong>
  //     </p>
  //   </div>
  // )
}

export default Bio
