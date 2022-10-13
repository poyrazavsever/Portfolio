import React from 'react'
import { Helmet } from "react-helmet"
import LeftHome from './leftHome'
import CircleSoftware from "./circleSoftware"

function Home() {
  return (
    <>
      <Helmet>
        <title>Poyraz Avsever · Front-end Developer · UI/UX Designer </title>
      </Helmet>

      <div className='h-screen w-full flex flex-col justify-center items-center gap-8'>
        <LeftHome /> 
        <CircleSoftware />
      </div>



    </>
  )
}

export default Home