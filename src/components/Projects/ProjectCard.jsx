import React from 'react'

const ProjectCard = ({ image1 }) => {
    console.log("From Project card", image1)


    return (
        <div className='w-full h-[600px] flex gap-4 mb-4'>
            <div className='w-1/2 h-full transition-all rounded-none hover:rounded-[70px] overflow-hidden relative group'>
                <img className='h-full w-full object-cover ' src='djhbfvhd' alt='Image' />

                <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 h-full w-full bg-black/10 flex items-center justify-center'>
                    <h2 className='uppercase text-6xl font-[font2] border-2 rounded-full pt-4 pl-4 pr-4  text-white border-white'> Voir le projet </h2>
                </div>
            </div>

            <div className='w-1/2 h-full transition-all rounded-none hover:rounded-[70px] overflow-hidden relative group'>
                <img className='h-full w-full object-cover ' src='' alt='Image' />

                <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 h-full w-full bg-black/10 flex items-center justify-center'>
                    <h2 className='uppercase text-6xl font-[font2] border-2 rounded-full pt-4 pl-4 pr-4  text-white border-white'> Voir le projet </h2>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
