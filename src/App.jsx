import { useState } from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Menu from './Components/Menu'
import Destinations from './Components/Destinations'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full min-h-screen text-white'>
      <Navbar />
      <Landing />
      <Menu />
      <Destinations />
    </div>
  )
}

export default App
