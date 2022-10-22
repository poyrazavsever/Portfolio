import React from 'react'
import Carousel, { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { ArrowLeft, ArrowRight } from "../icons"
import { useSelector } from "react-redux"
import { works } from "../data"

function Portfolio() {

  const count = useSelector((state) => state.counter.language)

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center gap-36 mb-32' id='portfolio'>

      <h1 className='linear-text font-medium text-3xl md:text-5xl text-center'>{count === "en" ? "My" : "Çalışmalarım"} <span className='text-primary-200'>{count === "en" ? "Portfolio" : ""}</span></h1>


      <Carousel
        plugins={[
          'clickToChange',
          'infinite',
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3
            }
          },

          {
            resolve: arrowsPlugin,
            options: {
              arrowLeft: <button><ArrowLeft name="angle-double-left" className="text-5xl text-linear-default" /></button>,
              arrowLeftDisabled: <button><ArrowLeft name="angle-left" className="text-5xl text-primary-200" /></button>,
              arrowRight: <button><ArrowRight name="angle-double-right" className="text-5xl text-linear-default" /></button>,
              arrowRightDisabled: <button><ArrowRight name="angle-right" className="text-5xl text-primary-200" /></button>,
              addArrowClickHandler: true,
            }
          }
        ]}

        breakpoints={{
          640: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1
                }
              },

              {
                resolve: arrowsPlugin,
                options: {
                  arrowLeft: <button><ArrowLeft name="angle-double-left" className="text-5xl text-linear-default" /></button>,
                  arrowLeftDisabled: <button><ArrowLeft name="angle-left" className="text-5xl text-primary-200" /></button>,
                  arrowRight: <button><ArrowRight name="angle-double-right" className="text-5xl text-linear-default" /></button>,
                  arrowRightDisabled: <button><ArrowRight name="angle-right" className="text-5xl text-primary-200" /></button>,
                  addArrowClickHandler: true,
                }
              }
            ]
          },
          900: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2
                }
              },

              {
                resolve: arrowsPlugin,
                options: {
                  arrowLeft: <button><ArrowLeft name="angle-double-left" className="text-5xl text-linear-default" /></button>,
                  arrowLeftDisabled: <button><ArrowLeft name="angle-left" className="text-5xl text-primary-200" /></button>,
                  arrowRight: <button><ArrowRight name="angle-double-right" className="text-5xl text-linear-default" /></button>,
                  arrowRightDisabled: <button><ArrowRight name="angle-right" className="text-5xl text-primary-200" /></button>,
                  addArrowClickHandler: true,
                }
              }
            ]
          },

          1240: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3
                }
              },

              {
                resolve: arrowsPlugin,
                options: {
                  arrowLeft: <button><ArrowLeft name="angle-double-left" className="text-5xl text-linear-default" /></button>,
                  arrowLeftDisabled: <button><ArrowLeft name="angle-left" className="text-5xl text-primary-200" /></button>,
                  arrowRight: <button><ArrowRight name="angle-double-right" className="text-5xl text-linear-default" /></button>,
                  arrowRightDisabled: <button><ArrowRight name="angle-right" className="text-5xl text-primary-200" /></button>,
                  addArrowClickHandler: true,
                }
              }
            ]
          }
        }}
      >

        {works.map((work) => {
          return (
            <a href={work.link} key={work.imageSrc} target="_blank">
              <div className='w-80 h-48 border border-primary-200 rounde-sm'>
                <img src={work.imageSrc} alt="workJob" className='rounded-sm' />
              </div>
            </a>
          )

        })}



      </Carousel>

    </div>
  )
}

export default Portfolio