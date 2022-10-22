import React from 'react'
import { NavLink } from "react-router-dom"
import {useSelector} from "react-redux"

function LeftHome() {

  const count = useSelector((state) => state.counter.language)

  return (
    <>
      <div className='flex max-w-sm flex-col items-start gap-y-4 w-3/4'>
        <h1 className='linear-text font-medium text-3xl pb-1 sm:text-5xl dark:text-primary-200'>Poyraz Avsever</h1>

        <h4 className='linear-text font-medium text-sm sm:text-base lg:text-xl dark:text-primary-200'>& Front-end Developer</h4>

        <p className='text-white font-light text-xs sm:text-sm dark:text-black dark:font-semibold'>{count === "en" ? "A developer based in Turkey. A Front-End developer. Always eager to learn something new, but also lazy. His computer is his best friend and companion. Do you want to know him?" : "Türkiye merkezli bir geliştirici. Bir Front-end geliştiricisi. Her zaman yeni bir şeyler öğrenmeye hevesli ama aynı zamanda tembel. Bilgisayarı onun en iyi arkadaşı ve yoldaşı. Onu tanımak istiyor musun?" }</p>

        <div className='flex items-center justify-center gap-4'>

          <a href="#about" className='rounded-sm px-5 py-2 bg-primary-default text-white transition-all duration-200 hover:bg-gradient-none hover:bg-primary-200 text-xs sm:text-sm'>{count === "en" ? "Get to know him" : "Onu Tanı"}</a>

          <a href="#contact" className='rounded-sm px-5 py-2 bg-primary-default text-white transition-all duration-200 hover:bg-gradient-none hover:bg-primary-200 text-xs sm:text-sm'>{count === "en" ? "Contact Me" : "İletişim"}</a>
          
        </div>
      </div>
    </>
  )
}

export default LeftHome