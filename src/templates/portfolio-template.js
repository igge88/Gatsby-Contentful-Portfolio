import * as React from "react"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
// import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"

const PortfolioTemplate = contentfulPage => {
  return (
    <>
    <Helmet>
        <title>Portfolio page</title>
        <meta name="description" content="Description of home" />
      </Helmet>
      
      <h2>{contentfulPage.title}</h2>
      <GatsbyImage
        alt={contentfulPage.title}
        image={contentfulPage.image.gatsbyImage}
      />
    </>
  )
}

export default PortfolioTemplate

export const Head = () => <SEO title="Portfolio" />
