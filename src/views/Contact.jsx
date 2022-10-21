import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import Input from "../components/Input"
import { Discord, Github, Instagram, Linkedin, Mail, Telegram, Youtube, Loader } from "../icons"


function Contact() {

  const [res, setRes] = useState()
  const [messageStatus, setMessageStatus] = useState(false)
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_2jyhvsr', 'template_7lbl6im', formRef.current, 'zxOfi-RRc6UPCfhTF')
      .then((result) => {
        setRes({ status: true, msg: "Mail başarıyla gönderildi." })
      }, (error) => {
        setRes({ status: false, msg: "Mail gönderilirken bir sorunla karşılaşıldı." })
      });
  }


  const loadingContact = () => {
    setMessageStatus(true)
    setTimeout(() => {
      setMessageStatus(false)
    }, 3000)

  }
  return (
    <div className='h-screen w-full'>
      <h1 className='linear-text font-medium text-3xl md:text-5xl text-center'>Contact <span className='text-primary-200'>Me</span></h1>


      {
        res && (
          res.status ?
            messageStatus === true ?
              <div className='flex items-center justify-start gap-2 text-linear-default'>
                <Loader color="#ffff" className='animate-spin' />
                <span>Sending Message...</span>
              </div>
              :
              <div className='bg-green-500 flex justify-center items-center mx-auto  text-white px-6 py-2 rounded w-72 mt-2 sm:mt-5'>
                {res.msg}
              </div>
            :
            messageStatus === true ?
              <div className='flex items-center justify-start gap-2 text-linear-default'>
                <Loader color="#ffff" className='animate-spin text-white' />
                <span>Sending Message...</span>
              </div> :
              <div className='bg-red-600 mx-auto  text-white px-6 py-2 flex justify-center items-center rounded w-72 mt-2 sm:mt-5'>
                {res.msg}
              </div>
        )
      }

      <div className='flex sm:flex-row sm:items-start flex-col justify-center gap-24 items-center mt-8 sm:mt-24'>

        <form className='flex flex-col gap-7 items-start' ref={formRef} onSubmit={handleSubmit}>

          <Input label="Name" name="user_name" />

          <Input label="E-mail" name="email" />


          <label className="relative transition-all w-72 text-white flex bg-transparent border border-linear-default rounded-sm focus-within:border-primary-200">

            <textarea name="message" required={true} className="px-2 bg-transparent outline-none text-xs w-full h-[248px] pt-5 peer" ></textarea>

            <small className="absolute top-[20px] left-[9px] cursor-text pointer-events-none text-xs text-linear-default -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">Message</small>

          </label>


          <button type='submit' className='border border-linear-default px-7 py-2 text-linear-default transition-all hover:text-white hover:bg-primary-200 hover:border-primary-200 rounded-sm'>Send</button>

        </form>

        <div className='flex flex-col items-start gap-12'>

          <a href='mailto:poyrazavsever@gmail.com' className='flex items-start gap-x-3'>
            <Mail className="text-linear-default w-7 h-7 mt-1" />

            <div>
              <h5 className='text-linear-default font-semibold text-xl'>Mail</h5>
              <p className='text-white text-sm'>poyrazavsever@gmail.com</p>
            </div>
          </a>

          <a href='mailto:poyrazavsever@gmail.com' className='flex items-start gap-x-3'>
            <Discord className="text-linear-default w-7 h-7 mt-1" />

            <div>
              <h5 className='text-linear-default font-semibold text-xl'>Discord</h5>
              <p className='text-white text-sm'>poyraz#1001</p>
            </div>
          </a>

          <a href='mailto:poyrazavsever@gmail.com' className='flex items-start gap-x-3'>
            <Telegram className="text-linear-default w-7 h-7 mt-1" />

            <div>
              <h5 className='text-linear-default font-semibold text-xl'>Telegram</h5>
              <p className='text-white text-sm'>@Pavsever</p>
            </div>
          </a>

        </div>

      </div>

      <footer className='mt-24 text-center'>
        <p className="text-lg text-primary-default font-medium">My <span className='text-linear-100'>Social Media</span></p>

        <div className='text-linear-default text-xl mt-3 flex items-center justify-center gap-5'>

          <a href="https://www.youtube.com" target="_blank">
            <Github />
          </a>

          <a href="https://www.youtube.com" target="_blank">
            <Instagram />
          </a>

          <a href="https://www.youtube.com" target="_blank">
            <Linkedin />
          </a>

          <a href="https://www.youtube.com" target="_blank">
            <Youtube />
          </a>

        </div>

        <p className='text-xs text-linear-200 font-medium mt-8'>Copyright © 2022 All Rights Reserved.</p>
      </footer>

    </div>
  )
}

export default Contact