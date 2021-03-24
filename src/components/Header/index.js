import React from 'react'
import "tailwindcss/tailwind.css"
import { Link } from 'gatsby';
import HeaderWrapper from "./headerWrapper"
const index = ({transparent, shadow}) => {
  return (
    <HeaderWrapper transparent={transparent} shadow={shadow}>
      <div className="flex justify-around items-center">
        <h1 className="text-3xl text-gray-600">JobMatch</h1>
      </div>
      <nav className="ml-auto flex justify-around items-center text-xl text-gray-600 divide-x divide-gray-600">
        <Link to="/" className="px-8">キーワードで探す</Link>
        <Link to="/company" className="px-8">企業一覧</Link>
        <Link to="https://github.com/ratovia/jobmatch" className="px-8">Github</Link>
      </nav>
    </HeaderWrapper>
  )
}

export default index
