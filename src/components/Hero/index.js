import React from 'react'
import image from '../../../static/road.jpg'
const index = () => {
  return (
    <section className="w-screen h-screen relative">
      <img className="h-screen" src={image} alt="Hero"></img>
      <div className="absolute w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <h2 className="w-full text-4xl text-blue-500 font-bold text-center">ビジョンをもとに生きていく</h2>
        <p className="w-full text-xl text-gray-100 text-center">好きなビジョンをキーワードに日本の企業を探します。</p>
        <div className="border border-gray-400 my-8 w-full">
          <input type="text" className="w-full px-8 py-4 bg-gray-400 bg-opacity-50 outline-none text-gray-100 text-xl placeholder-gray-600" placeholder="(例) 未来"></input>
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 mx-auto text-white font-bold py-2 px-4 rounded">
          マッチを探す
        </button>
      </div>
    </section>
  )
}

export default index
