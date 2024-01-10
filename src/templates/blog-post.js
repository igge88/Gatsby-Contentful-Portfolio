import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Img from 'gatsby-image';

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      featuredImage {
        gatsbyImage(width: 350)
      }
    }
  }
`

const BlogPost = props => {
  return (
    <Layout>
      <SEO title={props.data.contentfulBlogPost.title} />
      <Link to="/blog/">Visit the Blog Page</Link>
      <div className="content">
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <span className="meta">
          Posted on {props.data.contentfulBlogPost.publishedDate}
        </span>

        {props.data.contentfulBlogPost.featuredImage && (
          <GatsbyImage
            className="featured"
            image={props.data.contentfulBlogPost.featuredImage.gatsbyImage}
            alt={props.data.contentfulBlogPost.title}
          />
        )}

        {/* {documentToReactComponents(props.data.contentfulBlogPost.body.raw)} */}
      </div>
    </Layout>
  )
}

export default BlogPost
