import one from '../assets/two.svg'
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
const Starting = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    container.style.height = `${window.innerHeight}px`;
    gsap.to('.box_2', { height: '35%', width: 200, duration: 1.5,delay:1, ease: 'power2.Out', repeat:1, yoyo: true});
    gsap.to('.box_3', { height: '55%', width: 300, duration: 1.5,delay:1, ease: 'power2.Out', repeat:1, yoyo: true });
    gsap.to('.box_4', { height: '75%', width: 400, duration: 1.5,delay:1, ease: 'power2.Out', repeat:1, yoyo: true });
    gsap.to('.box_5', { height: '95%', width: 500, duration: 1.5,delay:1, ease: 'power2.Out', repeat:1, yoyo: true });
    gsap.to('.box_6', { height: '100%', width: 600, duration: 1.5,delay:1, ease: 'power2.Out', repeat:1, yoyo: true });
    gsap.to('.box_7', { height: '100%', width: 700, duration: 1.5,delay:1, ease: 'power2.Out', repeat:1, yoyo: true });
    gsap.to('.box_8', { height: '100%', width: 800, duration: 1.5,delay:1, ease: 'power2.Out', repeat:1, yoyo: true });
    gsap.to('.box_9', { height: '100%', width: 900, duration: 1.5,delay:1, ease: 'power2.Out', repeat:1, yoyo: true });
    gsap.to('.box_10', { height: '100%', width: 1000, duration: 1.5,delay:1, ease: 'power2.Out', repeat:1, yoyo: true });
    gsap.to('.box_11', { height: '100%', width: 1100, duration: 1.5,delay:1, ease: 'power2.Out', repeat:1, yoyo: true });
    gsap.to('.box_12', { height: '100%', width: 1200, duration: 1.5,delay:1, ease: 'power2.Out', repeat:1, yoyo: true });
    gsap.to('.box_13', { height: '100%', width: 1250, duration: 1.5,delay:1, ease: 'power2.Out', repeat:1, yoyo: true });
    gsap.to('.box_14', { height: '100%', width: 1250, duration: 1.5,delay:1, ease: 'power2.Out', repeat:1, yoyo: true });
    gsap.to('.box_2,.box_3,.box_4,.box_5,.box_6,.box_7,.box_8,.box_9,.box_10,.box_11', {opacity: 0, delay: 4.2})
    gsap.fromTo('.box_1', {x: 0}, {x:142, delay:4.5 ,backgroundColor: '#7E1418', ease: 'power2.easeInOut'});
    gsap.to('.image', { opacity: 0, delay: 4.2 });
    gsap.fromTo('.text', {opacity:0 ,x:200},{ opacity: 1, x: 0, delay: 4.5, ease: 'power2.easeInOut'});
    gsap.to('.box_1', {x:0, height:"100vh" , width: "100vw", borderRadius:0,delay:5.5 ,backgroundColor: '#7E1418', ease: 'power2.easeInOut'});
  }, []);
  return (
    <>
  <div ref={containerRef} style={{width: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#0F0E0F'}}>
    <div className="box_1 rounded-full z-[998] flex justify-center items-center" style={{ width: 120, height: 120, backgroundColor: '#A4161A90' }} >
      <img src={one} className='image h-20'/>
    </div>
    <div className="box_2 rounded-full absolute z-[997]" style={{ width: 119, height: 119, backgroundColor: '#E5383B60'}} ></div>
    <div className="box_3 rounded-full absolute z-[997]" style={{ width: 119, height: 119, backgroundColor: '#A4161A60'}} ></div>
    <div className="box_4 rounded-full absolute z-[997]" style={{ width: 119, height: 119, backgroundColor: '#66070860'}} ></div>
    <div className="box_5 rounded-full absolute z-[997]" style={{ width: 119, height: 119, backgroundColor: '#66070860'}} ></div>
    <div className="box_6 rounded-full absolute z-[997]" style={{ width: 119, height: 119, backgroundColor: '#161A1D60'}} ></div>
    <div className="box_7 rounded-full absolute" style={{ width: 119, height: 119, backgroundColor: '#0F0E0F'}} ></div>
    <div className="box_8 rounded-full absolute " style={{ width: 119, height: 119, backgroundColor: '#0F0E0F70'}} ></div>
    <div className="box_9 rounded-full absolute" style={{ width: 119, height: 119, backgroundColor: '#0F0E0F75'}} ></div>
    <div className="box_10 rounded-full absolute" style={{ width: 119, height: 119, backgroundColor: '#0F0E0F80'}} ></div>
    <div className="box_11 rounded-full absolute" style={{ width: 119, height: 119, backgroundColor: '#0F0E0F85'}} ></div>
    <div className="box_12 rounded-full absolute -z-10" style={{ width: 119, height: 119, backgroundColor: '#0F0E0F90'}} ></div>
    <div className="box_13 rounded-full absolute -z-10" style={{ width: 119, height: 119, backgroundColor: '#0F0E0F95'}} ></div>
    <div className="box_14 rounded-full absolute -z-10" style={{ width: 119, height: 119, backgroundColor: '#0F0E0F100'}} ></div>
    <div className=" flex justify-center items-center absolute z-[999]">
      <h2 className='text text-white text-[6vw] font-bold font-sans'>Travelit.</h2>
    </div>
    
  </div>
  </>
  )
}
export default Starting