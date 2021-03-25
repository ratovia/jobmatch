const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: "JobMatch",
    description: "ビジョンで企業を探せるサイトです",
    author: "ratovia"
  },
  
  plugins: [
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.API_KEY,
        serviceId: 'jobmatch',
        apis: [
          {
            endpoint: "company",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-use-query-params",
    }
  ],
}
