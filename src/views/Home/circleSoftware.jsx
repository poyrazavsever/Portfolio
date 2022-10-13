import React from 'react'
import { Bootstrap, Tailwind, ReactJS, Redux, Javascript, Html, Sass, Css, Flask, Figma, Photoshop, Python, Firebase, Git, } from "../../icons"

function CircleSoftware() {
  return (
    <div className='flex flex-col gap-y-5'>
      <div className='w-[224px] h-[224px] my-12 rounded-full transition-all duration-200 flex items-center justify-center relative animate-[wiggle_10s_ease-in-out_infinite] hover:animate-pulse'>

        <Bootstrap
          className="circleTranslate top-0 left-1" />

        <Tailwind
          className="circleTranslate -top-6 left-12" />

        <ReactJS
          className="circleTranslate -top-10 left-15" />

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
        className="circleTranslate -bottom-5" />

        <Figma 
        className="circleTranslate -bottom-3 right-10" />

        <Photoshop 
        className="circleTranslate bottom-4 right-0" />

        <Python 
        className="circleTranslate bottom-14 -right-6" />

        <Firebase 
        className="circleTranslate -right-8" />

        <Git 
        className="circleTranslate bottom-36 -right-6" />

      </div>

      <div className='w-full h-3 bg-primary-default rounded-l-xl rounded-r-xl opacity-75 blur-sm'></div>
    </div>
  )
}

export default CircleSoftware