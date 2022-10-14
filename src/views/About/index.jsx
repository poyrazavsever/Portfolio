import React from 'react'
import Menu from "./menu"
import { Link, Outlet } from "react-router-dom"

function About() {
  return (
    <div className='flex flex-col mx-auto h-screen w-full justify-center items-center gap-12 md:gap-24'>

      <h1 className='linear-text font-medium text-3xl md:text-5xl text-center'>About <span className='text-primary-200'>Me</span></h1>

      <div className='md:flex md:flex-row md:items-start md:gap-12'>
        <Menu />
        <Outlet />
      </div>


      <Link to="/portfolio" className='rounded-sm px-5 py-2 bg-primary-default text-white transition-all duration-200 hover:bg-gradient-none hover:bg-primary-200 text-xs sm:text-sm lg:text-base'>View my work</Link> 

    </div>

  )
}

export default About