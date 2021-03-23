import React from 'react'
import {graphql} from "gatsby"
import Header from "../components/Header"
import Company from "../components/Company"
import Footer from "../components/Footer"
const company = ({data}) => {
  return (
    <div>
      <Header></Header>
      <Company props={data}></Company>
      <Footer></Footer>
    </div>
  )
}

export default company

export const query = graphql`
query MyQuery {
  allMicrocmsCompany {
    edges {
      node {
        name
        url
        createdAt(locale: "ja", formatString: "YYYY/MM/DD")
        vision
        tag {
          name
        }
        image {
          url
        }
        companyId
      }
    }
  }
}
`