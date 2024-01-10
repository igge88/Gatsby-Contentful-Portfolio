import * as React from "react"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"

const AboutTemplate = contentfulPage => {
  return (
    <>
      <Helmet>
        <title>About page</title>
        <meta name="description" content="Description of about" />
      </Helmet>
      <h2>{contentfulPage.title}</h2>
      <GatsbyImage
        alt={contentfulPage.title}
        image={contentfulPage.image.gatsbyImage}
      />
    </>
  )
}

export default AboutTemplate

export const Head = () => <Seo title="About" />
