import { Link } from 'react-router-dom'


const HomeBottomText = () => {
  return (
    <div className="h-[8vw] flex justify-center items-center gap-8">
      <Link className="text-[6.5vw] font-bold uppercase border-3 border-white px-[2vw] py-[0.2vw] leading-[5.5vw] flex items-center justify-center text-white bg-transparent rounded-[999px] box-border hover:border-[#D3FD50] hover:text-[#D3FD50]"
        to='/Projects'>
        PROJETS
      </Link>
      <Link className="text-[6.5vw] font-bold uppercase border-3 border-white px-[2vw] py-[0.2vw] leading-[5.5vw] flex items-center justify-center text-white bg-transparent rounded-[999px] box-border hover:border-[#D3FD50] hover:text-[#D3FD50]"
        to='/Agence'>
        AGENCE
      </Link>
    </div>
  )
}

export default HomeBottomText
