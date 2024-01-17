import * as React from "react"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { useStaticQuery, graphql } from "gatsby"
import "./template.css"

const ContactTemplate = contentfulPage => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulLinks {
        edges {
          node {
            title
            url
          }
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <title>Contact page</title>
        <meta name="description" content="Description of home" />
      </Helmet>

      <div className="contact-template-container">
        <div className="contact-heading">
          <h2>{contentfulPage.title}</h2>
          <ul>{data.allContentfulLinks.edges.map((edge, index) => {
            return (
                <li className="link" key={index}>
                    <a href={edge.node.url}>{edge.node.title}</a>
                </li>
            )
          })}</ul>
        </div>
        {/* <GatsbyImage
        alt={contentfulPage.title}
        image={contentfulPage.image.gatsbyImage}
      />
        <div className="contact-template-content">
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
        </div> */}
      </div>
      <Seo title="Contact" />
    </>
  )
}

export default ContactTemplate
