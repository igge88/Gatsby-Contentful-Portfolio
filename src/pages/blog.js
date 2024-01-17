import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
// import Img from "gatsby-image"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

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
              gatsbyImage(width: 1000)
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
    <Layout>
      <Seo title="Blog" />
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
    </Layout>
  )
}

export default Blog
