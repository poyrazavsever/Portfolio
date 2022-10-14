import React from 'react'
import { NavLink } from "react-router-dom"
import classNames from 'classnames'

function Menu() {

  return (
    <div className='flex flex-col md:flex-row justify-around items-start gap-12'>

      <div className='flex flex-col items-start text-xs md:text-base gap-y-7 font-semibold border-l border-primary-200 text-linear-default'>

        <NavLink to="" end={true} className={({ isActive }) => classNames({
          "aboutbtn": true,
          "border-linear-200 border-l-2": isActive
        })}>Who Am I?</NavLink>

        <NavLink to="started" end={true} className={({ isActive }) => classNames({
          "aboutbtn": true,
          "border-linear-default border-l-2": isActive
        })}>How I started software?</NavLink>

        <NavLink to="purpose" end={true} className={({ isActive }) => classNames({
          "aboutbtn": true,
          "border-linear-default border-l-2": isActive
        })}>What is my purpose?</NavLink>

        <NavLink to="whysoftware" end={true} className={({ isActive }) => classNames({
          "aboutbtn": true,
          "border-linear-default border-l-2": isActive
        })}>Why software?</NavLink>

        <NavLink to="learn" end={true} className={({ isActive }) => classNames({
          "aboutbtn": true,
          "border-linear-default border-l-2": isActive
        })}>How I Learn</NavLink>

      </div>



    </div>
  )
}

export default Menu