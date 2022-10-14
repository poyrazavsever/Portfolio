import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import classNames from 'classnames'

function Menu() {

  const [photo, setPhoto] = useState(true)

  return (
    <div className='flex flex-col md:flex-row justify-around items-center gap-12'>

      <div className='flex flex-col items-start text-xs md:text-base gap-y-7 font-semibold border-l border-primary-200 text-linear-default'>

        <NavLink to="whoami" onClick={() => setPhoto(false)} end={true} className={({ isActive }) => classNames({
          "aboutbtn": true,
          "border-linear-200": isActive
        })}>Who Am I?</NavLink>

        <NavLink to="started" onClick={() => setPhoto(false)} end={true} className={({ isActive }) => classNames({
          "aboutbtn": true,
          "border-linear-default": isActive
        })}>How I started software?</NavLink>

        <NavLink to="purpose" onClick={() => setPhoto(false)} end={true} className={({ isActive }) => classNames({
          "aboutbtn": true,
          "border-linear-default": isActive
        })}>What is my purpose?</NavLink>

        <NavLink to="whysoftware" onClick={() => setPhoto(false)} end={true} className={({ isActive }) => classNames({
          "aboutbtn": true,
          "border-linear-default": isActive
        })}>Why software?</NavLink>

        <NavLink to="learn" onClick={() => setPhoto(false)} end={true} className={({ isActive }) => classNames({
          "aboutbtn": true,
          "border-linear-default": isActive
        })}>How I Learn</NavLink>

      </div>

      {photo ? <p className='abouttext'>A developer based in Turkey. A Front-End developer. Always eager to learn something new, but also lazy. His computer is his best friend and companion. Do you want to know him?</p> : ""}

    </div>
  )
}

export default Menu