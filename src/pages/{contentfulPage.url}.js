import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import HomeTemplate from "../templates/home-template"
import PortfolioTemplate from "../templates/portfolio-template"
import AboutTemplate from "../templates/about-template"
import ContactTemplate from "../templates/contact-template"

const Page = props => {
  const { data } = props
  const { contentfulPage } = data
  const getTemplate = contentfulPage => {
    switch (contentfulPage.template) {
      case "home":
        return <HomeTemplate {...contentfulPage} />
      case "portfolio":
        return <PortfolioTemplate {...contentfulPage} />
      case "about":
        return <AboutTemplate {...contentfulPage} />
      case "contact":
        return <ContactTemplate {...contentfulPage} />
      default:
        return <HomeTemplate {...contentfulPage} />
    }
  }
  return <Layout>{getTemplate(contentfulPage)}</Layout>
}

export const data = graphql`
  query pageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      title
      url
      image {
        gatsbyImage(width: 1000)
      }
      content {
        raw
      }
      template
    }
  }
`
export default Page
