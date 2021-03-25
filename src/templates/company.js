import React from 'react'
import Header from "../components/Header"
import Company from "../components/Company"
import Footer from "../components/Footer"
import {graphql} from "gatsby"
const company = ({ pageContext , data }) => {
  const { group, index, pageCount } = pageContext
  return (
    <div>
      <Header transparent={false} shadow={true}></Header>
      <Company edges={data.allMicrocmsCompany.edges} group={group} index={index} pageCount={pageCount}></Company>
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
          image {
            url
          }
          companyId
          tag {
            name
          }
        }
      }
    }
  }
`