import React from 'react'
import { useState, useEffect } from 'react'
import img1 from '../assets/planit.svg'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import Marquee from "react-fast-marquee";
import './Landing.css'

function Landing() {
  const [count, setCount] = useState(0)
  const [autoslide, setAutoSlide] = useState(true)
  const [interval, setInterval] = useState(3000)
  const place = new String('LADAKH.');  
  const place1 = place.substring(0, place.length-1)

  useEffect(() =>{
    if(!autoslide) return
    const slideInterval = setInterval(nextSlide, interval)
    return ()=> clearInterval(slideInterval)
  }, [])
      const slides =[
        {
          url: 'https://images.unsplash.com/photo-1573106341805-7db29def6c9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
         },
         {
          url: 'https://images.unsplash.com/photo-1592548890095-cd2a7aeca5ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
         },
         {
          url: 'https://images.unsplash.com/photo-1562979314-bee7453e911c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
         },
         {
          url: 'https://images.unsplash.com/photo-1709338573277-c161cbf8702c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
         },
         {
          url: 'https://images.unsplash.com/photo-1590999227544-affea8fb69ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
         }
      ]
      const [currIndex, setCurrIndex] = useState(0)

      const prevSlide =() =>{
        const isFirstSlide = currIndex === 0 ;
        const newIndex = isFirstSlide ? slides.length - 1 : currIndex - 1;
        setCurrIndex(newIndex);  
      }
      const nextSlide =() =>{
        const isLastSlide = currIndex === slides.length-1 ;
        const newIndex = isLastSlide ? 0 : currIndex + 1;
        setCurrIndex(newIndex);  


      }
      return (
        
        <div className='w-screen h-screen m-auto  relative group'>     
        
          <div style={{backgroundImage: `url(${slides[currIndex].url})`}} className={`w-full h-full bg-center bg-cover duration-1000 ease-in-out ${currIndex === 0 && "bg-top"}`}>

          <div className='w-full z-[999] h-screen bg-transparent pt-1'>
              <div className='textstructure mt-[17vw] px-[5.5vw]'>
              {["Plan it to"].map((item,index)=> {
                  return <div className='masker'>
                  <h2 
                  key={index} 
                  className={`leading-[6vw] tracking-tight font-extrabold font-sans 
                  ${index === 0 && " text-[#1E1E1E50] text-[5vw]"}`}
                  >
                    {item}
                  </h2>
                  </div>
              })}
              {[place1].map((item,index)=> {
                  return <div className='masker2 flex gap-2'>
                  <h2 
                  key={index} 
                  className={`leading-[6vw] tracking-tight font-black font-sans 
                  ${index === 0 && " text-[#1E1E1E] text-[5vw]"}
                  ${index === 1 && " "}`}
                  >
                  {item}
                  </h2>
                  <h2 className='leading-[6vw] tracking-tight text-[#A4161A] text-[5vw] font-black font-sans'>.</h2>
                  </div>
              })}
              </div>
              <div className='flex justify-center items-end h-1/2'>
                <div className=' z-[990] bg-slate-100 w-2/3 h-3/4 rounded-3xl shadow-2xl'>

                <div className='flex justify-center'>
                <img className=' w-30 pt-3' src={img1}></img>
                </div>
                <div className=' w-full h-screen'>
                 <div className='font-sans text-[1.1vw] font-bold relative mt-1 h-9 inline-block'>
                   <a href='#'>DESTINATION</a>
                   <a href='#'>NO. OF DAYS</a>
                   <a href='#'>NO.OF PEOPLE</a>
                   <a href='#'>BUDGET</a>
                   <a href='#'>TYPE OF TRANSPORT</a>
                   <div class='anime start-home'></div>
                 <div className='w-full align-bottom bg-gray-200 h-1 -mt-[0.25vw]'></div>
               </div>
               <div className='flex justify-center items-end mt-[8vw]'>
                <div className='w-12 h-12 bg-slate-100 z-[991] rounded-full flex justify-center items-center shadow-lg'>
                  <div className='w-9 h-9 bg-[#A4161A] rounded-full'></div>
                </div>
               </div>
               </div>
                </div>
              </div>
              <div className='w-full flex h-1/4 -mt-[12vw]'>
                <Marquee>
                  <div className='text-[6vw] font-sans font-bold text-[#A4161A] pr-1 text-shadow-xl'>●</div>
                  <div className='text-[6vw] font-sans font-bold text-[#1E1E1E] pr-1 text-shadow-xl'>MUMBAI</div>
                  <div className='text-[6vw] font-sans font-bold text-[#A4161A] pr-1 text-shadow-xl'>●</div>
                  <div className='text-[6vw] font-sans font-bold text-[#1E1E1E] pr-1 text-shadow-xl'>DELHI</div>
                  <div className='text-[6vw] font-sans font-bold text-[#A4161A] pr-1 text-shadow-xl'>●</div>
                  <div className='text-[6vw] font-sans font-bold text-[#1E1E1E] pr-1 text-shadow-xl'>BANGLORE</div>
                  <div className='text-[6vw] font-sans font-bold text-[#A4161A] pr-1 text-shadow-xl'>●</div>
                  <div className='text-[6vw] font-sans font-bold text-[#1E1E1E] pr-1 text-shadow-xl'>KOLKATA</div>
                  <div className='text-[6vw] font-sans font-bold text-[#A4161A] pr-1 text-shadow-xl'>●</div>
                  <div className='text-[6vw] font-sans font-bold text-[#1E1E1E] pr-1 text-shadow-xl'>GANGTOK</div>
                  <div className='text-[6vw] font-sans font-bold text-[#A4161A] pr-1 text-shadow-xl'>●</div>
                  <div className='text-[6vw] font-sans font-bold text-[#1E1E1E] pr-1 text-shadow-xl'>AHEMDABAD</div>
                  <div className='text-[6vw] font-sans font-bold text-[#A4161A] pr-1 text-shadow-xl'>●</div>
                  <div className='text-[6vw] font-sans font-bold text-[#1E1E1E] pr-1 text-shadow-xl'>WARANGAL</div>
                  <div className='text-[6vw] font-sans font-bold text-[#A4161A] pr-1 text-shadow-xl'>●</div>
                  <div className='text-[6vw] font-sans font-bold text-[#1E1E1E] pr-1 text-shadow-xl'>JAIPUR</div>
                  <div className='text-[6vw] font-sans font-bold text-[#A4161A] pr-1 text-shadow-xl'>●</div>
                  <div className='text-[6vw] font-sans font-bold text-[#1E1E1E] pr-1 text-shadow-xl'>MANALI</div>
                  <div className='text-[6vw] font-sans font-bold text-[#A4161A] pr-1 text-shadow-xl'>●</div>
                  <div className='text-[6vw] font-sans font-bold text-[#1E1E1E] pr-1 text-shadow-xl'>GULMARG</div>
                  <div className='text-[6vw] font-sans font-bold text-[#A4161A] pr-1 text-shadow-xl'>●</div>
                  <div className='text-[6vw] font-sans font-bold text-[#1E1E1E] pr-1 text-shadow-xl'>CHERAPUNJI</div>
                  <div className='text-[6vw] font-sans font-bold text-[#A4161A] pr-1 text-shadow-xl'>●</div>
                  <div className='text-[6vw] font-sans font-bold text-[#1E1E1E] pr-1 text-shadow-xl'>DARJELLING</div>
                  <div className='text-[6vw] font-sans font-bold text-[#A4161A] pr-1 text-shadow-xl'>●</div>
                  <div className='text-[6vw] font-sans font-bold text-[#1E1E1E] pr-1 text-shadow-xl'>UDAIPUR</div>
                </Marquee>

              </div>
          </div>

          </div>
          <div className='hidden group-hover:block absolute top-[50%] translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          <div className='hidden group-hover:block absolute top-[50%] translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>

        </div>

        )
      }
export default Landing