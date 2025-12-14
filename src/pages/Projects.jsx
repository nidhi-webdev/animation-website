import React from 'react'

const Projects = () => {
  return (
    <div className='p-4'>
      <div className='bg-red-200 pt-[45vh]'>
        <h2 className='font-[font2] text-[10vw] uppercase'>
          Projets
        </h2>
      </div>



      <div>
        <div className='w-full h-[600px] bg-amber-300 -mt-20 flex gap-4 mb-4'>
          <div className='w-1/2 h-full bg-green-400'>
          <img className='h-full w-full' src='https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c' alt='Image'/>
          </div>
          <div className='w-1/2 h-full bg-blue-400'></div>
        </div>

        {/* <div className='w-full h-[600px] bg-amber-300  flex gap-4 mb-4'>
          <div className='w-1/2 h-full bg-green-400'></div>
          <div className='w-1/2 h-full bg-blue-400'></div>
        </div> */}
      </div>




    </div>
  )
}

export default Projects
