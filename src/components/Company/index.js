import React from 'react'
import "tailwindcss/tailwind.css"
import Card from '../CompanyCard'
import PageNation from "../PageNation"
import { useQueryParam, StringParam } from "use-query-params";

const Index = ({group, index, pageCount, edges}) => {
  const [keyword, setKeyword] = useQueryParam("q", StringParam);
  const filterData = edges.filter(({node}) => {
    return node.vision.search(keyword) >= 0
  })
  return (
    <div className="w-screen mt-40">
      <div className="w-full bg-green-100 p-20">
        <h2 className="text-gray-600 text-center text-4xl mb-8">ビジョンのマッチ度が高い企業一覧</h2>
        <ul className="flex justify-between flex-wrap">
          {filterData.slice(0,3).map((node) => {
            return (
              <li className="w-1/3 flex-basis-3 h-96 mb-8">
                <Card props={node} />
              </li>
            )
          })}
        </ul>
      </div>
      <div className="w-full bg-white p-20">
        <h2 className="text-gray-600 text-center text-4xl mb-8">ビジョンを掲げる厳選企業一覧</h2>
        <ul className="flex justify-between flex-wrap">
          {group.map((node) => {
            return (
              <li className="w-1/3 flex-basis-3 h-96 mb-8">
                <Card props={node} />
              </li>
            )
          })}
        </ul>
        <PageNation index={index} pageCount={pageCount}></PageNation>
      </div>
    </div>
  )
}

export default Index
