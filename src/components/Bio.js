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

  const { author /*, social*/ } = data.site.siteMetadata

  return (
    // <div className="px-6 py-5 rounded-lg text-gray-600 bg-gray-200">
    <div className="flex flex-col sm:flex-row lg:flex-col px-6 py-5 border-l-4 border-teal-500 text-gray-700 bg-gray-200">
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        className="flex-shrink-0 border rounded-full mb-5 mx-auto sm:mb-0 lg:mb-5 lg:mx-auto"
        style={{ display: "block" }}
        alt={author.name}
      />
      <div className="flex flex-col justify-center text-sm sm:text-base lg:text-sm sm:mx-10 lg:mx-0">
        <p className="mb-2">
          I'm Nate, a software engineer living in New York City.
        </p>
        <p>
          This blog explores topics in web development and tech culture. I hope
          you find something that interests you!
        </p>
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
