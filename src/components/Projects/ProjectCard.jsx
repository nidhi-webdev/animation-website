



const ProjectCard = (props ) => {
    console.log("From Project card", props  )


    return (
        <div className='w-full h-[800px] flex gap-4 mb-4 cursor-pointer'>
            <div className='w-1/2 h-full transition-all rounded-none hover:rounded-[70px] overflow-hidden relative group'>
                <img className='h-full w-full object-cover ' src={props.image1} alt='Image' />

                <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 h-full w-full bg-black/10 flex items-center justify-center'>
                    <h2 className='uppercase text-6xl font-[font2] border-2 rounded-full pt-4 pl-4 pr-4  text-white border-white'> Voir le projet </h2>
                </div>
            </div>

            <div className='w-1/2 h-full transition-all rounded-none hover:rounded-[70px] overflow-hidden relative group'>
                <img className='h-full w-full object-cover ' src={props.image2} alt='Image' />

                <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 h-full w-full bg-black/10 flex items-center justify-center'>
                    <h2 className='uppercase text-6xl font-[font2] border-2 rounded-full pt-4 pl-4 pr-4  text-white border-white'> Voir le projet </h2>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
