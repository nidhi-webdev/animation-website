import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font1] text-white flex items-center justify-center gap-2'>
      <Link> Projects  </Link>
      <Link> Agence  </Link>
    </div>
  )
}

export default HomeBottomText
