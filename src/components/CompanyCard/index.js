import React from 'react'
import "tailwindcss/tailwind.css"
import image from "../../../static/road.jpg"

const index = () => {
  return (
    <li className="w-1/3 bg-white flex-basis-3 mb-8 shadow-lg">
      <img className="w-full h-auto" src={image} alt="株式会社SmallStack"></img>
      <div className="p-4">
        <h3 className="my-2 text-gray-600 text-xl bold">毎日の積み重ねで未来を作る</h3>
        <h4 className="my-2 text-gray-600 text-base">株式会社SmallStack</h4>
        <ul>
          <li className="inline-block bg-blue-400 p-2 rounded-2xl min-w-20">
            <p className="text-sm text-white">エンジニア</p>
          </li>
        </ul>
      </div>
    </li>
  )
}

export default index
