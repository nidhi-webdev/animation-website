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
          <div className='w-1/2 h-full transition-all rounded-none hover:rounded-[50px] overflow-hidden relative group'>
            <img className='h-full w-full object-cover ' src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b' alt='Image' />

            <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 h-full w-full bg-black/10 flex items-center justify-center'>
              <h2 className='uppercase text-6xl font-[font2] border-2 rounded-full pt-4 pl-4 pr-4  text-white border-white'> Voir le projet </h2>
            </div>
          </div>
        </div>

    
      </div>




    </div>
  )
}

export default Projects
