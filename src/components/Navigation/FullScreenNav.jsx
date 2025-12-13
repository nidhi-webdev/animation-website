import React from 'react'
import { useContext } from 'react'
import { NavBarContext } from '../../context/NavContext'

const FullScreenNav = () => {

    const navContextData = useContext(NavBarContext)
    console.log(navContextData)

    return (
        <div id='fullScreenNav' className='text-white h-screen w-full absolute bg-black  overflow-hidden'>
            <div className='flex w-full justify-between items-start'>
                <div className="w-40 p-5">
                    <svg className='w-full' xmlns="http://www.w3.org/2000/svg" width="103" height="44" viewBox="0 0 103 44">
                        <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
                </div>
                <div className='h-32 w-32  relative cursor-pointer pt-2'>
                    <div className='h-44 w-0.5 bg-[#D3FD50] absolute -rotate-45 origin-top pt-1'></div>
                    <div className='h-44 w-0.5 bg-[#D3FD50] absolute rotate-45 origin-top right-0 pt-1'></div>

                </div>
            </div>
            <div className='py-22'>
                <div className='link border-t relative  ' >
                    <h1 className='font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'> Projects</h1>
                    <div className='moveLink absolute top-0 bg-[#D3FD50] text-black w-full overflow-hidden'>
                        <div className='flex items-center gap-8'>
                            <div className='flex items-center gap-8 moveX'>
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>Pour tout voir </h2>
                                <img className='h-32 w-80 object-cover rounded-full shrink-0' src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99' alt="Project 1" />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>Pour tout voir </h2>
                                <img className='h-32 w-80 object-cover rounded-full shrink-0' src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b' alt="Project 2" />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>Pour tout voir </h2>
                                <img className='h-32 w-80 object-cover rounded-full shrink-0' src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99' alt="Project 3" />
                            </div>

                            <div className='flex items-center gap-8 moveX'>
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>Pour tout voir </h2>
                                <img className='h-32 w-80 object-cover rounded-full shrink-0' src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99' alt="Project 1" />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>Pour tout voir </h2>
                                <img className='h-32 w-80 object-cover rounded-full shrink-0' src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b' alt="Project 2" />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>Pour tout voir </h2>
                                <img className='h-32 w-80 object-cover rounded-full shrink-0' src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b' alt="Project 3" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='link border-y relative ' >
                    <h1 className='font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'> Agence </h1>
                    <div className='moveLink absolute top-0 bg-[#D3FD50] text-black w-full overflow-hidden'>
                        <div className='flex items-center gap-8'>
                            <div className='flex items-center gap-8 moveX'>
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'> Pour tout savoir  </h2>
                                <img className='h-32 w-80 object-cover rounded-full shrink-0' src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99' alt="Project 1" />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'> Pour tout savoir  </h2>
                                <img className='h-32 w-80 object-cover rounded-full shrink-0' src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b' alt="Project 2" />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'> Pour tout savoir  </h2>
                                <img className='h-32 w-80 object-cover rounded-full shrink-0' src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99' alt="Project 3" />
                            </div>

                            <div className='flex items-center gap-8 moveX'>
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>Pour tout voir </h2>
                                <img className='h-32 w-80 object-cover rounded-full shrink-0' src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99' alt="Project 1" />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>Pour tout voir </h2>
                                <img className='h-32 w-80 object-cover rounded-full shrink-0' src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b' alt="Project 2" />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>Pour tout voir </h2>
                                <img className='h-32 w-80 object-cover rounded-full shrink-0' src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b' alt="Project 3" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='link border-y relative ' >
                    <h1 className='font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'> Contact </h1>
                    <div className='moveLink absolute top-0 bg-[#D3FD50] text-black w-full overflow-hidden'>
                        <div className='flex items-center gap-8'>
                            <div className='flex items-center gap-8 moveX'>
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'> Pour envoyer un fax </h2>
                                <img className='h-32 w-80 object-cover rounded-full shrink-0' src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99' alt="Project 1" />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'> Pour envoyer un fax </h2>
                                <img className='h-32 w-80 object-cover rounded-full shrink-0' src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b' alt="Project 2" />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'> Pour envoyer un fax </h2>
                                <img className='h-32 w-80 object-cover rounded-full shrink-0' src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99' alt="Project 3" />
                            </div>

                            <div className='flex items-center gap-8 moveX'>
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'> Lire les articles </h2>
                                <img className='h-32 w-80 object-cover rounded-full shrink-0' src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99' alt="Project 1" />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'> Lire les articles </h2>
                                <img className='h-32 w-80 object-cover rounded-full shrink-0' src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b' alt="Project 2" />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'> Lire les articles </h2>
                                <img className='h-32 w-80 object-cover rounded-full shrink-0' src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b' alt="Project 3" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='link border-y relative ' >
                    <h1 className='font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'> Blogue </h1>
                    <div className='moveLink absolute top-0 bg-[#D3FD50] text-black w-full overflow-hidden'>
                        <div className='flex items-center gap-8'>
                            <div className='flex items-center gap-8 moveX'>
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>Pour tout voir </h2>
                                <img className='h-32 w-80 object-cover rounded-full shrink-0' src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99' alt="Project 1" />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>Pour tout voir </h2>
                                <img className='h-32 w-80 object-cover rounded-full shrink-0' src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b' alt="Project 2" />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>Pour tout voir </h2>
                                <img className='h-32 w-80 object-cover rounded-full shrink-0' src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99' alt="Project 3" />
                            </div>

                            <div className='flex items-center gap-8 moveX'>
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>Pour tout voir </h2>
                                <img className='h-32 w-80 object-cover rounded-full shrink-0' src='https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99' alt="Project 1" />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>Pour tout voir </h2>
                                <img className='h-32 w-80 object-cover rounded-full shrink-0' src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b' alt="Project 2" />
                                <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.8] pt-7'>Pour tout voir </h2>
                                <img className='h-32 w-80 object-cover rounded-full shrink-0' src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b' alt="Project 3" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default FullScreenNav
