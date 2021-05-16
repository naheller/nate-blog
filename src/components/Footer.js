import React from "react"

import ArrowUpIcon from "../components/icons/ArrowUp"

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="flex h-24 mx-auto items-center text-blue-500">
        <ArrowUpIcon className="h-5 w-5 mr-2" />
        <button
          className="text-xl font-semibold hover:underline"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }}
        >
          back to top
        </button>
      </div>
    </footer>
  )
}

export default Footer
