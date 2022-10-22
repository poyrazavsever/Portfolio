import React from 'react'
import Menu from "./menu"
import { Outlet } from "react-router-dom"
import {ShortLogo} from "../../icons"
import {useSelector} from "react-redux"

function About() {

  const count = useSelector((state) => state.counter.language)

  return (
    <div className='flex flex-col mx-auto h-screen w-full justify-center items-center gap-12 md:gap-24 relative mt-48 sm:mt-0' id='about'>

      <h1 className='linear-text font-medium text-3xl md:text-5xl text-center'>{count === "en" ? "About" : "Hakkımda"} <span className='text-primary-200'>{count === "en" ? "Me" : ""} </span></h1>

      <div className='md:flex md:flex-row md:items-start md:gap-32 z-10'>
        <Menu />
        <Outlet />
      </div>

      <ShortLogo 
      className="absolute right-32 top-[40%] scale-[5] z-0 opacity-10 blur-sm"/>

    </div>

  )
}

export default About