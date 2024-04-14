import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import t1 from '../assets/s1.jpg';
import t2 from '../assets/s2.jpg';
import t3 from '../assets/s3.jpg';
import t4 from '../assets/s4.jpg';
import t5 from '../assets/s5.jpg';
import t6 from '../assets/s6.jpg';
import t7 from '../assets/s7.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import './Sliders.css';

// import required modules
import {Autoplay, EffectCoverflow} from 'swiper/modules';

function SecondSliders() {
  return (
    <div className='w-full bg-zinc-900 swiper-container relative py-[3vw] h-1/2'>
      <div className='flex gap-[0.8vw]'>
      <div className=' font-sans text-2xl font-bold text-white pl-[2.5vw] pb-[2vw]'>BEST PLACES</div>
      <div className=' font-sans text-2xl font-extrabold text-[#A4161A] pb-[2vw]'> APR-MAY :</div>
      </div>
      <Swiper 
        spaceBetween={0} 
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        effect={'coverflow'}
        grabCursor={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
          <SwiperSlide className='sliders'>
            <img src={t1} />
          </SwiperSlide >
          <SwiperSlide className='sliders'>
            <img src={t2} />
          </SwiperSlide>
          <SwiperSlide className='sliders'>
            <img src={t3} />
          </SwiperSlide>
          <SwiperSlide className='sliders'>
            <img src={t4} />
          </SwiperSlide>
          <SwiperSlide className='sliders'>
            <img src={t5} />
          </SwiperSlide>
          <SwiperSlide className='sliders'>
            <img src={t6} />
          </SwiperSlide>
          <SwiperSlide className='sliders'>
            <img src={t7} />
          </SwiperSlide>
          <SwiperSlide className='sliders'>
            <img src={t7} />
          </SwiperSlide>
          <SwiperSlide className='sliders'>
            <img src={t7} />
          </SwiperSlide>
          <SwiperSlide className='sliders'>
            <img src={t7} />
          </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SecondSliders

