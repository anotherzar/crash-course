import { useState } from 'react'
import {listTools} from "./data"
import {listProject} from "./data"
import {listSocial} from "./data"
import AboutCodeBlock from './components/AboutCodeBlock'
import { motion } from 'framer-motion';
import ToolsSection from './components/stackedToolsCard';
import Hero_3d from './components/spline3D_obj';
import TiltAboutCard from './components/TiltAboutCard.jsx'


function App() {
  const [count, setCount] = useState(0)
  const heroImg = ".public/assets/test-1-01.png"

  return (
    <>
    {/* Landing */}
    <div className="hero grid grid-cols-1 md:grid-cols-2 items-start pt-0 gap-3 xl:gap-0">
      <div className="pt-8 md:pt-16">
        <h1 className='text-5xl/tight font-medium mb-6 border-y border-white/50 px-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, vero.</h1>
        <p className='text-config-1 px-4 text-base/loose text-gray-400 text-justify border-y border-white/50'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, doloribus minus! Nam provident tempore suscipit
        </p>
        <div className='mt-10 border-y border-white/50 px-4'>
          <button className='bg-zinc-800 p-5 rounded-2xl border border-white/50'>
            <a href="" className='text-config-1'>Download CV</a>
          </button>
        </div>
      </div>
      <div className='relative flex justify-center md:justify-end w-full aspect-square h-max overflow-hidden border-white/50 border-y-0 border-l-0 border-t-1 md:border-l-1 md:border-b-0 md:border-t-0'>
        <Hero_3d />
      </div>
    </div>

    {/* About */}
    <div className="about grid grid-cols-1 md:grid-cols-2 items-start border-y border-white/50 bg-dots">
      <div className="mx-auto px-4 py-2 md:px-2 bg-gray-costume border-r-0 md:border-r border-white/50 w-full">
        <TiltAboutCard />
        {/* <div className='bg-gray-costume-2 p-4 rounded-2xl border border-white/50'>
          <AboutCodeBlock/>
        </div> */}
      </div>

      {/* Tools */}
      <div className="tools flex flex-col border-white/50 border-t md:border-t-0">
        <h1 className='font-bold text-4xl text-center text-glow pt-7'>Tools</h1>
        {/* tools-cards */}
        <ToolsSection />
      </div>
    </div>

    {/* Portfolio */}
    <div className="portfolio mt-8 py-10 text-justify">
      <h1 className='font-bold text-2xl'>Portfolio</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate nulla vitae dolore dicta, ipsum atque temporibus quod modi architecto!</p>
    {/* Projects-Cards */}
      <div className='Portfolio-box mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        {listProject.map(project => (
          <div key={project.id} className='p-3 bg-zinc-800 gap-2 items-center rounded-xl'>
            {/* <img src={project.img} alt="" className='p-1 rounded-xl h-50 w-full object-cover'/> */}
            <div>
              <h4 className='font-bold p-1'>{project.Project_name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Contacs */}
    <div className="Contacs mt-8 py-10">
      <h1 className='font-bold text-2xl'>Hit me up!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate nulla vitae dolore dicta, ipsum atque temporibus quod modi architecto!</p>
    {/* Contacs Buttons */}
      <div className='Contacs-buttons mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        {listSocial.map(social => (
          <div key={social.id} className=' bg-zinc-800 flex items-center gap-2 p-3 border border-zinc-600 rounded-md'>
            <img src={social.social_logo} alt="" className='w-16 p-1'/>
            <div>
              <h4 className='font-bold text-center'>{social.Socmed_name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default App
