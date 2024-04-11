import React, {useEffect} from 'react'
import book from '../assets/bookit.svg'
import check from '../assets/checkit.svg'
import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import four from '../assets/4.png'
import five from '../assets/5.png'
import six from '../assets/6.png'
import seven from '../assets/7.png'
import eight from '../assets/8.png'
import nine from '../assets/9.png'
import ten from '../assets/10.png'
import eleven from '../assets/12.png'
import AOS from "aos";
import "aos/dist/aos.css";
function Menu() {
  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);
  return (
    <div className='h-screen w-full mt-[14vw] ml-[7vw]'>
        <div className='mt-14 w-[85vw] h-[16vw] bg-gray-200 shadow-xl shadow-[#1E1E1E30] rounded-3xl' data-aos="fade-left"data-aos-delay="-1000">
         <div className='flex justify-center'>
           <img className='pt-4' src={book}></img>
         </div>
         <div className='w-full h-2/3 flex items-center justify-center gap-[2.5vw]'>
           <div className='w-[7.5vw] h-[8vw] bg-slate-100 rounded-2xl shadow-md shadow-[#1E1E1E] -mt-[1vw] '>
             <div className='flex justify-center items-center'>
               <img className='w-[5vw] pt-2' src={one}></img>
           </div>
           </div>
           <div className='w-[7vw] h-[8vw] bg-slate-100 rounded-2xl shadow-md shadow-[#1E1E1E] -mt-[1vw] ' >
           <div className='flex justify-center items-center'>
               <img className='w-[5vw] pt-2' src={two}></img>
           </div>
           </div>
           <div className='w-[7vw] h-[8vw] bg-slate-100 rounded-2xl shadow-md shadow-[#1E1E1E] -mt-[1vw]'>
           <div className='flex justify-center items-center'>
               <img className='w-[4.7vw] pt-2.5' src={three}></img>
           </div>
           </div>
           <div className='w-[7vw] h-[8vw] bg-slate-100 rounded-2xl shadow-md shadow-[#1E1E1E] -mt-[1vw]'>
           <div className='flex justify-center items-center'>
               <img className='w-[4.7vw] pt-4' src={four}></img>
           </div>
           </div>
           <div className='w-[7vw] h-[8vw] bg-slate-100 rounded-2xl shadow-md shadow-[#1E1E1E] -mt-[1vw]'>
           <div className='flex justify-center items-center'>
               <img className='w-[5vw] pt-3' src={five}></img>
           </div>
           </div>
           <div className='w-[7vw] h-[8vw] bg-slate-100 rounded-2xl shadow-md shadow-[#1E1E1E] -mt-[1vw]'>
           <div className='flex justify-center items-center'>
               <img className='w-[5vw] pt-2' src={six}></img>
           </div>
           </div>
           <div className='w-[7vw] h-[8vw] bg-slate-100 rounded-2xl shadow-md shadow-[#1E1E1E] -mt-[1vw]'>
           <div className='flex justify-center items-center'>
               <img className='w-[5vw] pt-3' src={seven}></img>
           </div>
           </div>
           <div className='w-[7vw] h-[8vw] bg-slate-100 rounded-2xl shadow-md shadow-[#1E1E1E] -mt-[1vw]'>
           <div className='flex justify-center items-center'>
               <img className='w-[5vw] pt-3' src={eight}></img>
           </div>
           </div>
         </div>
        </div>
        <div className='mt-[2.5vw] ml-[10vw] w-[64vw] h-[16vw] bg-gray-200 shadow-xl shadow-[#1E1E1E30] rounded-3xl' data-aos="fade-right" data-aos-delay="-200">
         <div className='flex justify-center'>
           <img className='pt-4' src={check}></img>
         </div>
         <div className='w-full h-2/3 flex items-center justify-center gap-8'>
           <div className='w-[7vw] h-[8vw] bg-slate-100 rounded-2xl shadow-md shadow-[#1E1E1E] -mt-[1vw]'>
           <div className='flex justify-center items-center'>
               <img className='w-[4.7vw] pt-3' src={nine}></img>
           </div>
           </div>
           <div className='w-[7vw] h-[8vw] bg-slate-100 rounded-2xl shadow-md shadow-[#1E1E1E] -mt-[1vw]'>
           <div className='flex justify-center items-center'>
               <img className='w-[5vw] pt-2' src={ten}></img>
           </div>
           </div>
           <div className='w-[7vw] h-[8vw] bg-slate-100 rounded-2xl shadow-md shadow-[#1E1E1E] -mt-[1vw]'>
           <div className='flex justify-center items-center'>
               <img className='w-[4.5vw] pt-3' src={eleven}></img>
           </div>
           </div>
         </div>
        </div>
    </div>
  )
}

export default Menu