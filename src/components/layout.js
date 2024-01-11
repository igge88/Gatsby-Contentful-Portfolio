import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import useNavigation from "../hooks/use-navigation"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"


const Layout = ({ children }) => {
  const navigation = useNavigation() // edges.node.title

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <>
    <Helmet>
        <meta name="author" content={data.site.siteMetadata.author}/>
    </Helmet>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="article"
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        {/* Navigation Menu */}
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {navigation.map(({ node }) => (
              <li
                key={node.id}
                style={{ display: "inline-block", marginRight: "10px" }}
              >
                <Link to={node.url}>{node.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <main>{children}</main>

        {/* <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer> */}
      </div>
      <Footer/>
    </>
  )
}

export default Layout
