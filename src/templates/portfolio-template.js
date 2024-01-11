import * as React from "react"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
// import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import { renderRichText } from "gatsby-source-contentful/rich-text"

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
      <div>
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
    </>
  )
}

export default PortfolioTemplate

export const Head = () => <SEO title="Portfolio" />
