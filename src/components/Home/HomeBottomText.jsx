import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font1] text-white flex items-center justify-center gap-2'>
      <Link className='text-[6.5vw] border-2 uppercase border-white'> Projects  </Link>
      <Link className='text-[6.5vw] uppercase border-2  border-white'> Agence  </Link>
    </div>
  )
}

export default HomeBottomText
