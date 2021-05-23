import React from "react"
import { Link } from "gatsby"

import BoltIcon from "./icons/Bolt"

const Header = () => {
  return (
    <header className="w-full">
      <div className="flex h-20 lg:h-24 mx-auto items-center text-blue-500">
        <BoltIcon className="h-5 w-5 mr-2" />
        <Link
          to="/"
          className="text-xl lg:text-2xl font-sans font-semibold header-logo-link"
        >
          <span>nathanheller</span>
          <span className="text-gray-400 dot-tech">.tech</span>
        </Link>
      </div>
    </header>
  )
}

export default Header
