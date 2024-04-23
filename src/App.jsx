import { useState } from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Menu from './Components/Menu'
import Destinations from './Components/Destinations'
import LocomotiveScroll from 'locomotive-scroll';
import Sliders from './Components/Sliders'
import SecondSliders from './Components/SecondSliders';
import Cards from './Components/Cards';
import Start from './Components/Start';
function App() {
const locomotiveScroll = new LocomotiveScroll();
  const [count, setCount] = useState(0)
  return (
    <div className='text-white w-screen overflow-x-hidden'>
      <Navbar />
      <Landing />
      <Menu />
      <Destinations />
      <Sliders />
      <SecondSliders />
      <Cards />
    </div>
  )
}

export default App
