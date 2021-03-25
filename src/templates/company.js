import React from 'react'
import Header from "../components/Header"
import Company from "../components/Company"
import Footer from "../components/Footer"

const company = ({ pageContext }) => {
  const { group, index, pageCount } = pageContext
  return (
    <div>
      <Header transparent={false} shadow={true}></Header>
      <Company group={group} index={index} pageCount={pageCount}></Company>
      <Footer></Footer>
    </div>
  )
}

export default company