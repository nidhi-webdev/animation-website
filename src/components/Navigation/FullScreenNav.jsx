import React from 'react'

const FullScreenNav = () => {
    return (
        <div id='fullScreenNav' className='text-white h-screen w-full absolute bg-amber-800 py-40'>
            <div id='allLinks'>
                <div className='link border-t relative ' >
                    <h1 className='font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'> Projects</h1>
                    <div className='absolute top-0 bg-[#D3FD50] text-black w-full overflow-x-auto overflow-y-hidden'>
                        <div className='flex items-center gap-8 moveX'>
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>Pour tout voir </h2>
                            <img className='h-32 w-80 object-cover rounded-full shrink-0' src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99' alt="Project 1" />
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>Pour tout voir </h2>
                            <img className='h-32 w-80 object-cover rounded-full shrink-0' src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b' alt="Project 2" />
                        </div>

                        <div className='flex items-center gap-8 moveX'>
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>Pour tout voir </h2>
                            <img className='h-32 w-80 object-cover rounded-full shrink-0' src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99' alt="Project 1" />
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>Pour tout voir </h2>
                            <img className='h-32 w-80 object-cover rounded-full shrink-0' src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b' alt="Project 2" />
                        </div>
                    </div>
                </div>



                {/* 
                <div className='link border-t' >
                    <h1 className='font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'> Agence </h1> */}
                {/* <div>
                        <div>
                            <h2>Pour tout voir </h2>
                            <img src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99' />
                            <h2>Pour tout voir </h2>
                            <img src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b' />
                        </div>

                        <div>
                            <h2>Pour tout voir </h2>
                            <img src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99' />
                            <h2>Pour tout voir </h2>
                            <img src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b' />
                        </div>
                    </div> */}
                {/* </div> */}



                {/* <div className='link border-t' > */}
                {/* <h1 className='font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'> Contact </h1> */}
                {/* <div>
                        <div>
                            <h2>Pour tout voir </h2>
                            <img src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99' />
                            <h2>Pour tout voir </h2>
                            <img src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b' />
                        </div>

                        <div>
                            <h2>Pour tout voir </h2>
                            <img src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99' />
                            <h2>Pour tout voir </h2>
                            <img src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b' />
                        </div>
                    </div> */}
                {/* </div> */}

                {/* <div className='link border-t' > */}
                {/* <h1 className='font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'> Blogue </h1> */}
                {/* <div>
                        <div>
                            <h2>Pour tout voir </h2>
                            <img src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99' />
                            <h2>Pour tout voir </h2>
                            <img src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b' />
                        </div>

                        <div>
                            <h2>Pour tout voir </h2>
                            <img src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99' />
                            <h2>Pour tout voir </h2>
                            <img src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b' />
                        </div>
                    </div> */}
                {/* </div> */}

            </div>
        </div>
    )
}

export default FullScreenNav
