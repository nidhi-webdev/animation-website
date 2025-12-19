import { useGSAP } from "@gsap/react"
import ProjectCard from "../components/Projects/ProjectCard"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/all'

const Projects = () => {

  const projects = [
    {
      Image1: 'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022',
      Image2: 'https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757',

    },
    {
      Image1: 'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c',
      Image2: 'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479',

    },
    {
      Image1: 'https://k72.ca/images/caseStudies/BEST/BEST_site_menu_Thumbnail.jpg?w=1280&h=960&s=d3b20d81946c6a7f4a6cd7ce1cfbb0fd',
      Image2: 'https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47',

    },
    {
      Image1: 'https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f',
      Image2: 'https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda',

    },
    {
      Image1: 'https://k72.ca/images/caseStudies/OSM/thumbnail_OSM_1280.jpg?w=1280&h=960&s=968b0d5b6e3ac3b7ab84c1706efd4377',
      Image2: 'https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14',

    },
    {
      Image1: 'https://k72.ca/images/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes.jpg?w=1280&h=960&s=bb42c9de87442e1bffc542c332e07124',
      Image2: 'https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996'

    },
    {
      Image1: 'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b',
      Image2: 'https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000'
    }
  ]

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    // Animate the title on load
    gsap.from('.project-title', {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.3
    })

    // Get all project cards
    const heroes = gsap.utils.toArray('.hero')
    
    // Set initial state for all cards
    gsap.set(heroes, {
      height: '200px',
      opacity: 0.7
    })

    // Animate each card individually with scroll trigger
    heroes.forEach((hero, index) => {
      // Create timeline for each card
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: 'top 90%',
          end: 'top 20%',
          scrub: 1.5,
          // markers: true, // Remove this in production
        }
      })

      // Expand height and fade in
      tl.to(hero, {
        height: '800px',
        opacity: 1,
        ease: 'power2.inOut'
      })

      // Animate images inside with parallax effect
      const images = hero.querySelectorAll('img')
      images.forEach((img, imgIndex) => {
        gsap.fromTo(img,
          {
            scale: 1.2,
            y: 50
          },
          {
            scale: 1,
            y: 0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: hero,
              start: 'top 80%',
              end: 'top 30%',
              scrub: 2,
            }
          }
        )
      })
    })

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className='p-4'>
      <div className='pt-[45vh]'>
        <h2 className='project-title font-[font2] text-[10vw] uppercase'>
          Projets
        </h2>
      </div>

      <div className='-mt-10 Projectcard'>
        {projects.map((elem, idx) => (
          <div 
            key={idx} 
            className='hero w-full flex gap-4 mb-4 cursor-pointer overflow-hidden'
            style={{ height: '200px' }}
          >
            <ProjectCard image1={elem.Image1} image2={elem.Image2} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects