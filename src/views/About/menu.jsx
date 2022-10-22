import React from 'react'
import { NavLink } from "react-router-dom"
import classNames from 'classnames'
import {useSelector} from "react-redux"

function Menu() {

  const count = useSelector((state) => state.counter.language)

  return (
    <div className='flex flex-col md:flex-row justify-around items-start gap-12 mb-12'>

      <div className='w-full flex flex-col sm:items-start items-center justify-center text-xs md:text-base gap-y-7 font-semibold border-l border-primary-200 text-linear-default'>

        <NavLink to="" end={true} className={({ isActive }) => classNames({
          "aboutbtn": true,
          "border-linear-200 dark:border-slate-800 border-l-2": isActive
        })}>{count === "en" ? "Who Am I?" : "Ben Kimim?"}</NavLink>

        <NavLink to="started" end={true} className={({ isActive }) => classNames({
          "aboutbtn": true,
          "border-linear-default dark:border-slate-800 border-l-2": isActive
        })}>{count === "en" ? "How I started software?" : "Yazılıma nasıl başladım?"}</NavLink>

        <NavLink to="purpose" end={true} className={({ isActive }) => classNames({
          "aboutbtn": true,
          "border-linear-default dark:border-slate-800 border-l-2": isActive
        })}>{count === "en" ? "What is my purpose?" : "Amacım Ne?"}</NavLink>

        <NavLink to="whysoftware" end={true} className={({ isActive }) => classNames({
          "aboutbtn": true,
          "border-linear-default dark:border-slate-800 border-l-2": isActive
        })}>{count === "en" ? "Why software?" : "Neden Yazılım?"}</NavLink>

        <NavLink to="learn" end={true} className={({ isActive }) => classNames({
          "aboutbtn": true,
          "border-linear-default dark:border-slate-800 border-l-2": isActive
        })}>{count === "en" ? "How I Learn" : "Nasıl Öğrenirim?"}</NavLink>

      </div>



    </div>
  )
}

export default Menu