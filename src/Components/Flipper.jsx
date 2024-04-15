import React from 'react'
import "./Flipper.css"
function Flipper() {
  return (
    <div className='xl:mt-[13vw] lg:mt-[15vw] px-[5.5vw]'>
    <div className='plan font-sans font-bold text-[5vw]'>Plan it to</div>
    <div className='flipper mr-[2vw]'>
      
      <div className='words font-sans font-bold text-[5vw] -mt-[1.5vw]'>
        <span className='flex'>
          <div>LADAKH</div>
          <div className='text-[#A4161A]'>.</div>
          </span>
          <span className='flex'>
          <div>MUMBAI</div>
          <div className='text-[#A4161A]'>.</div>
          </span>        
          <span className='flex'>
          <div>GOA</div>
          <div className='text-[#A4161A]'>.</div>
          </span>        
          <span className='flex'>
          <div>DELHI</div>
          <div className='text-[#A4161A]'>.</div>
          </span>        
          <span className='flex'>
          <div>HYDERABAD</div>
          <div className='text-[#A4161A]'>.</div>
          </span>
      </div>
    </div>
    </div>
  )
}

export default Flipper