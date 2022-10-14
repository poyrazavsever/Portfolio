import React from 'react'
import {Link} from "react-router-dom"

function LeftHome() {
  return (
    <>
        <div className='flex max-w-sm flex-col items-start gap-y-4 w-3/4'>
          <h1 className='linear-text font-medium text-3xl pb-1 sm:text-5xl'>Poyraz Avsever</h1>
          <h4 className='linear-text font-medium text-sm sm:text-base lg:text-xl'>& Front-end Developer</h4>
          <p className='text-white font-light text-xs sm:text-sm lg:text-base'>A developer based in Turkey. A Front-End developer. Always eager to learn something new, but also lazy. His computer is his best friend and companion. Do you want to know him?</p>
          <Link to="/about" className='rounded-sm px-5 py-2 bg-primary-default text-white transition-all duration-200 hover:bg-gradient-none hover:bg-primary-200 text-xs sm:text-sm lg:text-base'>More</Link>
        </div>
    </>
  )
}

export default LeftHome