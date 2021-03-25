const path = require("path")
const createPaginatedPages = require('gatsby-paginate')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
    query MyQuery {
      allMicrocmsCompany {
        edges {
          node {
            name
            url
            createdAt(locale: "ja", formatString: "YYYY/MM/DD")
            vision
            image {
              url
            }
            companyId
            tag {
              name
            }
          }
        }
        pageInfo {
          currentPage
          hasNextPage
          hasPreviousPage
          itemCount
          pageCount
          perPage
          totalCount
        }
      }
    }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const { edges } = result.data.allMicrocmsCompany

  createPaginatedPages({
    edges: edges,
    createPage: createPage,
    pageTemplate: './src/templates/company.js',
    pageLength: 9,
    pathPrefix: 'company',
  })
}