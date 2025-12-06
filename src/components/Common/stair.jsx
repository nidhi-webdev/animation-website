import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'


const Stair = () => {

    // For Location where I want to run this 
    const locate = useLocation()
    console.log(locate.pathname)

    const stairParentRef = useRef(null)


    useGSAP(function () {
        const tl = gsap.timeline()

        // Setting initial state - screen starts black
        tl.set('.stair-item', {
            height: '100%'
        })

        // Animating the bars sliding down
        tl.to('.stair-item', {
            y: '100%',
            duration: 0.6,
            ease: "power2.inOut",
            stagger: {
                amount: -0.2
            }
        })

        // Hiding the container after animation
        tl.to(stairParentRef.current, {
            display: 'none'
        })

    })

    return (
        <div ref={stairParentRef} className='stair-container h-screen w-full flex fixed z-20 top-0 pointer-events-none'>
            <div className='stair-item h-full w-1/5 bg-black'> </div>
            <div className='stair-item h-full w-1/5 bg-black'> </div>
            <div className='stair-item h-full w-1/5 bg-black'> </div>
            <div className='stair-item h-full w-1/5 bg-black'> </div>
            <div className='stair-item h-full w-1/5 bg-black'> </div>

        </div>
    )
}

export default Stair
