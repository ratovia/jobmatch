import React from 'react'
import image from '../../../static/road.jpg'
const index = () => {
  return (
    <section className="">
      <div className="w-screen h-screen fixed top-0 left-0 -z-10">
        <div className="h-screen overflow-hidden relative w-full">
          <div className="bg-hero-pattern bg-cover -left-1/2 w-screen min-w-full min-h-full absolute top-0 transform -translate-x-1/2 -z-10"></div>
        </div>
      </div>
      <div>
        <h2>ビジョンをもとに生きていく</h2>
        <p>好きなビジョンをキーワードに日本の企業を探すサイトです。</p>
      </div>
    </section>
  )
}

export default index
