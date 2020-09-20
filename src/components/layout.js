import React from "react"
import { Link } from "gatsby"

const Layout = ({ /* location, */ title, children }) => {
  return (
    <div>
      <header>
        <h3>
          <Link to={`/`}>{title}</Link>
        </h3>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
