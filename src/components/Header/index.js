import React from 'react'
import "tailwindcss/tailwind.css"

const index = () => {
  return (
    <header className="w-screen h-20 flex items-center py-0 px-8 bg-transparent z-1 fixed inset-x-0">
      <div className="flex justify-around items-center">
        <h1 className="text-3xl  text-white">JobMatch</h1>
      </div>
      <nav className="ml-auto flex justify-around items-center text-xl text-white">
        <div>item1</div>
        <div>item2</div>
        <div>item3</div>
        <div>item4</div>
      </nav>
    </header>
  )
}

export default index
