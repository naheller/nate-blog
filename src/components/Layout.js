import React from "react"
import { Link } from "gatsby"

const Layout = ({ /* location, */ title, children }) => {
  return (
    <div>
      <header className="w-full bg-teal-500">
        <div className="flex max-w-3xl lg:max-w-6xl h-14 mx-auto px-8 items-center">
          <Link to="/">
            <span className="text-lg text-white font-bold">Nate.js</span>
          </Link>
        </div>
      </header>
      <main className="main-wrapper max-w-3xl lg:max-w-6xl mx-auto p-8">
        {children}
      </main>
      <footer className="w-full bg-teal-500">
        <div className="flex max-w-3xl lg:max-w-6xl h-14 mx-auto px-8 items-center">
          <span className="text-lg text-white font-bold">Nate.js</span>
        </div>
      </footer>
    </div>
  )
}

export default Layout
