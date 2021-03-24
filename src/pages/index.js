import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"

export default function Home() {
  return (
    <div>
      <Header transparent={true} shadow={false}></Header>
      <Hero></Hero>
    </div>
  )
}
