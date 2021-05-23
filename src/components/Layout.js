import React from "react"

import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ /* location, */ children, className }) => {
  return (
    <div
      className={`max-w-2xl lg:max-w-4xl mx-auto px-8 font-serif ${className}`}
    >
      <Header />
      <main className="main-wrapper mx-auto py-6 lg:py-8">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
