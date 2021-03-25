import React from 'react'
import {Link} from 'gatsby'

const PREFIX = 'company'

const previousLink = (index, pageCount) => {
  const previousUrl = index - 1 === 1 ? `/${PREFIX}` : `/${PREFIX}/` + (index - 1).toString()
  if(index === 1) {
    return (
      <li className="bg-gray-200 inline-block text-gray-500 text-sm py-4 px-6 rounded-l-full">prev</li>
    )
  } else {
    return (
      <Link to={previousUrl}><li className="bg-gray-200 hover:bg-blue-400 hover:text-white inline-block text-gray-500 text-sm py-4 px-6 rounded-l-full">prev</li></Link>
    )
  }
}

const nextLink = (index, pageCount) => {
  const nextUrl = `/${PREFIX}/` + (index + 1).toString()
  if(index === pageCount) {
    return (
      <li className="bg-gray-200 inline-block text-gray-500 text-sm py-4 px-6 rounded-r-full">next</li>
    )
  } else {
    return (
      <Link to={nextUrl}><li className="bg-gray-200 hover:bg-blue-400 hover:text-white inline-block text-gray-500 text-sm py-4 px-6 rounded-r-full">next</li></Link>
    )
  }
}

const numberLink = (index, pageCount, current) => {
  const prev = current <= index && (current - 1) !== 0 && (index - (current - 1)) < 5 ? true : false
  const next = current >= index && (current + 1) <= pageCount && ((current + 1) - index) < 5 ? true : false
  return (
    <>
      {prev && numberLink(index, pageCount, current - 1)}
      {
        (() => {
          const isActiveStyle = (current === index ) ? "bg-blue-400 text-white" : "bg-gray-200 text-gray-500"
          const linkTo = (current === 1) ? `/${PREFIX}` : `/${PREFIX}/${current}`
          return (
            <Link to={linkTo}>
              <li className={`${isActiveStyle} hover:bg-blue-400 hover:text-white inline-block text-sm p-4`}>
                {current}
              </li>
            </Link>
          )
        })()
      }
      {next && numberLink(index, pageCount, current + 1)}
    </>
  )
}

const index = ({index, pageCount}) => {
  return (
    <div className="w-full flex justify-center items-center my-20">
      <ul>
        {previousLink(index, pageCount)}
        {numberLink(index, pageCount, index)}
        {nextLink(index, pageCount)}
      </ul>
    </div>
  )
}

export default index
