import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.jpg';
import s3 from '../assets/s3.jpg';
import s4 from '../assets/s4.jpg';
import s5 from '../assets/s5.jpg';
import s6 from '../assets/s6.jpg';
import s7 from '../assets/s7.jpg';
import s8 from '../assets/s8.jpg';

// Import Swiper styles
import './Landing.css';

// import required modules
import {Autoplay} from 'swiper/modules';


const Swipes = () => {
  return (
   

<div className='w-screen h-screen'>
          <Swiper spaceBetween={0} centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className='h-screen'
      >
        <SwiperSlide>
          <img src={s1} className='w-full h-full'/>
        </SwiperSlide>
        <SwiperSlide >
          <img src={s2} className='w-full h-full'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={s3} className='w-full h-full'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={s4} className='w-full h-full'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={s5} className='w-full h-full'/> 
        </SwiperSlide>
        <SwiperSlide>
          <img src={s6} className='w-full h-full'/> 
        </SwiperSlide>
        <SwiperSlide>
          <img src={s7} className='w-full h-full'/> 
        </SwiperSlide>
        <SwiperSlide>
          <img src={s8} className='w-full h-full'/> 
        </SwiperSlide>
      </Swiper>
      
 </div>

  )
}

export default Swipes