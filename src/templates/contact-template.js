import * as React from "react"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"

const ContactTemplate = contentfulPage => {
  return (
    <>
      <Helmet>
        <title>Contact page</title>
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

export default ContactTemplate

export const Head = () => <Seo title="Contact" />
