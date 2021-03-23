import React from 'react'
import "tailwindcss/tailwind.css"
import Card from '../CompanyCard'
import PageNation from "../PageNation"

const index = () => {
  return (
    <div className="w-screen mt-40">
      <div className="w-full bg-green-100 p-20">
        <h2 className="text-gray-600 text-center text-4xl mb-8">ビジョンのマッチ度が高い企業一覧</h2>
        <ul className="flex justify-between flex-wrap">
          <Card />
          <Card />
          <Card />
        </ul>
      </div>
      <div className="w-full bg-white p-20">
        <h2 className="text-gray-600 text-center text-4xl mb-8">ビジョンを掲げる厳選企業一覧</h2>
        <ul className="flex justify-between flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
        <PageNation></PageNation>
      </div>
    </div>
  )
}

export default index
