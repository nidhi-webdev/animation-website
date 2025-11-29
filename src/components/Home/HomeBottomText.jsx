import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font1] text-white flex items-center justify-center gap-2'>
      <Link className='text-[6.5vw] border-5 uppercase border-white rounded-full px-8'> Projects  </Link>
      <Link className='text-[6.5vw] uppercase border-5  border-white rounded-full px-8'> Agence  </Link>
    </div>
  )
}

export default HomeBottomText
