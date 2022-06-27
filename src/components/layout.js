import * as React from "react"
import { Helmet } from "react-helmet"
import './layout.css'

const Layout = ({ children }) => {
  

  return (
    <>
    <Helmet>
      <title>GUIA DE INICIO</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    </Helmet>
    <section className="children">
    {children}
    </section>
  
    </>
  )
}


export default Layout
