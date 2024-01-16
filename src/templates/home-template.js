import * as React from "react"
// import SEO from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import "./template.css"

const HomeTemplate = contentfulPage => {
  return (
    <>
      <Helmet>
        <title>Home page</title>
        <meta name="description" content="Description of home" />
      </Helmet>

      {/* <h2>{contentfulPage.title}</h2> */}

      <div className="home-template-wrapper">
        <GatsbyImage
          className="background-image"
          alt={contentfulPage.title}
          image={contentfulPage.image.gatsbyImage}
        />

        <div className="content-rich">
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
    </>
  )
}

export default HomeTemplate

// export const Head = () => <SEO title="Home" />
