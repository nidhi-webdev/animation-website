import React from 'react'

const Projects = () => {
  return (
    <div className='p-4'>
      <div className='pt-[45vh]'>
        <h2 className='font-[font2] text-[10vw] uppercase'>
          Projets
        </h2>
      </div>



      <div className='-mt-10'>
        <div className='w-full h-[600px] flex gap-4 mb-4'>
          <div className='w-1/2 h-full transition rounded-none hover:rounded-[50px] overflow-hidden'>
            <img className='h-full w-full object-cover ' src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b' alt='Image' />
          </div>
          <div className='absolute top-0 left-0 h-full w-full bg-black/10'>
            <h2></h2>
          </div>
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
