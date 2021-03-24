import React from 'react'

const headerWrapper = ({children, transparent, shadow}) => {
  const option = {background: "", shadow: ""}
  if(transparent){
    option.background = "transparent"
  } else {
    option.background = "bg-white"
  }
  if(shadow){
    option.shadow = "shadow"
  }
  console.log(option)
  return (
    <header className={`${option.background} ${option.shadow} w-screen h-20 flex items-center py-0 px-8 z-10 fixed top-0 left-0`}>
      {children}
    </header>
  )
}

export default headerWrapper
