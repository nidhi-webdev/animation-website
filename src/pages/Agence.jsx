import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all'


const Agence = () => {
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  const imageArray = [
    'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
    'https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007',
    'https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3',
    'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
    'https://k72.ca/images/teamMembers/SophieA_480x640.jpg?w=480&h=640&fit=crop&s=fcb556060c29623e706dfbc4eeca87ac',
    'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
    'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
    'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
    'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
    'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6'
  ]


  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: true,
        start: 'top 26%',
        end: 'top -70%',
        scrub: true,
        pin: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })


  return (
    <div>
      <div className='section1'>
        <div ref={imageDivRef} className='h-[20vw] w-[15vw] absolute top-50 left-[30vw] rounded-4xl overflow-hidden'>
          <img ref={imageRef} className='h-full w-full object-cover' src='https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg' />
        </div>
        <div className='font-[font1] relative'>
          <div className='mt-[55vh]'>
            <h1 className='text-white text-[20vw] uppercase text-center leading-[18vw]'>Soixan7e <br />
              Douze</h1>
          </div>
          <div className='pl-[40%] mt-20'>
            <p className='text-5xl text-white'>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité.
              On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante.
              Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de
              bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage
              à donner de la perspective, pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen">

      </div>
    </div>
  )
}

export default Agence
