import { useState } from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Menu from './Components/Menu'
import Destinations from './Components/Destinations'
import LocomotiveScroll from 'locomotive-scroll';
import Sliders from './Components/Sliders'

function App() {
const locomotiveScroll = new LocomotiveScroll();
  const [count, setCount] = useState(0)
  return (
    <div className='w-full min-h-screen text-white'>
      <Navbar />
      <Landing />
      <Menu />
      <Destinations />
      <Sliders />
    </div>
  )
}

export default App
