import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import Input from "../components/Input"
import { Discord, Github, Instagram, Linkedin, Mail, Telegram, Youtube, Loader } from "../icons"
import {useSelector} from "react-redux"

function Contact() {

  const [res, setRes] = useState()
  const [messageStatus, setMessageStatus] = useState(false)
  const formRef = useRef();

  const count = useSelector((state) => state.counter.language)

  const loadingContact = () => {
    setMessageStatus(true)
    setTimeout(() => {
      setMessageStatus(false)
    }, 3000)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_2jyhvsr', 'template_7lbl6im', formRef.current, 'zxOfi-RRc6UPCfhTF')
      .then((result) => {
        setRes({ status: true, msg: "Mail başarıyla gönderildi." })
      }, (error) => {
        setRes({ status: false, msg: "Mail gönderilirken bir sorunla karşılaşıldı." })
      });
    loadingContact()
  }

  return (

    <div className='h-screen w-full'>

      <h1 className='linear-text font-medium text-3xl md:text-5xl text-center' id='contact'>{count === "en" ? "Contact" : "İletişim"}<span className='text-primary-200'>{count === "en" ? " Me" : ""}</span></h1>


      {
        res && (
          res.status ?
            messageStatus === true ?
              <div className='flex w-full items-center justify-center gap-2 mx-auto text-linear-default mt-3'>
                <Loader className='animate-spin w-6 h-6' />
                <span>{count === "en" ? "Sending Message..." : "Mesaj Gönderiliyor..."} </span>
              </div>
              :
              <div className='bg-green-600 flex justify-center items-center mx-auto  text-white px-6 py-2 rounded w-72 mt-5 sm:mt-9'>
                {res.msg}
              </div>
            :
            messageStatus === true ?
              <div className='flex w-full items-center justify-center gap-2 mx-auto text-linear-default mt-3'>
                <Loader className='animate-spin text-white w-6 h-6' />
                <span>{count === "en" ? "Sending Message..." : "Mesaj Gönderiliyor..."}</span>
              </div> :
              <div className='bg-red-600 mx-auto  text-white px-6 py-2 flex justify-center items-center rounded w-72 mt-5 sm:mt-9'>
                {res.msg}
              </div>
        )
      }

      <div className='flex sm:flex-row sm:items-start flex-col justify-center gap-24 items-center mt-8'>

        <form className='flex flex-col gap-7 items-start' ref={formRef} onSubmit={handleSubmit}>

          <Input label={count === "en" ? "Your Name" : "İsminiz"} name="user_name" />

          <Input label={count === "en" ? "Your E-mail" : "E-posta"} name="email" />


          <label className="relative transition-all w-72 text-white dark:font-medium dark:text-black flex bg-transparent border border-linear-default dark:border-primary-200 dark:focus-within:border-linear-200 rounded-sm focus-within:border-primary-200">

            <textarea name="message" required={true} className="px-2 bg-transparent outline-none text-xs w-full h-[248px] pt-5 peer" ></textarea>

            <small className="absolute top-[20px] left-[9px] cursor-text pointer-events-none text-xs text-linear-default -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5 dark:text-primary-200 font-medium">{count === "en" ? "Your Message" : "Mesajınız"}</small>

          </label>


          <button type='submit' className='border border-linear-default px-7 py-2 text-linear-default transition-all dark:border-primary-200 dark:text-primary-200 hover:text-white hover:bg-primary-200 hover:border-primary-200 rounded-sm'>
          {count === "en" ? "Send" : "Gönder"}
          </button>

        </form>

        <div className='flex flex-col items-start gap-12'>

          <a href='mailto:poyrazavsever@gmail.com' className='flex items-start gap-x-3'>
            <Mail className="text-linear-default w-7 h-7 mt-1 dark:text-primary-200" />

            <div>
              <h5 className='text-linear-default dark:text-primary-200 font-semibold text-xl'>{count === "en" ? "Mail" : "E-posta"}</h5>
              <p className='text-white text-sm dark:text-black font-medium'>poyrazavsever@gmail.com</p>
            </div>
          </a>

          <a href='mailto:poyrazavsever@gmail.com' className='flex items-start gap-x-3'>
            <Discord className="text-linear-default w-7 h-7 mt-1 dark:text-primary-200" />

            <div>
              <h5 className='text-linear-default font-semibold text-xl dark:text-primary-200'>Discord</h5>
              <p className='text-white text-sm dark:text-black font-medium'>poyraz#1001</p>
            </div>
          </a>

          <a href='mailto:poyrazavsever@gmail.com' className='flex items-start gap-x-3'>
            <Telegram className="text-linear-default w-7 h-7 mt-1 dark:text-primary-200" />

            <div>
              <h5 className='text-linear-default font-semibold text-xl dark:text-primary-200'>Telegram</h5>
              <p className='text-white text-sm dark:text-black font-medium'>@Pavsever</p>
            </div>
          </a>

        </div>

      </div>

      <footer className='mt-12 pb-12 sm:pb-0 text-center'>
        <p className="text-lg text-primary-default font-medium">{count === "en" ? "My" : ""} <span className='text-linear-100'>{count === "en" ? "Social Media" : "Sosyal Medya"}</span></p>

        <div className='text-primary-200 text-xl mt-3 flex items-center justify-center gap-5'>

          <a href="https://www.youtube.com" target="_blank">
            <Github className="text-2xl"/>
          </a>

          <a href='https://www.youtube.com' className='w-5 h-5 rounded-full flex justify-center items-center bg-primary-200' target="_blank">
            <Instagram className='text-bg text-sm dark:text-slate-300' />
          </a>


          <a href="https://www.youtube.com" target="_blank">
            <Linkedin />
          </a>

          <a href="https://www.youtube.com" target="_blank">
            <Youtube />
          </a>

        </div>

        <p className='text-xs text-linear-200 font-medium mt-8'>{count === "en" ? "Copyright © 2022 All Rights Reserved." : "Tüm Hakları Saklıdır. © 2022."}</p>
      </footer>

    </div>

  )
}

export default Contact