/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  response.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
