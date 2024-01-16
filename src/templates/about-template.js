import * as React from "react"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import "./template.css"

const AboutTemplate = contentfulPage => {
  return (
    <>
      <Helmet>
        <title>About page</title>
        <meta name="description" content="Description of about" />
      </Helmet>
      <div className="about-heading">
          <h2>{contentfulPage.title}</h2>
          </div>
      <div className="about-template-container">

          <div className="about-template-content">
            {renderRichText(contentfulPage.content, {
              renderNode: {
                "embedded-asset-block": node => (
                  <GatsbyImage
                    alt={node.data.target.title}
                    image={node.data.target.gatsbyImageData}
                  />
                ),
              },
            })}
          </div>

          <div className="about-template-img">
            <GatsbyImage
              alt={contentfulPage.title}
              image={contentfulPage.image.gatsbyImage}
            />
          </div>

      </div>

      <Seo title="About" />
    </>
  )
}

export default AboutTemplate
