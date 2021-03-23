import React from 'react'
import "tailwindcss/tailwind.css"
// import image from "../../../static/road.jpg"

const index = ({props}) => {
  console.log(props)
  return (
    <div className="w-full h-full bg-white shadow-lg">
      <img className="w-full h-1/2" src={props.node.image.url} alt="株式会社SmallStack"></img>
      <div className="relative p-4 h-1/2">
        <h3 className="my-2 text-gray-600 text-xl bold">{props.node.vision}</h3>
        <h4 className="my-2 text-gray-400 text-base">{props.node.name}</h4>
        <ul className="absolute bottom-4">
          {props.node.tag && props.node.tag.map((tag) => {
            return (
              <li className="inline-block bg-blue-400 mr-1 p-2 rounded-2xl min-w-20">
                <p className="text-xs text-white">{tag.name}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default index
