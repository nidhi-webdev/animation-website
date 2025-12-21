import React from 'react'
import Video from './Video'

const HomeTopText = () => {
    return (
        <div className='font-[font2] text-white pt-5 text-center '>
            <div className='text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center' > L'étincelle </div>
            <div className='text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center'>
                qui
                <div className='rounded-full w-[16vw] h-[7vw] overflow-hidden mx-4 flex items-center justify-center -mt-5'>
                    <Video />
                </div>
                génère </div>
            <div className='text-[9.5vw] uppercase leading-[9.5vw] flex items-center justify-center'> la créativité </div>

        </div>
    )
}

export default HomeTopText
