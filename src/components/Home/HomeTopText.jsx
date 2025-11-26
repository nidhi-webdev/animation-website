import React from 'react'
import Video from './Video'

const HomeTopText = () => {
    return (
        <div className='font-[font1] text-white pt-10 text-center'>
            <div className='text-[9.5vw] uppercase leading-[9.5vw]' > L'étincelle </div>
            <div className='text-[9.5vw] uppercase leading-[9.5vw] flex items-center justify-center'>
                 qui
                <div className='h-[10vw] w-[10vw]'> <Video /> </div>
                génère </div>
            <div className='text-[9.5vw] uppercase leading-[9.5vw]'> la créativité </div>

        </div>
    )
}

export default HomeTopText
