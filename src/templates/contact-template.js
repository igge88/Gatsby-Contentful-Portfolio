import * as React from "react"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import "./template.css"

const ContactTemplate = contentfulPage => {
  return (
    <>
      <Helmet>
        <title>Contact page</title>
        <meta name="description" content="Description of home" />
      </Helmet>

      <div className="contact-template-container">
        <div className="contact-heading">
        <h2>{contentfulPage.title}</h2>
        </div>
        {/* <GatsbyImage
        alt={contentfulPage.title}
        image={contentfulPage.image.gatsbyImage}
      /> */}
        <div className="contact-template-content">
          {renderRichText(contentfulPage.content, {
            /* Pass your rendering options here */
            renderNode: {
              // Define how different content types should be rendered
              "embedded-asset-block": node => (
                <GatsbyImage
                  alt={node.data.target.title}
                  image={node.data.target.gatsbyImageData}
                />
              ),
              // Add more renderings for other content types as needed
            },
          })}
        </div>
      </div>
      <Seo title="Contact" />
    </>
  )
}

export default ContactTemplate
