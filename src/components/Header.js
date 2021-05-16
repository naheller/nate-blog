import React from "react"
import { Link } from "gatsby"

import BoltIcon from "./icons/Bolt"

const Header = () => {
  return (
    <header className="w-full">
      <div className="flex h-20 lg:h-24 mx-auto items-center text-blue-500">
        <BoltIcon className="h-5 w-5 mr-2" />
        <Link to="/" className="text-xl lg:text-2xl font-bold">
          nate.js
        </Link>
      </div>
    </header>
  )
}

export default Header
