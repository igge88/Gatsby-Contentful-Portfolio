// import * as React from "react"
// import SEO from "../components/seo"
// import { graphql, Link } from "gatsby"
// import Layout from "../components/layout"
// // import { Link } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"
// import { Helmet } from "react-helmet"
// import { renderRichText } from "gatsby-source-contentful/rich-text"

// const PortfolioTemplate = contentfulPage => {
//   return (
//     <>
//     <Helmet>
//         <title>Portfolio page</title>
//         <meta name="description" content="Description of home" />
//       </Helmet>

//       <h2>{contentfulPage.title}</h2>
//       <GatsbyImage
//         alt={contentfulPage.title}
//         image={contentfulPage.image.gatsbyImage}
//       />
//       <div>
//         {renderRichText(contentfulPage.content, {
//           /* Pass your rendering options here */
//           renderNode: {
//             // Define how different content types should be rendered
//             "embedded-asset-block": node => (
//               <GatsbyImage
//                 alt={node.data.target.title}
//                 image={node.data.target.gatsbyImageData}
//               />
//             ),
//             // Add more renderings for other content types as needed
//           },
//         })}
//       </div>
//     </>
//   )
// }

// export default PortfolioTemplate

// export const Head = () => <SEO title="Portfolio" />

// import React from "react"
// import { graphql, Link, useStaticQuery } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"
// import Layout from "../components/layout"
// import SEO from "../components/seo"

// const PortfolioPage = () => {
// const data = useStaticQuery(graphql`
// query {
//   allContentfulBlogPost {
//     edges {
//       node {
//         title
//         slug
//         excerpt {
//           excerpt
//         }
//         publishedDate(formatString: "mm-dd-yy")
//         featuredImage {
//           gatsbyImage(width: 400)
//         }
//         body {
//           raw
//         }
//       }
//     }
//   }
// }
// `)


//   return (
//     <Layout>
//       <SEO title={edge.node.title} />
//       <Link to="/blog/">Visit the Blog Page</Link>
//       <div className="content">
//         <h1>{edge.node.title}</h1>
//         <span className="meta">
//           Posted on {edge.node.publishedDate}
//         </span>

//         {edge.node.featuredImage && (
//           <GatsbyImage
//             className="featured"
//             image={edge.node.featuredImage.gatsbyImage}
//             alt={edge.node.title}
//           />
//         )}

//         {/* {documentToReactComponents(props.data.contentfulBlogPost.body.raw)} */}
//       </div>
//     </Layout>
//   )
// }

// export default PortfolioPage

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import SEO from "../components/seo"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { publishedDate: ASC }) {
        edges {
          node {
            title
            id
            slug
            publishedDate(formatString: "DD MMMM, YYYY")
            featuredImage {
              gatsbyImage(width: 300)
            }
            excerpt {
              childMarkdownRemark {
                excerpt(pruneLength: 150)
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO title="Blog" />
      <p>
        <Link to="/">Go back to the homepage</Link>
      </p>
      <ul className="posts">
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className="post" key={edge.node.id}>
              <h2>
                <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2>
              <div className="meta">
                <span>Posted on {edge.node.publishedDate}</span>
              </div>
              {edge.node.featuredImage && (
                <GatsbyImage
                  className="featured"
                  image={edge.node.featuredImage.gatsbyImage}
                  alt={edge.node.title}
                />
              )}
              <p className="excerpt">
                {edge.node.excerpt.childMarkdownRemark.excerpt}
              </p>
              <div className="button">
                <Link to={`/blog/${edge.node.slug}/`}>Read More</Link>
              </div>
            </li>
          )
        })}
      </ul>
      </>
  )
}

export default Blog
