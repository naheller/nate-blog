import React from "react"
import { Link } from "gatsby"

const Layout = ({ /* location, */ title, children, className }) => {
  return (
    <div
      className={`max-w-2xl lg:max-w-3xl mx-auto px-8 font-serif ${className}`}
    >
      <header className="w-full">
        <div className="flex h-20 lg:h-24 mx-auto items-center">
          <Link to="/" className="text-xl lg:text-2xl text-teal-500 font-bold">
            Nathan Heller
          </Link>
        </div>
      </header>
      <main className="main-wrapper mx-auto py-6 lg:py-8">{children}</main>
      <footer className="w-full">
        <div className="flex h-24 mx-auto items-center">
          <span className="text-2xl text-teal-500 font-bold">
            Nathan Heller
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Layout
