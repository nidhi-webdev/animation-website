import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"




const App = () => {
  const stairParentRef = useRef(null)


  useGSAP(function () {
    const tl = gsap.timeline()


    tl.from('.stair-item', {
      height: 0,
      ease: "power2.inOut",
      stagger: {
        amount: -0.25
      }
    })

    tl.to('.stair-item', {
      y: '100%',
      stagger: {
        amount: -0.25
      }
    })

    
  })



  return (
    <div className='text-white'>

      <div ref={stairParentRef} className='stair-container h-screen w-full flex fixed z-20 top-0 pointer-events-none'>
        <div className='stair-item h-full w-1/5 bg-black'> </div>
        <div className='stair-item h-full w-1/5 bg-black'> </div>
        <div className='stair-item h-full w-1/5 bg-black'> </div>
        <div className='stair-item h-full w-1/5 bg-black'> </div>
        <div className='stair-item h-full w-1/5 bg-black'> </div>

      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>

    </div>
  )
}

export default App
