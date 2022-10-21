import React from 'react'
import { Helmet } from "react-helmet"
import LeftHome from './leftHome'
import CircleSoftware from "./circleSoftware"
import About from '../About/index'
import Portfolio from "../Portfolio"
import Contact from '../Contact'

function Home() {
  return (
    <>
      <Helmet>
        <title>Poyraz Avsever · Front-end Developer · UI/UX Designer </title>
      </Helmet>

      <div className='w-full h-screen container flex flex-col md:flex-row justify-center  md:justify-around items-center gap-8'>
        <LeftHome /> 
        <CircleSoftware />
      </div>

      <About />

      <Portfolio />

      <Contact />


    </>
  )
}

export default Home