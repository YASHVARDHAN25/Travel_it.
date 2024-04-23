import React from 'react'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Marquee from "react-fast-marquee";
import Start from './Start';
import img1 from '../assets/planit.svg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay} from 'swiper/modules';
import './Landing.css'
import AOS from "aos";
import "aos/dist/aos.css";
import Swipes from './Swipes';
function Landing() {
  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);
  const [count, setCount] = useState(0)
  const [autoslide, setAutoSlide] = useState(true)
  const [interval, setInterval] = useState(3000)
  const place = new String('LADAKH.');  
  const place1 = place.substring(0, place.length-1)
      return (
        <div>
        
        <div className='absolute'>
        <Swipes/>
         </div>
        <div className='w-screen h-screen m-auto group'>   
      
          <div className='w-screen z-[990] h-screen bg-transparent pt-1 absolute'>
              <div className='textstructure xl:mt-[13vw] sm:mt-[15vw] mt-[25vw] px-[5.5vw]'>
              <div className='plan font-sans font-extrabold sm:text-[5vw] text-[10vw] text-[#1E1E1E70]'>Plan it to</div>
    <div className='wrapper mr-[2vw]'>
      <div className='words font-sans -mt-[1.5vw] h-20 w-auto'>
      <Swiper spaceBetween={0} direction={'vertical'}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className='names overflow-hidden flex items-start '
      >
        <SwiperSlide className='name flex justify-start items-start bg-transparent'>
          <span className='flex font-black sm:text-[5vw] text-[10vw]'>
          <div className=' text-[#1E1E1E]'>LADAKH</div>
          <div className='text-[#A4161A]'>.</div>
          </span>
        </SwiperSlide>
        <SwiperSlide className='name flex justify-start items-start  bg-transparent'>
          <span className='flex font-black sm:text-[5vw] text-[10vw]'>
          <div className=' text-[#1E1E1E]'>MUMBAI</div>
          <div className='text-[#A4161A]'>.</div>
          </span>
        </SwiperSlide>
        <SwiperSlide className='name flex justify-start items-start  bg-transparent'>
          <span className='flex font-black sm:text-[5vw] text-[10vw]'>
          <div className=' text-[#1E1E1E]'>GOA</div>
          <div className='text-[#A4161A]'>.</div>
          </span>
        </SwiperSlide>
        <SwiperSlide className='name flex justify-start items-start  bg-transparent'>
          <span className='flex font-black sm:text-[5vw] text-[10vw]'>
          <div className=' text-[#1E1E1E]'>HYDERABAD</div>
          <div className='text-[#A4161A]'>.</div>
          </span>
        </SwiperSlide>
        <SwiperSlide className='name flex justify-start items-start  bg-transparent'>
          <span className='flex font-black sm:text-[5vw] text-[10vw]'>
          <div className=' text-[#1E1E1E]'>DELHI</div>
          <div className='text-[#A4161A]'>.</div>
          </span>
        </SwiperSlide>
        <SwiperSlide className='name flex justify-start items-start  bg-transparent'>
          <span className='flex font-black sm:text-[5vw] text-[10vw]'>
          <div className=' text-[#1E1E1E]'>AGRA</div>
          <div className='text-[#A4161A]'>.</div>
          </span>
        </SwiperSlide>
        <SwiperSlide className='name flex justify-start items-start  bg-transparent'>
          <span className='flex font-black sm:text-[5vw] text-[10vw]'>
          <div className=' text-[#1E1E1E]'>JAIPUR</div>
          <div className='text-[#A4161A]'>.</div>
          </span> 
        </SwiperSlide>
        <SwiperSlide className='name flex justify-start items-start  bg-transparent'>
          <span className='flex font-black sm:text-[5vw] text-[10vw]'>
          <div className=' text-[#1E1E1E]'>JAIPUR</div>
          <div className='text-[#A4161A]'>.</div>
          </span> 
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
              </div>
              <div className='flex justify-center items-end h-[275px] md:mt-[15vw] lg:mt-[4.5vw] sm:mt-[25vw] mt-[25vw]'>
                <div className=' z-[990] bg-slate-100 sm:w-2/3 w-5/6 lg:h-[200px] md:h-[250px] h-[280px] rounded-3xl shadow-2xl'>

                <div className='flex justify-center'>
                <img className=' md:w-[12vw] w-[20vw] pt-3' src={img1}></img>
                </div>
                {/*
                <div className=' w-full h-screen'>
                 <div className='font-sans text-[1.1vw] font-bold relative mt-1 h-9 inline-block'>
                   <a href='#'>DESTINATION</a>
                   <a href='#'>NO. OF DAYS</a>
                   <a href='#'>NO.OF PEOPLE</a>
                   <a href='#'>BUDGET</a>
                   <a href='#'>TYPE OF TRANSPORT</a>
                   <div className='anime start-home'></div>
                 <div className='w-full align-bottom bg-gray-200 h-1 -mt-[0.25vw]'></div>
               </div>
               <div className='flex justify-center items-end xl:mt-[9vw] lg:mt-[9vw]'>
                <div className='w-12 h-12 bg-slate-100 z-[991] rounded-full flex justify-center items-center shadow-lg'>
                  <div className='w-9 h-9 bg-[#A4161A] rounded-full'></div>
                </div>
               </div>
               </div>*/}
                </div>
              </div>
              <div className='w-screen flex h-[150px] lg:-mt-[11.5vw] md:-mt-[17.5vw] sm:-mt-[22vw] -mt-[8vw]'>
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
        
</div>
        )
      }
export default Landing