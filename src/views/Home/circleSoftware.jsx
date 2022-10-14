import React from 'react'
import { Bootstrap, Tailwind, ReactJS, Redux, Javascript, Html, Sass, Css, Flask, Figma, Photoshop, Python, Firebase, Git, } from "../../icons"

function CircleSoftware() {
  return (
    <div className='flex flex-col gap-y-5'>

      <div className='w-[224px] h-[224px] lg:w-[270px] lg:h-[270px] my-12 rounded-full transition-all duration-200 flex items-center justify-center relative animate-[wiggle_25s_ease-in-out_infinite]'>

        <Bootstrap
          className="circleTranslate top-0 left-1 lg:left-0" />

        <Tailwind
          className="circleTranslate -top-8 left-12 lg:left-14" />

        <ReactJS
          className="circleTranslate -top-12 left-15" />

        <Javascript
          className="circleTranslate top-[20%] -left-6" />

        <Html
          className="circleTranslate top-[40%] -left-8" />

        <Sass
          className="circleTranslate top-[60%] -left-5" />

        <Css
          className="circleTranslate top-[80%] left-0" />

        <Redux
          className="circleTranslate top-[92%] left-10" />

        <Flask 
        className="circleTranslate -bottom-5 lg:-bottom-9" />

        <Figma 
        className="circleTranslate -bottom-3 right-10 lg:right-14 lg:-bottom-6" />

        <Photoshop 
        className="circleTranslate bottom-4 right-0" />

        <Python 
        className="circleTranslate bottom-14 -right-6 lg:bottom-16" />

        <Firebase 
        className="circleTranslate -right-8 lg:bottom-32" />

        <Git 
        className="circleTranslate bottom-36 -right-6 lg:bottom-48 lg:-right-6" />

      </div>

      <div className='w-full h-3 bg-primary-default rounded-l-xl rounded-r-xl opacity-75 blur-sm'></div>
       
    </div>
  )
}

export default CircleSoftware