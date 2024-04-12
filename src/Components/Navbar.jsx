import React from 'react'
import image from '../assets/one.png'
function Navbar() {
  return (
    <div className='fixed z-[999] w-[97.5%] px-3 py-2 flex items-center left-[1rem] justify-between bg-[#ffffff30] my-5 mx-auto rounded-xl backdrop-blur-md'>
        <div className='logo'> 
        <img className='w-11' src={image}></img>
        </div>
        <div className='links flex gap-12 pl-16 text-zinc-900 font-semibold tracking-tighter'>
           <button className=''>HOME</button>
           <button className=''>EXPLORE</button>
           <button className=''>OFFERS</button>
           <button className=''>WISHLIST</button>
        </div>
        <div className='login'>
            <button className=' bg-zinc-900 px-6 text-xl py-3 rounded-full'>
                Login
            </button>

        </div>
    </div>
  )
}

export default Navbar