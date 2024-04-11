import React, {useEffect} from 'react'
import discover from '../assets/discoverit.svg'
import d1 from '../assets/111.jpg'
import d2 from '../assets/112.jpg'
import d3 from '../assets/113.jpg'
import d4 from '../assets/114.jpg'
import d5 from '../assets/115.jpg'
import d6 from '../assets/116.jpg'
import d7 from '../assets/117.jpg'
import d8 from '../assets/118.jpg'
import d9 from '../assets/119.jpg'
import d10 from '../assets/200.jpg'
import d11 from '../assets/201.jpg'
import d12 from '../assets/202.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
function Destinations() {
  useEffect(() => {
    AOS.init({duration: 1000,
    easing: 'slide-up'});
  }, []);
  return (
    <div data-aos="fade-up" data-aos-speed="1.2" className='w-full bg-zinc-900 xl:-mt-[4.5vw] lg:-mt-[8.5vw]'>
      <div className='flex justify-center'>
        <img className='pt-3' src={discover}/>
      </div>
      <div className='md:p-8'>
      <div className='columns-1 gap-3 lg:gap-4 sm:columns-2 lg:columns-4 xl:columns-4 [&>img: not(:first-child)]:mt-8 lg:[&>img:not(:first-child)]:mt-4'>
         <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow ">
          <div class=" h-[31vw]">
           <img class=" absolute h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={d1} alt="" />
           <div class="absolute inset-0 bg-gradient-to-b 
             from-transparent via-transparent to-[#1E1E1E] 
             group-hover:from-[#1E1E1E] group-hover:via-[#1E1E1E80] group-hover:to-[#1E1E1E]">
           </div>
           <div class="absolute inset-0 flex translate-y-[65%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
             <h1 class="text-2xl font-semibold font-sans text-white">MUMBAI</h1>
             <p class="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
             <button class="rounded-xl bg-neutral-900 py-2 px-3.5 mt-2 text-sm capitalize text-white shadow shadow-black/60">See More</button>
           </div>
          </div>
         </div>
         <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow mt-4 ">
          <div class=" h-[24vw]">
           <img class=" absolute h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={d2} alt="" />
           <div class="absolute inset-0 bg-gradient-to-b 
             from-transparent via-transparent to-[#1E1E1E] 
             group-hover:from-[#1E1E1E] group-hover:via-[#1E1E1E80] group-hover:to-[#1E1E1E]">
           </div>
           <div class="absolute inset-0 flex translate-y-[65%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
             <h1 class="text-2xl font-semibold font-sans text-white">DELHI</h1>
             <p class="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
             <button class="rounded-xl bg-neutral-900 py-2 px-3.5 mt-2 text-sm capitalize text-white shadow shadow-black/60">See More</button>
           </div>
          </div>
        </div>
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow mt-4 ">
          <div class=" h-[31vw]">
           <img class=" absolute h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={d3} alt="" />
           <div class="absolute inset-0 bg-gradient-to-b 
             from-transparent via-transparent to-[#1E1E1E] 
             group-hover:from-[#1E1E1E] group-hover:via-[#1E1E1E80] group-hover:to-[#1E1E1E]">
           </div>
           <div class="absolute inset-0 flex translate-y-[65%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
             <h1 class="text-2xl font-semibold font-sans text-white">LADAKH</h1>
             <p class="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
             <button class="rounded-xl bg-neutral-900 py-2 px-3.5 mt-2 text-sm capitalize text-white shadow shadow-black/60">See More</button>
           </div>
          </div>
        </div>
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow mt-4">
          <div class=" h-[27vw]">
           <img class=" absolute h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={d4} alt="" />
           <div class="absolute inset-0 bg-gradient-to-b 
             from-transparent via-transparent to-[#1E1E1E] 
             group-hover:from-[#1E1E1E] group-hover:via-[#1E1E1E80] group-hover:to-[#1E1E1E]">
           </div>
           <div class="absolute inset-0 flex translate-y-[65%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
             <h1 class="text-2xl font-semibold font-sans text-white">MANALI</h1>
             <p class="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
             <button class="rounded-xl bg-neutral-900 py-2 px-3.5 mt-2 text-sm capitalize text-white shadow shadow-black/60">See More</button>
           </div>
          </div>
        </div>
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow mt-4">
          <div class=" h-[31vw]">
           <img class=" absolute h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={d5} alt="" />
           <div class="absolute inset-0 bg-gradient-to-b 
             from-transparent via-transparent to-[#1E1E1E] 
             group-hover:from-[#1E1E1E] group-hover:via-[#1E1E1E80] group-hover:to-[#1E1E1E]">
           </div>
           <div class="absolute inset-0 flex translate-y-[65%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
             <h1 class="text-2xl font-semibold font-sans text-white">GOA</h1>
             <p class="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
             <button class="rounded-xl bg-neutral-900 py-2 px-3.5 mt-2 text-sm capitalize text-white shadow shadow-black/60">See More</button>
           </div>
          </div>
        </div>
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow  mt-4">
          <div class=" h-[28vw]">
           <img class=" absolute h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={d6} alt="" />
           <div class="absolute inset-0 bg-gradient-to-b 
             from-transparent via-transparent to-[#1E1E1E] 
             group-hover:from-[#1E1E1E] group-hover:via-[#1E1E1E80] group-hover:to-[#1E1E1E]">
           </div>
           <div class="absolute inset-0 flex translate-y-[65%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
             <h1 class="text-2xl font-semibold font-sans text-white">JAIPUR</h1>
             <p class="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
             <button class="rounded-xl bg-neutral-900 py-2 px-3.5 mt-2 text-sm capitalize text-white shadow shadow-black/60">See More</button>
           </div>
          </div>
        </div>
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow  mt-4">
          <div class=" h-[31vw]">
           <img class=" absolute h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={d7} alt="" />
           <div class="absolute inset-0 bg-gradient-to-b 
             from-transparent via-transparent to-[#1E1E1E] 
             group-hover:from-[#1E1E1E] group-hover:via-[#1E1E1E80] group-hover:to-[#1E1E1E]">
           </div>
           <div class="absolute inset-0 flex translate-y-[65%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
             <h1 class="text-2xl font-semibold font-sans text-white">UDAIPUR</h1>
             <p class="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
             <button class="rounded-xl bg-neutral-900 py-2 px-3.5 mt-2 text-sm capitalize text-white shadow shadow-black/60">See More</button>
           </div>
          </div>
        </div>
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow mt-4">
          <div class=" h-[24vw]">
           <img class=" absolute h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={d9} alt="" />
           <div class="absolute inset-0 bg-gradient-to-b 
             from-transparent via-transparent to-[#1E1E1E] 
             group-hover:from-[#1E1E1E] group-hover:via-[#1E1E1E80] group-hover:to-[#1E1E1E]">
           </div>
           <div class="absolute inset-0 flex translate-y-[65%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
             <h1 class="text-2xl font-semibold font-sans text-white">AGRA</h1>
             <p class="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
             <button class="rounded-xl bg-neutral-900 py-2 px-3.5 mt-2 text-sm capitalize text-white shadow shadow-black/60">See More</button>
           </div>
          </div>
        </div>
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow mt-4">
          <div class=" h-[31vw]">
           <img class=" absolute h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={d8} alt="" />
           <div class="absolute inset-0 bg-gradient-to-b 
             from-transparent via-transparent to-[#1E1E1E] 
             group-hover:from-[#1E1E1E] group-hover:via-[#1E1E1E80] group-hover:to-[#1E1E1E]">
           </div>
           <div class="absolute inset-0 flex translate-y-[65%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
             <h1 class="text-2xl font-semibold font-sans text-white">DHARAMSHALA</h1>
             <p class="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
             <button class="rounded-xl bg-neutral-900 py-2 px-3.5 mt-2 text-sm capitalize text-white shadow shadow-black/60">See More</button>
           </div>
          </div>
        </div>
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow mt-4">
          <div class=" h-[27vw]">
           <img class=" absolute h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={d10} alt="" />
           <div class="absolute inset-0 bg-gradient-to-b 
             from-transparent via-transparent to-[#1E1E1E] 
             group-hover:from-[#1E1E1E] group-hover:via-[#1E1E1E80] group-hover:to-[#1E1E1E]">
           </div>
           <div class="absolute inset-0 flex translate-y-[65%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
             <h1 class="text-2xl font-semibold font-sans text-white">KASHMIR</h1>
             <p class="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
             <button class="rounded-xl bg-neutral-900 py-2 px-3.5 mt-2 text-sm capitalize text-white shadow shadow-black/60">See More</button>
           </div>
          </div>
        </div>
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow mt-4">
          <div class=" h-[31vw]">
           <img class=" absolute h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={d11} alt="" />
           <div class="absolute inset-0 bg-gradient-to-b 
             from-transparent via-transparent to-[#1E1E1E] 
             group-hover:from-[#1E1E1E] group-hover:via-[#1E1E1E80] group-hover:to-[#1E1E1E]">
           </div>
           <div class="absolute inset-0 flex translate-y-[65%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
             <h1 class="text-2xl font-semibold font-sans text-white">LANSDOWNE</h1>
             <p class="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
             <button class="rounded-xl bg-neutral-900 py-2 px-3.5 mt-2 text-sm capitalize text-white shadow shadow-black/60">See More</button>
           </div>
          </div>
        </div>
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow mt-4">
          <div class=" h-[28vw]">
           <img class=" absolute h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={d12} alt="" />
           <div class="absolute inset-0 bg-gradient-to-b 
             from-transparent via-transparent to-[#1E1E1E] 
             group-hover:from-[#1E1E1E] group-hover:via-[#1E1E1E80] group-hover:to-[#1E1E1E]">
           </div>
           <div class="absolute inset-0 flex translate-y-[65%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
             <h1 class="text-2xl font-semibold font-sans text-white">AGRA</h1>
             <p class="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
             <button class="rounded-xl bg-neutral-900 py-2 px-3.5 mt-2 text-sm capitalize text-white shadow shadow-black/60">See More</button>
           </div>
          </div>
        </div>
        </div>
        </div>  
    </div>
  )
}

export default Destinations