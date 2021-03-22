import React from 'react'
import "tailwindcss/tailwind.css"
import { Link } from 'gatsby';

const index = () => {
  return (
    <header className="w-screen h-20 flex items-center py-0 px-8 bg-transparent z-10 fixed top-0 left-0">
      <div className="flex justify-around items-center">
        <h1 className="text-3xl text-gray-600">JobMatch</h1>
      </div>
      <nav className="ml-auto flex justify-around items-center text-xl text-gray-600 divide-x divide-gray-600">
        <Link to="/" className="px-8">キーワードで探す</Link>
        <Link to="/company" className="px-8">企業一覧</Link>
        <Link to="https://github.com/ratovia/jobmatch" className="px-8">Github</Link>
      </nav>
    </header>
  )
}

export default index
