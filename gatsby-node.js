/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)


exports.createPages = async ({ graphql, actions, getNode }) => {
  const { createPage } = actions
  const result = await graphql(`
query MyQuery {
  allFile(filter: {extension: {eq: "json"}}) {
    edges {
      node {
        fields {
          slug
        }
      }
    }
  }
}
  `)
    if (result.errors) {
        reporter.panicOnBuild(
            `There was an error loading your blog posts`,
            result.errors
        )
        return
    }
    const posts = result.data.allFile.edges

 //   console.log(result);
    if (posts.length > 0) {
        posts.forEach(({ node, getNode }) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve(`./src/templates/blog-post.js`),
                context: {
                    // Data passed to context is available
                    // in page queries as GraphQL variables.
                    slug: node.fields.slug,
                },
            })
        })
    }
}
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
if (node.internal.mediaType === 'application/json') {
//console.log(node)
    const value = createFilePath({ node, getNode})
     createNodeField({
      node,
      name: `slug`,
      value,
    })
  }

};