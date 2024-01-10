import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const PortfolioTemplate = contentfulPage => {
  return (
    <main>
      <h2>{contentfulPage.title}</h2>
      <GatsbyImage
        alt={contentfulPage.title}
        image={contentfulPage.image.gatsbyImage}
      />
    </main>
  )
}

export default PortfolioTemplate

export const Head = () => <Seo title="Portfolio" />
