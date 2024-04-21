import React, {useState} from 'react'
import image from '../assets/one.png'
function Navbar() {
  let [open, setOpen]=useState(false);
  return (
    <div className=''>
    <header className='z-[999] bg-transparent pt-3 fixed w-[100%]'>
    <nav className='flex px-2 sm:py-3 py-1 justify-between items-center w-[97.5%] mx-auto rounded-xl backdrop-blur-md bg-[#ffffff30]'>
        <div className='logo'> 
          <img className='sm:w-11 w-9 cursor-pointer' src={image}></img>
        </div>
        <div className={`md:static absolute md:min-h-fit min-h-[40vh] w-full rounded-xl bg-[#ffffff30] md:bg-transparent left-0 md:w-auto md:z-auto z-[-10] flex items-center px-5 transition-all ease-in ${open ? 'top-[100%]': 'top-[-750%]'}`}>
        <ul className=' links flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6 text-zinc-900 font-semibold tracking-tighter '>
           <li><button className=' hover:text-[#A4161A]'>HOME</button></li>
           <li><button className=' hover:text-[#A4161A]'>EXPLORE</button></li>
           <li><button className=' hover:text-[#A4161A]'>OFFERS</button></li>
           <li><button className=' hover:text-[#A4161A]'>WISHLIST</button></li>
        </ul>
        </div>
        <div className='login flex items-center gap-3'>
            <button className=' bg-zinc-900 sm:px-6 px-4 sm:text-xl sm:py-3 py-2 rounded-full hover:bg-black text-white'>
              Login
            </button>
            <div onClick={()=>setOpen(!open)} className='text-3xl cursor-pointer md:hidden text-black'>
               <ion-icon name={open ? 'close': 'menu'} class="text-3xl cursor-pointer pt-2 md:hidden"></ion-icon>
            </div>
        </div>
    </nav>
    </header>
    </div>
  )
}

export default Navbar